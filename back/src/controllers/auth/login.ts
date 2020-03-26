import UserModel from "../../models/user.model";
import { Request, Response } from "express";
import setJWT from "./setJWT";

export default async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const passValidated = await UserModel.checkPassword(email, password);
    if (passValidated) {
      const user = await UserModel.searchUser("email", email);
      setJWT(user, res);
      return res.status(200).send({
        success: true,
        user
      });
    } else {
      throw new Error("Wrong password or email");
    }
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: err.message ? err.message : err
    });
  }
};
