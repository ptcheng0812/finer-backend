import { check, validationResult } from 'express-validator';

exports.validDetail = [
  check('telephone')
    .isLength({ min: 10 })
    .withMessage('Minimum 10 characters required!')
    .bail(),
  check('email')
    .isEmail()
    .withMessage('Invalid email address!')
    .bail()
];
