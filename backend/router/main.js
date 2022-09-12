const express = require("express");
const { Data } = require("../models");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tests = await Data.create({
      Data: "test",
      Time: 1,
    });
    console.log(tests);
    res.status(200).json(tests);
  } catch (err) {
    console.error(err);
  }
  res.send("tests create");
});

module.exports = router;
