import Genre from "../database/models/genre";
import IGenre from "../types/genre";

export default class GenreDao {
  static async getGenres(query: any) {
    return await Genre.find(query);
  }
  static async getGenre(query: any) {
    return await Genre.findOne(query);
  }
  static async createGenre(author: IGenre) {
    return await Genre.create(author);
  }
  static async updateGenre(conditions: any, update: any, options: any) {
    return await Genre.findOneAndUpdate(conditions, update, options);
  }
  static async deleteGenre(query: any) {
    return await Genre.findByIdAndRemove(query);
  }
}
