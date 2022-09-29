// import
const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const db = require("./models");

const app = express();

const mainRouter = require("./router/main");
const testRouter = require("./router/test");
const commentRouter = require("./router/comment");
const listRouter = require("./router/list");

// cors sett
let corsOption = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.set("port", process.env.PORT || 3306);

app.use(express.json());
app.use(cors(corsOption));

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
    console.log(db["data"]);
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.use("/main", mainRouter);
app.use("/test", testRouter);
app.use("/comment", commentRouter);
app.use("/list", listRouter);
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
