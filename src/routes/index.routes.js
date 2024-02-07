import { Router } from "express"
import { createTask, deleteTask, editTask, renderEditTask, renderTasks, taskToggleDone } from "../controllers/tasks.controller.js"
const router = Router()

router.get('/', renderTasks)
router.post('/tasks/add', createTask)
router.get('/tasks/:id/edit', renderEditTask)
router.post('/tasks/:id/edit', editTask)
router.get('/tasks/:id/delete', deleteTask)
router.get('/tasks/:id/toggleDone', taskToggleDone)

export default router