import { Line } from "react-chartjs-2";
import { Datatype } from "../../common/types";

interface ChartProps {
  datas: Datatype[] | null;
}
const Chart: React.FC<ChartProps> = ({ datas }) => {
  if (datas === null) {
    return <div>데이터 로딩중,,,</div>;
  }
  const data = {
    datasets: [
      {
        label: "Test Statistic Chart",
        backgroundColor: "rgb(0, 51, 51)",
        borderColor: "rgb(0, 51, 51)",
        data: [
          {
            x: datas[0].text,
            y: 15,
          },
          {
            x: datas[1].text,
            y: 23,
          },
          {
            x: datas[2].text,
            y: 11,
          },
          {
            x: datas[3].text,
            y: 4,
          },
          {
            x: datas[4].text,
            y: 32,
          },
        ],
      },
    ],
  };

  const options = {
    responsive: true,
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
        min: 0,
        max: 50,
      },
    },
  };

  return <Line options={options} data={data} />;
};

export default Chart;
