import LoanState from "../database/models/loan_state";

export default class LoanStateDao {
  static async getLoanStates(query: any) {
    return await LoanState.find(query).populate('possible_loan_states');
  }
  static async getLoanState(query: any) {
    return await LoanState.findOne(query).populate('possible_loan_states');
  }
}
