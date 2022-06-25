/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router'
import React, {useContext, useEffect, useState} from 'react'
import moment from 'moment';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { NavbarLocale } from '../../locales/Navbar';
import {DataContext} from "../../store/GlobalState"
import Loading from '../../components/Loading'
import {getCourses} from '../../Datas/Courses'

const Teacher = () => {
  
    const {state, dispatch} = useContext(DataContext)
    const {auth} = state
    const router = useRouter()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = NavbarLocale[l]
    const [coursesData, setCoursesData] = useState()
    useEffect(() => {
      const user = JSON.parse(window.localStorage.getItem("user"))
      if(!user) return router.push('/login')
      getCourses().then(response => {
        setCoursesData(response)
      })
     
    }, [])
    useEffect(() => {
      const user = JSON.parse(window.localStorage.getItem("user"))
      if(!user){
      return router.push('/login')
      }

    }, [])

    if(!auth.user || auth.user === undefined){
      return(
        <Loading />
      )
    } 

    if(auth.user.teacher !== true){
      return (
        <div className='fixed inset-0 flex justify-center items-center flex-col'>
          <p className=''>
          Танд Багш хэсэгт нэвтрэх эрх байхгүй байна!
          </p>
          <button className='transition-all duration-300 ease-in-out m-5 pr-8 pl-4 py-2 bg-sky-100 rounded-md text-sky-500 hover:bg-sky-500 hover:text-white flex items-center' type='button' onClick={()=> router.push('/profile')}>
            <svg  className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>
            Буцах
          </button>
        </div>
      )
    }
    return(
    <div className='pt-20 cursor-default bg-stone-50'>
      <Head>
        <title> Багш | {t.ozzo}</title>
      </Head>
      <div className='w-full lg:px-32 md:px-20 lg:py-10 p-5 '>
        <div className="lg:mb-10 mb-5 flex cursor-default">
            <p className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black" onClick={() => router.push("/teacher")}> Багш </p>
            <p className="text-sm text-black/50 pr-2 "> / </p>
        </div>
        <div className='lg:w-full font-semibold text-xl flex items-center text-gray-800 my-10'> 
          <div className='md:h-10 h-8 w-1 bg-sky-500 mr-5'></div>
          <p className='uppercase'>Багшийн удирдлага</p>
        </div>
        <div className='grid md:grid-cols-2 gap-5'>
          <div className='grid md:grid-cols-3  grid-cols-2 gap-5 w-full text-black '>
            {coursesData && coursesData.map((row, index) => (
              <div key={index} className="transition-all duration-300 ease-in-out flex flex-col p-5 rounded-md bg-white hover:shadow-md hover:shadow-gray-200"
               onClick={()=> router.push("/teacher/course/"+row._id)}>
                {row.img ? 
                  <img className='mb-5' src={row.img} alt='img'/> 
                  :
                  <div className='mb-5 w-full aspect-1 flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div> 
                }
                  <p className='text-sm font-semibold text-gray-700'>{row.course[l].title}</p>
              </div>
            ))}
          </div>
      </div>
      </div>
     
    </div>
  )  
}

export default Teacher;