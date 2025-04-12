import { Request, Response } from 'express';
import { db } from '../config/firebaseConfig';

export const getUsers = async (req: Request, res: Response) => {
 try {
  const snapshot = await db.collection('users').get();
  const users = snapshot.docs.map((doc: { id: any; data: () => any; }) => ({ id: doc.id, ...doc.data() }));
  res.json(users);
 } catch (error) {
  res.status(500).json({ error: (error as Error).message });
 }
};
