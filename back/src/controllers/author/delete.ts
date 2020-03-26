import AuthorModel from "../../models/author.model";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  try {
    const author_id = req.params.id;
    const author = await AuthorModel.deleteAuthor(author_id);
    return res.status(200).send({
      success: true,
      author
    });
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: err.message ? err.message : err
    });
  }
};
