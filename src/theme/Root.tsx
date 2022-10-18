import React from 'react';
import { Auth0Provider } from "@auth0/auth0-react";

export default function Root({ children }) {
    return <Auth0Provider
        domain="leaguexp.us.auth0.com"
        clientId="jggDtJcIgtDvVWqzrDqWglWdFlUazMqz"
        redirectUri={window.location.origin + '/launchpad'}
    > {children} </Auth0Provider>;
}