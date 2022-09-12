const express = require("express");
const { Data } = require("../models");

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Main data parsing");
});

module.exports = router;
