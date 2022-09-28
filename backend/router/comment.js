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
          order: [
            ["No", "desc"], // 정렬할 컬럼명과 오름차순/내림차순 구분
          ],
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
