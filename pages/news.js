import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

import { mn } from '../locales/Navbar';
import { en } from '../locales/Navbar';
import { cn } from '../locales/Navbar';

const News = () => {
    const router = useRouter();
    const t = router.locale === 'en' ? en : router.locale === 'cn' ?  cn : mn ;
    return (
    <div>
        <Head>
          <title>{t.news} | {t.ozzo}</title>
        </Head>
        <h1 className={styles.title}>
          News
        </h1>
    </div>)
}

export default News;