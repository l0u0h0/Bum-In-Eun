const express = require("express");
const { time, final_df } = require("../models");
const moment = require("moment");
const { fn, col, Op, literal } = require("sequelize");
const { count } = require("console");

const router = express.Router();

router.param("word", async (req, res, next, value) => {
  const dt = moment();
  const Year = parseInt(dt.format("YY"));
  const Month = parseInt(dt.format("MM"));
  try {
    const getdata = await time.findAll({
      attributes: ["text", "count", "year", "month"],
      order: [["month", "desc"]],
      where: { text: `${value}`, month: { [Op.lte]: Month } },
    });
    req.word = value;
    req.result = getdata;
    next();
  } catch (err) {
    next(err.message);
  }
});

const monthCheck = (time, arr, min) => {
  let timeresult = false;
  arr.map((now) => {
    now.month === time && now.month >= min ? (timeresult = true) : 0;
  });
  console.log(timeresult);
  console.log(time, min);
  return timeresult;
};

router.get("/GET_LIST_DATA/:word", async (req, res) => {
  const dt = moment();
  const Year = parseInt(dt.format("YY"));
  const Month = parseInt(dt.format("MM"));
  const NowMonth = [Month, Month - 1, Month - 2, Month - 3, Month - 4];
  try {
    const check = NowMonth.map((now) => ({
      check: monthCheck(now, req.result, NowMonth[4]),
    }));
    const middle = req.result.map((e, i) => ({
      text: e.text,
      month: NowMonth[i],
      count: check[i].check ? e.count : 0,
    }));
    let result = [5];
    console.log(middle.length);
    console.log(middle[4]);
    if (middle.length < 6) {
      result.map((e, i) => {
        middle[i] !== undefined
          ? middle
          : { text: middle[0].text, month: NowMonth[i], count: 0 };
      });
    } else {
      result.map((e, i) => {
        middle[i];
      });
    }

    res.send(result);
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/GET_DATA1", async (req, res) => {
  try {
    res.send("testing");
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/GET_DATA2", async (req, res) => {
  try {
    res.send("testing");
  } catch (err) {
    console.error(err.message);
  }
});

const getDatas = async (req, res, next) => {
  try {
    const list = await final_df.findAll({
      group: ["tokenized_twitter", "month", "d_year"],
      attributes: [
        "tokenized_twitter",
        [fn("count", "tokenized_twitter"), "count"],
        "month",
        "d_year",
      ],
      order: [["month", "desc"]],
      where: {
        [Op.is]: literal("len(tokenized_twitter) > 1"),
        tokenized_twitter: {
          [Op.in]: [
            "갑통알",
            "갓생",
            "군싹",
            "꾸안꾸",
            "꾸꾸꾸",
            "깔미",
            "ㄴㅇㄱ",
            "너 뭐 돼",
            "닝바닝",
            "다꾸",
            "당모치",
            "돔황챠",
            "먹노매",
            "방방봐",
            "삼귀다",
            "서동요",
            "식집사",
            "스불재",
            "억텐",
            "알잘딱깔센",
            "어사",
            "어쩔티비",
            "웃안웃",
            "완내스",
            "점메추",
            "저메추",
            "좋댓구알",
            "쫌쫌따리",
            "캘박",
            "킹받네",
            "희연사",
            "식집사",
            "깊꾸",
            "신꾸",
            "폴꾸",
            "운앗웃",
            "많관부",
            "저쩔티비",
            "안물티비",
            "어쩔세탁기",
            "저쩔라디오",
          ],
        },
      },
    });
    req.lists = list;
    next();
  } catch (err) {
    next(err.message);
  }
};

router.use(getDatas);

router.get("/", async (req, res) => {
  try {
    const [obj, result] = await req.lists.map((list) => {
      time.upsert(
        {
          type: `${list.tokenized_twitter}_${list.dataValues.d_year}_${list.dataValues.month}`,
          text: list.tokenized_twitter,
          count: list.dataValues.count,
          year: list.dataValues.d_year,
          month: parseInt(list.dataValues.month),
        },
        {
          where: {
            type: `${list.tokenized_twitter}_${list.dataValues.d_year}_${list.dataValues.month}`,
            text: list.tokenized_twitter,
            count: list.dataValues.count,
            year: list.dataValues.d_year,
            month: parseInt(list.dataValues.month),
          },
        }
      );
    });

    res.status(200).send(result);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
