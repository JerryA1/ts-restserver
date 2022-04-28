import { Sequelize } from 'sequelize';

const db = new Sequelize('curso_node', 'root', '2662', {
    host: 'localhost',
    dialect: 'mariadb'
});

export default db;