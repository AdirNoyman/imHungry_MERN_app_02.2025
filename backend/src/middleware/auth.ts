import { Request, Response, NextFunction } from 'express';
import { auth } from 'express-oauth2-jwt-bearer';
import jwt from 'jsonwebtoken';
import User from '../models/user';

declare global {
  namespace Express {
    interface Request {
      userId: string;
      auth0Id: string;
    }
  }
}

// This function will make an HTTP request to Auth0 API to check if the token we got from the user in the client is okay
export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: 'RS256',
});

// Grab the user's auth0Id from the token is sending from the frontend to the backend
export const jwtParse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer')) {
    return res.sendStatus(401);
  }

  // Get the access token
  const token = authorization.split(' ')[1];

  // Decode the token
  try {
    const jwtDecoded = jwt.decode(token) as jwt.JwtPayload;
    const auth0Id = jwtDecoded.sub;

    // Search the user in the DB
    const user = await User.findOne({ auth0Id });

    if (!user) {
      return res.sendStatus(401);
    }

    // Enrich the body of the request with the following info, before it reaches the controller in the backend
    req.auth0Id = auth0Id as string;
    req.userId = user._id.toString();
    
    // Carry on handling the request
    next();
  } catch (error) {
    console.log('Error decoding jwt');
    return res.sendStatus(401);
  }
};
