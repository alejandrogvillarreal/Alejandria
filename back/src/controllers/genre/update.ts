import GenreModel from "../../models/genre.model";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  try {
    const genre_id = req.params.id;
    const genre = await GenreModel.updateGenre(genre_id, req.body);
    return res.status(200).send({
      success: true,
      genre
    });
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: err.message ? err.message : err
    });
  }
};
