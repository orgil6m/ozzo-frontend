import React from "react";
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css';
import Link from 'next/link'

const Navbar = () => {
  const router = useRouter()
  const { pathname, asPath, query } = router
  return (
    <div>
        <h1 className="bg-sky-500 text-white" flex>
            Header
        </h1>
        <div>
          <Link href="/" locale="mn">
            <a className={styles.locale}>Mn</a>
          </Link>
          <Link href="/" locale="en">
            <a className={styles.locale}>En</a>
          </Link>
          <Link href="/" locale="cn">
            <a className={styles.locale}>Cn</a>
          </Link>
        </div>
    </div>
  );
};



export default Navbar;
