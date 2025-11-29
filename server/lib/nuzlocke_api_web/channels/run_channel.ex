defmodule NuzlockeApiWeb.RunChannel do
  use NuzlockeApiWeb, :channel

  alias NuzlockeApi.Runs
  alias NuzlockeApi.RunStore

  @impl true
  def join("run:" <> run_id, _payload, socket) do
    user_id = socket.assigns[:user_id]

    # Check if the run exists and user has access
    case Runs.get_run(run_id) do
      nil ->
        {:error, %{reason: "not_found"}}

      run ->
        # Only the owner can join
        if run.user_id == user_id do
          # Start or get the RunStore process for this run
          case RunStore.start_or_get(run_id) do
            {:ok, _pid} ->
              {:ok, current_state} = RunStore.get_state(run_id)

              socket = assign(socket, :run_id, run_id)

              {:ok, %{revision: current_state.revision, data: current_state.data}, socket}

            {:error, reason} ->
              {:error, %{reason: reason}}
          end
        else
          {:error, %{reason: "unauthorized"}}
        end
    end
  end

  @impl true
  def handle_in("patch", %{"patch" => patch}, socket) do
    run_id = socket.assigns[:run_id]

    case RunStore.apply_patch(run_id, patch) do
      {:ok, result} ->
        # The RunStore broadcasts the update to all subscribers
        {:reply, {:ok, %{revision: result.revision}}, socket}

      {:error, reason} ->
        {:reply, {:error, %{reason: reason}}, socket}
    end
  end

  @impl true
  def handle_in("get_state", _payload, socket) do
    run_id = socket.assigns[:run_id]

    case RunStore.get_state(run_id) do
      {:ok, state} ->
        {:reply, {:ok, %{revision: state.revision, data: state.data}}, socket}

      {:error, reason} ->
        {:reply, {:error, %{reason: reason}}, socket}
    end
  end
end
