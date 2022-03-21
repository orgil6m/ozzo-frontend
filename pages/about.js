import React from "react";

import Head from "next/head";
import { useRouter } from 'next/router';

import cover from '../Assets/coverAbout3.jpg'
import certificate from "../Assets/certificate.jpg"

import { NavbarLocale } from '../locales/Navbar';
import { AboutLocale } from "../locales/About";
import { Teacherslocale } from '../locales/Teachers';

import TimeLine from "../components/TimeLine";
import {getUsers} from "../Datas/Teachers";

import profile from "../Assets/ADMINS/otgonbat.jpg"

export async function getServerSideProps() {
  const UserData = await getUsers();
  return {
    props: {UserData},
  }
}

const About = ({ UserData}) => {
  // console.log(profile)
  const router = useRouter();
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const t = NavbarLocale[l]
  const about = AboutLocale[l]
  const teachers  = Teacherslocale[l]
  return (
  <div className="pt-20">
      <Head>
          <title>{t.about} | {t.ozzo}</title>
        </Head>
      <div className='lg:px-32 md:px-20 lg:py-10 p-5' >
        <div className="lg:mb-10 mb-5 flex cursor-default">
            <p className="text-sm text-black/50 pr-2 hover:text-black" onClick={() => router.push("/")}> {t.home} </p>
            <p className="text-sm text-black/50 pr-2 "> / </p>
            <p className="text-sm text-black/50 hover:text-black"> {t.about} </p>
        </div>

         <div className='transition-all duration-1000 ease-in-out lg:w-full font-semibold text-2xl flex items-center text-gray-800 mb-10'> 
            <div className='transition-all duration-1000 ease-in-out  md:h-10 h-8 w-1 bg-red-500 mdmr-5 mr-5'></div>
            <p className=' uppercase'>{t.about}</p>
        </div>

        <div className="lg:flex">
          <div className="lg:w-1/2 h-96">
            <div className="lg:w-11/12 h-full bg-center bg-cover bg-sky-500 rounded-lg" style={{'backgroundImage': `url(${certificate.src}`}}> 
            </div>
          </div>
          <div className="lg:w-1/2 text-justify lg:pt-0 pt-5 text font-light text-sm text-gray-800">
            {about.text1}
            <br />
            <br />
             {about.text2}
             <br />
             <br />
              {about.text3}
          </div>
        </div>
        <TimeLine />
         <div className="w-full flex flex-col pt-10 text-gray-200 cursor-default select-none py-20 ">
            <div className='transition-all duration-1000 ease-in-out lg:w-full font-semibold  flex items-center text-gray-800 mb-10'> 
                <div className='transition-all duration-1000 ease-in-out  md:h-10 h-8 w-1 bg-teal-500 mdmr-5 mr-5'></div>
                <p className=' mr-5 uppercase lg:text-2xl text-base'>{teachers.title}</p>
            </div>
            <p className="text-gray-800 mb-10 text-justify">
              Манай академи нь <code>Монгол Улсын Консерватори</code> болон Соёл Уралгийн Их Сургуулийг төгссөн мэргэжлийн багш болон хөгжимчид хичээлийг удирдан явуулдаг.
            </p>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5">
            {UserData.map((user, index) => (
              <div key={index}>
                <div className="transition-all duration-500 ease-in-out rounded-lg hover:-translate-y-2 w-full aspect-square  bg-cover bg-sky-200 bg-center" style={{'backgroundImage': `url(${user.profilephoto}`}} >
                </div>
                
                    <div className="w-full flex flex-col items-center p-5 text-gray-600">
                      <div className="flex font-bold">
                        <p className="mr-1">{user.firstname}</p>
                        <p>{user.lastname}</p>
                      </div>
                      <div className="px-3 flex justify-center flex-col items-center text-gray-500 font-thin lg:text-xs rounded-lg">
                          <p>{user.title}</p>
                          <p className="font-bold text-gray-500 pt-1 hover:text-gray-400"  onClick={() => alert(user.username)}>Read more...</p>
                      </div>
                    </div>
              </div>
            ))}
            </div>
        </div>
      </div>     
  </div>)
}

export default About;