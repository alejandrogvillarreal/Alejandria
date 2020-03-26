import { Document } from "mongoose";

export default interface ILoanState extends Document {
  scope_id: number;
  name: string;
  possible_loan_states: string[] | ILoanState[];
}
