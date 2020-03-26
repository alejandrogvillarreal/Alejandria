import UserModel from '../../models/user.model';
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  try {
    const users = await UserModel.getUsers();
    return res.status(200).send({
      success: true,
      users
    });
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: err.message ? err.message : err
    });
  }
};
