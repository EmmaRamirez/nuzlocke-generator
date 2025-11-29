defmodule NuzlockeApiWeb.EnsureAuth do
  @moduledoc """
  Plug that ensures the user is authenticated.
  """
  import Plug.Conn
  import Phoenix.Controller

  def init(opts), do: opts

  def call(conn, _opts) do
    case Guardian.Plug.current_resource(conn) do
      nil ->
        conn
        |> put_status(:unauthorized)
        |> json(%{error: "Unauthorized"})
        |> halt()

      _user ->
        conn
    end
  end
end

