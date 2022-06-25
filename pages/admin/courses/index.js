/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router'
import React, {useContext, useEffect, useState} from 'react'
import Head from 'next/head';
import { NavbarLocale } from '../../../locales/Navbar';
import {DataContext} from "../../../store/GlobalState"
import Loading from "../../../components/Loading"
import {getCourses } from "../../../Datas/Courses"
import moment from 'moment'; 
import 'moment/locale/mn';
moment.locale('mn')

const Courses = () => {
    const {state, dispatch} = useContext(DataContext)
    const {auth} = state
    const router = useRouter()
    const [select, setSelect] = useState()
    const [foundCourses, setfoundCourses] = useState()
    const [coursesData, setCoursesData] = useState()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = NavbarLocale[l]
    useEffect(() => {
      const user = JSON.parse(window.localStorage.getItem("user"))
      if(!user) return router.push('/login')
      getCourses().then(response => {
        setCoursesData(response)
        setfoundCourses(response)
      })
     
    }, [])
    if(!auth.user || auth.user === undefined){
      return(
        <Loading />
      )
    } 
    if(auth.user.admin !== true ){
      return (
        <div className='fixed inset-0 flex justify-center items-center flex-col'>
          <p className=''>
          Танд Админ хэсэгт нэвтрэх эрх байхгүй байна!
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
    const filter = (e, type) => {
        if(type === "title"){
            if(e !=  ''){
                const result = foundCourses.filter(row => {return row.course[l].title.toLowerCase().startsWith(e.toLowerCase())})
                setfoundCourses(result)
            } else{
                setfoundCourses(coursesData)
            }
        }
        else if(type === 'ind'){
            if(e !=  ''){
              const result = foundCourses.filter(row => {
                if(e == 'true' && row.individual === true) {
                  return row.individual 
                } else if(e == 'false' && (row.individual == undefined || row.individual == "")){
                  return row
                } 
            })
            setfoundCourses(result)
            } else{
              setfoundCourses(coursesData)
            }
        }
        else if(type === 'group'){
            if(e !=  ''){
              const result = foundCourses.filter(row => {
                if(e == 'true' && row.group === true) {
                  return row.group 
                } else if(e == 'false' && (row.group == undefined || row.group == "")){
                  return row
                } 
            })
            setfoundCourses(result)
            } else{
              setfoundCourses(coursesData)
            }
        }
    }
   
     
    
  return(
    <div className='pt-20 cursor-default'>
      <Head>
        <title> Хөтөлбөр | {t.ozzo}</title>
      </Head>
      <div className='w-full lg:px-32 md:px-20 lg:py-10 p-5  '>
        <div className="lg:mb-10 mb-5 flex cursor-default">
          <p className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black" onClick={() => router.push("/admin")}> Админ </p>
          <p className="text-sm text-black/50 pr-2 "> / </p>
          <p className="transition-all duration-300 ease-in-out text-sm text-black"> Хөтөлбөр </p>
        </div>
        <div className='md:mt-0 mt-10 flex'>
          <div className="transition-all duration-300 ease-in-out hover:text-white hover:bg-green-500 flex items-center px-5 upper bg-green-100 py-2 rounded-md  text-green-500 font-medium "  onClick={()=> router.push("/admin/courses/new")}>
            <svg  className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
            </svg>
            <p className="">
              Бүртгэх
            </p>
          </div>
        </div>
        <div className='overflow-scroll w-full'>
          <table className="w-full text-sm text-left text-gray-500 my-10 ">
            <thead className="text-xs text-gray-800 uppercase bg-gray-100 ">
              <tr>
                  <th scope="col" className="px-6 py-3">
                      <p className='truncate'>
                          Зураг
                      </p>
                  </th>
                  <th scope="col" className="px-6 py-3">
                      <p className='truncate'>
                          Хөтөлбөрийн нэр
                      </p>
                  </th>
                  <th scope="col" className="px-6 py-3">
                      <p className='truncate'>
                          Ганцаарчилсан
                      </p>
                  </th>
                  <th scope="col" className="px-6 py-3">
                      <p className='truncate'>
                          Групп
                      </p>
                  </th>
                  <th scope="col" className="px-6 py-3">
                      <p className='truncate'>
                        Оруулсан
                      </p>
                  </th>
                  <th scope="col" className="px-6 py-3">
                      <p className='truncate'>
                        Огноо
                      </p>
                  </th>
              </tr>
            </thead>
            <thead className="text-xs text-gray-800 uppercase border-b ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Хайх
                </th>
                <th scope="col" className="px-2 py-3">
                  <input className='transition-all duration-300 ease-in-out outline-none pl-4 py-2 rounded-sm border border-gray-100 focus:border-gray-300' placeholder='Хайх Утга...' onChange={(e)=> filter(e.target.value, "title")} />
                </th>
                <th scope="col" className="px-6 py-3">
                  <select className='py-2 outline-none ' onChange={(e)=> filter(e.target.value, "ind")}>
                    <option value={""}>
                      Шүүх
                    </option>
                    <option value={"true"}>
                      Тийм
                    </option>
                    <option value={false}>
                      Үгүй
                    </option>
                  </select>
                </th>
                <th scope="col" className="px-6 py-3">
                  <select className='py-2 outline-none ' onChange={(e)=> filter(e.target.value, "group")}>
                    <option value={""}>
                      Шүүх
                    </option>
                    <option value={"true"}>
                      Тийм
                    </option>
                    <option value={false}>
                      Үгүй
                    </option>
                  </select>
                </th>
                <th scope="col" className="px-2 py-3">
                  <input className='transition-all duration-300 ease-in-out outline-none pl-4 py-2 rounded-sm border border-gray-100 focus:border-gray-300' placeholder='Хайх Утга...' onChange={(e)=> filter(e.target.value, "title")} />
                </th>
                <th scope="col" className="px-2 py-3">
                  <input className='transition-all duration-300 ease-in-out outline-none pl-4 py-2 rounded-sm border border-gray-100 focus:border-gray-300' placeholder='Хайх Утга...'  />
                </th>
              </tr>
            </thead>
            <tbody>
            {foundCourses && foundCourses.length > 0 ? (
              foundCourses.map((row, index) => (
                <tr key={index} onClick={()=> {setSelect(index)} } className={`border-b ${select === index ? "text-gray-900 bg-gray-100" : ""}`}> 
                {row.img ?
                  <td scope="row" className="w-20 font-medium text-gray-900 " >
                    <div className='h-20 w-20 bg-cover bg-center m-2 rounded-sm' 
                    style={{'backgroundImage': `url(${row.img}`}}
                    onClick={()=> router.push("/admin/courses/"+row._id)}
                    >
                    </div>
                  </td>
                  :
                  <td scope="row" className=" font-medium text-gray-900">
                    <div className='h-20 w-20 flex bg-gray-100 justify-center items-center m-2 rounded-sm' onClick={()=> router.push("/admin/courses/"+row._id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </td>
                  }
                  <td scope="row" className='px-6 py-3'>
                    <p className='hover:underline' onClick={()=> router.push("/admin/courses/"+row._id)}>
                    {row.course && row.course[l].title}
                    </p>
                  </td>
                  <td  scope="row" className='px-6 py-3'>
                    {row.individual ?
                    <div className='flex justify-center items-center text-green-500'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    :
                    <div className='flex justify-center items-center text-red-500'>
                    -
                    </div>
                    }
                  </td>
                  <td  scope="row" className='px-6 py-3'>
                    {row.group ?
                    <div className='flex justify-center items-center text-green-500'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    :
                    <div className='flex justify-center items-center text-red-500'>
                    -
                    </div>
                    }
                  </td>
                  <td scope="row" className="w-20  text-gray-700 px-6 py-3" >
                      {row.updatedBy && row.updatedBy.map((r, i) => (
                        <div key={i}>
                          <p className='capitalize'> - {r}</p>
                        </div>
                      ))  }
                  </td>
                  <td scope="row" className="w-20 text-gray-700 px-6 py-3" >
                      <p className='truncate'> {row.updatedDate && moment(row.updatedDate).calendar()}</p>
                  </td>
                </tr>
              )))
            :
            <tr>
              <td colSpan={10} className="text-center my-2">
                <div className='my-5 text-red-400 font-medium'>
                  Илэрц олдсонгүй
                </div>
              </td>
            </tr>
            }
            </tbody>
          </table>
        </div>
     </div>
    </div>
  )  
}

export default Courses;
