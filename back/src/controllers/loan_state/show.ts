import LoanStateModel from "../../models/loan_state.model";
import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  try {
    const role_scope_id = req.params.id;
    const role = await LoanStateModel.getLoanState(role_scope_id);
    return res.status(200).send({
      success: true,
      role
    });
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: err.message ? err.message : err
    });
  }
};
