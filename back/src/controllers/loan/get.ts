import LoanModel from "../../models/loan.model";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  try {
    const loans = await LoanModel.getLoans();
    return res.status(200).send({
      success: true,
      loans
    });
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: err.message ? err.message : err
    });
  }
};
