import authService from "../services/auth";
import { Request, Response, NextFunction } from "express";

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

export default async (req: Request, res: Response, next: NextFunction) => {
  const publicURLs = [
    "signup",
    "login"
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
    try {
      const jwtVerifyResult: any = authService.authenticateJWT(token);
      req.userId = jwtVerifyResult.userId;
      next();
    } catch (error) {
      res.status(403).send({
        success: false,
        message: "Unauthorized: Invalid token"
      });
    }
  }
};
