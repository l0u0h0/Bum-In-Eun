const express = require("express");
const { comment } = require("../models");
const moment = require("moment");

const router = express.Router();

router.get("/GET_COMMENTS/:word", async (req, res) => {
  try {
    const getcomment = await comment.findAll({
      attributes: ["Type", "Text", "No"],
      order: [["No", "desc"]],
      where: { Type: `${req.params.word}` },
    });
    res.status(200).json(getcomment);
  } catch (err) {
    console.error(err);
  }
});

router.post("/ADD_COMMENT", async (req, res) => {
  const dt = moment();
  const Now = `${dt.format("YYYY-MM-DD HH:mm")}`;
  try {
    const addComment = await comment.create({
      Type: `${req.body.text}`,
      Text: `${req.body.comment}`,
      Time: Now,
      No: 0,
    });
    res.status(200).json(addComment);
  } catch (err) {
    console.error(err);
  }
});

router.post("/INCR_COUNT", async (req, res) => {
  try {
    const increase = await comment.update(
      {
        No: req.body.count + 1,
      },
      {
        where: {
          Type: `${req.body.type}`,
          Text: `${req.body.text}`,
        },
      }
    );
    res.status(200).json(increase);
  } catch (err) {
    console.error(err);
  }
});
module.exports = router;
