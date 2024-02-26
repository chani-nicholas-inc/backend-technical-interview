require('dotenv').config()

module.exports = {
  development: {
    username: process.env.LOCAL_UN,
    password: process.env.LOCAL_PW,
    database: process.env.LOCAL_DB,
    host: process.env.LOCAL_HOST,
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: false
    }
  }
}
