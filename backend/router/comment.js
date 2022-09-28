const express = require("express");
const { comment, data } = require("../models");
const moment = require("moment");

const router = express.Router();

// router.get("/", async (req, res) => {
//   try {
//     const getcomment = await comment.findOne({
//       attribute: ["Text", "No"],
//       where: { Type: "title" },
//     });
//     res.status(200).json(getcomment);
//   } catch (err) {
//     console.error(err);
//   }
// });

// router.get("/:text", async (req, res) => {
//   const dt = moment();
//   const Now = `${dt.format("YYYY-MM-DD HH:mm")}`;
//   try {
//     const addWord = await comment.create({
//       Type: "고구마무스",
//       Text: `${req.params.text}`,
//       Time: Now,
//       No: 0,
//     });
//     console.log(req.params.text);
//     res.status(200).json(addWord);
//   } catch (err) {
//     console.error(err);
//   }
// });

router.get("/GET_COMMENTS/:word", async (req, res) => {
  try {
    const origindata = await data.findAll({
      attributes: ["id", "text"],
      include: [
        {
          model: comment,
          attributes: ["No", "Text"], // select할 컬럼 선택
        },
      ],
      where: {
        text: `${req.params.word}`,
      },
    });
    res.status(200).json(origindata);
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

router.get("/INCR_COUNT/:word", async (req, res) => {
  try {
    await comment.update(
      {
        No: No++,
      },
      {
        where: {
          Text: `${req.params.word}`,
        },
      }
    );
    const data = await data.findAll({
      attributes: ["id", "text"],
      include: [
        {
          model: comment,
          attributes: ["No", "Text"], // select할 컬럼 선택
        },
      ],
      where: {
        text: `${req.params.word}`,
      },
    });
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
  }
});
module.exports = router;
