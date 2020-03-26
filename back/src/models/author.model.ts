import AuthorDao from "../dao/author.dao";
import IAuthor from "../types/author";

export default class AuthorModel {
  static async getAuthors() {
    return await AuthorDao.getAuthors({});
  }

  static async getAuthor(author_id: string) {
    return await AuthorDao.getAuthor({ _id: author_id });
  }

  static async createAuthor(author: IAuthor) {
    return await AuthorDao.createAuthor(author);
  }

  static async updateAuthor(author_id: string, author: IAuthor) {
    const conditions = { _id: author_id };
    const update = author;
    const options = { new: true };
    return await AuthorDao.updateAuthor(conditions, update, options);
  }

  static async deleteAuthor(author_id: string) {
    return await AuthorDao.deleteAuthor({ _id: author_id });
  }
}
