const express = require("express");
const { data, crime, comment } = require("../models");

const router = express.Router();

router.param("word", async (req, res, next, value) => {
  try {
    const dict = await data.findAll({
      attributes: ["text", "count"],
      include: [
        {
          model: comment,
          attributes: ["Type", "Text"],
          limit: 2,
        },
      ],
      where: {
        text: `${value}`,
      },
    });
    req.dict = dict;
    req.word = value;
    next();
  } catch (err) {
    next(err.message);
  }
});

router.get("/:word", async (req, res) => {
  try {
    const _ogWord = req.word;
    const crimes = await crime.findOne({
      attributes: ["Type", "Mean"],
      where: {
        Text: `${_ogWord}`,
      },
    });
    const dict = req.dict[0];
    const searchResult = {
      dict: {
        text: dict !== undefined ? _ogWord : "NoData",
        mean:
          dict !== undefined
            ? dict.comments[0] !== undefined
              ? dict.comments.map((data) => data.Text)
              : "NoData"
            : "NoData",
      },
      crime:
        crimes !== null
          ? {
              text: _ogWord,
              mean: crimes.Mean,
              category: crimes.Type,
            }
          : null,
      static: {
        datas: {
          text: dict !== undefined ? dict.text : "NoData",
          count: dict !== undefined ? dict.count : 0,
        },
      },
    };
    res.status(200).send(searchResult);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
