import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useState , useEffect} from "react";
import ShowPartner from "./ShowPartner"

import { PartnersLocale } from "../locales/Partners";
import { NavbarLocale } from '../locales/Navbar';

function Partners() {
    const router = useRouter()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = PartnersLocale[l]
    
    const [showPartner, setShowPartner] = useState(false)
    const [currentPartner, setCurrentPartner] = useState({})
    const [scrollStop, setScrollStop] = useState(false)

    useEffect(() => {
        if (scrollStop) {
        document.body.style.overflow = "hidden";
        } else{
        document.body.style.overflow = 'unset';
        }
    });
    
    return (
        <div className='w-full py-5'>
        <div className='lg:w-full font-semibold md:text-2xl text-lg flex items-center text-gray-800 mb-5 '> 
            <div className='md:h-10 h-8 w-1 bg-purple-300 mr-5'></div>
            <p className='w-4/6 uppercase'>{t.title}</p>
        </div>
        <div className="w-4/4 grid md:grid-cols-4 grid-cols-2 gap-5 lg:mt-10 ">
            {t.partners.map((partner, index) => (
                <div key={index}>
                    <div className={`transition-all duration-300 ease-in-out bg-white h-full flex flex-col text-gray-500 items-center py-5 rounded-lg border border-gray-100 hover:border-gray-300`} onClick={() => {setShowPartner(true); setCurrentPartner(partner); setScrollStop(true)}}>
                        <Image src={partner.logo} className="md:scale-100 scale-[80%]"  alt="logo" width={200} height={50} />
                            <div className='pt-3 text-justify flex items-center md:text-sm text-xs  cursor-default transition-all duration-300 ease-in-out'>
                                {NavbarLocale[l].learnmore}
                            </div>
                    </div>
                </div>
            ))}
        </div>
          {showPartner ? <ShowPartner partner={currentPartner} setShowPartner={setShowPartner} setScrollStop={setScrollStop} /> : <></>}
    </div>
  )
}

export default Partners