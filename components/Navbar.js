import React from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import LocaleDropdown from "./LocaleDropDown"
import NavDropDown from "./NavDropDown"

import { ChevronDownIcon } from '@heroicons/react/solid'
import { useState } from 'react'

import { mn } from '../locales/Navbar/mn';
import { en } from '../locales/Navbar/en';
import { cn } from '../locales/Navbar/cn';

import {about} from '../pages'
import {services} from '../pages'
import {contact} from '../pages'
import {news} from '../pages'


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
            {/* <span className='text-xl text-gray-500 font-medium uppercase tracking-wide'> */}
            <img src="http://ozzo.mn/images/logo/color.png" style={{ width: 100, marginRight: 15, marginLeft:25 }} />
            {/* </span> */}
          </a>
        </Link>
        <button className='inline-flex p-3 py-2 hover:bg-sky-500 rounded lg:hidden text-black ml-auto hover:text-white outline-none' onClick={handleClick}>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16'/>
          </svg>
        </button>
      <div className="flex justify-around items-center">
        <Link href='/'>
          <a className="p-4 py-2 text-sm">
            {t.home}
          </a>
        </Link>
        <Link href='/news'>
          <a className="p-4 py-2 text-sm">
            {t.news}
          </a>
        </Link>
        <Link href='/about'>
          <a className="p-4 py-2 text-sm">
            {t.aboutus}
          </a>
        </Link>
        {/* <Link href='/services'>
          <a className="p-4 py-2 inline-flex">
            {t.services}
            <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1 mt-0.5 text-slate-400" aria-hidden="true" />
          </a>  
        </Link> */}
        <NavDropDown />
        <Link href='/contact'>
          <a className="p-4 py-2 text-sm">
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