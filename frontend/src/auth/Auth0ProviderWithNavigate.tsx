import React from 'react'
import { AppState, Auth0Provider, User } from '@auth0/auth0-react';

type Props = {
    children: React.ReactNode
}

const Auth0ProviderWithNavigate = ({children}: Props) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID
  const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URL

  if (!domain || !clientId || !redirectUri) {
    throw new Error('Unable to initialize Auth. Missing configuration. 🤷‍♂️')
  }

  // Function to be called after the user is redirected back to the application
  // The 'appState' parameter is an object that contains the URL where the user was redirected from
  // The 'user' parameter is the user object
  const onRedirectCallback = (appState?: AppState, user?: User) => {

    console.log("USER DATA: ", user)
    console.log("APP STATE: ", appState)


  }

  // Auth0 is using React context api to provide the authentication state to the components (children)
  return (
    <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{ redirect_uri: redirectUri }} onRedirectCallback={onRedirectCallback}>
      {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithNavigate
