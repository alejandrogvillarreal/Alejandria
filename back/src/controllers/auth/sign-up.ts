import UserModel from"../../models/user.model";
import { Request, Response } from "express";
import setJWT from "./setJWT";

export default async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const existingUser = await UserModel.searchUser("email", email);
    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "User already exists"
      });
    } else {
      const user = await UserModel.registerUser(req.body);
      setJWT(user, res);
      return res.status(200).send({
        success: true,
        user
      });
    }
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: err.message ? err.message : err
    });
  }
};
