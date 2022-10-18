import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Layout from "@theme/Layout";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Layout>
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Welcome to LeagueXP Launchpad!</h1>
      <button style={{ fontSize: '18pt' }} onClick={() => loginWithRedirect()}>Log In</button>
    </div>
  </Layout>;
};

export default LoginButton;