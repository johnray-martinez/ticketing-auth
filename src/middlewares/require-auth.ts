import { Request, Response, NextFunction } from "express";
import { UnathorizedError } from "../errors/unauthorized-error";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    throw new UnathorizedError();
  }

  next();
}