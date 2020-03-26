import { Schema, model } from "mongoose";
import IAuthor from "../../types/author";

const authorSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true
    }
  },
  { versionKey: false }
);

export default model<IAuthor>("Author", authorSchema);
