import GenreDao from "../dao/genre.dao";
import IGenre from "../types/genre";
import BookModel from "../models/book.model";

export default class GenreModel {
  static async genreHasBooks(genre_id: string) {
    const books = await BookModel.getBooksByGenreWithDeleted(genre_id);
    return Boolean(books.length === 0) ? false : true;
  }

  static async setCanDelete(genre: IGenre | null) {
    if (genre && (await this.genreHasBooks(genre._id))) {
      genre.can_delete = false;
    }
    return genre;
  }

  static async getGenres() {
    const genres = await GenreDao.getGenres({});
    const promisedGenres = genres.map(
      async genre => await this.setCanDelete(genre)
    );
    return await Promise.all(promisedGenres);
  }

  static async getGenre(genre_id: string) {
    const genre = await GenreDao.getGenre({ _id: genre_id });
    return this.setCanDelete(genre);
  }

  static async createGenre(genre: IGenre) {
    return await GenreDao.createGenre(genre);
  }

  static async updateGenre(genre_id: string, genre: IGenre) {
    const conditions = { _id: genre_id };
    const update = genre;
    const options = { new: true };
    const editedGenre = await GenreDao.updateGenre(conditions, update, options);
    return this.setCanDelete(editedGenre);
  }

  static async deleteGenre(genre_id: string) {
    if (!(await this.genreHasBooks(genre_id))) {
      return await GenreDao.deleteGenre({ _id: genre_id });
    }
    throw new Error("Genre contains books");
  }
}
