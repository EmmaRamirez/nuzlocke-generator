defmodule NuzlockeApiWeb.RunController do
  use NuzlockeApiWeb, :controller

  alias NuzlockeApi.Runs
  alias NuzlockeApi.Guardian

  action_fallback NuzlockeApiWeb.FallbackController

  @doc """
  GET /api/runs
  List all runs for the authenticated user.
  """
  def index(conn, _params) do
    user = Guardian.Plug.current_resource(conn)
    runs = Runs.list_runs_for_user(user.id)

    conn
    |> json(%{
      runs:
        Enum.map(runs, fn run ->
          %{
            id: run.id,
            name: run.name,
            revision: run.revision,
            updated_at: run.updated_at,
            inserted_at: run.inserted_at
          }
        end)
    })
  end

  @doc """
  GET /api/runs/:id
  Get a specific run with full data.
  """
  def show(conn, %{"id" => id}) do
    user = Guardian.Plug.current_resource(conn)

    case Runs.get_user_run(id, user.id) do
      nil ->
        {:error, :not_found}

      run ->
        conn
        |> json(%{
          run: %{
            id: run.id,
            name: run.name,
            data: run.data,
            revision: run.revision,
            updated_at: run.updated_at,
            inserted_at: run.inserted_at
          }
        })
    end
  end

  @doc """
  POST /api/runs
  Create a new run.
  """
  def create(conn, params) do
    user = Guardian.Plug.current_resource(conn)

    run_params = %{
      name: Map.get(params, "name", "Untitled Run"),
      data: Map.get(params, "data", %{})
    }

    case Runs.create_run(user, run_params) do
      {:ok, run} ->
        # Broadcast to any connected channels
        NuzlockeApiWeb.Endpoint.broadcast("user:#{user.id}", "run_created", %{
          run_id: run.id
        })

        conn
        |> put_status(:created)
        |> json(%{
          run: %{
            id: run.id,
            name: run.name,
            data: run.data,
            revision: run.revision,
            updated_at: run.updated_at,
            inserted_at: run.inserted_at
          }
        })

      {:error, changeset} ->
        {:error, changeset}
    end
  end

  @doc """
  PUT /api/runs/:id
  Update a run's name or data.
  """
  def update(conn, %{"id" => id} = params) do
    user = Guardian.Plug.current_resource(conn)

    case Runs.get_user_run(id, user.id) do
      nil ->
        {:error, :not_found}

      run ->
        update_params =
          params
          |> Map.take(["name", "data"])
          |> Enum.into(%{}, fn {k, v} -> {String.to_atom(k), v} end)

        case Runs.update_run(run, update_params) do
          {:ok, updated_run} ->
            conn
            |> json(%{
              run: %{
                id: updated_run.id,
                name: updated_run.name,
                data: updated_run.data,
                revision: updated_run.revision,
                updated_at: updated_run.updated_at,
                inserted_at: updated_run.inserted_at
              }
            })

          {:error, changeset} ->
            {:error, changeset}
        end
    end
  end

  @doc """
  POST /api/runs/:id/patch
  Apply a patch to a run's data.
  """
  def patch(conn, %{"id" => id, "patch" => patch}) do
    user = Guardian.Plug.current_resource(conn)

    case Runs.get_user_run(id, user.id) do
      nil ->
        {:error, :not_found}

      run ->
        case NuzlockeApi.RunStore.apply_patch(run.id, patch) do
          {:ok, updated_run} ->
            conn
            |> json(%{
              run: %{
                id: updated_run.id,
                revision: updated_run.revision
              }
            })

          {:error, reason} ->
            conn
            |> put_status(:unprocessable_entity)
            |> json(%{error: reason})
        end
    end
  end

  @doc """
  DELETE /api/runs/:id
  Delete a run.
  """
  def delete(conn, %{"id" => id}) do
    user = Guardian.Plug.current_resource(conn)

    case Runs.get_user_run(id, user.id) do
      nil ->
        {:error, :not_found}

      run ->
        case Runs.delete_run(run) do
          {:ok, _run} ->
            conn
            |> send_resp(:no_content, "")

          {:error, _changeset} ->
            conn
            |> put_status(:unprocessable_entity)
            |> json(%{error: "Could not delete run"})
        end
    end
  end
end

