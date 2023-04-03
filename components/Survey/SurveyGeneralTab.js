import React, { useState, useEffect } from "react";
import DoughnutChart from "./DoughnutChart";
import { surveyTexts } from "../../pages/survey";
import { backgroundColors } from "../../Datas/feedbacks";
import BarChart from "./BarChart";
import AnswerDisplay from "./AnswerDisplay";

const SurveyGeneralTab = ({ surveyData }) => {
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
          <AnswerDisplay row={row} surveyData={surveyData} />
        </div>
      ))}
    </div>
  );
};

export default SurveyGeneralTab;
