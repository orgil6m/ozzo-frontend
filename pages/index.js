import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

import { mn } from '../locales/mn';
import { en } from '../locales/en';
import { cn } from '../locales/cn';

function Home() {
  const router = useRouter();
  let t;
  if (router.locale === 'en') t = en;
  else if (router.locale === 'cn') t = cn;
  else t = mn;   
  return (
   <div>
     <h1 className={styles.title}>
        {t.title} 
        <a href="https://nextjs.org">Next.js!</a>
      </h1>
   </div>
  );
}
export default Home;
