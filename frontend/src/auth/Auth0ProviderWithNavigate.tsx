import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
type Props = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const navigate = useNavigate();
  const domain = "dev-cduofkg7mz0p0u5i.us.auth0.com";
  const clientId = "ydkSgbpe6Hx2B1iRXFSnXhfYXimRWR79";
  const redirectUri = "http://localhost:3000";
  const audience = "Mern-food-ordering-api";

  if (!domain || !clientId || !redirectUri || !audience) {
    throw new Error("Unable to initialise auth");
  }

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || "/auth-callback");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
