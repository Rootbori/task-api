import { Request, Response } from 'express'

const Sequelize = require('sequelize');
import sequelize from '../database'
import { generateToken } from '../auth'

const User = require('../auto-models/users')(sequelize, Sequelize.DataTypes);

export const Login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ where: { username } });
        if (user && user.password === password) {
            const token = generateToken({ user_id: user.user_id, username: user.username })
            res.json({ token });
        } else {
            res.status(401).json({ error: 'Invalid username or password' });
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
}
