const Sequelize = require('sequelize');

const dotenv = require('dotenv').config()

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
    console.log(sequelize, 'JAWS_DB true');
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
    console.log(sequelize, 'LOCAL_DB is bad');
}

module.exports = sequelize;
