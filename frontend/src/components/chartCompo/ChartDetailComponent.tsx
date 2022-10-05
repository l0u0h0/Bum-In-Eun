import { Line } from "react-chartjs-2";
import { ChartDetailProps } from "../../common/types";

const ChartDetail: React.FC<ChartDetailProps> = ({ datas }) => {
  if (datas === null) {
    return <div>데이터 로딩중,,,</div>;
  }
  console.log(datas);
  const data = {
    datasets: [
      {
        label: "Test Statistic Chart",
        backgroundColor: "rgb(0, 51, 51)",
        borderColor: "rgb(0, 51, 51)",
        data: [
          {
            x: `${datas[0].month}월`,
            y: datas[0].count,
          },
          {
            x: `${datas[1].month}월`,
            y: datas[1].count,
          },
          {
            x: `${datas[2].month}월`,
            y: datas[2].count,
          },
          {
            x: `${datas[3].month}월`,
            y: datas[3].count,
          },
          {
            x: `${datas[4].month}월`,
            y: datas[4].count,
          },
        ],
        fill: false,
      },
    ],
  };

  let max_num: number = datas[0].count;
  let min_num: number = datas[0].count;
  datas.forEach((data) => {
    if (max_num <= data.count) {
      console.log(max_num);
      max_num = data.count;
    } else if (min_num >= data.count) {
      console.log(min_num);
      min_num = data.count;
    }
  });
  max_num = max_num + max_num / 10;
  min_num = min_num - min_num / 10;

  console.log(max_num, min_num);

  const options = {
    responsive: true,
    title: {
      display: true,
      text: "실시간 데이터 그래프 TEST.ver",
    },
    tooltips: {
      mode: "point" as const,
      intersect: true,
    },
    hover: {
      mode: "point" as const,
      intersect: true,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: min_num < 0 ? 0 : min_num,
        max: max_num,
      },
    },
  };

  return <Line options={options} data={data} />;
};

export default ChartDetail;
