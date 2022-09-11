require("dotenv").config();
// import dotenv from "dotenv";

// dotenv.config();

const development = {
  dialect: "mssql",
  host: process.env.DB_HOST,
  username: process.env.USER_NAME,
  password: process.env.USER_PASSWD,
  database: process.env.DB_NAME,
};

const production = {
  dialect: "mssql",
  host: process.env.DB_HOST,
  username: process.env.USER_NAME,
  password: process.env.USER_PASSWD,
  database: process.env.DB_NAME,
};

const test = {
  dialect: "mssql",
  host: process.env.DB_HOST,
  username: process.env.USER_NAME,
  password: process.env.USER_PASSWD,
  database: process.env.DB_NAME,
};

module.exports = { development, production, test };