import Role from "../models/role";
import { successfulExit, unsuccessfulExit } from "./exit-functions";

export default async function roleSeeder() {
  try {
    const result = await Role.find({});

    const roles = [
      { scope_id: 1, name: "admin" },
      { scope_id: 2, name: "sub_admin" },
      { scope_id: 3, name: "client" }
    ];

    if (result.length === 0) {
      await Role.insertMany(roles);
      return successfulExit("roles seeded!");
    } else {
      return successfulExit("The DB already contains roles seeded!");
    }
  } catch (error) {
    return unsuccessfulExit("roles", error);
  }
}