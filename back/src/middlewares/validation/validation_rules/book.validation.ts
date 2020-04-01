import { check } from "express-validator";
import {
  INVALID_VALUE,
  IS_REQUIRED,
  TOO_SHORT,
  TOO_LONG,
  IS_NOT_INTEGER,
  IS_NOT_POSITIVE,
  IS_NOT_ARRAY,
  DUPLICATED_VALUES
} from "./errors";
import hasDuplicates from "../../../utils/hasDuplicates";

export default [
  check("title")
    .trim()
    .custom(value => {
      if (value.length === 0) throw new Error(IS_REQUIRED);
      if (value.length < 6) throw new Error(TOO_SHORT);
      if (value.length > 20) throw new Error(TOO_LONG);
      return true;
    }),
  check("description")
    .trim()
    .custom(value => {
      if (value.length === 0) throw new Error(IS_REQUIRED);
      if (value.length < 20) throw new Error(TOO_SHORT);
      if (value.length > 1000) throw new Error(TOO_LONG);
      return true;
    }),
  check("quantity")
    .isNumeric()
    .custom(value => {
      if (!Number.isInteger(Number(value))) throw new Error(IS_NOT_INTEGER);
      if (value < 0) throw new Error(IS_NOT_POSITIVE);
      return true;
    }),
  check("available_stock")
    .isNumeric()
    .custom((value, { req }) => {
      if (!Number.isInteger(Number(value))) throw new Error(IS_NOT_INTEGER);
      if (value < 0) throw new Error(IS_NOT_POSITIVE);
      if (value > req.body.quantity) throw new Error(INVALID_VALUE);
      return true;
    }),
  check("authors_ids").custom(value => {
    if (!Array.isArray(value)) throw new Error(IS_NOT_ARRAY);

    const authorsIdsDuplicated = Boolean(value.length > 1)
      ? hasDuplicates(value)
      : false;
    if (authorsIdsDuplicated) throw new Error(DUPLICATED_VALUES);

    return true;
  }),
  check("genres_ids").custom(value => {
    if (!Array.isArray(value)) throw new Error(IS_NOT_ARRAY);

    const genresIdsDuplicated = Boolean(value.length > 1)
      ? hasDuplicates(value)
      : false;
    if (genresIdsDuplicated) throw new Error(DUPLICATED_VALUES);

    return true;
  })
];
