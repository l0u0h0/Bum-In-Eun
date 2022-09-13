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
module.exports = router;
