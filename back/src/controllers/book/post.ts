import BookModel from "../../models/book.model";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  try {
    const book = await BookModel.createBook(req.body, req.file);
    return res.status(200).send({
      success: true,
      book
    });
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: err.message ? err.message : err
    });
  }
};
