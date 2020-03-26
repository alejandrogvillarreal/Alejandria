import { Schema, model } from "mongoose";
import IUser from "../../types/user";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    first_name: {
      type: String,
      required: true,
      trim: true
    },
    last_name: {
      type: String,
      required: true,
      trim: true
    },
    gender: {
      type: String,
      enum: ["male", "female", "no_gender"],
      required: true,
      trim: true
    },
    user_role: {
      type: { type: Schema.Types.ObjectId, ref: "Role" }
    }
  },
  { versionKey: false, timestamps: true }
);

export default model<IUser>("User", userSchema);
