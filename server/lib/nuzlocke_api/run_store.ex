defmodule NuzlockeApi.RunStore do
  @moduledoc """
  GenServer that manages in-memory run state with debounced database writes.

  Each active run has its own process that:
  - Holds the current run state in memory
  - Merges incoming patches
  - Debounces writes to the database (200ms)
  - Broadcasts updates to connected clients via Phoenix Channels
  """
  use GenServer

  alias NuzlockeApi.Runs
  alias NuzlockeApi.Runs.Run

  @debounce_ms 200
  @idle_timeout :timer.minutes(30)

  # Client API

  @doc """
  Start or get existing RunStore process for a run.
  """
  def start_or_get(run_id) do
    case Registry.lookup(NuzlockeApi.RunStoreRegistry, run_id) do
      [{pid, _}] ->
        {:ok, pid}

      [] ->
        DynamicSupervisor.start_child(
          NuzlockeApi.RunStoreSupervisor,
          {__MODULE__, run_id}
        )
    end
  end

  @doc """
  Apply a patch to a run.
  """
  def apply_patch(run_id, patch) do
    case start_or_get(run_id) do
      {:ok, pid} ->
        GenServer.call(pid, {:apply_patch, patch})

      {:error, reason} ->
        {:error, reason}
    end
  end

  @doc """
  Get the current state of a run from memory (or load from DB).
  """
  def get_state(run_id) do
    case start_or_get(run_id) do
      {:ok, pid} ->
        GenServer.call(pid, :get_state)

      {:error, reason} ->
        {:error, reason}
    end
  end

  # Server Callbacks

  def start_link(run_id) do
    GenServer.start_link(__MODULE__, run_id,
      name: {:via, Registry, {NuzlockeApi.RunStoreRegistry, run_id}}
    )
  end

  def child_spec(run_id) do
    %{
      id: {__MODULE__, run_id},
      start: {__MODULE__, :start_link, [run_id]},
      restart: :temporary
    }
  end

  @impl true
  def init(run_id) do
    case Runs.get_run(run_id) do
      nil ->
        {:stop, :run_not_found}

      %Run{} = run ->
        state = %{
          run_id: run_id,
          data: run.data,
          revision: run.revision,
          pending_patch: %{},
          flush_timer: nil,
          dirty: false
        }

        {:ok, state, @idle_timeout}
    end
  end

  @impl true
  def handle_call({:apply_patch, patch}, _from, state) do
    # Merge the patch into pending patches
    new_pending = deep_merge(state.pending_patch, patch)
    new_data = deep_merge(state.data, patch)
    new_revision = state.revision + 1

    # Cancel existing timer if any
    if state.flush_timer do
      Process.cancel_timer(state.flush_timer)
    end

    # Start new debounce timer
    timer = Process.send_after(self(), :flush_to_db, @debounce_ms)

    # Broadcast update to connected clients
    NuzlockeApiWeb.Endpoint.broadcast("run:#{state.run_id}", "update", %{
      revision: new_revision,
      data: new_data
    })

    new_state = %{
      state
      | data: new_data,
        revision: new_revision,
        pending_patch: new_pending,
        flush_timer: timer,
        dirty: true
    }

    {:reply, {:ok, %{id: state.run_id, revision: new_revision}}, new_state, @idle_timeout}
  end

  @impl true
  def handle_call(:get_state, _from, state) do
    result = %{
      id: state.run_id,
      data: state.data,
      revision: state.revision
    }

    {:reply, {:ok, result}, state, @idle_timeout}
  end

  @impl true
  def handle_info(:flush_to_db, state) do
    if state.dirty do
      case Runs.get_run(state.run_id) do
        nil ->
          {:stop, :run_not_found, state}

        run ->
          case Runs.update_run(run, %{data: state.data, revision: state.revision}) do
            {:ok, _updated_run} ->
              new_state = %{
                state
                | pending_patch: %{},
                  flush_timer: nil,
                  dirty: false
              }

              {:noreply, new_state, @idle_timeout}

            {:error, _reason} ->
              # Retry in a bit
              timer = Process.send_after(self(), :flush_to_db, @debounce_ms * 2)
              {:noreply, %{state | flush_timer: timer}, @idle_timeout}
          end
      end
    else
      {:noreply, %{state | flush_timer: nil}, @idle_timeout}
    end
  end

  @impl true
  def handle_info(:timeout, state) do
    # Flush any pending changes before shutting down
    if state.dirty do
      case Runs.get_run(state.run_id) do
        nil ->
          :ok

        run ->
          Runs.update_run(run, %{data: state.data, revision: state.revision})
      end
    end

    {:stop, :normal, state}
  end

  # Helpers

  defp deep_merge(left, right) when is_map(left) and is_map(right) do
    Map.merge(left, right, fn _key, left_val, right_val ->
      deep_merge(left_val, right_val)
    end)
  end

  defp deep_merge(_left, right), do: right
end

