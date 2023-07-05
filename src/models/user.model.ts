import { Model, DataTypes } from 'sequelize'
import sequelize from '../database'

class User extends Model {
    public userId!: number
    public username!: string
    public password!: string
    public email!: string
    public facebookId!: string
    public gmailId!: string
    public createdAt!: Date
}

User.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        facebook_id: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        gmail_id: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: false, // ออฟชันนี้ใช้ปิดการใช้งานฟิลด์ created_at ที่ถูกกำหนดเอง
    }
)

export default User
