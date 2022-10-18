const express = require("express");
const { data, time } = require("../models");
const moment = require("moment");
const { Op } = require("sequelize");

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

router.get("/GET_NOW_DATAS", async (req, res) => {
  const dt = moment();
  const Now = `${dt.format("MM")}`;
  try {
    const getdatas = await time.findAll({
      order: [["count", "desc"]],
      limit: 5,
      where: {
        month: Now,
      },
    });
    const keyword = getdatas.map((e) => e.dataValues.text);
    console.log(keyword);
    const getprevdatas = await time.findAll({
      order: [["count", "desc"]],
      limit: 5,
      where: {
        month: Now - 1,
        text: {
          [Op.in]: keyword,
        },
      },
    });
    getprevdatas.forEach((e) => {
      console.log(e.dataValues);
    });
    res.status(200).json(getdatas);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
