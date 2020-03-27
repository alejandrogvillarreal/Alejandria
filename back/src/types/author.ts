import { Document } from "mongoose";

export default interface IAuthor extends Document {
  fullname: string;
  can_delete : boolean;
}
