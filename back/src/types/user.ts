import { Document } from "mongoose";

export default interface IUser extends Document {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  gender: string;
}
