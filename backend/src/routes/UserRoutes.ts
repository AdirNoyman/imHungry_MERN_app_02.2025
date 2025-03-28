import express from 'express';
import UserControllers from '../controllers/UserControllers';
import { jwtCheck, jwtParse } from '../middleware/auth';
import { validateUserRequest } from '../middleware/validation';

const router = express.Router();

const { createUser, updateUser, getLoggedInUser } = UserControllers;

router.get('/', jwtCheck, jwtParse, getLoggedInUser);
router.post('/', jwtCheck, createUser);
router.put('/', jwtCheck, jwtParse, validateUserRequest, updateUser);

export default router;
