import { RequestHandler } from "express";

import { Details } from "../models/details";

export const createDetails: RequestHandler = async (req, res, next) => {
  var details = await Details.create({ ...req.body });

  return res
    .status(200)
    .json({ message: "Create successfully", data: details });
};
