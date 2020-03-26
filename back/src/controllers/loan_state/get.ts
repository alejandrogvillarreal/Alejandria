import LoanStateModel from "../../models/loan_state.model";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  try {
    const roles = await LoanStateModel.getLoanStates();
    return res.status(200).send({
      success: true,
      roles
    });
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: err.message ? err.message : err
    });
  }
};
