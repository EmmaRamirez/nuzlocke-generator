defmodule NuzlockeApiWeb.ReleaseController do
  use NuzlockeApiWeb, :controller

  @gh_url "https://api.github.com/repos/EmmaRamirez/nuzlocke-generator"

  @doc """
  GET /api/releases/:type
  Fetch GitHub releases. Type can be "latest" or "all".
  """
  def show(conn, %{"type" => type}) do
    case fetch_releases() do
      {:ok, releases} ->
        case type do
          "latest" ->
            latest = List.first(releases)

            conn
            |> json(%{status: 200, payload: %{notes: if(latest, do: [latest], else: [])}})

          "all" ->
            # Skip the first one since it's the latest
            rest = Enum.drop(releases, 1)
            conn |> json(%{status: 200, payload: %{notes: rest}})

          _ ->
            conn
            |> put_status(:bad_request)
            |> json(%{status: 400, error: "Invalid release type param"})
        end

      {:error, reason} ->
        conn
        |> put_status(:internal_server_error)
        |> json(%{status: 500, error: reason})
    end
  end

  defp fetch_releases do
    gh_token = System.get_env("GH_ACCESS_TOKEN")

    headers =
      [
        {"Accept", "application/vnd.github.v3+json"},
        {"Content-Type", "application/json"},
        {"User-Agent", "NuzlockeGenerator"}
      ] ++
        if gh_token do
          [{"Authorization", "Token #{gh_token}"}]
        else
          []
        end

    case Req.get("#{@gh_url}/releases", headers: headers) do
      {:ok, %{status: 200, body: body}} when is_list(body) ->
        releases =
          Enum.map(body, fn rel ->
            %{
              id: rel["id"],
              url: rel["html_url"],
              version: rel["tag_name"],
              note: rel["body"],
              timestamp: rel["published_at"]
            }
          end)

        {:ok, releases}

      {:ok, %{status: status, body: body}} ->
        {:error, "GitHub API returned status #{status}: #{inspect(body)}"}

      {:error, reason} ->
        {:error, "Failed to fetch releases: #{inspect(reason)}"}
    end
  end
end

