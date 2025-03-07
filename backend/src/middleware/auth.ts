import { auth } from "express-oauth2-jwt-bearer";

// This function will make an HTTP request to Auth0 API to check if the token we got from the user in the client is okay
export const jwtCheck = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    tokenSigningAlg: 'RS256'
  });