import express from 'express';
import UserControllers from '../controllers/UserControllers';
import { jwtCheck } from '../middleware/auth';

const router = express.Router();

const { createUser } = UserControllers;

router.post('/', jwtCheck, createUser);

export default router;
