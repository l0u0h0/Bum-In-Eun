const express = require("express");
const path = require("path");
const morgan = require("morgan");
const db = require("./models");
// const { sequelize } = require("./models");

const app = express();
const mainRouter = require("./router/main");

app.set("port", process.env.PORT || 3306);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
    console.log(db["data"]);
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/main", mainRouter);

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
