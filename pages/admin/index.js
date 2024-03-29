/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../store/GlobalState";
import Head from "next/head";
import Loading from "../../components/Loading";
import { useRouter } from "next/router";
import { getUsers, getArtists } from "../../Datas/Users";
import { getNews } from "../../Datas/news";
import { getProducts } from "../../Datas/Products";
import { PartnersLocale } from "../../locales/Partners";
import { getMessages } from "../../Datas/Messages";
import { getCourses } from "../../Datas/Courses";
import { getFeedBacks } from "../../Datas/feedbacks";
import CountUp from "react-countup";
import { NavbarLocale } from "../../locales/Navbar";
import { getRandomColor } from "../../utils/format";
import moment from "moment";
import "moment/locale/mn";
moment.locale("mn");

const Index = () => {
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;
  const [usersData, setUsersData] = useState();
  const [newsData, setNewsData] = useState();
  const [artistsData, setArtistsData] = useState();
  const [messagesData, setMessagesData] = useState();
  const [productsData, setProducstData] = useState();
  const [coursesData, setCourseData] = useState();
  const [feedBacksData, setFeedBacksData] = useState();

  const router = useRouter();
  const l = router.locale === "en" ? "1" : router.locale === "cn" ? "2" : "0";
  const partners = PartnersLocale[l];
  const t = NavbarLocale[l];

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    if (!user) return router.push("/login");
    getUsers().then((response) => {
      setUsersData(response);
    });
    getNews().then((response) => {
      setNewsData(response);
    });
    getArtists().then((response) => {
      setArtistsData(response);
    });
    getProducts().then((response) => {
      setProducstData(response);
    });
    getMessages().then((response) => {
      setMessagesData(response);
    });
    getCourses().then((response) => {
      setCourseData(response);
    });
    getFeedBacks().then((response) => {
      setFeedBacksData(response);
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

  const adminPanel = [
    {
      title: "Хэрэглэгч",
      icon: UsersIcon(),
      color: "bg-sky-100 text-sky-500",
      quantity: usersData && usersData.length,
      path: "/admin/users",
    },
    {
      title: "Хөтөлбөр",
      icon: bookIcon(),
      color: "bg-emerald-100 text-emerald-500",
      quantity: coursesData && coursesData.length,
      path: "/admin/courses",
    },
    {
      title: "DGL Судалгаа",
      icon: bookIcon(),
      color: "bg-pink-100 text-pink-500",
      quantity: feedBacksData && feedBacksData.length,
      path: "/admin/survey",
    },
    {
      title: "Мэдээ",
      icon: newsIcon(),
      color: "bg-orange-100 text-orange-500",
      quantity: newsData && newsData.length,
      path: "/admin/news",
    },
    {
      title: "Бараа",
      icon: productsIcon(),
      color: "bg-amber-100 text-amber-500",
      quantity: productsData && productsData.length,
      path: "/admin/products",
    },
    {
      title: "Хамтрагч",
      icon: partnersIcon(),
      color: "bg-red-100 text-red-500",
      quantity: partners.partners.length,
    },
  ];

  return (
    <div className="pt-20 cursor-default bg-stone-50">
      <Head>
        <title> Админ | ОЗЗО ХХК</title>
      </Head>

      <div className="w-full lg:px-32 md:px-20 lg:py-10 p-5 ">
        <div className="lg:mb-10 mb-5 flex cursor-default">
          <p
            className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black"
            onClick={() => router.push("/admin")}
          >
            {" "}
            Админ{" "}
          </p>
          <p className="text-sm text-black/50 pr-2 "> / </p>
        </div>
        <div className="lg:w-full font-semibold text-xl flex items-center text-gray-800 my-10">
          <div className="md:h-10 h-8 w-1 bg-red-500 mr-5"></div>
          <p className="uppercase">Системийн удирдлага</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="grid grid-cols-2 gap-5 w-full text-black ">
            {adminPanel.map((row, index) => (
              <div
                key={index}
                className="transition-all duration-300 ease-in-out  flex flex-col px-5 rounded-md bg-white hover:shadow-md hover:shadow-gray-200 "
                onClick={() => row.path && router.push(row.path)}
              >
                <div className="flex md:flex-row flex-col items-center my-5 py-2">
                  <div className={`rounded-lg ${row.color}`}>{row.icon}</div>
                  <div className="flex flex-col md:ml-5 truncate md:mt-0 mt-5 md:items-start items-center">
                    <div
                      className={`font-bold text-3xl my-1 flex text-gray-600 -mr-2`}
                    >
                      <CountUp start={0} end={row.quantity} duration={0.5} />
                      <div className="h-1 w-1 rounded-full mr-2 bg-blue-500 animate-pulse"></div>
                    </div>
                    <p className="text-xs truncate text-gray-400">
                      {row.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1">
            <div className="bg-white rounded-lg md:mx-0">
              <div className="flex items-center ">
                <div className="rounded-lg text-violet-500 bg-violet-100 m-5 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 m-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div
                    className={`font-bold text-3xl my-1 flex text-gray-600 -mr-2 -mt-1`}
                  >
                    <CountUp
                      start={0}
                      end={messagesData && messagesData.length}
                      duration={0.5}
                    />
                    <div className="h-1 w-1 rounded-full mr-2 bg-violet-500 animate-pulse"></div>
                  </div>
                  <p className="text-xs truncate text-gray-400">
                    {" "}
                    Санал хүсэлт
                  </p>
                </div>
              </div>
              <div className="mx-5 divide-y ">
                {messagesData &&
                  messagesData.slice(0, 3).map((row, index) => (
                    <div
                      key={index}
                      className="md:block hidden px-2 py-4 hover:bg-gray-50 rounded-md"
                      onClick={() =>
                        router.push({
                          pathname: "/admin/messages",
                          query: { message: index },
                        })
                      }
                    >
                      <div className="flex items-center">
                        <div className="w-1/12 aspect-1 flex relative">
                          <div
                            className="w-full aspect-1 uppercase rounded-full bg-gray-500 flex items-center justify-center text-white"
                            style={{
                              backgroundColor: row.avatarColor
                                ? row.avatarColor
                                : getRandomColor(),
                            }}
                          >
                            <span className="m-2">
                              {row.username.slice(0, 1)}
                            </span>
                          </div>
                          {row.unread ? (
                            <div className="w-2 h-2 scale-75 -left-0.5 -top-0.5 absolute rounded-full mr-2 bg-blue-400"></div>
                          ) : (
                            <></>
                          )}
                        </div>

                        <div className=" w-9/12 flex flex-col ml-4">
                          <p className="text-xs h-1/2 text-gray-900 font-bold text-ellipsis overflow-hidden">
                            {row.email}
                            <span className="text-gray-500 font-medium ml-2">
                              |{" "}
                              {moment(row.createdTime, "HH:mm:ss").fromNow(
                                true
                              )}
                            </span>
                          </p>
                          <span className="h-1/2  text-sm m1-2 text-gray-400 font-light truncate text-ellipsis">
                            {row.message.slice(0, 50)}...
                          </span>
                        </div>
                        <div className="md:w-2/12 hidden md:flex flex-col items-center justify-center">
                          <div className="transition-all duration-300 ease-in-out flex items-center justify-center rounded-full hover:opacity-50">
                            <svg
                              className="h-4 w-4 m-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                {messagesData && messagesData.length !== 0 ? (
                  <div className="py-2 w-full flex  justify-center">
                    <button
                      className="transition-all duration-300 ease-in-out px-8 py-2 mx-4 bg-sky-400 hover:bg-sky-500 text-sm rounded-md text-white my-2 flex justify-center items-center"
                      onClick={() => router.push("/admin/messages")}
                    >
                      Бүгдийг харах
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

const UsersIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 m-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
};

const newsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="m-4 h-6 w-6 "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
      />
    </svg>
  );
};

const productsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="m-4 h-6 w-6 "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
      />
    </svg>
  );
};
const partnersIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="m-4 h-6 w-6 "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
      />
    </svg>
  );
};
const inboxIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 m-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
      />
    </svg>
  );
};
const bookIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 m-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  );
};
