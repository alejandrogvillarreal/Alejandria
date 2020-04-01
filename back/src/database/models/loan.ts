import { Schema, model } from "mongoose";
import ILoan from "../../types/loan";

const loanSchema = new Schema(
  {
    books: {
      type: [{ type: Schema.Types.ObjectId, ref: "Book" }]
    },
    user: {
      type: { type: Schema.Types.ObjectId, ref: "User" }
    },
    loan_state: {
      type: { type: Schema.Types.ObjectId, ref: "Loan_State" }
    }
  },
  { versionKey: false, timestamps: true }
);

export default model<ILoan>("Loan", loanSchema);
