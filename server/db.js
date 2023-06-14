const { Sequelize } = require('sequelize');

module.exports = new Sequelize( //тут нужно указатть пользователя для бд пароль и тд

    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }


);