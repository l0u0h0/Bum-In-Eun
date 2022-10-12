// import
const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const db = require("./models");

const app = express();

const mainRouter = require("./router/main");
const crimeRouter = require("./router/crime");
const commentRouter = require("./router/comment");
const listRouter = require("./router/list");
const searchRouter = require("./router/search");
const timeRouter = require("./router/time");

// cors sett
let corsOption = {
  origin:
    process.env.ENV === "development"
      ? "http://localhost:3000"
      : process.env.FRONT_URL,
  credentials: true,
};

app.set("port", process.env.PORT || 3306);

app.use(express.json());
app.use(cors(corsOption));

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.use("/main", mainRouter);
app.use("/crime", crimeRouter);
app.use("/comment", commentRouter);
app.use("/list", listRouter);
app.use("/search", searchRouter);
app.use("/time", timeRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
