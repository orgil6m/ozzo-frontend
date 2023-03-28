import React, { useState, useEffect } from "react";
import { getNews } from "../../Datas/news";
import { useRouter } from "next/router";

import { FeaturedNewsLocale } from "../../locales/FeaturedNews";

const FeaturedNews = () => {
  const router = useRouter();
  const [newsData, setNewsData] = useState("");
  useEffect(() => {
    getNews().then((res) => setNewsData(res.slice(0, 3)));
  }, []);
  const l = router.locale === "en" ? "1" : router.locale === "cn" ? "2" : "0";
  const t = FeaturedNewsLocale[l];
  const FeaturedNewsData = newsData;
  return (
    <div className="w-full py-10 cursor-default">
      <div className="transition-all duration-500 ease-in-out lg:w-full font-semibold md:text-2xl text-lg flex items-center text-gray-800 mb-10">
        <div className="transition-all duration-1000 ease-in-out md:h-10 h-8 w-1 bg-emerald-500 mr-5"></div>
        <p className="w-4/6">{t.title}</p>
        <div
          className="md:flex hidden transition-all duration-500 ease-in-out hover:translate-x-2  w-3/6 h-10 font-thin text-base items-center justify-end "
          onClick={() => {
            router.push("/news");
          }}
        >
          {t.more}
          <svg
            className="h-3 w-3 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-2">
        {FeaturedNewsData ? (
          FeaturedNewsData.map((FeaturedNewsData, index) => (
            <div key={index}>
              <div
                className="transition-all duration-300 ease-in-out hover:opacity-90"
                onClick={() => {
                  router.push(`/news/${FeaturedNewsData._id}`);
                }}
              >
                <div
                  className="rounded-md w-full aspect-w-16 aspect-h-9 bg-cover bg-center"
                  style={{ backgroundImage: `url(${FeaturedNewsData.cover}` }}
                ></div>
                <div className="flex w-full h-8 items-center my-3">
                  <h2 className="text-gray-800 font-bold uppercase text-lg ">
                    {FeaturedNewsData.content[l].title}
                  </h2>
                </div>
                <p className="text-gray-800/80 text-sm">
                  {FeaturedNewsData.content[l].text.slice(0, 75)}...{" "}
                </p>
                <div className="pt-2 font-thin flex text-sm pb-1 items-center text-gray-800/50">
                  <svg
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="font-light italic">{FeaturedNewsData.date}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
      <div
        className="md:hidden flex transition-all duration-1000 ease-in-out  w-full mt-5 font-thin text-base items-center justify-end "
        onClick={() => {
          router.push("/news");
        }}
      >
        {t.more}
        <svg
          className="h-3 w-3 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 5l7 7-7 7M5 5l7 7-7 7"
          />
        </svg>
      </div>
      <div className="w-screen left-0 absolute bottom-5 flex justify-center">
        <svg
          className="animate-bounce h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#fff"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default FeaturedNews;
