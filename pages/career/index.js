import React, { useState, useEffect } from "react";
import Head from "next/head";
import cover from "../../Assets/CAREER/career_cover.jpg";
import { useRouter } from "next/router";
import { NavbarLocale } from "../../locales/Navbar";
import moment from "moment";
import "moment/locale/mn";
moment.locale("mn");
import { getOpenPositions } from "../../Datas/Positions";
import CoverPhoto from "../../components/CoverPhoto";

function Career() {
  const router = useRouter();
  const l = router.locale === "en" ? "1" : router.locale === "cn" ? "2" : "0";
  const t = NavbarLocale[l];
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({});
  const [loading, setLoading] = useState(false);
  const [Positions, setPositions] = useState({});
  const inputStyle =
    "form-select  w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-200 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-500 focus:outline-none mb-4 mt-1";
  const skeleleton = [{}, {}, {}, {}, {}];
  const setOpenPositions = async () => {
    setLoading(true);
    const res = await getOpenPositions();
    setData(res);
    setPositions(res);
    setLoading(false);
  };
  useEffect(() => {
    setOpenPositions();
  }, [router]);

  const getFilteredPositions = () => {
    return data.filter((row) =>
      Object.keys(filter).every((key) => filter[key] === row[key])
    );
  };

  const filterMenu = [
    {
      name: "location",
      label: "Байршил",
      options: ["Улаанбаатар"],
    },
    {
      name: "department",
      label: "Салбар / Чиглэл",
      options: [
        "Хөгжмийн академи",
        "Хөгжмийн дэлгүүр",
        "Хөгжмийн засвар",
        "Хөгжмийн түрээс",
        "Артист лабель",
        "Oззо тек",
      ],
    },
    {
      name: "type",
      label: "Ажлын байрны төрөл",
      options: ["Үндсэн ажилтан", "Дадлагын ажилтан"],
    },
  ];

  const FilterData = (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      setPositions(getFilteredPositions());
      setLoading(false);
    } catch (error) {}
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    if (value === "Сонгох") setFilter({ ...filter });
    else setFilter({ ...filter, [id]: value });
  };
  return (
    <div className="pt-20">
      <Head>
        <title>{t.career}</title>
      </Head>
      <CoverPhoto src={cover} />
      <div className="lg:px-32 md:px-20 lg:mt-10 p-5 mb-10">
        {/* PATH ROUTER */}
        <div className="lg:mb-10 mb-5 flex cursor-default">
          <p
            className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black"
            onClick={() => router.push("/")}
          >
            {t.home}
          </p>
          <p className="text-sm text-black/50 pr-2 "> / </p>
          <p className="transition-all duration-300 ease-in-out text-sm  hover:text-black">
            {t.career}
          </p>
        </div>
        {/* CAREER ABOUT */}
        <div className="lg:w-full font-semibold text-2xl flex items-center text-gray-800 mb-10">
          <div className="md:h-10 h-8 w-1 bg-red-500 mr-5"></div>
          <p className="uppercase">{t.career}</p>
        </div>
        <div className="w-full">
          <p className="text-justify text-gray-700">
            Монгол улсын хамгийн анхны олон улсад хүлээн зөвшөөрөгдсөн ХНХЯ
            БШУЯ-аас батлагдсан тусгай зөвшөөрөлтэй хамгийн сайхан хамт олонтой
            энэ гэр бүлд бүл нэмж хамтдаа ажиллах чин хүсэлтэй та бүхнийг бид
            урьж байна.
          </p>
        </div>
        <div className="mt-20 grid lg:grid-cols-4 grid-cols-1 lg:gap-10">
          <div className="border border-gray-200 rounded-md p-8 flex items-start md:mb-0 mb-10">
            <form method="POST" onSubmit={FilterData} className="w-full">
              {filterMenu.map((row, index) => (
                <div key={index}>
                  <label>{row.label}</label>
                  <select
                    id={row.name}
                    className={inputStyle}
                    onChange={handleChange}
                  >
                    <option>Сонгох</option>
                    {row.options &&
                      row.options.map((row2, index2) => (
                        <option key={index2} value={row2}>
                          {row2}
                        </option>
                      ))}
                  </select>
                </div>
              ))}
              <button
                className="transition-all duration-300 ease-in-out w-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white py-2 flex items-center justify-center rounded-md mt-4 font-medium"
                type="submit"
                onClick={() => FilterData()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 mr-2 rotate-90"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                Шүүж харах
              </button>
            </form>
          </div>
          <div className="col-span-3 flex flex-col font-semibold">
            <div className="p-4 mb-8 flex flex-col border-b border-gray-200 text-gray-700">
              Нийт :
              <span className="text-red-500 mt-1">
                <span className="relative text-4xl">
                  {Positions.length}
                  <div className="w-1 h-1 bg-red-500 rounded-full absolute top-1 -right-1 animate-pulse"></div>
                </span>
                <span className="ml-2">ажлын байр байна</span>
              </span>
            </div>
            {loading === true ? (
              <>
                {skeleleton.map((row, index) => (
                  <div key={index} className="bg-gray-100 mb-4 rounded-md p-8">
                    <div className="bg-gray-200 h-8 w-1/2 rounded-lg mb-4">
                      {" "}
                    </div>
                    <div className="bg-gray-200 h-16 w-full rounded-lg "> </div>
                  </div>
                ))}
              </>
            ) : loading === false && data.length > 0 ? (
              Positions.map((row, index) => (
                <div
                  key={index}
                  className="w-full p-8 mb-8 border border-gray-200 rounded-md group"
                  onClick={() => router.push(`/career/${row._id}`)}
                >
                  <div className="w-full flex justify-between items-center">
                    <p
                      className="transition-all duration-300 ease-in-out md:text-lg font-medium group-hover:text-red-500 mr-2
                  "
                    >
                      {row.title}
                    </p>
                    <div className="transition-all duration-300 ease-in-out group-hover:translate-x-2 opacity-0 group-hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm font-light mt-4 text-gray-700">
                    {row.detail.slice(0, 100)}...
                  </div>
                  <div className="w-full h-0.5 bg-gray-200 mt-4" />
                  <div className="flex md:flex-row flex-col">
                    <div className="flex items-center mt-4 text-gray-500 mr-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="font-normal text-sm ml-2">
                        {" "}
                        {row.department}
                      </p>
                    </div>
                    <div className="flex items-center mt-4 text-gray-500 mr-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="font-normal text-sm ml-2">
                        {" "}
                        {row.location}
                      </p>
                    </div>
                    <div className="flex items-center mt-4 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="font-normal text-sm ml-2">
                        {" "}
                        {moment(row.created_date).calendar()}
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-start ">
                    <button className="transition-all md:text-base text-sm duration-300 ease-in-out text-indigo-500 bg-indigo-500/10 hover:bg-indigo-500 hover:text-white px-8 py-2 flex items-center justify-center rounded-full mr-4 ">
                      <p className="mr-2 font-medium">Анкет бөглөх</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="md:w-5 md:h-5 h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                        />
                      </svg>
                    </button>
                    <button className="transition-all md:text-base text-sm duration-300 ease-in-out text-red-500 bg-red-500/10 hover:bg-red-500 hover:text-white px-8 py-2 flex items-center justify-center rounded-full ">
                      <p className="mr-2 font-medium">Түгээх</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="md:w-5 md:h-5 h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <>Хоосон байна</>
            )}
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default Career;
