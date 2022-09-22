import { Line } from "react-chartjs-2";

const data = {
  datasets: [
    {
      label: "Test Statistic Chart",
      backgroundColor: "rgb(0, 0, 0)",
      borderColor: "rgb(0, 51, 51)",
      data: [
        {
          x: "킹받네",
          y: 15,
        },
        {
          x: "킹받네2",
          y: 23,
        },
        {
          x: "킹받네3",
          y: 11,
        },
        {
          x: "킹받네4",
          y: 4,
        },
        {
          x: "킹받네5",
          y: 32,
        },
      ],
    },
  ],
};

const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  scales: {
    y: {
      min: 0,
      max: 50,
    },
  },
};

const Chart = () => {
  return <Line options={options} data={data} />;
};

export default Chart;
