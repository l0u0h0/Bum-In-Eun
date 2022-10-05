// import Chartjs
import { Line } from "react-chartjs-2";
// import Type
import { ChartProps } from "../../common/types";

const Chart: React.FC<ChartProps> = ({ datas }) => {
  if (datas === null) {
    return <div>데이터 로딩중,,,</div>;
  } else if (datas.length === 0) {
    return <div>데이터 로딩중,,,</div>;
  }

  const data = {
    datasets: [
      {
        label: "Main Statistic Chart",
        backgroundColor: "rgb(0, 51, 51)",
        borderColor: "rgb(0, 51, 51)",
        data: [
          {
            x: datas[0].text,
            y: datas[0].count,
          },
          {
            x: datas[1].text,
            y: datas[1].count,
          },
          {
            x: datas[2].text,
            y: datas[2].count,
          },
          {
            x: datas[3].text,
            y: datas[3].count,
          },
          {
            x: datas[4].text,
            y: datas[4].count,
          },
        ],
        fill: false,
      },
    ],
  };
  let max_num: number = datas[0].count + 20;
  let min_num: number = datas[4].count - 10;

  const options = {
    responsive: true,
    title: {
      display: true,
      text: "실시간 데이터 그래프",
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

export default Chart;
