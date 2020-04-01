import LoanModel from "../../models/loan.model";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  try {
    const loan_id = req.params.id;
    const loan = await LoanModel.getLoan(loan_id);
    return res.status(200).send({
      success: true,
      loan
    });
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: err.message ? err.message : err
    });
  }
};
