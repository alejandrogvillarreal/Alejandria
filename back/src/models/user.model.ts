import UserDao from "../dao/user.dao";
import bycriptjs from "bcryptjs";
import RoleModel from "./role.model";
import IUser from "../types/user";
import IRole from "../types/role";

export default class UserModel {
  static async registerUser(user: IUser) {
    let newUser = { ...user };
    const salt = await bycriptjs.genSalt(10);
    newUser.password = await bycriptjs.hash(user.password, salt);

    const roles = await RoleModel.getRoles();
    const clientRole = roles.find((role: IRole) => role.scope_id == 3);

    const userCreated = await UserDao.createUser(newUser);

    const conditions = { _id: userCreated._id };
    const update = { user_role: clientRole && clientRole._id };
    const options = { new: true };
    const populate = { path: "user_role", model: "Role" };
    return await UserDao.updateUser(conditions, update, options, populate);
  }

  static async checkPassword(email: string, password: string) {
    const hash = await UserDao.getPassword({ email });
    if (!hash) return false;
    return await bycriptjs.compare(password, hash);
  }

  static async getUsers() {
    const populate = {
      path: "user_role",
      model: "Role"
    };
    return await UserDao.getUsers({}, populate);
  }

  static async getUser(user_id: string) {
    const populate = {
      path: "user_role",
      model: "Role"
    };
    return await UserDao.getUser({ _id: user_id }, populate);
  }

  static async searchUser(prop: string, value: any) {
    return await UserDao.searchUser({ [prop]: value });
  }
}
