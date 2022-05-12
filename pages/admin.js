import { useRouter } from 'next/router'
import React, {useContext, useEffect, useState} from 'react'
import moment from 'moment';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { NavbarLocale } from '../locales/Navbar';
import {DataContext} from "../store/GlobalState"
import Image from 'next/image';
import Loading from "../components/Loading"
import {getUsers} from "../Datas/Users"
 
export async function getServerSideProps(context) {
  const UsersData = await getUsers()
  return {
    props: {UsersData},
  }
}

const Admin = ({UsersData}) => {
    const {state, dispatch} = useContext(DataContext)
    const {auth} = state
    const router = useRouter()
    const [select, setSelect] = useState()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = NavbarLocale[l]

    useEffect(() => {
      const user = JSON.parse(window.localStorage.getItem("user"))
      if(!user) return router.push('/login')
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

  return(
    <div className='pt-20 cursor-default w '>
      <Head>
        <title> {t.ozzo}</title>
      </Head>
      <div className='w-full lg:px-32 md:px-20 lg:py-10 p-5  '>
        <div className='md:px-10 px-5 md:m-5 m-2 my-5 rounded-sm text-neutral-500 font-light text-sm flex flex-col items-end'>
            <p>
              Админ удирдлагын хэсэгт тавтай морил! <span className='font-bold'>{auth.user.informations[l].firstname} {auth.user.informations[l].lastname} </span>
            </p>
        </div>
        <div className='overflow-scroll w-full'>
        <table className="w-full text-sm text-left text-gray-500 my-10 ">
          <thead className="text-xs text-gray-800 uppercase bg-gray-100">
            <tr>
                <th scope="col" className="px-6 py-3">
                  Зураг
                </th>
                <th scope="col" className="px-6 py-3">
                  Нэр
                </th>
                <th scope="col" className="px-6 py-3">
                  <p className='truncate'>
                    Хэрэглэгчийн нэр
                  </p>
                </th>
                <th scope="col" className="px-6 py-3">
                  Утас
                </th>
                <th scope="col" className="px-6 py-3">
                  Админ
                </th>
                <th scope="col" className="px-6 py-3">
                  Багш
                </th>
                <th scope="col" className="px-6 py-3">
                  Сервис
                </th>
                <th scope="col" className="px-6 py-3">
                  Артист
                </th>
                  <th scope="col" className="px-6 py-3">
                  Лабель
                </th>
            </tr>
          </thead>
          <thead className="text-xs text-gray-800 uppercase border-b">
            <tr>
              <th scope="col" className="px-6 py-3">
                Хайх
              </th>
              <th scope="col" className="px-2 py-3">
                <input className='transition-all duration-300 ease-in-out outline-none pl-4 py-2 rounded-sm border border-gray-100 focus:border-gray-300' placeholder='Хайх Утга...' />
              </th>
              <th scope="col" className="px-2 py-3">
                <input className='transition-all duration-300 ease-in-out outline-none pl-4 py-2 rounded-sm border border-gray-100 focus:border-gray-300' placeholder='Хайх Утга...' />
              </th>
              <th scope="col" className="px-2 py-3">
                <input className='transition-all duration-300 ease-in-out outline-none pl-4 py-2 rounded-sm border border-gray-100 focus:border-gray-300' placeholder='Хайх Утга...' />
              </th>
              <th scope="col" className="px-2 py-3">
                <select className='py-2 outline-none px-4'>
                  <option>
                    Шүүх
                  </option>
                  <option>
                    Тийм
                  </option>
                  <option>
                    Үгүй
                  </option>
                </select>
              </th>
              <th scope="col" className="px-2 py-3">
                  <select className='py-2 outline-none px-4'>
                  <option>
                    Шүүх
                  </option>
                  <option>
                    Тийм
                  </option>
                  <option>
                    Үгүй
                  </option>
                </select>
              </th>
              <th scope="col" className="px-2 py-3">
                <select className='py-2 outline-none px-4'>
                  <option>
                    Шүүх
                  </option>
                  <option>
                    Тийм
                  </option>
                  <option>
                    Үгүй
                  </option>
                </select>
              </th>
              <th scope="col" className="px-2 py-3">
                <select className='py-2 outline-none px-4'>
                  <option>
                    Шүүх
                  </option>
                  <option>
                    Тийм
                  </option>
                  <option>
                    Үгүй
                  </option>
                </select>
              </th>
              <th scope="col" className="px-2 py-3">
                <select className='py-2 outline-none px-4'>
                  <option>
                    Шүүх
                  </option>
                  <option>
                    Тийм
                  </option>
                  <option>
                    Үгүй
                  </option>
                </select>
              </th>
            </tr>
          </thead>
          <tbody>
            {UsersData.map((row, index) => (
              <tr key={index} onClick={()=> {setSelect(index)} } className={`border-b ${select === index ? "text-gray-900 bg-gray-100" : ""}`}> 
              {row.profilephoto || row.artistPhoto ?
                <td scope="row" className="w-20 font-medium text-gray-900 " >
                  <div className='h-20 w-20 bg-cover bg-center m-2 rounded-sm' style={{'backgroundImage': `url(${row.profilephoto && row.profilephoto || row.artistPhoto}`}}>
                  </div>
                </td>
                :
                <td scope="row" className=" font-medium text-gray-900">
                  <div className='h-20 w-20 flex bg-gray-100 justify-center items-center m-2 rounded-sm'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  
                </td>
                }
                <td scope="row" className='px-6 py-3'>
                  <p className='hover:underline' n>
                  {row.informations[l].firstname}
                  </p>
                </td>
                <td  scope="row" className='px-6 py-3'>
                  <p className='truncate'>
                    {row.username}
                  </p>
                </td>
                <td  scope="row" className='px-6 py-3'>
                  <a href={`tel:${row.number}`} className='transition-all duration-300 ease-in-out underline text-gray-700 font-bold hover:text-gray-500'>
                    {row.number}
                  </a>
                </td>
                <td  scope="row" className='px-6 py-3'>
                  {row.admin ?
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
                {row.teacher ?
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
                {row.service ?
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
                {row.artist ?
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
                {row.label ?
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
              </tr>
            ))}
          </tbody>
        </table>
        </div>
     </div>
    </div>
  )  
}

export default Admin;
