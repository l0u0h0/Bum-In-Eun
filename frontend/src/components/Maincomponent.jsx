// import
import React, { useState, useEffect } from "react";
import Banner from "./common/BannerComponent";
import Header from "./common/HeaderComponent";
// ex_newsimg
import newsimg_1 from "../image/img_1.png";
import newsimg_2 from "../image/img_2.png";
import newsimg_3 from "../image/img_3.png";
import newsimg_4 from "../image/img_4.png";
// ex_staticimg
import staticimg from "../image/img_6.png";
// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper";
import "swiper/css";
// Router import
import { Link, useNavigate } from "react-router-dom";

// axios import
// import axios from "axios";

// MAIN AREA
export default function MainComponent() {
  return (
    <div className="App-main">
      <Header />
      <div className="body">
        <Body1 />
      </div>
      <div className="body">
        {/* <Body2 /> */}
        <Body2Example />
      </div>
      <Banner />
    </div>
  );
}

// TAB AREA
function Body1() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="main-body-first">
      <hr />
      <h2>Today's</h2>
      <div className="swiper-area">
        <Swiper
          className="tab-title"
          slidesPerView={3}
          onSwiper={setThumbsSwiper}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Thumbs]}
        >
          <SwiperSlide>
            <div className="title">실시간</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title">단어별</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title">통계</div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          className="tab-contents"
          slidesPerView={1}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
        >
          <SwiperSlide>
            <Tab1 />
          </SwiperSlide>
          <SwiperSlide>
            <Tab2 />
          </SwiperSlide>
          <SwiperSlide>
            <Tab3 />
          </SwiperSlide>
        </Swiper>
      </div>

      <hr />
    </div>
  );
}

// TAB FRAGMENT
function Tab1() {
  const list = [1, 2, 3, 4, 5];
  return (
    <div key="main_Tab1" className="contents">
      <div className="table-area-first">
        <table>
          <tbody>
            {list.map((num) => (
              <tr key={`table_row_${num}`}>
                <th className="data-rank">{num}.</th>
                <td className="data-word">킹받네</td>
                <td className="data-state">-</td>
                <td className="data-num">120,862</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="update-time">
        <p>2022-01-01 12:00 기준</p>
      </div>
    </div>
  );
}

function Tab2() {
  let navigate = useNavigate();
  const list = [1, 2, 3, 4, 5];
  function LinkClick() {
    navigate("/dictionary");
  }
  return (
    <div key="main_Tab2" className="contents">
      <div className="table-area-second">
        <table>
          <tbody>
            {list.map((num) => (
              <tr key={`table_row_${num}`}>
                <th className="data-rank">{num}.</th>
                <td className="data-word">킹받네</td>
                <td className="data-state">-</td>
                <td className="data-num">120,862</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="link-area">
        <button className="btn btn--link" onClick={LinkClick}>
          더 많은 정보 확인
        </button>
      </div>
    </div>
  );
}

function Tab3() {
  return (
    <div key="main_Tab3" className="contents">
      <div className="static-data-area">
        <img src={staticimg} alt="staticimg" className="static-img" />
      </div>
      <div className="link-area">
        <button className="btn btn--link">더 많은 정보 확인</button>
      </div>
    </div>
  );
}

// NEWS API
// function Body2() {
//   const [newslist, setNewslist] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const options = {
//       method: "GET",
//       url: "https://api.newscatcherapi.com/v2/search",
//       params: {
//         q: "전기차",
//         lang: "ko",
//         sort_by: "relevancy",
//         page: "1",
//       },
//       headers: {
//         "x-api-key": "xfvkgp-Pa2JHG3SBqzOqpNdyjsG0Ofa6rkYJz-0ELVU",
//       },
//     };
//     const newsApi = async () => {
//       setLoading(true);
//       try {
//         const result = await axios.request(options);
//         console.log(result);
//         setNewslist(result.data.articles);
//       } catch (error) {
//         console.log(error);
//       }
//       setLoading(false);
//     };
//     newsApi();
//   }, []);
//   if (loading) {
//     return <div>로딩중입니다</div>;
//   }
//   if (!newslist) {
//     return null;
//   }
//   return (
//     <div className="main-body-second">
//       <h2>범죄 관련 뉴스</h2>
//       <div className="news-area">
//         {newslist.map((news) => (
//           <News key={news._id} news={news} />
//         ))}
//       </div>
//     </div>
//   );
// }

// const News = ({ news }) => {
//   const { title, excerpt, link, media } = news;
//   return (
//     <>
//       {media && (
//         <>
//           <div>
//             <h2>
//               <a href={link} target="_blank" rel="nooper noreferrer">
//                 {title}
//               </a>
//             </h2>
//             <p>{excerpt}</p>
//           </div>

//           <div>
//             <a href={link} target="_blank" rel="noopener noreferrer">
//               <img src={media} alt="news_thumnail" />
//             </a>
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// api 라이센스 문제로 이미지로 잠시 대체
function Body2Example() {
  const [examplelist, setExamplelist] = useState([]);
  useEffect(() => {
    const result = [
      {
        img: newsimg_1,
        _id: "newsimg_1",
        alt: "ex_img_1",
      },
      {
        img: newsimg_2,
        _id: "newsimg_2",
        alt: "ex_img_2",
      },
      {
        img: newsimg_3,
        _id: "newsimg_3",
        alt: "ex_img_3",
      },
      {
        img: newsimg_4,
        _id: "newsimg_4",
        alt: "ex_img_4",
      },
    ];
    setExamplelist(result);
  }, []);

  return (
    <div className="main-body-second">
      <h2>범죄 관련 뉴스</h2>
      <div className="news-area">
        {examplelist.map((img) => (
          <Example key={img._id} list={img} />
        ))}
      </div>
      <Link to="/crime">
        <button className="btn btn--link">범죄 관련 은어 확인</button>
      </Link>
    </div>
  );
}

const Example = ({ list }) => {
  const { img, alt } = list;
  return (
    <div>
      <img src={img} alt={alt} />
    </div>
  );
};
