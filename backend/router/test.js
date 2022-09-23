const express = require("express");
const { test } = require("../models");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tests = await test.findAll({
      where: { Type: "title" },
    });
    res.status(200).json(tests);
  } catch (err) {
    console.error(err);
  }
});

router.get("/GET_DATA", async (req, res) => {
  try {
    const getdatas = await test.findOne({
      where: { Type: "title" },
    });
    res.status(200).json(getdatas);
  } catch (err) {
    console.error(err);
  }
});

router.get("/GET_DATAS", async (req, res) => {
  try {
    const getdatas = await test.findAll({
      limit: 10,
      where: { Type: "title" },
    });
    res.status(200).json(getdatas);
  } catch (err) {
    console.error(err);
  }
});
module.exports = router;
