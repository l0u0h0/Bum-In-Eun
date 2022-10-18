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
    const check = (text, count) => {
      /**
       * type 0 = 데이터 증가
       * type 1 = 데이터 동률
       * type 2 = 데이터 감소
       */
      let type = "";
      getprevdatas.forEach((e) => {
        if (e.dataValues.text === text) {
          e.dataValues.count > count
            ? (type = "감소")
            : (e.dataValues.count = count
                ? (type = "-")
                : e.dataValues.count < count
                ? (type = "증가")
                : 0);
        } else {
          type = "증가";
        }
      });
      return type;
    };
    const result = getdatas.map((e) => ({
      text: e.text,
      count: e.count,
      state: check(e.text, e.count),
    }));
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
