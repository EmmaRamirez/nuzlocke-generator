defmodule NuzlockeApi.Runs do
  @moduledoc """
  The Runs context.
  """

  import Ecto.Query, warn: false
  alias NuzlockeApi.Repo
  alias NuzlockeApi.Runs.Run

  @doc """
  Returns all runs for a user.
  """
  def list_runs_for_user(user_id) do
    Run
    |> where(user_id: ^user_id)
    |> order_by(desc: :updated_at)
    |> Repo.all()
  end

  @doc """
  Gets a single run.
  """
  def get_run(id), do: Repo.get(Run, id)

  @doc """
  Gets a run only if it belongs to the given user.
  """
  def get_user_run(id, user_id) do
    Run
    |> where(id: ^id, user_id: ^user_id)
    |> Repo.one()
  end

  @doc """
  Creates a run for a user.
  """
  def create_run(user, attrs \\ %{}) do
    %Run{user_id: user.id}
    |> Run.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a run.
  """
  def update_run(%Run{} = run, attrs) do
    run
    |> Run.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Applies a patch to a run's data.
  """
  def patch_run(%Run{} = run, patch) do
    run
    |> Run.patch_changeset(patch)
    |> Repo.update()
  end

  @doc """
  Deletes a run.
  """
  def delete_run(%Run{} = run) do
    Repo.delete(run)
  end
end

