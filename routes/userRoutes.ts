import express from 'express';
import { authMiddleware } from '../middleware/authMiddleWare';
import { getUsers, updateUserData } from '../controller/userController';

const router = express.Router();
// GET: Fetch users

router.get('/users', authMiddleware, getUsers);
router.post('/users', authMiddleware, updateUserData);

export default router;
