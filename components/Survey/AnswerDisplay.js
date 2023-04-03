import React, { useState, useEffect } from "react";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
import { backgroundColors } from "../../Datas/feedbacks";

const AnswerDisplay = ({ row, surveyData }) => {
  const [display, setDisplay] = useState(0);
  const inputStyle =
    "transition-all duration-300 ease-in-out my-2 w-full outline-none border border-gray-200 rounded-md py-2 px-2 focus:border-red-300 text-sm placeholder:font-light ";

  const countData = (row, options) => {
    const c = [];
    options.forEach((r, i) => {
      c[i] = 0;
      surveyData.forEach((r1, i1) => {
        if (r1[row.value] === r) {
          c[i]++;
        }
      });
    });

    return c;
  };

  return (
    <div>
      {row.options && (
        <select
          className={inputStyle}
          onChange={(e) => setDisplay(e.target.value)}
        >
          <option value="0">Дугуй график</option>
          <option value="1">Баганан график</option>
          <option value="2">Текст</option>
        </select>
      )}
      {display == "0" && row.options ? (
        <DoughnutChart
          data={{
            labels: [...row.options],
            datasets: [
              {
                data: [...countData(row, row.options)],
                backgroundColor: backgroundColors,
              },
            ],
          }}
        />
      ) : display == "1" && row.options ? (
        <BarChart
          data={{
            labels: [...row.options],
            datasets: [
              {
                data: [...countData(row, row.options)],
                backgroundColor: backgroundColors,
              },
            ],
          }}
        />
      ) : (
        <div className="mt-4">
          {surveyData.map((r, i) => (
            <div key={i} className="ml-6 mt-2">
              {i + 1}. {r[row.value]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnswerDisplay;
