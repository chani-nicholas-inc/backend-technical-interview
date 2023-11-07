require('dotenv').config()

module.exports = {
  development: {
    username: process.env.HEROKU_UN,
    password: process.env.HEROKU_PW,
    database: process.env.HEROKU_DB,
    host: process.env.HEROKU_HOST,
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
}
