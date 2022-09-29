require("dotenv").config();

const development = {
  dialect: "mssql",
  host: process.env.DB_HOST,
  username: process.env.USER_NAME,
  password: process.env.USER_PASSWD,
  database: process.env.DB_DATABASE,
  dialectOptions: {
    options: {
      encrypt: false,
    },
  },
};

const production = {
  dialect: "mssql",
  host: process.env.DB_HOST,
  username: process.env.USER_NAME,
  password: process.env.USER_PASSWD,
  database: process.env.DB_DATABASE,
  dialectOptions: {
    options: {
      encrypt: false,
    },
  },
};

const test = {
  dialect: "mssql",
  host: process.env.DB_HOST,
  username: process.env.USER_NAME,
  password: process.env.USER_PASSWD,
  database: process.env.DB_DATABASE,
  dialectOptions: {
    options: {
      encrypt: false,
    },
  },
};

module.exports = { development, production, test };
