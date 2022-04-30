import React, { useRef } from "react";
import { useRouter } from 'next/router';
import {CoursesLocale} from "../../locales/Courses"
import { useEffect, useState } from "react";
import ShowCourse from "./ShowCourse"
import { NavbarLocale } from '../../locales/Navbar';

const Courses = () => {
    const router = useRouter()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const courses = CoursesLocale[l];
    const [showCourses, setShowCourses] = useState(false);
    const [currentCourse, setCurrentCourse] = useState({})
    const [scrollStop, setScrollStop] = useState(false)
  const t = NavbarLocale[l]
  useEffect(() => {
    if (scrollStop) {
      document.body.style.overflow = "hidden";
    } else{
    document.body.style.overflow = 'unset';
    }
  });
  
    return (
     <div className='py-5 cursor-default mt-10 '>
    <div className=' lg:w-full font-semibold md:text-xl text-lg flex items-center text-gray-800 '> 
        <div className=' md:h-10 h-8 w-1 bg-red-500 mr-5'></div>
        <p className='w-full uppercase'>{courses.title}</p>
      </div>
    <div className="w-full flex overflow-x-scroll overflow-y-block pt-5">
      {courses.courses.map((course, index) => (
        <div key={index} className="relative transition-all duration-300 ease-in-out px-10 py-5 rounded-md border border-gray-100 m-1 mt-5 flex flex-col items-center justify-center hover:border-gray-200 hover:-translate-y-2" onClick={()=> {setShowCourses(true); setCurrentCourse(course); setScrollStop(true)}}>

          <svg className="h-8 w-8 absolute right-2 -top-1 drop-shadow-lg hover:shadow-lg text-red-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
          </svg>
          
            <div className="h-12 flex items-center">
              <p className="uppercase font-semibold text-center text-xl text-gray-600">
                {course.title}
              </p>
            </div>
            <div className="w-56"> 
              <p className="text-xs text-black/50 font-light mt-5  text-center">
                {t.learnmore}
              </p>
            </div>
            
        </div>
      ))}
    </div>
     
     
      {showCourses ? <ShowCourse course={currentCourse} setShowCourses={setShowCourses} setScrollStop={setScrollStop}  /> : <></>}
    </div>
  )
}

export default Courses