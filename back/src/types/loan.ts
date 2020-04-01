import { Document } from "mongoose";

import IBook from "./book";
import IUser from "./user";
import ILoanState from "./loan_state";

export default interface ILoan extends Document {
  books: string[] | IBook[];
  user: string | IUser;
  loan_state: ILoanState;
}

export interface ILoanRequest extends ILoan {
  books_ids: string[];
  user_id: string;
  loan_state_scope_id: string;
}
