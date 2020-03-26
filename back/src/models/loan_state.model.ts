import LoanStateDao from "../dao/loan_state.dao";

export default class LoanStateModel {
  static async getLoanStates() {
    return await LoanStateDao.getLoanStates({});
  }
  
  static async getLoanState(role_scope_id: string) {
    return await LoanStateDao.getLoanState({ scope_id: role_scope_id });
  }
}
