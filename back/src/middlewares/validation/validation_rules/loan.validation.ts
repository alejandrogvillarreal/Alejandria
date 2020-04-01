import { check } from "express-validator";
import { IS_NOT_ARRAY, DUPLICATED_VALUES } from "./errors";
import hasDuplicates from "../../../utils/hasDuplicates";

export default [
  check("books_ids").custom(value => {
    if (!Array.isArray(value)) throw new Error(IS_NOT_ARRAY);

    const booksIdsDuplicated = Boolean(value.length > 1)
      ? hasDuplicates(value)
      : false;
    if (booksIdsDuplicated) throw new Error(DUPLICATED_VALUES);

    return true;
  })
];
