import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

const handleValidationErrors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  // The request has errors (like for example missing user's name) => return 400 - BAD REQUEST
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // The request is okay => move the request forward to the controller
  next();
};

export const validateUserRequest = [
  body('name').isString().notEmpty().withMessage('Please enter a name 🤨'),
  body('address')
    .isString()
    .notEmpty()
    .withMessage('Please enter an address 🤨'),
  body('city').isString().notEmpty().withMessage('Please enter a city 🤨'),
  body('country')
    .isString()
    .notEmpty()
    .withMessage('Please enter a country 🤨'),
  handleValidationErrors,
];
