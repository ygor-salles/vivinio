import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { ErrorVivinio } from '../validators/Exceptions/ErrorVivinio';

require('dotenv').config();

interface IPayload {
  sub: string;
}

export function auth(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization;
  
  if (!authToken) {
    throw new ErrorVivinio(401);
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(token, process.env.TOKEN_SECRET) as IPayload;
    request.userId = sub;

    return next();
  } catch (error) {
    throw new ErrorVivinio(401);
  }
}
