const express = require("express");
const { data, crime, comment } = require("../models");
const moment = require("moment");
const { fn, col, Op, literal } = require("sequelize");

const router = express.Router();

router.param("word", async (req, res, next, value) => {
  try {
    const dict = await data.findAll({
      attributes: ["text", "count"],
      include: [
        {
          model: comment,
          attributes: ["Type", "Text"],
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
    const crimes = await crime.findOne({
      attributes: ["Type", "Mean"],
      where: {
        Text: `${req.word}`,
      },
    });
    const result = {
      dict: req.dict,
      crime: crimes,
    };
    const searchResult = {
      dict: {
        mean: req.dict.comments.map((data) => data.Text),
      },
      crime: {
        mean: crimes.Mean,
        category: crimes.Type,
      },
      static: {
        text: req.dict.text,
        count: req.dict.count,
      },
    };
    res.status(200).send(searchResult);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
