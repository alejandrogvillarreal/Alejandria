import BookDao from "../dao/book.dao";
import { IBookRequest } from "../types/book";
import hasDuplicates from "../utils/hasDuplicates";
import fs from "fs-extra";
import path from "path";

export default class BookModel {
  static populate = [
    {
      path: "authors",
      model: "Author",
      select: "-can_delete"
    },
    {
      path: "genres",
      model: "Genre",
      select: "-can_delete"
    }
  ];

  static async createBook(book: IBookRequest, file: any) {
    if (!Array.isArray(book.authors_ids))
      throw new Error("authors_ids is not array");
    if (!Array.isArray(book.genres_ids))
      throw new Error("genres_ids is not array");

    const authorsIdsDuplicated = Boolean(book.authors_ids.length > 1)
      ? hasDuplicates(book.authors_ids)
      : false;
    const genresIdsDuplicated = Boolean(book.genres_ids.length > 1)
      ? hasDuplicates(book.genres_ids)
      : false;
    // TODO: las validaciones meterlas en el middleware de validacion deupués
    if (authorsIdsDuplicated) throw new Error("authors_ids duplicated");
    if (genresIdsDuplicated) throw new Error("genres_ids duplicated");

    const genres = book.genres_ids || [];
    const authors = book.authors_ids || [];
    const newBook = {
      title: book.title,
      description: book.description,
      quantity: book.quantity,
      available_stock: book.available_stock || book.quantity,
      image: file ? file.path : null,
      authors: authors,
      genres: genres
    };

    const createdBook = await BookDao.createBook(newBook);
    return await this.getBook(createdBook._id);
  }

  static async getBooks() {
    return await BookDao.getBooks({ is_deleted: false }, this.populate);
  }

  static async getBooksWithDeleted() {
    return await BookDao.getBooks({}, this.populate);
  }

  static async getBook(book_id: string) {
    return await BookDao.getBook(
      { _id: book_id, is_deleted: false },
      this.populate
    );
  }

  static async getBookWithDeleted(book_id: string) {
    return await BookDao.getBook({ _id: book_id }, this.populate);
  }

  static async searchBook(prop: string, value: any) {
    return await BookDao.searchBook({ [prop]: value, is_deleted: false });
  }

  static async searchBookWithDeleted(prop: string, value: any) {
    return await BookDao.searchBook({ [prop]: value });
  }

  static async updateBook(book_id: string, book: IBookRequest, file: any) {
    const oldBook = await BookDao.getBook({ _id: book_id });
    const imagePath = oldBook ? oldBook.image : null;
    if (imagePath) {
      // remove old image
      await fs.unlink(path.resolve(imagePath));
    }

    const conditions = { _id: book_id };
    const genres = book.genres_ids || [];
    const authors = book.authors_ids || [];
    const bookUpdate = {
      title: book.title,
      description: book.description,
      quantity: book.quantity,
      available_stock: book.available_stock || book.quantity,
      image: file ? file.path : null,
      authors: authors,
      genres: genres
    };
    const update = bookUpdate;
    const options = { new: true };
    return await BookDao.updateBook(conditions, update, options, this.populate);
  }

  static async deleteBook(book_id: string) {
    const conditions = { _id: book_id };
    const update = { is_deleted: true };
    const options = { new: true };
    return await BookDao.updateBook(conditions, update, options, this.populate);
  }

  static async getBooksByGenre(genre_id: string) {
    const conditions = { genres: genre_id, is_deleted: false };
    return await BookDao.getBooks(conditions);
  }

  static async getBooksByGenreWithDeleted(genre_id: string) {
    const conditions = { genres: genre_id };
    return await BookDao.getBooks(conditions);
  }

  static async getBooksByAuthor(author_id: string) {
    const conditions = { authors: author_id, is_deleted: false };
    return await BookDao.getBooks(conditions);
  }

  static async getBooksByAuthorWithDeleted(author_id: string) {
    const conditions = { authors: author_id };
    return await BookDao.getBooks(conditions);
  }
}
