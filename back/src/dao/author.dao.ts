import Author from "../database/models/author";
import IAuthor from "../types/author";

export default class AuthorDao {
  static async getAuthors(query: any) {
    return await Author.find(query);
  }
  static async getAuthor(query: any) {
    return await Author.findOne(query);
  }
  static async createAuthor(author: IAuthor) {
    return await Author.create(author);
  }
  static async updateAuthor(conditions: any, update: any, options: any) {
    return await Author.findOneAndUpdate(conditions, update, options);
  }
  static async deleteAuthor(query: any) {
    return await Author.findByIdAndRemove(query);
  }
}
