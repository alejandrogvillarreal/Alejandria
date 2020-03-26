const { validationResult } = require("express-validator");
import { Request, Response, NextFunction } from "express";

const validate = (req: Request, res: Response, next: NextFunction) => {
  const validation_errors = validationResult(req);
  if (validation_errors.isEmpty()) {
    return next();
  } else {
    const errors = validation_errors
      .array()
      .map((err: any) => ({ [err.param]: err.msg }));
    const full_message = errors.reduce((accum: string, err: any) => {
      for (let [key, value] of Object.entries(err)) {
        accum += `${key}: ${value}, `;
      }
      return accum;
    }, "");
    const message = `${full_message.slice(0, -2)}.`;
    return res.status(400).send({
      success: false,
      message: message || "Validations error",
      errors
    });
  }
};

export default validate;
