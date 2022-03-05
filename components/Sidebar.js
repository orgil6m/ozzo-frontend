import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState } from 'react';

import { mn } from '../locales/Navbar/mn';
import { en } from '../locales/Navbar/en';
import { cn } from '../locales/Navbar/cn';

function Sidebar() {

     const router = useRouter()
    const { pathname, asPath, query } = router
    const t = router.locale === 'en' ? en : router.locale === 'cn' ?  cn : mn 
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
        {showSidebar ? ( 
        <svg  onClick={() => setShowSidebar(!showSidebar)} className="lg:hidden h-6 w-6 fixed z-50 flex items-center cursor-pointer right-10 top-6 ease-in-out duration-300" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        ) : (
        <svg onClick={() => setShowSidebar(!showSidebar)} className="lg:hidden h-6 w-6 fixed z-50 flex items-center cursor-pointer right-10 top-6 ease-in-out duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        )}
        <div  onClick={() => setShowSidebar(!showSidebar)} className={`top-0 right-0 w-screen bg-black text-white fixed h-screen z-0 bg-black ease-in-out duration-300 ${ showSidebar ? "opacity-50 z-10 " : "hidden " }`}>
        </div>

        <div className={`top-0 right-0 w-72 bg-white p-10 text-black fixed h-full z-40 ease-in-out duration-300 shadow-2xl ${ showSidebar ? "translate-x-0 " : "translate-x-full" }`} >
            <div className="flex flex-col justify-around items-center text-gray-500 mt-10">
                <Link href='/' >
                    <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-lg hover:text-black hover:border-red-500 ${router.pathname == "/" ? "border-red-500  text-black " : "border-white"}`}>
                        {t.home}
                    </a>
                </Link>
                <Link href='/news'>
                    <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-lg hover:text-black hover:border-red-500 ${router.pathname == "/news" ? "border-red-500  text-black " : "border-white"}`}>
                        {t.news}
                    </a>
                </Link>
                <Link href='/about'>
                    <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-lg hover:text-black hover:border-red-500 ${router.pathname == "/about" ? "border-red-500  text-black " : "border-white"}`}>
                        {t.aboutus}
                    </a>
                </Link>
        {/* <NavDropDown /> */}
                <Link href='/contact'>
                    <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 p-2 py-2 pt-2 border-b-2 text-lg hover:text-black hover:border-red-500 ${router.pathname == "/contact" ? "border-red-500  text-black " : "border-white"}`}>
                        {t.contact}
                    </a>
                </Link>
      </div>
           </div>
        </>
    )
}

export default Sidebar;
