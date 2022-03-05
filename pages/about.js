import React from "react";

import Head from "next/head";
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

import { mn } from '../locales/Navbar/mn';
import { en } from '../locales/Navbar/en';
import { cn } from '../locales/Navbar/cn';

const About = () => {
  const router = useRouter();
  const t = router.locale === 'en' ? en : router.locale === 'cn' ?  cn : mn ;
  
  return (
  <div className="bg-red-500">
      <Head>
          <title>{t.about} | {t.ozzo}</title>
        </Head>
      <h1 className={styles.title}>
          About us
      </h1>
  </div>)
}

export default About;