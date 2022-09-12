require("dotenv").config();
// import dotenv from "dotenv";

// dotenv.config();

const development = {
  dialect: "mssql",
  host: process.env.DB_HOST,
  username: process.env.USER_NAME,
  password: process.env.USER_PASSWD,
  database: process.env.DB_NAME,
  dialectOptions: {
    options: {
      encrypt: false, // 오류 발생시 추가 한 부분!
    },
  },
};

const production = {
  dialect: "mssql",
  host: process.env.DB_HOST,
  username: process.env.USER_NAME,
  password: process.env.USER_PASSWD,
  database: process.env.DB_NAME,
  dialectOptions: {
    options: {
      encrypt: false, // 오류 발생시 추가 한 부분!
    },
  },
};

const test = {
  dialect: "mssql",
  host: process.env.DB_HOST,
  username: process.env.USER_NAME,
  password: process.env.USER_PASSWD,
  database: process.env.DB_NAME,
  dialectOptions: {
    options: {
      encrypt: false, // 오류 발생시 추가 한 부분!
    },
  },
};

module.exports = { development, production, test };
