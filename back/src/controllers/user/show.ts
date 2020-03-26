import UserModel from '../../models/user.model';
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
    try {
        const user_id = req.params.id
        const user = await UserModel.getUser(user_id)
        return res.status(200).send({
            success: true,
            user
        })
    } catch (err) {
        return res.status(400).send({
            success: false,
            message: err.message ? err.message : err
        });
    }
}