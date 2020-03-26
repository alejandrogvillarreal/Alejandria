import { Document } from "mongoose";

export default interface IRole extends Document {
  scope_id: number;
  name: string;
}
