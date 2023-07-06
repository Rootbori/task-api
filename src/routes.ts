// @ts-ignore
import express from 'express'
import { getUsers, searchUsers } from './controllers/user.controller'
import { getBoards } from './controllers/board.controller'

const router = express.Router()

router.get('/task/users', getUsers)
router.post('/task/searchUsers', searchUsers)
router.get('/task/searchBoards', getBoards)

export default router
