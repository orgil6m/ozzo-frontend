import React from "react";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import { Bar } from "react-chartjs-2";

const BarChart = ({ data }) => {
  return (
    <div className="w-full flex justify-center overflow-auto">
      <Bar
        width={20}
        height={20}
        data={data}
        options={{
          maintainAspectRatio: true,
          indexAxis: "x",
          layout: {
            padding: 60,
          },
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
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
