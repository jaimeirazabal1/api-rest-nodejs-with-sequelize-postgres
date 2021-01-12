import { Router } from 'express'
import { createProject, getProjects, getOneProject, deleteProject, updateProject } from '../controllers/project.controller'

const router = Router();

// /api/projects/
router.post('/', createProject);
router.get('/', getProjects);

// /api/projects/:projectID
router.get('/:id', getOneProject)
router.delete('/:id', deleteProject)
router.put('/:id', updateProject)


export default router;