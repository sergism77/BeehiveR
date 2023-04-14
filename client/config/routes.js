//this is the routes.js file in the server side inside the config folder

import { Router } from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/users';

const router = Router();

router.get('/users', getUsers);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;