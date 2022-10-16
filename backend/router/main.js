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

router.get("/GET_DATAS", async (req, res) => {
  try {
    const getdatas = await data.findAll({
      order: [["count", "desc"]],
      limit: 5,
    });
    res.status(200).json(getdatas);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
