import { Request, Response } from 'express'

const Sequelize = require('sequelize')
import sequelize from '../database'

const BoardModel = require('../auto-models/boards.js')
const Board = BoardModel(sequelize, Sequelize);

export const getBoards = async (req: Request, res: Response) => {
    try {
        const datas = await Board.findAll()
        res.json(datas)
    } catch (error) {
        console.error('Error retrieving users:', error)
        res.status(500).json({ error: 'Error retrieving users' })
    }
}