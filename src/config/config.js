require("dotenv").config();

module.exports = {
    connection_db: {
      host: process.env.DEV_DB_HOST,
      username: process.env.DEV_DB_USER,
      password: process.env.DEV_DB_PASS,
      port: process.env.DEV_DB_PORT,
      database: process.env.DEV_DB_NAME,
      dialect: process.env.DEV_DB_DIALECT
    }
  }
  