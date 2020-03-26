import GenreDao from "../dao/genre.dao";
import IGenre from "../types/genre";

export default class GenreModel {
  static async getGenres() {
    return await GenreDao.getGenres({});
  }

  static async getGenre(genre_id: string) {
    return await GenreDao.getGenre({ _id: genre_id });
  }

  static async createGenre(genre: IGenre) {
    return await GenreDao.createGenre(genre);
  }

  static async updateGenre(genre_id: string, genre: IGenre) {
    const conditions = { _id: genre_id };
    const update = genre;
    const options = { new: true };
    return await GenreDao.updateGenre(conditions, update, options);
  }

  static async deleteGenre(genre_id: string) {
    return await GenreDao.deleteGenre({ _id: genre_id });
  }
}
