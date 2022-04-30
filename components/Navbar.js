import React from "react";
import moment from "moment";
import { useRouter } from 'next/router'
import Link from 'next/link'
import LocaleDropdown from "./LocaleDropDown"
import NavDropDown from "./NavDropDown"
import Image from "next/image";
import OzzoLogo from '../Assets/LOGO_ozzo.png'

import { useState, useContext, useEffect } from 'react'
import { DataContext } from "../store/GlobalState";
import {NavbarLocale } from '../locales/Navbar';

const Navbar = () => {
  const {state, dispatch} = useContext(DataContext)
  const {auth, notify} = state
  const [user, setUser] = useState({})
  const router = useRouter()
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const t = NavbarLocale[l]
  const logout = () => {
      console.log("Logget Out!!!!!!!");
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("tokenExpTime");
      window.localStorage.removeItem("user");
      dispatch({type:'NOTIFY',payload:{success: "Амжилттай гарлаа!"}})
      dispatch({type:'AUTH', payload:{}})
      router.push('/')
    }
  const LoggedUser = () => {
    return (
        <>
        {auth.user.roles.includes("admin") ?
          <Link href='/admin' >
            <a className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-md hover:text-black hover:border-red-500 ${router.pathname == "/admin" ? "border-red-500  text-black " : "border-transparent"}`}>
              Админ
            </a>
          </Link>
          :
        <></>}
        {auth.user.roles.includes("artist") || auth.user.roles.includes("admin") ?
          <Link href='/artist'>
            <a className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-md hover:text-black hover:border-red-500 ${router.pathname == "/artist" ? "border-red-500  text-black " : "border-transparent"}`}>
               Артист
            </a>
          </Link>
        :
        <></>}
      {auth.user.roles.includes("teacher") || auth.user.roles.includes("admin")  ?
        <Link href='/teacher'>
          <a className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-md hover:text-black hover:border-red-500 ${router.pathname == "/teacher" ? "border-red-500  text-black " : "border-transparent"}`}>
              Багш
          </a>
        </Link>
        :
        <></>}

        {auth.user.roles.includes("service") || auth.user.roles.includes("admin") ?
        <Link href='/service'>
          <a className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-md hover:text-black hover:border-red-500 ${router.pathname == "/service" ? "border-red-500  text-black " : "border-transparent"}`}>
              Сервис
          </a>
        </Link>
        :
        <></>}

        <Link href='/profile'>
          <a className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-md hover:text-black hover:border-red-500 ${router.pathname == "/profile" ? "border-red-500  text-black " : "border-transparent"}`}>
            Профайл
          </a>
        </Link>
      </>
    )
  }

  return (
    <>
      <nav className='items-center flex-wrap p-3 w-full bg-white text-sm lg:flex hidden fixed top-0 shadow-sm z-30' >
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <div className="h-10 w-24 relative ml-2"> 
              <Image src={OzzoLogo} layout="fill" alt="LOGO"  />
            </div>
         </a>
        </Link>
      <div className=" lg:flex hidden justify-start items-center h-10 text-gray-500 w-9/12">
        {Object.keys(auth).length === 0  ?
        <>
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
        </>
        :
          <LoggedUser />
        }
        <div className="absolute top-6 right-10 flex items-center">
             {Object.keys(auth).length === 0  ?
            <div>
               <LocaleDropdown  />
            </div>
             :
             <> <LocaleDropdown  />
            <div className="transition-all duration-300 ease-in-out hover:text-white hover:bg-red-500 flex items-center px-5 upper bg-red-100 py-2 rounded-md ml-5 text-red-500 font-medium " onClick={() => logout()}>
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <p className="">
              Гарах
              </p>
            </div>
            </>
            }
        </div>

      </div>
        
      </nav>
    </>
  )
}

export default Navbar