import { check } from "express-validator";
import { IS_REQUIRED, TOO_LONG } from "./errors";

export default [
  check("fullname")
    .trim()
    .custom(value => {
      if (value.length === 0) throw new Error(IS_REQUIRED);
      if (value.length > 50) throw new Error(TOO_LONG);
      return true;
    })
];
