import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

import { mn } from '../locales/mn';
import { en } from '../locales/en';
import { cn } from '../locales/cn';

function Home() {
  const router = useRouter();
  const t = router.locale === 'en' ? en : router.locale === 'cn' ?  cn : mn 
  return (
   <div>
     <h3 className={styles.title}>
        {t.title} 
        <a href="https://nextjs.org">Next.js!</a>
      </h3>
   </div>
  );
}
export default Home;
