import Role from "../database/models/role";

export default class RoleDao {
  static async getRoles(query: any) {
    return await Role.find(query);
  }
  static async getRole(query: any) {
    return await Role.findOne(query);
  }
}
