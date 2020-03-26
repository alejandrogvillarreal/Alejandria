import authService from "../../services/auth";
import { Response } from "express";
import IUser from "../../types/user";

const setJWT = (user: IUser | null, res: Response) => {
  const jwt = authService.getJWT(user);
  res.cookie("token", jwt, { httpOnly: true });
};

export default setJWT;
