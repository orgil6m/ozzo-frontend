import React from "react";
import DoughnutChart from "../DoughnutChart";
import { surveyTexts } from "../../pages/survey";
import { backgroundColors } from "../../Datas/feedbacks";
import BarChart from "../BarChart";

const SurveyGeneralTab = ({ surveyData }) => {
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
      {surveyTexts.map((row, index) => (
        <div
          key={index}
          className="flex flex-col mb-12 p-20 bg-gray-50 rounded-xl border "
        >
          <span className="font-bold">
            {index + 1}. {row.label}
          </span>
          {row.options ? (
            <div className="w-full flex justify-center">
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
            </div>
          ) : row.placeholder ? (
            <div className="mt-4">
              {surveyData.map((r, i) => (
                <div key={i} className="ml-6 mt-2">
                  {i + 1}. {r[row.value]}
                </div>
              ))}
            </div>
          ) : row.radio ? (
            <div>
              <BarChart
                data={{
                  labels: [...row.radio],
                  datasets: [
                    {
                      data: [...countData(row, row.radio)],
                      backgroundColor: backgroundColors,
                    },
                  ],
                }}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default SurveyGeneralTab;
