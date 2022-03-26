import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router';

import certificate from "../Assets/certificate.jpg"

import { NavbarLocale } from '../locales/Navbar';
import { AboutLocale } from "../locales/About";
import { Teacherslocale } from '../locales/Teachers';

import TimeLine from "../components/TimeLine";
import FeaturedPartners from "../components/FeaturedPartners"
import FeaturedContact from "../components/FeaturedContact"
import {getUsers} from "../Datas/Teachers";

import davaatseren from "../Assets/ADMINS/davaatseren.jpg"
import solongo from "../Assets/ADMINS/solongo.jpg"
import otgonbat from "../Assets/ADMINS/otgonbat.jpg"
import nyamdalai from "../Assets/ADMINS/nyamdalai.jpg"
import munkhorgil from "../Assets/ADMINS/munkhorgil.jpg"

import signature from "../Assets/signature.png"
import { useState , useEffect} from "react";
import ShowTeacher from "../components/ShowTeacher";


export async function getServerSideProps() {
  const UserData = await getUsers();
  return {
    props: {UserData},
  }
}

const About = ({ UserData}) => {
  const router = useRouter();
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const t = NavbarLocale[l]
  const about = AboutLocale[l]
  const teachers  = Teacherslocale[l]
  const [showTeacher, setShowTeacher] = useState(false)
  const [currentTeacher, setCurrentTeacher] = useState({})
  const [scrollStop, setScrollStop] = useState(false)


  useEffect(() => {
    if (scrollStop) {
      document.body.style.overflow = "hidden";
    } else{
    document.body.style.overflow = 'unset';
    }
  });
  
  
  return (
  <div className="pt-20 cursor-default ">
    <Head>
      <title>{t.about} | {t.ozzo}</title>
    </Head>
    <div className='lg:px-32 md:px-20 lg:py-10 p-5' >
      <div className="lg:mb-10 mb-5 flex ">
        <p className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black" onClick={() => router.push("/")}> {t.home} </p>
        <p className="text-sm text-black/50 pr-2 "> / </p>
        <p className="transition-all duration-300 ease-in-out text-sm text-black"> {t.about} </p>
      </div>
      <div className='lg:w-full font-semibold text-2xl flex items-center text-gray-800 mb-10'> 
        <div className='transition-all duration-500 ease-in-out  md:h-10 h-8 w-1 bg-red-500 mdmr-5 mr-5'></div>
        <p className=' uppercase'>{t.about}</p>
      </div>
      <div className="lg:flex">
        <div className="lg:w-1/2 h-96">
          <div className="lg:w-11/12 h-full bg-center bg-cover bg-sky-500 rounded-lg " style={{'backgroundImage': `url(${certificate.src}`}}></div>
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
        
      <div className="w-full pt-20 grid lg:grid-cols-3 md:grid-cols-2 md:gap-10 gap-5">
          <div className="transition-all duration-500 ease-in-out h-40 w-full border border-gray-100 hover:shadow-md rounded-lg">
            <div className="w-full flex justify-end -mt-2">
              <svg className="h-8 w-8  drop-shadow-md" viewBox="0 0 20 20" fill="rgb(20 184 166)">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </div>
            <div className="w-full h-full flex justify-center items-center text-center p-5 -mt-7 font-light ">
              {about.quote1}
            </div>
          </div>
          <div className="transition-all duration-500 ease-in-out h-40 w-full  border border-gray-100 hover:shadow-md rounded-lg">
            <div className="w-full flex justify-end -mt-2">
              <svg className="h-8 w-8 drop-shadow-md" viewBox="0 0 20 20" fill="#d64635">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </div>
            <div className="w-full h-full flex justify-center items-center text-center p-5 -mt-7 font-light ">
              {about.quote2}
            </div>
          </div> 
          <div className="transition-all duration-500 ease-in-out h-40 w-full  border border-gray-100  hover:shadow-md rounded-lg">
            <div className="w-full flex justify-end -mt-2">
              <svg className="h-8 w-8  drop-shadow-md" viewBox="0 0 20 20" fill="rgb(14 165 233)">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            </div>
            <div className="w-full h-full flex justify-center items-center text-center p-5 -mt-7 font-light ">
                {about.quote3_1}
                <br />
                {about.quote3_2}
            </div>
          </div>
      </div>
      <div className="mt-20 border-l-4 p-5 border-indigo-400 uppercase md:text-sm text-xs">
        {about.text4}
      </div>
      <div className="w-full flex justify-end z-10">
        <div className="w-80 h-40  bg-contain bg-no-repeat bg-center -mt-20" style={{'backgroundImage': `url(${signature.src}`}} >
        </div>
      </div>
      <div className="w-full flex flex-col pt-20 text-gray-200  select-none ">
        <div className='lg:w-full font-semibold  flex items-center text-gray-800 mb-10'> 
          <div className='md:h-10 h-8 w-1 bg-teal-500 mr-5'></div>
          <p className='mr-5 uppercase lg:text-2xl text-base'>{teachers.title}</p>
        </div>
        <p className="text-gray-800 mb-10 text-justify">{teachers.text}</p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 ">
              {UserData.map((user, index) => (
                <div key={index}>
                  <div className="transition-all duration-500 ease-in-out rounded-lg hover:-translate-y-2 w-full aspect-1 bg-cover bg-sky-200 bg-center"
                  style={{'backgroundImage': `url(${user.profilephoto}`}}>
                  </div>
                  <div className="w-full flex flex-col items-center p-5 text-gray-600">
                    <div className="flex font-bold text-center">
                      <p className="mr-1">{user.firstname[l]} {user.lastname[l]}</p>
                    </div>
                    <div className="px-3 flex justify-center flex-col items-center text-gray-500 font-thin lg:text-xs rounded-lg text-center">
                      <p>{user.title[l]}</p>
                      <p className="transition-all duration-300 ease-in-out font-bold text-gray-500 pt-1 hover:text-gray-400"  
                        onClick={() => {setShowTeacher(true); setCurrentTeacher(user); setScrollStop(true)  }}>
                        {about.readmore}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        {showTeacher ? <ShowTeacher profile={currentTeacher} setShowTeacher={setShowTeacher} setScrollStop={setScrollStop} /> : <></>}
        
      </div>
      <TimeLine />
      <FeaturedPartners />
    </div>     
      <FeaturedContact />
      
    
  </div>)
}

export default About