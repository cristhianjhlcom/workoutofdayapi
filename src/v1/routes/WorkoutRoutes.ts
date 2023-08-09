import express from 'express'
import WorkoutController from '../controllers/WorkoutController'

const router = express.Router()

router.get('/', WorkoutController.index)
router.get('/:id', WorkoutController.show)
router.post('/', WorkoutController.store)
router.put('/:id', WorkoutController.update)
router.delete('/:id', WorkoutController.destroy)

export default router;
