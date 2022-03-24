import React from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import LocaleDropdown from "./LocaleDropDown"
import NavDropDown from "./NavDropDown"
import Image from "next/image";
import OzzoLogo from '../Assets/LOGO_ozzo.png'

import { useState } from 'react'

import { mn, cn , en } from '../locales/Navbar';


const Navbar = () => {
  const router = useRouter()
  const t = router.locale === 'en' ? en : router.locale === 'cn' ?  cn : mn 
  const [active, setActive] = useState(false);
  return (
    <>
      <nav className='items-center flex-wrap p-3 w-full bg-white  lg:flex hidden fixed top-0 shadow-sm z-30' >
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <div className="h-10 w-24 relative ml-2"> 
              <Image src={OzzoLogo} layout="fill" alt="LOGO" />
            </div>
         </a>
        </Link>
      <div className=" lg:flex hidden justify-start items-center h-10 text-gray-500 w-9/12">
        <Link href='/' >
          <a className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-md hover:text-black hover:border-red-500 ${router.pathname == "/" ? "border-red-500  text-black " : "border-transparent"}`}>
            {t.home}
          </a>
        </Link>
        <Link href='/about'>
          <a className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-md hover:text-black hover:border-red-500 ${router.pathname == "/about" ? "border-red-500  text-black " : "border-transparent"}`}>
              {t.about}
          </a>
        </Link>
        <NavDropDown />
        <Link href='/news'>
          <a className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-md hover:text-black hover:border-red-500 ${router.pathname == "/news" ? "border-red-500  text-black " : "border-transparent"}`}>
              {t.news}
            </a>
        </Link>
        <Link href='/contact'>
          <a className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-md hover:text-black hover:border-red-500 ${router.pathname == "/contact" ? "border-red-500  text-black " : "border-transparent"}`}>
            {t.contact}
          </a>
        </Link>
        
        <div className="absolute top-6 right-10">
          <LocaleDropdown  />
        </div>
      </div>
        
      </nav>
        
    </>
  )
}

export default Navbar