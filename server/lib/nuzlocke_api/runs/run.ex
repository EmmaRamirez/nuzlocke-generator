defmodule NuzlockeApi.Runs.Run do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "runs" do
    field :name, :string, default: "Untitled Run"
    field :data, :map, default: %{}
    field :revision, :integer, default: 1

    belongs_to :user, NuzlockeApi.Accounts.User

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(run, attrs) do
    run
    |> cast(attrs, [:name, :data, :revision])
    |> validate_required([:data])
  end

  @doc """
  Changeset for applying patches to run data.
  Increments revision automatically.
  """
  def patch_changeset(run, patch) do
    new_data = deep_merge(run.data, patch)
    new_revision = run.revision + 1

    run
    |> cast(%{data: new_data, revision: new_revision}, [:data, :revision])
  end

  # Deep merge two maps, where the second map's values take precedence
  defp deep_merge(left, right) when is_map(left) and is_map(right) do
    Map.merge(left, right, fn _key, left_val, right_val ->
      deep_merge(left_val, right_val)
    end)
  end

  defp deep_merge(_left, right), do: right
end

