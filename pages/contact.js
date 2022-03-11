import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

import { mn } from '../locales/Navbar';
import { en } from '../locales/Navbar';
import { cn } from '../locales/Navbar';


const Contact = () => {
  const router = useRouter();
  const t = router.locale === 'en' ? en : router.locale === 'cn' ?  cn : mn ;

  return (
    <div >
    <Head>
      <title>{t.contact}  | {t.ozzo}</title>
    </Head>
    <div className='lg:flex hidden w-full h-20'></div>
    <h1 className={styles.title}>
          Contact
      </h1>
  </div>)
}

export default Contact;