import React, { useState } from "react";
import { form1, form2 } from "../../../utils/FormModel";
import FormBuilder from "../../../components/Formbuilder";
import logo from "../../../Assets/logo_black.png";
import Image from "next/image";

const buttonStyle =
  "md:w-auto w-full transition-all duration-300 ease-in-out py-3 rounded-md font-semibold hover:text-white flex justify-center items-center";
const Application = () => {
  const [tab, setTab] = useState(0);
  const tabs = [
    "Хувийн мэдээлэл",
    "Боловсрол, туршлага",
    "Амжилт, чадвар",
    "Илгээх",
  ];
  const BackButton = () => {
    return (
      <div
        className={`bg-red-100 text-red-500 ${buttonStyle} pr-8 pl-6 `}
        onClick={() => setTab(tab - 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        Буцах
      </div>
    );
  };
  const NextButton = ({ title }) => {
    return (
      <div
        className={`bg-blue-100 text-blue-500 hover:bg-blue-500 ${buttonStyle}  pl-8 pr-6 `}
        onClick={() => setTab(tab + 1)}
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-5 h-5 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    );
  };

  const sanamj = [
    "Анкетыг бөглөхдөө бүх асуултанд тодорхой хариулж, үг товчлохгүй байхыг хүсье.",
    "Цээж зураг хавсаргах шаардлагатай.",
    "Та Монгол фонтоор бичнэ үү.",
    "Компани өргөдлийг хүлээн авснаар ажилд орохыг хүсэгчийн өмнө ямар нэгэн үүрэг, хариуцлага хүлээхгүй.",
    "Бид таны бүртгүүлсэн утасны дугаар болон и-мейл хаягаар эргэж холбогдох тул та мэдээллээ үнэн зөв оруулна уу.",
  ];

  return (
    <div className="mt-20 lg:px-32 md:px-20 lg:py-10 p-5 ">
      <div className="lg:w-full font-semibold text-2xl flex items-center text-gray-800 mb-10">
        <div className="md:h-10 h-8 w-1 bg-red-500 mr-5"></div>
        <p className="uppercase">Ажлын анкет бөглөх</p>
      </div>
      <div className="w-full flex flex-col items-center ">
        <div className="w-full md:shadow-lg md:p-20 pt-4 pb-20 flex flex-col lg:w-3/4">
          <div className="flex items-center">
            <img
              src={logo.src}
              className="mr-2 w-12 rounded-md mb-2"
              alt="logo"
            />
            <p className="text-xl font-medium">ОЗЗО ХХК</p>
          </div>
          {tab === 0 ? (
            <div>
              <p className="font-medium mt-4 text-red-500">Санамж :</p>
              <div className="w-full h-0.5 bg-gray-300 my-4 scale-y-75" />
              <div>
                {sanamj.map((row, index) => (
                  <div key={index}>
                    <p className="my-1">
                      {index + 1}. {row}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <NextButton title="Эхлэх" />
              </div>
            </div>
          ) : tab == 1 ? (
            <div className="w-full">
              <p className="font-semibold mt-4 text-gray-500">
                ОЗЗО ХХК-н албан хэрэгцээнд зориулав.
              </p>
              <div className="w-full h-0.5 bg-gray-300 my-4 scale-y-75" />
              <FormBuilder form={form1} />
              <div className="flex mt-8 md:flex-row flex-col w-full justify-center">
                <div className="flex md:mr-2 md:mb-0 mb-4 justify-end mr-0">
                  <BackButton title="Буцах" />
                </div>
                <div className="flex justify-end md:ml-2 ml-0">
                  <NextButton title="Үргэлжлүүлэх" />
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full">
              <p className="font-semibold mt-4 text-gray-500">
                ОЗЗО ХХК-н албан хэрэгцээнд зориулав.
              </p>
              <div className="w-full h-0.5 bg-gray-300 my-4 scale-y-75" />
              <FormBuilder form={form2} />
              <div className="flex mt-8 md:flex-row flex-col w-full justify-center">
                <div className="flex md:mr-2 md:mb-0 mb-4 justify-end mr-0">
                  <BackButton title="Буцах" />
                </div>
                <div className="flex justify-end md:ml-2 ml-0">
                  <NextButton title="Үргэлжлүүлэх" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Application;

{
  /* <div>
<p className="font-semibold mt-4 text-gray-500">
  ОЗЗО ХХК-н албан хэрэгцээнд зориулав.
</p>
<div className="w-full h-0.5 bg-gray-300 my-4 scale-y-75" />
<FormBuilder form={form2} />
<div className="flex mt-8 md:flex-row flex-col w-full justify-center">
  <div className="flex md:mr-2 md:mb-0 mb-4 justify-end mr-0">
    <BackButton title="Буцах" />
  </div>
  <div className="flex justify-end md:ml-2 ml-0">
    <NextButton title="Үргэлжлүүлэх" />
  </div>
</div>
</div> */
}
