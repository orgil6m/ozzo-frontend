import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

import { mn } from '../locales/Home/mn';
import { en } from '../locales/Home/en';
import { cn } from '../locales/Home/cn';

function Home() {
  const router = useRouter();
  const t = router.locale === 'en' ? en : router.locale === 'cn' ?  cn : mn 
  return (
   <div>
     <h3 className={styles.title}>
        {t.title} 
      </h3>
   </div>
  );
}
export default Home;
