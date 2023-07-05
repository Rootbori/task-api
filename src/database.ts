import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    database: 'rootbori',
    username: 'rootbori',
    password: 'Godkiller12',
    host: '34.170.168.230',
    port: 5432,
    dialect: 'postgres',
});

export default sequelize;
