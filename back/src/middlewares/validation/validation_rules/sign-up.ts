import { check } from "express-validator";
import { INVALID_VALUE, IS_REQUIRED, TOO_SHORT, TOO_LONG } from "./errors";

export default [
  check("email")
    .trim()
    .isEmail()
    .custom(value => {
      if (value.length === 0) throw new Error(IS_REQUIRED);
      if (value.length > 40) throw new Error(TOO_LONG);
      return true;
    }),
  check("password").custom(value => {
    console.log("value", value);
    if (value.length === 0) throw new Error(IS_REQUIRED);
    if (value.length < 6) throw new Error(TOO_SHORT);
    return true;
  }),
  check("first_name")
    .trim()
    .custom(value => {
      if (value.length === 0) throw new Error(IS_REQUIRED);
      if (value.length > 20) throw new Error(TOO_LONG);
      return true;
    }),
  check("last_name")
    .trim()
    .custom(value => {
      if (value.length === 0) throw new Error(IS_REQUIRED);
      if (value.length > 20) throw new Error(TOO_LONG);
      return true;
    }),
  check("gender")
    .trim()
    .custom(value => {
      if (value.length === 0) throw new Error(IS_REQUIRED);
      if (value !== "male" && value !== "female" && value !== "no_gender")
        throw new Error(INVALID_VALUE);
      return true;
    })
];
