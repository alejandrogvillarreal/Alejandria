import mongoose from "mongoose";
import { startConnection } from "../index";

import rolesSeeder from "./roles-seeder";
import loanStatesSeeder from "./loan_states-seeder";
import userAdminSeeder from "./user_admin-seeder";

async function seeder() {
  try {
    startConnection();
    await rolesSeeder();
    await userAdminSeeder();
    await loanStatesSeeder();
    exit();
  } catch (error) {
    console.log("ERORR DB while seeding: ", error);
    exit();
  }
}

function exit() {
  console.log("DB disconnected");
  mongoose.disconnect();
}

seeder();
