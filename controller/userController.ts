import { Request, Response } from 'express';
import { db } from '../config/firebaseConfig';

// GET /api/users
export const getUsers = async (req: Request, res: Response): Promise<void> => {
 try {
  const snapshot = await db.collection('users').get();

  const users = snapshot.docs.map(doc => ({
   id: doc.id,
   ...doc.data(),
  }));

  res.status(200).json(users);
 } catch (error) {
  console.error('Error fetching users:', error);
  res.status(500).json({ error: (error as Error).message });
 }
};


// POST /api/users
export const updateUserData = async (req: Request, res: Response): Promise<void> => {
 try {
  const uid = (req as any).user.uid;
  const data = req.body;

  const userDoc = await db.collection('users').doc(uid).set(data, { merge: true });

  res.status(200).json({
   message: 'User data updated successfully',
  });
 } catch (error) {
  res.status(500).json({ error: (error as Error).message });
 }
};
