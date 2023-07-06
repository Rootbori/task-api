// @ts-ignore
import express from 'express'
import { getUsers, searchUsers } from './controllers/user.controller'
import { addBoard, getBoards } from './controllers/board.controller'
import { Login } from './controllers/users.controller'

const router = express.Router()

router.get('/task/users', getUsers)
router.post('/task/searchUsers', searchUsers)
router.get('/task/login', Login)

router.get('/task/searchBoards', getBoards)
router.post('/task/addBoards', addBoard)

export default router
