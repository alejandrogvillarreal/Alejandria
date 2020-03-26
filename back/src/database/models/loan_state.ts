import { Schema, model } from "mongoose";
import ILoanState from "../../types/loan_state";

const loanStateSchema = new Schema(
  {
    scope_id: {
      type: Number,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    possible_loan_states: {
      type: [{ type: Schema.Types.ObjectId, ref: "Loan_State" }]
    }
  },
  { versionKey: false }
);

export default model<ILoanState>("Loan_State", loanStateSchema);
