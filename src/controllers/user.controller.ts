import { Request, Response } from 'express'
import { Op } from 'sequelize'
import User from '../models/user.model'

// @ts-ignore
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.findAll()
        res.json(users)
    } catch (error) {
        console.error('Error retrieving users:', error)
        res.status(500).json({ error: 'Error retrieving users' })
    }
}


// @ts-ignore
export const searchUsers = async (req: Request, res: Response) => {
    try {
        const { username } = req.body

        let where = {} as any
        if (username) {
            where.username = { [Op.like]: `%${username}%` }
        }

        let users = await User.findAll({ where })

        res.json(users)
    } catch (error) {
        console.error('Error retrieving users:', error)
        res.status(500).json({ error: 'Error retrieving users' })
    }
}