const express = require("express");
const { data } = require("../models");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tests = await data.create({
      text: "tests",
      time: 1234,
    });
    res.status(200).json(tests);
  } catch (err) {
    console.error(err);
  }
});
module.exports = router;
