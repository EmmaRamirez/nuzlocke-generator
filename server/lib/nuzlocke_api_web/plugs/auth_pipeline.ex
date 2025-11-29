defmodule NuzlockeApiWeb.AuthPipeline do
  use Guardian.Plug.Pipeline,
    otp_app: :nuzlocke_api,
    error_handler: NuzlockeApiWeb.AuthErrorHandler,
    module: NuzlockeApi.Guardian

  # Load the user if a token is present
  plug Guardian.Plug.VerifyHeader, scheme: "Bearer"
  plug Guardian.Plug.LoadResource, allow_blank: true
end

