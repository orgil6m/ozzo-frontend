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
import { Buttons } from "../locales/Profile"
import { Messages } from "../locales/DispatchMessages";

const Navbar = () => {
  const {state, dispatch} = useContext(DataContext)
  const {auth, notify} = state
  const [user, setUser] = useState({})
  const [showSettings, setShowSettings] = useState(false)
  const router = useRouter()
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const t = NavbarLocale[l]
  const Button = Buttons[l]
  const message = Messages[l]

  const logout = () => {
    console.log("Logget Out!!!!!!!");
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("tokenExpTime");
    window.localStorage.removeItem("user");
    dispatch({type:'NOTIFY',payload:{success: message.logout_successfully}})
    dispatch({type:'AUTH', payload:{}})
    router.push('/')
  }
  const LoggedUser = () => {
    return (
        <>
        {auth.user && auth.user.admin === true ?
          <Link href='/admin' >
            <a className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-md hover:text-black hover:border-red-500 ${router.pathname == "/admin" ? "border-red-500  text-black " : "border-transparent"}`}>
              {Button.admin}
            </a>
          </Link>
          :
        <></>}
        {auth.user && auth.user.admin === true ?
          <Link href='/hr' >
            <a className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-md hover:text-black hover:border-red-500 ${router.pathname == "/hr" ? "border-red-500  text-black " : "border-transparent"}`}>
              {Button.hr}
            </a>
          </Link>
          :
        <></>}
        {auth.user &&  auth.user.artist === true ?
          <Link href='/artist'>
            <a className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-md hover:text-black hover:border-red-500 ${router.pathname == "/artist" ? "border-red-500  text-black " : "border-transparent"}`}>
               {Button.artist}
            </a>
          </Link>
        :
        <></>}
      {auth.user && auth.user.teacher === true   ?
        <Link href='/teacher'>
          <a className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-md hover:text-black hover:border-red-500 ${router.pathname == "/teacher" ? "border-red-500  text-black " : "border-transparent"}`}>
              {Button.teacher}
          </a>
        </Link>
        :
        <></>}

        {auth.user && auth.user.service === true ?
        <Link href='/service'>
          <a className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-md hover:text-black hover:border-red-500 ${router.pathname == "/service" ? "border-red-500  text-black " : "border-transparent"}`}>
              {Button.service}
          </a>
        </Link>
        :
        <></>}

        <Link href='/profile'>
          <a className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-md hover:text-black hover:border-red-500 ${router.pathname == "/profile" ? "border-red-500  text-black " : "border-transparent"}`}>
            {Button.profile}
          </a>
        </Link>
      </>
    )
  }

  return (
    <>
      <nav className='items-center flex-wrap p-3 w-full bg-white  text-sm lg:flex hidden fixed top-0 shadow-sm z-30' >
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
            <div className="flex items-center relative">
               <LocaleDropdown  />
               <div className="transition-all duration-300 ease-in-out ml-4 rounded-full flex justify-center items-center bg-gray-50 hover:bg-gray-100" 
               onClick={()=> setShowSettings(!showSettings)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </div>
              {showSettings ? 
              <div>
                <div className="fixed inset-0 w-screen h-screen z-30" onClick={()=> setShowSettings(!showSettings)}> 
                </div>
                <div className="absolute top-14 bg-white backdrop-blur-sm rounded-b-md px-5 py-3 right-0 z-40 shadow-lg border 
                border-gray-100/50 text-gray-600">
                  <div className="transition-all duration-300 ease-in-out flex items-center justify-center bg-gray-100 rounded-md px-2 hover:bg-sky-100 hover:text-sky-500" onClick={()=> {router.push("/login"), setShowSettings(false)}}>
                    <div className="rounded-lg mr-1">
                      <svg  className="h-5 w-5 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                    </div>
                    <p className="font-medium mr-4">
                    {Button.login}
                    </p>
                  </div>
                </div>
              </div>
              :
              <>
              </>
              }
            </div>
             :
             <> <LocaleDropdown  />
            <div className="transition-all duration-300 ease-in-out hover:text-white hover:bg-red-500 flex items-center px-5 upper bg-red-100 py-2 rounded-md ml-5 text-red-500 font-medium " onClick={() => logout()}>
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <p className="">
              {Button.logout}
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