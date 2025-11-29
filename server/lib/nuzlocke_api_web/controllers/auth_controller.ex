defmodule NuzlockeApiWeb.AuthController do
  use NuzlockeApiWeb, :controller

  alias NuzlockeApi.Accounts
  alias NuzlockeApi.Guardian

  action_fallback NuzlockeApiWeb.FallbackController

  @doc """
  POST /api/auth/register
  Register a new user account.
  """
  def register(conn, %{"email" => _email, "password" => _password} = params) do
    case Accounts.register_user(params) do
      {:ok, user} ->
        {:ok, token, _claims} = Guardian.encode_and_sign(user)

        conn
        |> put_status(:created)
        |> json(%{
          user: %{id: user.id, email: user.email},
          token: token
        })

      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> json(%{errors: format_changeset_errors(changeset)})
    end
  end

  @doc """
  POST /api/auth/login
  Authenticate and receive a JWT token.
  """
  def login(conn, %{"email" => email, "password" => password}) do
    case Accounts.get_user_by_email_and_password(email, password) do
      nil ->
        conn
        |> put_status(:unauthorized)
        |> json(%{error: "Invalid email or password"})

      user ->
        {:ok, token, _claims} = Guardian.encode_and_sign(user)

        conn
        |> json(%{
          user: %{id: user.id, email: user.email},
          token: token
        })
    end
  end

  @doc """
  GET /api/auth/me
  Get the current authenticated user.
  """
  def me(conn, _params) do
    user = Guardian.Plug.current_resource(conn)

    case user do
      nil ->
        conn
        |> put_status(:unauthorized)
        |> json(%{error: "Not authenticated"})

      user ->
        conn
        |> json(%{user: %{id: user.id, email: user.email}})
    end
  end

  defp format_changeset_errors(changeset) do
    Ecto.Changeset.traverse_errors(changeset, fn {msg, opts} ->
      Regex.replace(~r"%{(\w+)}", msg, fn _, key ->
        opts |> Keyword.get(String.to_existing_atom(key), key) |> to_string()
      end)
    end)
  end
end

