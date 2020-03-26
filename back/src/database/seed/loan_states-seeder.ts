import LoanState from "../models/loan_state";
import { successfulExit, unsuccessfulExit } from "./exit-functions";

export default async function feeStateSeeder() {
  try {
    const result = await LoanState.find({});

    const states = [
      { scope_id: 1, name: "pending" },
      { scope_id: 2, name: "borrowed" },
      { scope_id: 3, name: "cancelled" },
      { scope_id: 4, name: "returned" }
    ];

    if (result.length === 0) {
      const loan_states = await LoanState.insertMany(states);

      const possible_pending_states = loan_states
        .filter(loan_state =>
          Boolean(
            loan_state.name === "borrowed" || loan_state.name === "cancelled"
          )
        )
        .map(state => state._id);

      const returnedState = loan_states.find(
        loan_state => loan_state.name === "returned"
      );

      const promisePendingState = LoanState.updateOne(
        { name: "pending" },
        { possible_loan_states: possible_pending_states }
      );
      const promiseBorrowedState = LoanState.updateOne(
        { name: "borrowed" },
        { possible_loan_states: returnedState && [returnedState._id] }
      );

      await Promise.all([promisePendingState, promiseBorrowedState]);

      return successfulExit("loan_states seeded!");
    } else {
      return successfulExit("The DB already contains loan_states seeded!");
    }
  } catch (error) {
    return unsuccessfulExit("loan_states", error);
  }
}
