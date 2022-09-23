// import
import React, { useState, useEffect } from "react";
import moment from "moment";
import Banner from "../common/BannerComponent";
import Header from "../common/HeaderComponent";
// img import
// import static_img from "../image/img_6.png";
// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Thumbs } from "swiper";
import "swiper/css";
// Router import
import { Link, useNavigate } from "react-router-dom";

// axios import
import axios from "axios";
import { Datatype } from "../common/types";

// Chart import
import Chart from "./chartCompo/ChartComponent";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

interface Mainprops {
  datas: Datatype[] | null;
  loading: boolean;
  error: Error | null;
  getDatas: () => void;
}

// Main Area
const MainComponent: React.FC<Mainprops> = ({
  datas,
  loading,
  error,
  getDatas,
}) => {
  useEffect(() => {
    getDatas();
  }, [getDatas]);
  return (
    <div className="App-main">
      <Header />
      <div className="body">
        <Body1
          datas={datas}
          loading={loading}
          error={error}
          getDatas={getDatas}
        />
      </div>
      <div className="body">
        <Body2 />
        {/* <Body2Example /> */}
      </div>
      <Banner />
    </div>
  );
};

// Tab Area
const Body1: React.FC<Mainprops> = ({ datas, loading, error, getDatas }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
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
            <Tab1
              datas={datas}
              loading={loading}
              error={error}
              getDatas={getDatas}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Tab2
              datas={datas}
              loading={loading}
              error={error}
              getDatas={getDatas}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Tab3 datas={datas} />
          </SwiperSlide>
        </Swiper>
      </div>
      <hr />
    </div>
  );
};

// Tab Fragment
const Tab1: React.FC<Mainprops> = ({ datas, loading, error, getDatas }) => {
  // const list = [1, 2, 3, 4, 5];
  const [now, setNow] = useState("");
  useEffect(() => {
    const dt = moment();
    setNow(
      `${dt.format("YYYY")}년 ${dt.format("MM")}월 ${dt.format(
        "DD"
      )}일 ${dt.format("HH")}시 기준`
    );
    getDatas();
  }, [now, getDatas]);
  if (datas === null) {
    return <div>데이터 로딩중,,,</div>;
  } else {
    if (datas.length > 5) return <div>데이터 로딩중,,,</div>;
  }
  return (
    <div key="main_Tab1" className="contents">
      <div className="table-area-first">
        <table>
          <tbody>
            {/* {list.map((num) => (
              <tr key={`table_row_${num}`}>
                <th className="data-rank">{num}.</th>
                <td className="data-word">
                  {datas !== null ? datas[3].Text : "null"}
                </td>
                <td className="data-state">-</td>
                <td className="data-num">120,862</td>
              </tr>
            ))} */}
            {datas ? (
              datas.map((data: Datatype) => (
                <tr key={`table_row_${data.id}`}>
                  <th className="data-rank">{data.id}.</th>
                  <td className="data-word">{data.text}</td>
                  <td className="data-state">-</td>
                  <td className="data-num">120,862</td>
                </tr>
              ))
            ) : (
              <div>Null...</div>
            )}
          </tbody>
        </table>
      </div>
      <div className="update-time">
        <p>{now}</p>
      </div>
    </div>
  );
};

