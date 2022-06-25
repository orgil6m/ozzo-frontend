import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import Link from 'next/link';
import {CoursesLocale} from "../../locales/Courses"
import { useState } from 'react';
import {BranchesLocale} from "../../locales/Branches"

const ShowCourse = ({course,  setShowCourses, setScrollStop})=>{
    console.log(course)
    const router = useRouter();
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const courses = CoursesLocale[l];
    const branches = BranchesLocale[l];
    const lessons = ""
    const [tab, setTab] = useState(0)
    tab === 0 ? lessons = course.course[l].beginner : tab === 1 ? lessons = course.course[l].intermediate : lessons = course.course[l].advanced
    return   (
          <div className="transition-all duration-300 ease-in-out flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none" >
            <div className='w-screen h-screen absolute left-0 top-0 bg-black/30 backdrop-blur-sm'  onClick={() => {setShowCourses(false); setScrollStop(false)}}>
            </div>
            <motion.div className="bg-white rounded-lg flex flex-col lg:w-2/3 relative max-h-[90%] w-11/12 overflow-y-scroll "
            initial="hidden" animate="visible" variants={{
            hidden :{
                scale :.8,
                opacity:0,
            },
            visible:{
                scale:1,
                opacity:1,
            },
          }}>
            <div className=" text-black absolute right-0 top-0 transition-all duration-200 ease-in-out hover:bg-gray-100/50 p-2 rounded-full m-5" 
            onClick={() => {setShowCourses(false); setScrollStop(false)}}>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
                <div className='md:flex lg:w-full '>
                    <div className='md:w-1/3 m-10 '> 
                        <div className='aspect-1 bg-cover bg-center rounded-lg' placeholder="blur" loading="eager" style={{'backgroundImage': `url(${course.img}`}} > </div>
                        <div className='mt-10 md:pr5'>
                            <p className='uppercase font-semibold mt-5 text-sm text-gray-600'>
                            { branches.register} :
                            </p>
                            <div className='md:my-3 my-5 w-full text-sm flex flex-col'>
                            <Link href="https://daavkatunes.mn/dgl">
                                <a target="_blank"
                                className='transition-all duration-300 ease-in-out w-full py-2 px-3 my-1 bg-sky-100 text-sky-500 rounded-md font-medium hover:bg-sky-500 hover:text-white flex items-center justify-center' >
                                    {branches.viaOnline}
                                </a>
                            </Link>
                            <Link href="tel:+976 77660330">
                                <a className='transition-all duration-300 ease-in-out w-full py-2 px-3 my-1 bg-emerald-100 text-emerald-500 rounded-md font-medium hover:bg-emerald-400 hover:text-white flex items-center justify-center'>
                                    {branches.viaPhone}
                                </a>
                            </Link>
                            </div>
                        </div>
                    </div>
                   <div className='md:w-2/3 md:mx-0 mx-10 mt-10 md:pr-10'>
                        <p className='uppercase font-semibold text-gray-800 text-xl'>
                            {course.text}
                        </p>
                        <div className='w-full flex justify-between items-center  rounded-md p-1 my-5 '>
                            <div className={`transition-all duration-200 ease-in-out py-2 w-1/3 mr-2 px-2 rounded-md md:text-base text-sm text-center hover:bg-sky-100 hover:text-sky-500 hover:shadow-sm ${tab === 0 ? "bg-sky-100 text-sky-500 " : "bg-gray-100"}`} onClick={() => setTab(0)}>
                                {courses.beginner_title}
                            </div>

                            <div className={`transition-all duration-200 ease-in-out  py-2 w-1/3 mr-2  px-2 rounded-md md:text-base text-sm text-center hover:bg-sky-100 hover:text-sky-500 hover:shadow-sm  ${tab === 1 ? "bg-sky-100 text-sky-500" : "bg-gray-100/80"}` } onClick={() => setTab(1)}>
                                {courses.intermediate_title}
                            </div>

                            <div className={`transition-all duration-200 ease-in-out  py-2 w-1/3 px-2 rounded-md md:text-base text-sm text-center hover:bg-sky-100 hover:text-sky-500 hover:shadow-sm ${tab === 2 ? "bg-sky-100 text-sky-500" : "bg-gray-100/80"}`}onClick={() => setTab(2)}>
                                {courses.advanced_title}                    
                            </div>
                        </div>
                        <div className='my-4 text-gray-600 mb-10'>
                            <div className='font-semibold uppercase mt-5 mb-2'>
                                <p>
                                    {courses.programmes} :
                                </p>
                            </div>
                            {lessons && lessons.map((id, index) => (
                            <div key={index} className="flex flex-col my-1">
                                <div className='flex text-red-500'>
                                    <div className='mt-2'>
                                        <svg className="w-3 h-3 mr-2 " viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className='text-gray-700 text-sm py-1'>
                                        {id}
                                    </p>
                                </div>
                            </div>   
                            ))}
                            <div className=' mt-5 text-red-500'>
                                <p className='uppercase font-semibold mt-5 text-gray-600'>
                                    {courses.pricing} :
                                </p>
                                {course.individual ?
                                <div className='flex items-center my-2'>
                                    <svg className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                    <p className='text-gray-600 mr-2 '>{courses.price.individual} : </p>
                                    <p className='text-gray-600 font-bold'>{course.price.individual}₮</p>
                                </div>
                                : ""}
                                {course.group ? 
                                <div className='flex items-center my-2'>
                                    <svg className="h-4 w-4 mr-2 " viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                    </svg>
                                    <p className='text-gray-600 mr-2 '>{courses.price.group} : </p>
                                    <p className='text-gray-600 font-bold'>{course.price.group}₮</p> 
                                </div>
                                : ""}
                            </div>

                            
                        </div>
                    </div>
                </div>
            </motion.div>
          </div>      
    )
}

export default ShowCourse