import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState } from 'react';
import Image from 'next/image';
import OzzoLogo from '../Assets/LOGO.png'
import LocaleDropDown from './LocaleDropDown'

import { mn } from '../locales/Navbar';
import { en } from '../locales/Navbar';
import { cn } from '../locales/Navbar';

function Sidebar() {

    const router = useRouter()
    const t = router.locale === 'en' ? en : router.locale === 'cn' ?  cn : mn 
    const [showSidebar, setShowSidebar] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <div className='lg:hidden w-full flex items-center p-3 bg-white justify-between fixed top-0 shadow-sm z-10'>
            <div className=''>
                <Link href='/'>
                    <a className='inline-flex items-center p-2 mr-4 '>
                        <div className="h-10 w-24 relative ml-2"> 
                            <Image src={OzzoLogo} layout="fill" alt='Logo' />
                        </div>
                    </a>
                </Link>
            </div>
            
            <div className='flex items-center pr-5' >
                <div className='pr-5'>
                    <LocaleDropDown />
                </div>
                     <svg onClick={() => setShowSidebar(!showSidebar)} className="lg:hidden h-6 w-6 z-50 flex items-center cursor-pointer right-10 top-6 ease-in-out duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    
            </div>
        </div>
        
        <div  onClick={() => setShowSidebar(!showSidebar)} className={`top-0 right-0 w-screen text-white fixed h-screen z-0 bg-black ease-in-out duration-300 ${ showSidebar ? "opacity-50 z-20 " : "hidden " }`}>
        </div>

        <div className={`top-0 right-0 w-72 bg-white p-5 text-black fixed h-full z-40 ease-in-out duration-300 shadow-2xl ${ showSidebar ? "translate-x-0 " : "translate-x-full" }`} >
            <svg  onClick={() => setShowSidebar(!showSidebar)} className={`lg:hidden h-6 w-6 z-50 flex items-center absolute right-10 top-6 cursor-pointer ease-in-out duration-300 ${showSidebar ? "flex" :"hidden"}` } fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
            <div className="flex flex-col justify-around items-start text-gray-500 mt-10">
                <Link href='/' >
                    <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 text-lg hover:text-black hover:border-red-500 ${router.pathname == "/" ? "border-red-500  text-black " : "border-white"}`}>
                        {t.home}
                    </a>
                </Link>
                <div className='w-screen h-px bg-gray-100 ml-2'></div>
                <Link href='/news'>
                    <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 text-lg hover:text-black hover:border-red-500 ${router.pathname == "/news" ? "border-red-500  text-black " : "border-white"}`}>
                        {t.news}
                    </a>
                </Link>
                <div className='w-screen h-px bg-gray-100 ml-2'></div>
                <Link href='/about'>
                    <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 text-lg hover:text-black hover:border-red-500 ${router.pathname == "/about" ? "border-red-500  text-black " : "border-white"}`}>
                        {t.about}
                    </a>
                </Link>
                <div className='w-screen h-px bg-gray-100 ml-2'></div>
                <div onClick={() => setIsOpen(!isOpen)} className='flex transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 border-white text-lg hover:text-black' >
                    {t.services}
                    <svg className={`transition-all duration-200 ease-in-out h-5 w-5 ml-2 mt-1 ${!isOpen ? "rotate-360":"rotate-90" }`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
             
                <div>
                    <div className='pl-4'>
                        <Link href='/services/academy'>     
                            <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 text-lg hover:text-black hover:border-red-500 ${!isOpen ? "hidden":"block" } ${router.pathname == "/services/academy" ? "border-red-500  text-black " : "border-white"}`}>
                                {t.academy}
                            </a>
                        </Link>
                         <Link href='/services/store'>     
                            <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 text-lg hover:text-black hover:border-red-500 ${!isOpen ? "hidden":"block" } ${router.pathname == "/services/store" ? "border-red-500  text-black " : "border-white"}`}>
                                {t.store}
                            </a>
                        </Link>
                        <Link href='/services/maintenance'>     
                            <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 text-lg hover:text-black hover:border-red-500 ${!isOpen ? "hidden":"block" } ${router.pathname == "/services/maintenance" ? "border-red-500  text-black " : "border-white"}`}>
                                {t.maintenance}
                            </a>
                        </Link>        
                        <Link href='/services/rent'>     
                            <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 text-lg hover:text-black hover:border-red-500 ${!isOpen ? "hidden":"block" } ${router.pathname == "/services/rent" ? "border-red-500  text-black " : "border-white"}`}>
                                {t.rent}
                            </a>
                        </Link>     
                        <Link href='/services/dev'>     
                            <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 text-lg hover:text-black hover:border-red-500 ${!isOpen ? "hidden":"block" } ${router.pathname == "/services/dev" ? "border-red-500  text-black " : "border-white"}`}>
                                {t.dev}
                            </a>
                        </Link>     
                    </div>    
                      
                </div>
               <div className='w-screen h-px bg-gray-100 ml-2'></div>
                <Link href='/contact'>
                    <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 text-lg hover:text-black hover:border-red-500 ${router.pathname == "/contact" ? "border-red-500  text-black " : "border-white"}`}>
                        {t.contact}
                    </a>
                </Link>
                </div>
           </div>
        </>
    )
}

export default Sidebar;
