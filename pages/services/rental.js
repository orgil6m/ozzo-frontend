import React from "react";
import { useRouter } from "next/router";
import cover from "../../Assets/RENTAL/rental_cover.png";
import rental_about from "../../Assets/RENTAL/rental1.svg";

import Head from "next/head";

import { NavbarLocale } from "../../locales/Navbar";
import CoverPhoto from "../../components/CoverPhoto";

function Rent() {
  const router = useRouter();
  const l = router.locale === "en" ? "1" : router.locale === "cn" ? "2" : "0";
  const t = NavbarLocale[`${l}`];
  return (
    <div className="pt-20">
      <Head>
        <title>{t.service[4].title}</title>
      </Head>
      <CoverPhoto src={cover} />
      <div className="lg:px-32 md:px-20 lg:mt-10 p-5">
        {/* PATH ROUTER */}
        <div className="lg:mb-10 mb-5 flex cursor-default">
          <p
            className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black"
            onClick={() => router.push("/")}
          >
            {" "}
            {t.home}{" "}
          </p>
          <p className="text-sm text-black/50 pr-2 "> / </p>
          <p className="transition-all duration-300 ease-in-out text-sm  hover:text-black">
            {" "}
            {t.service[4].title}{" "}
          </p>
        </div>

        {/* RENTAL ABOUT */}
        <div className="w-full ">
          <div className="grid lg:grid-cols-2">
            <div className="col-span md:pb-20 pb-10 text-grey-700 lg:pr-10">
              <p className="text-justify">{/* {label.about} */}</p>
              <div className="mt-5"></div>
            </div>
            <div className="col-span flex justify-center items-center lg:pb-20 ">
              <img
                className="w-2/3"
                src={rental_about.src}
                alt="rental about"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rent;
