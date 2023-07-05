// @ts-ignore
import express from 'express'
import { getUsers, searchUsers } from './controllers/user.controller' // เปลี่ยนตามพาธของคอนโทรลเลอร์ "user.controller"

const router = express.Router()

router.get('/rootbori/users', getUsers)
router.post('/rootbori/searchUsers', searchUsers)

export default router
