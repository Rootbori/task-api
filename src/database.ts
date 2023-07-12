import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    database: 'rootbori',
    username: 'rootbori',
    password: 'Godkiller12',
    host: 'rootbori-task.cmhsliebtiim.us-east-1.rds.amazonaws.com',
    port: 5432,
    dialect: 'postgres',
});

export default sequelize;
