import express from 'express'
import { updateUser, deleteUser, getAllUsers, getSingleUser } from '../Controllers/userController.js'

import { authenticate } from '../auth/verifyToken.js'

const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id', authenticate, getSingleUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router;