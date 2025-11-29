defmodule NuzlockeApi.Repo do
  use Ecto.Repo,
    otp_app: :nuzlocke_api,
    adapter: Ecto.Adapters.Postgres
end
