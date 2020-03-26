import authService from "../services/auth";
import { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
  const publicURLs = [
    "signup",
    "login",
    // 'reset-password'
  ];

  if (publicURLs.some(urlPart => req.url.includes(urlPart))) {
    next();
    return;
  }

  const token = req.cookies.token;
  if (!token) {
    res.status(403).send({
      success: false,
      message: "Unauthorized: No JWT token provided"
    });
  } else {
    authService.authenticateJWT(token, async (err: Error, payload: any) => {
      if (err) {
        res.status(403).send({
          success: false,
          message: "Unauthorized: Invalid token"
        });
      } else {
        next();
      }
    });
  }
};
