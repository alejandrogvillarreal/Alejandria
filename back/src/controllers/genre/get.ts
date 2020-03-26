import GenreModel from "../../models/genre.model";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  try {
    const genres = await GenreModel.getGenres();
    return res.status(200).send({
      success: true,
      genres
    });
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: err.message ? err.message : err
    });
  }
};
