import AuthorModel from "../../models/author.model";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  try {
    const authors = await AuthorModel.getAuthors();
    return res.status(200).send({
      success: true,
      authors
    });
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: err.message ? err.message : err
    });
  }
};
