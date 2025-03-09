import express from 'express';
import UserControllers from '../controllers/UserControllers';
import { jwtCheck, jwtParse } from '../middleware/auth';
import { validateUserRequest } from '../middleware/validation';

const router = express.Router();

const { createUser } = UserControllers;

router.post('/', jwtCheck, createUser);
router.put('/', jwtCheck, jwtParse, validateUserRequest, createUser);

export default router;
