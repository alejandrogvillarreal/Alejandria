import User from "../database/models/user";

export default class UserDao {
  static async searchUser(conditions: any) {
    return await User.findOne(conditions).select("-password");
  }
  static async getPassword(query: any) {
    const user = await User.findOne(query).select("password"); // devuelve solo la contraseña.
    return user && user.password;
  }
  static async createUser(query: any) {
    return await User.create(query);
  }
  static async getUsers(query: any, populate: any) {
    return await User.find(query)
      .populate(populate)
      .select("-password");
  }
  static async getUser(conditions: any, populate: any) {
    return await User.findOne(conditions)
      .populate(populate)
      .select("-password");
  }
  static async updateUser(
    conditions: any,
    update: any,
    options: any,
    populate: any
  ) {
    return await User.findOneAndUpdate(conditions, update, options)
      .populate(populate)
      .select("-password");
  }
}
