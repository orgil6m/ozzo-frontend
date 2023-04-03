import React from "react";
import { Chart, ArcElement, Title, Legend, Tooltip } from "chart.js";
Chart.register(ArcElement, Title, Legend, Tooltip, ChartDataLabels);
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

const DoughnutChart = ({ data }) => {
  return (
    <div className="w-2/3 flex justify-center">
      <Doughnut
        width={100}
        height={50}
        data={data}
        options={{
          plugins: {
            datalabels: {
              display: true,
              formatter: (value, ctx) => {
                if (value > 0) {
                  let datasets = ctx.chart.data.datasets;
                  if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
                    let sum = datasets[0].data.reduce((a, b) => a + b, 0);
                    let percentage = Math.round((value / sum) * 100) + "%";
                    return percentage;
                  } else {
                    return percentage;
                  }
                } else {
                  value = "";
                  return value;
                }
              },
              color: "#fff",
            },
            legend: {
              position: "right",
              display: true,
              align: "center",
              labels: {
                generateLabels: (chart) => {
                  const datasets = chart.data.datasets;
                  return datasets[0].data.map((data, i) => ({
                    text: `${chart.data.labels[i]} : ${data}`,
                    fillStyle: datasets[0].backgroundColor[i],
                    strokeStyle: datasets[0].backgroundColor[i],
                    index: i,
                  }));
                },
                padding: 20,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default DoughnutChart;
