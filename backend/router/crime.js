const express = require("express");
const { crime } = require("../models");
// const moment = require("moment");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tests = await crime.findAll({
      where: { Type: "title" },
    });
    res.status(200).json(tests);
  } catch (err) {
    console.error(err);
  }
});

router.get("/GET_DATA", async (req, res) => {
  try {
    const getdatas = await crime.findOne({
      where: { Type: "title" },
    });
    res.status(200).json(getdatas);
  } catch (err) {
    console.error(err);
  }
});

router.get("/GET_DATAS/:type", async (req, res) => {
  try {
    const getdatas = await crime.findAll({
      where: { Type: `${req.params.type}` },
    });
    res.status(200).json(getdatas);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;

/** Crime Example Dataset */
// const example = [
//   {
//     Type: "drug",
//     Text: "4949",
//     Mean: "검거되었음을 문자로 알릴 때 사용",
//   },
//   {
//     Type: "drug",
//     Text: "GHB",
//     Mean: "물이나 음료에 타서 마시는 무색무취의 액체, 성범죄에 악용",
//   },
//   {
//     Type: "drug",
//     Text: "공동장",
//     Mean: "여러 콜센터에서 같이 사용하는 대포 통장",
//   },
//   {
//     Type: "drug",
//     Text: "가루",
//     Mean: "마약",
//   },
//   {
//     Type: "drug",
//     Text: "가루쟁이",
//     Mean: "필로폰 밀매 취급자",
//   },
//   {
//     Type: "drug",
//     Text: "가스리",
//     Mean: "이문, 마진",
//   },
//   {
//     Type: "drug",
//     Text: "개아리",
//     Mean: "검거현장에서 완강히 저항하다.",
//   },
//   {
//     Type: "drug",
//     Text: "개살구",
//     Mean: "가짜 마약",
//   },
//   {
//     Type: "drug",
//     Text: "고기",
//     Mean: "대마초",
//   },
//   {
//     Type: "drug",
//     Text: "곰",
//     Mean: "경찰",
//   },
//   {
//     Type: "drug",
//     Text: "깍두기",
//     Mean: "조직폭력배",
//   },
//   {
//     Type: "drug",
//     Text: "교수",
//     Mean: "마약제조 기술자",
//   },
//   {
//     Type: "gambling",
//     Text: "꼬장",
//     Mean: "노름방을 개설하는 개장주",
//   },
//   {
//     Type: "gambling",
//     Text: "분주꾼",
//     Mean: "노름방에서 돈놀이를 하는 사람",
//   },
//   {
//     Type: "gambling",
//     Text: "대모",
//     Mean: "꾼을 불러들이고 데라도 뜯으며 판을 벌이는 사람",
//   },
//   {
//     Type: "gambling",
//     Text: "데라",
//     Mean: "도박 개장 비",
//   },
//   {
//     Type: "gambling",
//     Text: "콧구멍",
//     Mean: "확실하지 않으면 게임에 참여하지 않는 사람",
//   },
//   {
//     Type: "gambling",
//     Text: "샤킹",
//     Mean: "공갈배팅 유도를 위해 안좋은 패인 척 하는 행위",
//   },
//   {
//     Type: "gambling",
//     Text: "설계사",
//     Mean: "구라를 꾸미는 사람",
//   },
//   {
//     Type: "gambling",
//     Text: "컴일",
//     Mean: "천장에 카메라를 달아놓고 기계를 통해 카드 내용을 불러주는 행위",
//   },
//   {
//     Type: "gambling",
//     Text: "된장",
//     Mean: "도박 초보자를 의미",
//   },
//   {
//     Type: "gambling",
//     Text: "호구",
//     Mean: "돈 많고 어리석은 사람",
//   },
//   {
//     Type: "gambling",
//     Text: "구선생",
//     Mean: "'호구'의 다른 말로 호구의 면전에서 비아냥거릴 때 사용하는 말",
//   },
//   {
//     Type: "gambling",
//     Text: "꽁짓돈",
//     Mean: "도박판에서 빌려주는 고리대금",
//   },
//   {
//     Type: "gendercrime",
//     Text: "골뱅이",
//     Mean: "심신미약 여성 강간",
//   },
//   {
//     Type: "gendercrime",
//     Text: "고등어",
//     Mean: "미성년자",
//   },
//   {
//     Type: "gendercrime",
//     Text: "조건",
//     Mean: "성매매, 성착취",
//   },
//   {
//     Type: "gendercrime",
//     Text: "최음제",
//     Mean: "마약, 강간 약물",
//   },
//   {
//     Type: "gendercrime",
//     Text: "간단",
//     Mean: "유사 성행위",
//   },
//   {
//     Type: "gendercrime",
//     Text: "완장",
//     Mean: "성 착취물 공유방 운영진",
//   },
//   {
//     Type: "gendercrime",
//     Text: "수양딸",
//     Mean: "성적 파트너",
//   },
//   {
//     Type: "gendercrime",
//     Text: "업스",
//     Mean: "치마 밑에서 사진을 찍는 행위",
//   },
//   {
//     Type: "gendercrime",
//     Text: "우동",
//     Mean: "VR로 제작된 성인 컨텐츠",
//   },
//   {
//     Type: "voicefishing",
//     Text: "독장",
//     Mean: "사용이력이 없는 계좌",
//   },
//   {
//     Type: "voicefishing",
//     Text: "공장",
//     Mean: "피해금액 인출 뒤 신고되지 않아 재사용 준비 중인 계좌",
//   },
//   {
//     Type: "voicefishing",
//     Text: "공동장",
//     Mean: "여러 콜센터에서 같이 사용하는 대포 통장",
//   },
//   {
//     Type: "voicefishing",
//     Text: "세차장",
//     Mean: "입,출금 등 테스트가 완료된 범행 계좌",
//   },
//   {
//     Type: "voicefishing",
//     Text: "의뢰장",
//     Mean: "인출 전용 계좌",
//   },
//   {
//     Type: "voicefishing",
//     Text: "출금장",
//     Mean: "입,출금은 가능하나 이체가 불가능한 계좌",
//   },
//   {
//     Type: "voicefishing",
//     Text: "달러장",
//     Mean: "달러 이체 가능한 계좌",
//   },
//   {
//     Type: "voicefishing",
//     Text: "앞장",
//     Mean: "피해금을 받는 계좌",
//   },
//   {
//     Type: "voicefishing",
//     Text: "임뱅장",
//     Mean: "인터넷뱅킹 가능 계좌",
//   },
//   {
//     Type: "voicefishing",
//     Text: "뒷장",
//     Mean: "범행계좌로 장기적 사용 가능한 계좌",
//   },
//   {
//     Type: "voicefishing",
//     Text: "공상",
//     Mean: "중국 공상계좌",
//   },
//   {
//     Type: "voicefishing",
//     Text: "통카오",
//     Mean: "통장 체크카드 또는 OTP카드",
//   },
// ];

// router.get("/ADD", async (req, res) => {
//   const dt = moment();
//   const Now = `${dt.format("YYYY-MM-DD HH:mm")}`;
//   try {
//     example.map((list) => {
//       crime.create({
//         Text: list.Text,
//         Time: Now,
//         Type: list.Type,
//         Mean: list.Mean,
//       });
//     });
//     res.status(200).send("complete");
//   } catch (err) {
//     console.error(err);
//   }
// });
