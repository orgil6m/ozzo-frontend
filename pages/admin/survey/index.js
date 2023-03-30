/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import { NavbarLocale } from "../../../locales/Navbar";
import { DataContext } from "../../../store/GlobalState";
import Loading from "../../../components/Loading";
import moment from "moment";
import "moment/locale/mn";
import { getFeedBacks } from "../../../Datas/feedbacks";
import SurveyGeneralTab from "../../../components/Survey/SurveyGeneralTab";
import QuestionSurveyTab from "../../../components/Survey/QuestionSurveyTab";
import IndividualSurveyTab from "../../../components/Survey/IndividualSurveyTab";
moment.locale("mn");

const AdminSurvey = () => {
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;
  const router = useRouter();
  const l = router.locale === "en" ? "1" : router.locale === "cn" ? "2" : "0";
  const t = NavbarLocale[l];
  const [tab, setTab] = useState(0);
  const [surveyData, setSurveyData] = useState([]);
  const tabs = ["Ерөнхий", "Асуултаар", "Хүн хүнээр"];
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    if (!user) return router.push("/login");
    getFeedBacks().then((res) => {
      setSurveyData(res);
    });
  }, []);

  if (!auth.user || auth.user === undefined) {
    return <Loading />;
  }

  if (auth.user.admin !== true) {
    return (
      <div className="fixed inset-0 flex justify-center items-center flex-col">
        <p className="">Танд Админ хэсэгт нэвтрэх эрх байхгүй байна!</p>
        <button
          className="transition-all duration-300 ease-in-out m-5 pr-8 pl-4 py-2 bg-sky-100 rounded-md text-sky-500 hover:bg-sky-500 hover:text-white flex items-center"
          type="button"
          onClick={() => router.push("/profile")}
        >
          <svg
            className="h-4 w-4 mx-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
            />
          </svg>
          Буцах
        </button>
      </div>
    );
  }

  return (
    <div className="pt-20 cursor-default">
      <Head>
        <title> Судалгаа | {t.ozzo}</title>
      </Head>
      <div className="w-full lg:px-32 md:px-20 lg:py-10 p-5">
        <div className="lg:mb-10 mb-5 flex cursor-default">
          <p
            className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black"
            onClick={() => router.push("/admin")}
          >
            Админ
          </p>
          <p className="text-sm text-black/50 pr-2 "> / </p>
          <p className="transition-all duration-300 ease-in-out text-sm text-black">
            Судалгаа
          </p>
        </div>
        <div className="w-full flex justify-center">
          <div className="2xl:w-1/2 md:w-2/3">
            <div className="w-full mb-12 flex flex-col">
              <span className="font-bold text-2xl uppercase text-center flex flex-col items-center mb-8 text-gray-800">
                Суралцагчийн сэтгэл ханамжийн судалгаа
                <div className="w-20 h-1 bg-red-500 mt-2"></div>
              </span>
              <span className="text-lg flex items-center justify-end">
                Cудалгаа бөглөсөн :
                <span className="text-red-500 font-bold ml-2 px-2 py-1 bg-red-500/10 rounded">
                  {surveyData.length}
                </span>
              </span>
            </div>
            <div className="h-10 w-full bg-gray-50 border mb-12 rounded-full flex items-center relative ">
              {tabs.map((row, index) => (
                <div
                  className={`transition-all duration-300 ease-in-out font-bold uppercase w-1/3 flex justify-center items-center z-20 cursor-pointer ${
                    index === tab ? "text-white " : "text-black/40"
                  }`}
                  onClick={() => setTab(index)}
                  key={index}
                >
                  {row}
                </div>
              ))}
              <div
                className={`transform transition-all duration-300 ease-in-out w-1/3 h-10 absolute bg-blue-500 z-10 rounded-full ${
                  tab === 0
                    ? "translate-x-0"
                    : tab === 1
                    ? "translate-x-full"
                    : "translate-x-[200%]"
                }`}
              />
            </div>
            {tab === 0 ? (
              <SurveyGeneralTab surveyData={surveyData} />
            ) : tab === 1 ? (
              <QuestionSurveyTab surveyData={surveyData} />
            ) : (
              <IndividualSurveyTab surveyData={surveyData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSurvey;
