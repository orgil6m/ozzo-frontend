import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import MapGoogle from "../components/Map"
import { NavbarLocale } from '../locales/Navbar';


const Contact = () => {
  const router = useRouter();
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const t = NavbarLocale[`${l}`]
  return (
    <div className="pt-20">
    <Head>
      <title>{t.contact}  | {t.ozzo}</title>
    </Head>
     <div className='lg:px-32 md:px-20 lg:py-10 p-5' >
         <div className="lg:mb-10 mb-5 flex cursor-default">
            <p className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black" onClick={() => router.push("/")}> {t.home} </p>
            <p className="text-sm text-black/50 pr-2 "> / </p>
            <p className="transition-all duration-300 ease-in-out text-sm text-black/50 hover:text-black"> {t.contact} </p>
        </div>
        
      </div>  
        <MapGoogle />
  </div>)
}

export default Contact;