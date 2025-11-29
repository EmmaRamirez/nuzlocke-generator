defmodule NuzlockeApi.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      NuzlockeApiWeb.Telemetry,
      NuzlockeApi.Repo,
      {DNSCluster, query: Application.get_env(:nuzlocke_api, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: NuzlockeApi.PubSub},
      # Registry for RunStore processes
      {Registry, keys: :unique, name: NuzlockeApi.RunStoreRegistry},
      # DynamicSupervisor for RunStore processes
      {DynamicSupervisor, name: NuzlockeApi.RunStoreSupervisor, strategy: :one_for_one},
      # Start to serve requests, typically the last entry
      NuzlockeApiWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: NuzlockeApi.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    NuzlockeApiWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
