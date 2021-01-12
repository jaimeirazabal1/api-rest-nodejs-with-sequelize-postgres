import { Router } from 'express'
import { createTask, getTasks, getOneTask, updateTask, deleteTask } from '../controllers/task.controller'

const router = Router();

// console.log('createTask',createTask)
// api/tasks
router.get('/', getTasks)
router.get('/one/:id', getOneTask)
router.post('/', createTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

export default router;