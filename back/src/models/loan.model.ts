import LoanDao from "../dao/loan.dao";
import LoanStateModel from "../models/loan_state.model";
import BookModel from "../models/book.model";
import BookDao from "../dao/book.dao";
import { ILoanRequest } from "../types/loan";

export default class LoanModel {
  static complete_populate = [
    {
      path: "books",
      model: "Book",
      populate: [
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
      ]
    },
    {
      path: "user",
      model: "User",
      select: "-password",
      populate: {
        path: "user_role",
        model: "Role"
      }
    },
    {
      path: "loan_state",
      model: "Loan_State",
      populate: {
        path: "possible_loan_states",
        model: "Loan_State",
        select: "-possible_loan_states"
      }
    }
  ];

  static async createLoan(loan: ILoanRequest, userId: string) {
    // if (!Array.isArray(loan.books_ids))
    //   throw new Error("books_ids is not array");
    // const authorsIdsDuplicated = Boolean(loan.books_ids.length > 1)
    //   ? hasDuplicates(loan.books_ids)
    //   : false;
    // // TODO: las validaciones meterlas en el middleware de validacion deupués
    // if (authorsIdsDuplicated) throw new Error("books_ids duplicated");

    const books = loan.books_ids || [];

    const booksHaveStock = await BookModel.BooksHaveStock(books);
    if (!booksHaveStock) throw new Error("Books unavailable");

    const createdLoan = await LoanDao.createLoan({
      books: books
    });

    // update books stock
    const books_conditions = { _id: { $in: books } };
    const book_update = { $inc: { available_stock: -1 } };
    const options_book = { new: true };
    await BookDao.updateBooks(books_conditions, book_update, options_book);

    // update loan
    const pendingState = await LoanStateModel.getLoanState("1");
    const conditions = { _id: createdLoan._id };
    const update = {
      loan_state: pendingState && pendingState._id,
      user: userId
    };
    const options = { new: true };
    return await LoanDao.updateLoan(
      conditions,
      update,
      options,
      this.complete_populate
    );
  }

  static async getLoans() {
    const populate = [
      {
        path: "user",
        model: "User",
        select: "-password"
      },
      {
        path: "loan_state",
        model: "Loan_State",
        populate: {
          path: "possible_loan_states",
          model: "Loan_State",
          select: "-possible_loan_states"
        }
      }
    ];
    return await LoanDao.getLoans({}, populate);
  }

  static async getLoan(loan_id: string) {
    return await LoanDao.getLoan({ _id: loan_id }, this.complete_populate);
  }

  static async searchLoan(prop: string, value: any) {
    return await LoanDao.searchLoan({ [prop]: value });
  }

  static async updateLoan(loan_id: string, loan: ILoanRequest) {
    const populate = {
      path: "loan_state",
      model: "Loan_State",
      populate: {
        path: "possible_loan_states",
        model: "Loan_State",
        select: "-possible_loan_states"
      }
    };

    const selectedLoan = await LoanDao.getLoan({ _id: loan_id }, populate);
    const selectedLoanParsed = JSON.parse(JSON.stringify(selectedLoan));
    if (selectedLoanParsed) {
      const possible_states =
        selectedLoanParsed.loan_state.possible_loan_states;
      const possible_state = possible_states.find(
        (state: any) => state.scope_id == loan.loan_state_scope_id
      );
      if (possible_state) {
        const conditions = { _id: loan_id };
        const update = {
          loan_state: possible_state._id
        };
        const options = { new: true };
        return await LoanDao.updateLoan(
          conditions,
          update,
          options,
          this.complete_populate
        );
      }
    }
    throw new Error("State unavailable");
  }
}
