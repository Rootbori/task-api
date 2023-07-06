const Sequelize = require('sequelize')
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('boards', {
        board_id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        board_name: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'boards',
        schema: 'public',
        timestamps: false,
        indexes: [
            {
                name: 'boards_pkey',
                unique: true,
                fields: [
                    { name: 'board_id' },
                ]
            },
        ]
    })
}
