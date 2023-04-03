import React, { useState } from "react";
import { surveyTexts } from "../../pages/survey";
import DoughnutChart from "./DoughnutChart";
import { backgroundColors } from "../../Datas/feedbacks";
import BarChart from "./BarChart";
import AnswerDisplay from "./AnswerDisplay";

const QuestionSurveyTab = ({ surveyData }) => {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(0);
  const inputStyle =
    "transition-all duration-300 ease-in-out my-2 w-full  outline-none border border-gray-200 rounded-md py-2 px-2 focus:border-red-300 text-sm placeholder:font-light ";

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
    <div className="">
      <div className="flex flex-col">
        <div className="flex items-center mb-4 text-lg">
          <span className="mx-2 font-bold">Асуулт :</span>
          <span>{parseInt(index) + 1}</span>
          <span className="mx-2">/</span>
          <span>{parseInt(surveyTexts.length)}</span>
        </div>
        <select
          className="p-2 bg-transparent border rounded-md"
          onChange={(e) => setIndex(e.target.value)}
        >
          {surveyTexts.map((r, i) => (
            <option key={i} value={i}>
              {r.label}
            </option>
          ))}
        </select>
        {surveyTexts[index].options && (
          <select
            className={inputStyle}
            onChange={(e) => setDisplay(e.target.value)}
          >
            <option value="0">Дугуй график</option>
            <option value="1">Баганан график</option>
            <option value="2">Текст</option>
          </select>
        )}
        <div>
          {display == 0 && surveyTexts[index].options ? (
            <div className="w-full flex justify-center">
              <DoughnutChart
                data={{
                  labels: [...surveyTexts[index].options],
                  datasets: [
                    {
                      data: [
                        ...countData(
                          surveyTexts[index],
                          surveyTexts[index].options
                        ),
                      ],
                      backgroundColor: backgroundColors,
                    },
                  ],
                }}
              />
            </div>
          ) : display == 1 && surveyTexts[index].options ? (
            <div>
              <div className="w-full px-20">
                <BarChart
                  data={{
                    labels: [...surveyTexts[index].options],
                    datasets: [
                      {
                        data: [
                          ...countData(
                            surveyTexts[index],
                            surveyTexts[index].options
                          ),
                        ],
                        backgroundColor: backgroundColors,
                      },
                    ],
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="mt-4">
              {surveyData.map((r, i) => (
                <div key={i} className="ml-6 mt-2">
                  {i + 1}. {r[surveyTexts[index].value]}
                </div>
              ))}
            </div>
          )}
          {surveyTexts[index].value2 && (
            <>
              <span className="border-l-4 border-red-500 py-2 px-4 font-bold uppercase  text-lg">
                Санал, шүүмжүүд
              </span>
              <div className="mt-8 flex flex-col">
                {surveyData.map((r, i) => (
                  <div
                    key={i}
                    className="p-4 my-2 border border-gray-100 rounded-md flex gap-5 items-center "
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center uppercase text-blue-500 font-bold"></div>
                    <div className="flex flex-col gap-2">
                      {r[surveyTexts[index].value2]}
                      <span
                        className={`flex text-xs items-center ${
                          parseInt(r[surveyTexts[index].value]) >= 8
                            ? "text-emerald-500"
                            : parseInt(r[surveyTexts[index].value]) >= 4
                            ? " text-amber-500"
                            : "text-red-500"
                        } `}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {r[surveyTexts[index].value]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionSurveyTab;
