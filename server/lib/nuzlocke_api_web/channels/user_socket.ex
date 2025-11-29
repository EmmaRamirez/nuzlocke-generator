defmodule NuzlockeApiWeb.UserSocket do
  use Phoenix.Socket

  alias NuzlockeApi.Guardian

  # Channels
  channel "run:*", NuzlockeApiWeb.RunChannel
  channel "user:*", NuzlockeApiWeb.UserChannel

  @impl true
  def connect(%{"token" => token}, socket, _connect_info) do
    case Guardian.decode_and_verify(token) do
      {:ok, claims} ->
        case Guardian.resource_from_claims(claims) do
          {:ok, user} ->
            {:ok, assign(socket, :user_id, user.id)}

          {:error, _reason} ->
            :error
        end

      {:error, _reason} ->
        :error
    end
  end

  # Allow connection without token for public access (read-only)
  def connect(_params, socket, _connect_info) do
    {:ok, assign(socket, :user_id, nil)}
  end

  @impl true
  def id(socket) do
    case socket.assigns[:user_id] do
      nil -> nil
      user_id -> "user_socket:#{user_id}"
    end
  end
end

