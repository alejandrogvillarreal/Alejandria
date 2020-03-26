import { Schema, model } from "mongoose";
import IGenre from "../../types/genre";

const genreSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    }
  },
  { versionKey: false }
);

export default model<IGenre>("Genre", genreSchema);