const Tab2: React.FC<Mainprops> = ({ datas, loading, error, getDatas }) => {
  let navigate = useNavigate();
  // const list = [1, 2, 3, 4, 5];
  function LinkClick() {
    navigate("/dictionary");
  }
  useEffect(() => {
    getDatas();
  }, [getDatas]);
  if (datas === null) {
    return <div>데이터 로딩중,,,</div>;
  } else {
    if (datas.length > 5) return <div>데이터 로딩중,,,</div>;
  }
  return (
    <div key="main_Tab2" className="contents">
      <div className="table-area-second">
        <table>
          <tbody>
            {/* {list.map((num) => (
              <tr key={`table_row_${num}`}>
                <th className="data-rank">{num}.</th>
                <td className="data-word">킹받네</td>
                <td className="data-state">-</td>
                <td className="data-num">120,862</td>
              </tr>
            ))} */}
            {datas !== null ? (
              datas.map((data: Datatype) => (
                <tr key={`table_row_${data.id}`}>
                  <th className="data-rank">{data.id}.</th>
                  <td className="data-word">{data.text}</td>
                  <td className="data-state">-</td>
                  <td className="data-num">120,862</td>
                </tr>
              ))
            ) : (
              <div>Null...</div>
            )}
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
};

function Tab3({ datas }) {
  let navigate = useNavigate();
  function LinkClick() {
    navigate("/statistic");
  }
  return (
    <div key="main_Tab3" className="contents">
      <div className="static-data-area" id="static-data-area">
        {/* <img src={static_img} alt="staticimg" className="static-img" /> */}
        <Chart datas={datas} />
      </div>
      <div className="link-area">
        <button className="btn btn--link" onClick={LinkClick}>
          더 많은 정보 확인
        </button>
      </div>
    </div>
  );
}

// NEWS API
function Body2() {
  const [newslist, setNewslist] = useState([{ _id: "" }]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.newscatcherapi.com/v2/search",
      params: {
        q: "범죄",
        lang: "ko",
        sort_by: "relevancy",
        page: "1",
        page_size: "4",
      },
      headers: {
        "x-api-key": "CiOSrlmjIYfW-7KivPgTc6j0DDOn9WcLZBZNwayT1TI",
      },
    };
    const newsApi = async () => {
      setLoading(true);
      try {
        const result = await axios.request(options);
        setNewslist(result.data.articles);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    newsApi();
  }, []);
  if (loading) {
    return <div>로딩중입니다</div>;
  }
  if (!newslist) {
    return null;
  }
  return (
    <div className="main-body-second">
      <h2>범죄 관련 뉴스</h2>
      <div className="news-area">
        {newslist.map((news) => (
          <News key={news._id} news={news} />
        ))}
      </div>
      <Link to="/crime">
        <button className="btn btn--link">범죄 관련 은어 확인</button>
      </Link>
    </div>
  );
}

const News = ({ news }) => {
  const { title, excerpt, link, media } = news;
  return (
    <>
      {media && (
        <div className="news-row">
          <div className="news_script">
            <h2>
              <a href={link} target="_blank" rel="nooper noreferrer">
                {title}
              </a>
            </h2>
            <p>
              <a href={link} target="_blank" rel="nooper noreferrer">
                {excerpt}
              </a>
            </p>
          </div>

          <div className="news_image">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img src={media} alt="news_thumnail" />
            </a>
          </div>
        </div>
      )}
      <hr />
    </>
  );
};

// api 라이센스 문제로 이미지로 잠시 대체
// function Body2Example() {
//   const [examplelist, setExamplelist] = useState([]);
//   useEffect(() => {
//     const result = [
//       {
//         img: newsimg_1,
//         _id: "newsimg_1",
//         alt: "ex_img_1",
//       },
//       {
//         img: newsimg_2,
//         _id: "newsimg_2",
//         alt: "ex_img_2",
//       },
//       {
//         img: newsimg_3,
//         _id: "newsimg_3",
//         alt: "ex_img_3",
//       },
//       {
//         img: newsimg_4,
//         _id: "newsimg_4",
//         alt: "ex_img_4",
//       },
//     ];
//     setExamplelist(result);
//   }, []);

//   return (
//     <div className="main-body-second">
//       <h2>범죄 관련 뉴스</h2>
//       <div className="news-area">
//         {examplelist.map((img) => (
//           <Example key={img._id} list={img} />
//         ))}
//       </div>
//       <Link to="/crime">
//         <button className="btn btn--link">범죄 관련 은어 확인</button>
//       </Link>
//     </div>
//   );
// }

// const Example = ({ list }) => {
//   const { img, alt } = list;
//   return (
//     <div>
//       <img src={img} alt={alt} />
//     </div>
//   );
// };

export default MainComponent;
