import Book from "../database/models/book";

export default class BookDao {
  static async searchBook(conditions: any) {
    return await Book.findOne(conditions);
  }
  static async createBook(query: any) {
    return await Book.create(query);
  }
  static async getBooks(conditions: any, populate?: any) {
    return await Book.find(conditions).populate(populate);
  }
  static async getBook(conditions: any, populate?: any) {
    return await Book.findOne(conditions).populate(populate);
  }
  static async updateBook(
    conditions: any,
    update: any,
    options: any,
    populate: any
  ) {
    return await Book.findOneAndUpdate(conditions, update, options).populate(
      populate
    );
  }
  static async updateBooks(
    conditions: any,
    update: any,
    options: any,
    populate?: any
  ) {
    return await Book.updateMany(conditions, update, options).populate(
      populate
    );
  }
}
