import { Request, Response } from 'express'

const Sequelize = require('sequelize')
import sequelize from '../database'

const Board = require('../auto-models/boards')(sequelize, Sequelize.DataTypes)

export const getBoards = async (req: Request, res: Response) => {
    try {
        const data = await Board.findAll()
        res.json(data)
    } catch (error) {
        console.error('Error retrieving Board:', error)
        res.status(500).json({ error: 'Error retrieving Board' })
    }
}

export const addBoard = async (req: Request, res: Response) => {
    try {
        const { board_name } = req.body
        const board = await Board.create({ board_name })
        res.json(board)
    } catch (error) {
        console.error('Error adding Board:', error)
        res.status(500).json({ error: 'Error adding Board' })
    }
}
