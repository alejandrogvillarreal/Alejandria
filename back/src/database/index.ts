import { connect } from "mongoose";
import { constants } from "../config/constants";
const { mongodb } = constants;

export async function startConnection() {
  try {
    const db = await connect(mongodb.uri, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      autoIndex: false
      //config que evita errores en la consola
    });
    console.log("DB connected");
  } catch (error) {
    console.log(`DB connection Error: ${error}`);
  }
}
