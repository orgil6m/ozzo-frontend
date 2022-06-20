import React from 'react'
import Head from "next/head";
import { useRouter } from 'next/router';
import { useState } from 'react';

import label_cover from "../../Assets/LABEL/label_cover.jpg"
import label_about from "../../Assets/LABEL/label_about.svg"

import {getArtists} from "../../Datas/Users";
import { NavbarLocale } from '../../locales/Navbar';
import {LabelLocale} from '../../locales/Label'

import MusicPlayer from '../../components/MusicPlayer';

export async function getServerSideProps() {               
  const ArtistData = await getArtists();
  return {
    props: {ArtistData},
  }
}

function Label({ArtistData}) {
  const router = useRouter();
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const t = NavbarLocale[l]
  const label = LabelLocale[l]
  const [showPlayer, setShowPlayer] = useState(false)
  return (
    <div className='pt-20 cursor-default'>
      <Head>
        <title>{t.service[2].title}</title>
      </Head>
      <div className='w-full md:bg-fixed md:bg-center bg-top bg-cover md:h-[30rem] h-[15rem] ' style={{'backgroundImage': `url(${label_cover.src}`}}>
      </div>
      <div className='lg:px-32 md:px-20 lg:mt-10 p-5' >
        {/* PATH ROUTER */}
        <div className="mb-10 flex cursor-default">
          <p className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black" onClick={() => router.push("/")}> {t.home} </p>
          <p className="text-sm text-black/50 pr-2 "> / </p>
          <p className="transition-all duration-300 ease-in-out text-sm  hover:text-black"> {t.service[2].title} </p>
        </div>
        {/* LABEL ABOUT */}
        <div className='lg:w-full font-semibold text-2xl flex items-center text-gray-800 mb-10'> 

          <div className='transition-all duration-500 ease-in-out h-3 w-3 rounded-full bg-red-500 mr-3'></div>
          <p className='uppercase'>{t.service[2].title}</p>
          
        </div>
        <div className='w-full '>
          <div className='grid lg:grid-cols-2'>
            <div className='col-span md:pb-20 pb-10 text-grey-700 lg:pr-10'>
              <p className='text-justify'> 
                {label.about}
              </p>
              <div className='mt-5'>
              {label.services.map((service, index) => (
                <div key={index} className="flex items-start">
                  <div className='text-red-500 '>
                    <svg className="h-5 w-5 mr-2 mt-2 m-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className='my-2 text-sm text-justify'>
                    {service}
                  </p>
                </div>
              ))}
              </div>
            </div>
            <div className='col-span flex justify-center items-center lg:pb-20 ' >
                 <img className='w-2/3' src={label_about.src} alt="label about" />
            </div>
          </div>
        </div>
        {/* ARTISTS */}
      </div>
      <div className='lg:px-32 md:px-20 p-5 text-gray-700 pb-20' >
        <div className='lg:w-full font-semibold text-2xl flex items-center  my-10 '> 
          <div className='transition-all duration-500 ease-in-out h-3 w-3 rounded-full bg-emerald-400 mr-3'></div>
          <p className='uppercase'>{label.artists}</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-10 gap-5">
              {ArtistData.map((user, index) => (
                <div key={index} onClick={() => { router.push(`/artists/${user.artistName}`)}}>
                  {user.artistPhoto ?
                  <div className="transition-all duration-500 ease-in-out rounded-md hover:-translate-y-2 w-full aspect-1 bg-cover bg-neutral-200 bg-center"
                  style={{'backgroundImage': `url(${user.artistPhoto}`}}>
                  </div>
                    :
                    <div className='transition-all duration-500 ease-in-out rounded-md hover:-translate-y-2 w-full aspect-1 bg-cover bg-neutral-200 bg-center flex items-center justify-center'>
                      <svg className="h-40 w-40 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    }
                    <div className="w-full flex flex-col items-center pt-3 text-gray-700/90">
                      <div className="flex font-semibold text-center">
                        <p className="mr-1">{user.artistName}</p>
                      </div>
                      <div className="px-3 flex justify-center flex-col items-center text-gray-500 font-thin md:text-xs rounded-lg text-center">
                        <p></p>
                        <p className="transition-all duration-300 ease-in-out font-bold text-gray-500 pt-1 hover:text-gray-400"  
                          onClick={() => {setShowTeacher(true); setCurrentTeacher(user); setScrollStop(true);}}>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
        </div>
      </div>
      {/* <MusicPlayer /> */}
      {showPlayer ? <MusicPlayer />  : <></>}
    </div>
  )
}

export default Label;