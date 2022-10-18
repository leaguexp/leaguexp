import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Layout from "@theme/Layout";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Layout><div>Loading ...</div></Layout>;
  }

  return (
    isAuthenticated && (
      <Layout>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </Layout>
    )
  );
};

export default Profile;