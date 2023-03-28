/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import { motion } from "framer-motion";
import Head from "next/head";
import { NavbarLocale } from "../locales/Navbar";
import { DataContext } from "../store/GlobalState";
import Loading from "../components/Loading";

const Admin = () => {
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;
  const router = useRouter();
  const l = router.locale === "en" ? "1" : router.locale === "cn" ? "2" : "0";
  const t = NavbarLocale[l];

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    if (!user) {
      return router.push("/login");
    }
  }, []);

  if (!auth.user || auth.user === undefined) {
    return <Loading />;
  }

  if (auth.user.service !== true) {
    return (
      <div className="fixed inset-0 flex justify-center items-center flex-col">
        <p className="">Танд Сервис хэсэгт нэвтрэх эрх байхгүй байна!</p>
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
    <div className="pt-20 cursor-default w ">
      <Head>
        <title> {t.ozzo}</title>
      </Head>
      <div className="w-full lg:px-32 md:px-20 lg:py-10 p-5  ">
        <div className="md:px-10 px-5 md:m-5 m-2 my-5 rounded-md text-neutral-500 font-light text-sm flex flex-col items-end">
          <p>
            Засвар удирдлагын хэсэгт тавтай морил!{" "}
            <span className="font-bold">
              {auth.user.informations[l].firstname}{" "}
              {auth.user.informations[l].lastname}{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
