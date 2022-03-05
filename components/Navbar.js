import React from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import LocaleDropdown from "./LocaleDropDown"
import NavDropDown from "./NavDropDown"
import Sidebar from "./Sidebar";

import { useState } from 'react'

import { mn } from '../locales/Navbar/mn';
import { en } from '../locales/Navbar/en';
import { cn } from '../locales/Navbar/cn';


const Navbar = () => {
  const router = useRouter()
  const { pathname, asPath, query } = router
  const t = router.locale === 'en' ? en : router.locale === 'cn' ?  cn : mn 

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className='flex items-center flex-wrap bg-white p-3 w-full'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <img src="http://ozzo.mn/images/logo/color.png" style={{ width: 100, marginRight: 15, marginLeft:25 }} />
          </a>
        </Link>
        <button className='inline-flex p-3 py-2 hover:bg-sky-500 rounded lg:hidden text-black ml-auto hover:text-white outline-none' onClick={handleClick}>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16'/>
          </svg>
        </button>
      <div className="flex justify-around items-center h-10 text-gray-500">
        <Link href='/' >
          <a className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-sm hover:text-black hover:border-red-500 ${router.pathname == "/" ? "border-red-500  text-black " : "border-white"}`}>
            {t.home}
          </a>
        </Link>
        <Link href='/news'>
        <a className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-sm hover:text-black hover:border-red-500 ${router.pathname == "/news" ? "border-red-500  text-black " : "border-white"}`}>
            {t.news}
          </a>
        </Link>
        <Link href='/about'>
          <a className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-sm hover:text-black hover:border-red-500 ${router.pathname == "/about" ? "border-red-500  text-black " : "border-white"}`}>
              {t.aboutus}
          </a>
        </Link>
        <NavDropDown />
        <Link href='/contact'>
          <a className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-sm hover:text-black hover:border-red-500 ${router.pathname == "/contact" ? "border-red-500  text-black " : "border-white"}`}>
            {t.contact}
          </a>
        </Link>
      </div>
      <LocaleDropdown />
      </nav>
    </>
  );
};

export default Navbar; 