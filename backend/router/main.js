const express = require("express");
const { data } = require("../models");
const moment = require("moment");

const router = express.Router();

router.get("/", async (req, res) => {
  const dt = moment();
  const Now = `${dt.format("YYYY-MM-DD HH:mm")}`;
  try {
    const tests = await data.create({
      text: "tests",
      time: Now,
    });
    res.status(200).json(tests);
  } catch (err) {
    console.error(err);
  }
});

router.param("text", async (req, res, next, value) => {
  // 없는 유저에 대한 요청이 왔을 때 에러가 날 수 있음.
  try {
    // @ts-ignore

    if (!value) {
      const err = new Error("User Not Found");
      err.statusCode = 404;
      throw err;
    }
    next();
  } catch (err) {
    next(err);
  }
});

// router.get("/:text", async (req, res) => {
//   const dt = moment();
//   const Now = `${dt.format("YYYY-MM-DD HH:mm")}`;
//   try {
//     const tests = await data.create({
//       text: `${req.params.text}`,
//       time: Now,
//     });
//     console.log(req.params.text);
//     res.status(200).json(tests);
//   } catch (err) {
//     console.error(err);
//   }
// });

router.get("/GET_DATAS", async (req, res) => {
  try {
    const getdatas = await data.findAll();
    res.status(200).json(getdatas);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
