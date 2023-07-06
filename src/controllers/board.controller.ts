import { Request, Response } from 'express'
import { Op } from 'sequelize'
// @ts-ignore
import boards from '../auto-models/boards'

export const getBoards = async (req: Request, res: Response) => {
    try {
        const resData = await boards.findAll()
        res.json(resData)
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving data' })
    }
}
