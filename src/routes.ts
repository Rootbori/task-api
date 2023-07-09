
// @ts-ignore
import express, { Request, Response, NextFunction } from 'express';
import { getUsers, searchUsers } from './controllers/user.controller'
import { addBoard, getBoards } from './controllers/board.controller'
import { Login } from './controllers/users.controller'

const router = express.Router();

router.use(function(req: Request, res: Response, next: NextFunction) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

router.get('/task/users', getUsers)
router.post('/task/searchUsers', searchUsers)
router.post('/task/login', Login)

router.get('/task/searchBoards', getBoards)
router.post('/task/addBoards', addBoard)

export default router
