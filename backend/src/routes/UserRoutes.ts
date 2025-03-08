import express from 'express';
import UserControllers from '../controllers/UserControllers';
import { jwtCheck, jwtParse } from '../middleware/auth';

const router = express.Router();

const { createUser } = UserControllers;

router.post('/', jwtCheck, createUser);
router.put('/', jwtCheck, jwtParse, createUser);

export default router;
