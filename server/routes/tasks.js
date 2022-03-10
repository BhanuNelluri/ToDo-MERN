import express from 'express';
import auth from '../middleware/auth.js';
const router = express.Router({ mergeParams: true });
;
import {  getAllTasks, createTask, deleteTask, updateTask } from '../controllers/tasks.js'


router.post('/newTask', auth, createTask);
router.patch('/update', auth, updateTask);
router.get('/:id/tasks', getAllTasks);
router.delete('/:id/delete', auth, deleteTask);


export default router;