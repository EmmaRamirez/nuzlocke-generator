defmodule NuzlockeApi.Repo.Migrations.CreateRuns do
  use Ecto.Migration

  def change do
    create table(:runs, primary_key: false) do
      add :id, :binary_id, primary_key: true
      add :user_id, references(:users, type: :binary_id, on_delete: :delete_all), null: false
      add :name, :string, default: "Untitled Run"
      add :data, :map, null: false, default: %{}
      add :revision, :integer, null: false, default: 1

      timestamps(type: :utc_datetime)
    end

    create index(:runs, [:user_id])
  end
end
