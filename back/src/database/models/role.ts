import { Schema, model } from "mongoose";
import IRole from "../../types/role";

const roleSchema = new Schema(
  {
    scope_id: {
      type: Number,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    }
  },
  { versionKey: false }
);

export default model<IRole>("Role", roleSchema);
