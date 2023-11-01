import express from 'express'
import { authenticate, restrict } from '../auth/verifyToken.js'
import {
    updateDoctor,
    deleteDoctor,
    getAllDoctors,
    getSingleDoctor,
    getDoctorProfile
} from '../Controllers/doctorController.js'

import reviewRouter from './review.js'

const router = express.Router()

// Nested route
router.use('/:doctorId/reviews', reviewRouter)

router.get('/:id', getSingleDoctor)
router.get('/', getAllDoctors)
router.put('/:id', authenticate, restrict(["doctor"]), updateDoctor)
router.delete('/:id', authenticate, restrict(["doctor"]), deleteDoctor)

router.get('/profile/me', authenticate, restrict(["doctor"]), getDoctorProfile)

export default router;