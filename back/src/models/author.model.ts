import AuthorDao from "../dao/author.dao";
import IAuthor from "../types/author";
import BookModel from "../models/book.model";

export default class AuthorModel {
  static async authorHasBooks(author_id: string) {
    const books = await BookModel.getBooksByAuthorWithDeleted(author_id);
    return Boolean(books.length === 0) ? false : true;
  }

  static async setCanDelete(author: IAuthor | null) {
    if (author && (await this.authorHasBooks(author._id))) {
      author.can_delete = false;
    }
    return author;
  }

  static async getAuthors() {
    const authors = await AuthorDao.getAuthors({});
    const promisedAuthors = authors.map(
      async author => await this.setCanDelete(author)
    );
    return await Promise.all(promisedAuthors);
  }

  static async getAuthor(author_id: string) {
    const author = await AuthorDao.getAuthor({ _id: author_id });
    return this.setCanDelete(author);
  }

  static async createAuthor(author: IAuthor) {
    return await AuthorDao.createAuthor(author);
  }

  static async updateAuthor(author_id: string, author: IAuthor) {
    const conditions = { _id: author_id };
    const update = author;
    const options = { new: true };
    const editedAuthor = await AuthorDao.updateAuthor(
      conditions,
      update,
      options
    );
    return this.setCanDelete(editedAuthor);
  }

  static async deleteAuthor(author_id: string) {
    if (!(await this.authorHasBooks(author_id))) {
      return await AuthorDao.deleteAuthor({ _id: author_id });
    }
    throw new Error("Author contains books");
  }
}
