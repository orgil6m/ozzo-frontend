import React, { useState } from "react";
import { surveyTexts } from "../../pages/survey";

const IndividualSurveyTab = ({ surveyData }) => {
  const [surveyIndex, setSurveyIndex] = useState(0);

  return (
    <div>
      <div className="flex justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={() => {
            setSurveyIndex(
              parseInt(surveyIndex) - parseInt(1) >= 0
                ? parseInt(surveyIndex) - parseInt(1)
                : surveyData.length - 1
            );
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <div className="flex items-center mb-4 text-lg">
          <span className="mx-2 font-bold">Суралцагч:</span>
          <span>{surveyData[surveyIndex].name} </span>
        </div>
        <div className="">
          <span>{parseInt(surveyIndex) + 1}</span>
          <span className="mx-2">/</span>
          <span>{parseInt(surveyData.length)}</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={() =>
            setSurveyIndex(
              parseInt(surveyIndex) + parseInt(1) < surveyData.length
                ? parseInt(surveyIndex) + parseInt(1)
                : 0
            )
          }
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <div className="my-20 flex flex-col gap-5">
        {surveyTexts.map((row, index) => (
          <div
            key={index}
            className="p-8 flex flex-col bg-gray-50 border rounded-md"
          >
            <span className="font-bold">
              {index + 1}. {row.label}
            </span>
            <span className="mt-2 ml-6">
              {row.options ? (
                row.options.map((r, i) => (
                  <div key={i} className="py-2 flex items-center gap-2">
                    <div
                      className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                        surveyData[surveyIndex][row.value] === r
                          ? " border-red-500"
                          : ""
                      }`}
                    >
                      {surveyData[surveyIndex][row.value] === r && (
                        <div
                          className={`w-2 h-2 rounded-full ${
                            surveyData[surveyIndex][row.value] === r
                              ? "bg-red-500 "
                              : ""
                          }`}
                        />
                      )}
                    </div>
                    {r}
                  </div>
                ))
              ) : row.radio ? (
                row.radio.map((r, i) => (
                  <div key={i} className="py-2 flex items-center gap-2">
                    <div
                      className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                        surveyData[surveyIndex][row.value] === r
                          ? " border-red-500"
                          : ""
                      }`}
                    >
                      {surveyData[surveyIndex][row.value] === r && (
                        <div
                          className={`w-2 h-2 rounded-full ${
                            surveyData[surveyIndex][row.value] === r
                              ? "bg-red-500 "
                              : ""
                          }`}
                        />
                      )}
                    </div>
                    {r}
                  </div>
                ))
              ) : (
                <>{surveyData[surveyIndex][row.value]}</>
              )}
            </span>
            {surveyData[surveyIndex][row.value2] && (
              <div className="mt-4 ml-6 flex flex-col">
                <span className="italic text-blue-500">Санал шүүмж :</span>
                <span className="mt-2">
                  {surveyData[surveyIndex][row.value2]}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndividualSurveyTab;
