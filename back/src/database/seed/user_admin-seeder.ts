import Role from "../models/role";
import User from "../models/user";
import bycriptjs from "bcryptjs";
import { successfulExit, unsuccessfulExit } from "./exit-functions";

export default async function userAdminSeeder() {
  try {
    const roleAdmin = await Role.findOne({ scope_id: 1 });
    const result = await User.find({ user_role: roleAdmin?._id });

    if (result.length === 0) {
      const newUser = {
        email: "admin@gmail.com",
        password: "admin",
        first_name: "admin",
        last_name: "prueba",
        gender: "female"
      };

      const salt = await bycriptjs.genSalt(10);
      newUser.password = await bycriptjs.hash(newUser.password, salt);

      const userCreated = await User.create(newUser);

      const conditions = { _id: userCreated._id };
      const update = { user_role: roleAdmin && roleAdmin._id };
      const options = { new: true };
      await User.findOneAndUpdate(conditions, update, options);
      return successfulExit("user_admin seeded!");
    } else {
      return successfulExit("The DB already contains user_admin seeded!");
    }
  } catch (error) {
    return unsuccessfulExit("user_admin", error);
  }
}
