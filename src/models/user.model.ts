import { Model, DataTypes } from 'sequelize'
import sequelize from '../database'

class User extends Model {
    public user_id!: number
    public username!: string
    public password!: string
    public email!: string
    public facebook_id!: string
    public gmail_id!: string
    public created_at!: Date
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
        timestamps: false,
    }
)

export default User
