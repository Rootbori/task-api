import { Request, Response, NextFunction } from 'express'
import { sign, verify } from 'jsonwebtoken'

interface UserPayload {
    user_id: number;
    username: string;
}

const generateToken = (payload: UserPayload): string => {
    const secretKey = 'rotbori-lkjdsflkjdsl;kfjm,wenr,-' // คีย์ลับสำหรับการเข้ารหัสและถอดรหัส Token
    const options = {
        expiresIn: '1h',
    }

    const token = sign(payload, secretKey, options)
    return token
}

const verifyToken = (req: Request, res: Response, next: NextFunction): unknown => {
    const token = req.headers.authorization
    if (!token) {
        return res.status(401).json({ error: 'No token provided' }) as unknown
    }
    const secretKey = 'rotbori-lkjdsflkjdsl;kfjm,wenr,-' // คีย์ลับสำหรับการเข้ารหัสและถอดรหัส Token

    verify(token, secretKey, (error, decoded) => {
        if (error) {
            return res.status(401).json({ error: 'Invalid token' })
        }
        (req as Request & { user?: UserPayload }).user = decoded as UserPayload
        next()
    })
}

export { generateToken, verifyToken }
