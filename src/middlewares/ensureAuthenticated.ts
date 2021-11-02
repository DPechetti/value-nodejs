import { NextFunction, request, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IVerifyResponse {
  sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization

  if (!authToken) return res.status(401).json({ error: 'Invalid token' })

  const [, token] = authToken.split(' ')

  try {
    const { sub } = verify(token,'Batatinha') as IVerifyResponse

    request.user_id = sub
    
    return next()
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' })
  }
}