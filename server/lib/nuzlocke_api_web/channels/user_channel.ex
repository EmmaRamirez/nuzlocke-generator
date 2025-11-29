defmodule NuzlockeApiWeb.UserChannel do
  use NuzlockeApiWeb, :channel

  @impl true
  def join("user:" <> user_id, _payload, socket) do
    socket_user_id = socket.assigns[:user_id]

    # Only allow users to join their own channel
    if socket_user_id && socket_user_id == user_id do
      {:ok, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  # Handle incoming messages - not much to do here since
  # this channel is mainly for server->client broadcasts
  @impl true
  def handle_in(_event, _payload, socket) do
    {:noreply, socket}
  end
end
