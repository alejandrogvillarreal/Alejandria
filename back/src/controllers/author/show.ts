import AuthorModel from "../../models/author.model";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  try {
    const author_id = req.params.id;
    const role = await AuthorModel.getAuthor(author_id);
    return res.status(200).send({
      success: true,
      role
    });
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: err.message ? err.message : err
    });
  }
};
