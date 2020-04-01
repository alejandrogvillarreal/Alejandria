import Loan from "../database/models/loan";

export default class LoanDao {
  static async searchLoan(conditions: any) {
    return await Loan.findOne(conditions);
  }
  static async createLoan(query: any) {
    return await Loan.create(query);
  }
  static async getLoans(conditions: any, populate?: any) {
    return await Loan.find(conditions).populate(populate);
  }
  static async getLoan(conditions: any, populate?: any) {
    return await Loan.findOne(conditions).populate(populate);
  }
  static async updateLoan(
    conditions: any,
    update: any,
    options: any,
    populate: any
  ) {
    return await Loan.findOneAndUpdate(conditions, update, options).populate(
      populate
    );
  }
}
