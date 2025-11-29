defmodule NuzlockeApiWeb.ReportController do
  use NuzlockeApiWeb, :controller

  @gh_url "https://api.github.com/repos/EmmaRamirez/nuzlocke-generator"

  @doc """
  POST /api/report
  Submit a bug report to GitHub Issues.
  """
  def create(conn, params) do
    title = params["title"]
    report = params["report"]
    data = params["data"]

    if is_nil(title) or title == "" do
      conn
      |> put_status(:bad_request)
      |> json(%{status: 400, error: "Missing report title"})
    else
      case create_github_issue(title, report, data) do
        {:ok, status} ->
          conn |> json(%{status: status})

        {:error, reason} ->
          conn
          |> put_status(:internal_server_error)
          |> json(%{status: 500, error: reason})
      end
    end
  end

  defp create_github_issue(title, report, data) do
    gh_token = System.get_env("GH_ACCESS_TOKEN")

    if is_nil(gh_token) do
      {:error, "GitHub access token not configured"}
    else
      body = """
      #{report || ""}

      ```json
      #{data || "User chose not to attach nuzlocke.json"}
      ```
      """

      headers = [
        {"Accept", "application/vnd.github.v3+json"},
        {"Authorization", "Token #{gh_token}"},
        {"Content-Type", "application/json"},
        {"User-Agent", "NuzlockeGenerator"}
      ]

      payload = %{
        title: title,
        body: body,
        assignees: ["EmmaRamirez"],
        labels: ["User Submitted", "Type: Bug"]
      }

      case Req.post("#{@gh_url}/issues", json: payload, headers: headers) do
        {:ok, %{status: status}} when status in 200..299 ->
          {:ok, status}

        {:ok, %{status: status, body: body}} ->
          {:error, "GitHub API returned status #{status}: #{inspect(body)}"}

        {:error, reason} ->
          {:error, "Failed to create issue: #{inspect(reason)}"}
      end
    end
  end
end

