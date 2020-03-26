import RoleDao from "../dao/role.dao";

export default class RoleModel {
  static async getRoles() {
    return await RoleDao.getRoles({});
  }
  
  static async getRole(role_scope_id: string) {
    return await RoleDao.getRole({ scope_id: role_scope_id });
  }
}
