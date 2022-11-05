import { RequestHandler } from "express";
import { validationResult } from "express-validator/check"

const Details = require('../models/details')

export const createDetails: RequestHandler = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  } else {
    var details = await Details.create({ ...req.body });

    return res
      .status(200)
      .json({ message: "Create successfully", data: details });
  }
};
