import { NextFunction, Request, Response } from "express";

export function ensureAdmin(req: Request, res: Response, next: NextFunction) {
  const admin = true // hardcoded for now

  if (admin) return next()

  return res.status(401).json({ error: 'Unauthorized' })
}