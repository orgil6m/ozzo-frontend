/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router'
import React, {useContext, useEffect, useState} from 'react'
import Head from 'next/head';
import { NavbarLocale } from '../../locales/Navbar';
import {DataContext} from "../../store/GlobalState"
import Loading from "../../components/Loading"
import {getUsers} from "../../Datas/Users"
 

const Admin = () => {
    const {state, dispatch} = useContext(DataContext)
    const {auth} = state
    const router = useRouter()
    const [select, setSelect] = useState()
    const [foundUsers, setFoundUsers] = useState()
    const [usersData, setUsersData] = useState()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = NavbarLocale[l]
    useEffect(() => {
      const user = JSON.parse(window.localStorage.getItem("user"))
      if(!user) return router.push('/login')
      getUsers().then(response => {
        setUsersData(response)
        setFoundUsers(response)
      })
      // getUsers().then(response => {
      //   if(response.status === 200){
         
      //     return response.json()
      //   }else if(response.status === 401){
      //     localStorage.clear()
      //     router.push('/login')
      //     return []
      //   }else{
      //     return []
      //   }
      // }
      // ).then(json => setFoundUsers(json.data))
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
      if(type === "firstname"){
        if(e !=  ''){
          const result = foundUsers.filter(row => {
          return row.informations[l].firstname.toLowerCase().startsWith(e.toLowerCase())
        })
        setFoundUsers(result)
        } else{
          setFoundUsers(usersData)
        }
      }
      else if(type === 'username'){
        if(e !=  ''){
          const result = foundUsers.filter(row => {
          return row.username.toLowerCase().startsWith(e.toLowerCase())
        })
        setFoundUsers(result)
        } else{
          setFoundUsers(usersData)
        }
      }
      else if(type === 'number'){
        if(e !=  ''){
          const result = foundUsers.filter(row => {
          return row.number && row.number.startsWith(e)
        })
        setFoundUsers(result)
        } else{
          setFoundUsers(usersData)
        }
      }
     
      else if(type === 'admin'){
        if(e !=  ''){
          const result = foundUsers.filter(row => {
            if(e == 'true' && row.admin === true) {
              return row.admin 
            } else if(e == 'false' && (row.admin == undefined || row.admin == "")){
              return row
            } 
        })
        setFoundUsers(result)
        } else{
          setFoundUsers(usersData)
        }
      }
      else if(type === 'teacher') 
      {
        if(e !=  ''){
          const result = foundUsers.filter(row => {
            if(e == 'true' && row.teacher === true) {
              return row.teacher 
            } else if(e == 'false' && (row.teacher == undefined || row.teacher == "")){
              return row
            } 
        })
        setFoundUsers(result)
        } else{
          setFoundUsers(usersData)
        }
      }
      else if(type === 'service') 
      {
        {
          if(e !=  ''){
            const result = foundUsers.filter(row => {
              if(e == 'true' && row.service === true) {
                return row.service 
              } else if(e == 'false' && (row.service == undefined || row.service == "")){
                return row
              } 
          })
          setFoundUsers(result)
          } else{
            setFoundUsers(usersData)
          }
        }
      }
      else if(type === 'artist')
      {
        {
          if(e !=  ''){
            const result = foundUsers.filter(row => {
              if(e == 'true' && row.artist === true) {
                return row.artist 
              } else if(e == 'false' && (row.artist == undefined || row.artist == "")){
                return row
              } 
          })
          setFoundUsers(result)
          } else{
            setFoundUsers(usersData)
          }
        }
      }
      else if(type === 'label')
      {
        {
          if(e !=  ''){
            const result = foundUsers.filter(row => {
              if(e == 'true' && row.label === true) {
                return row.label 
              } else if(e == 'false' && (row.label == undefined || row.label == "")){
                return row
              } 
          })
          setFoundUsers(result)
          } else{
            setFoundUsers(usersData)
          }
        }
      }
    }
  return(
    <div className='pt-20 cursor-default'>
      <Head>
        <title> Хэрэглэгчид | {t.ozzo}</title>
      </Head>
      <div className='w-full lg:px-32 md:px-20 lg:py-10 p-5  '>
        <div className="lg:mb-10 mb-5 flex cursor-default">
          <p className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black" onClick={() => router.push("/admin")}> Админ </p>
          <p className="text-sm text-black/50 pr-2 "> / </p>
          <p className="transition-all duration-300 ease-in-out text-sm text-black"> Хэрэглэгчид </p>
        </div>
       
        <div className='overflow-scroll w-full'>
        <table className="w-full text-sm text-left text-gray-500 my-10 ">
          <thead className="text-xs text-gray-800 uppercase bg-gray-100 ">
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
          <thead className="text-xs text-gray-800 uppercase border-b ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Хайх
              </th>
              <th scope="col" className="px-2 py-3">
                <input className='transition-all duration-300 ease-in-out outline-none pl-4 py-2 rounded-sm border border-gray-100 focus:border-gray-300' placeholder='Хайх Утга...' onChange={(e)=> filter(e.target.value, "firstname")}  />
              </th>
              <th scope="col" className="px-2 py-3">
                <input className='transition-all duration-300 ease-in-out outline-none pl-4 py-2 rounded-sm border border-gray-100 focus:border-gray-300' placeholder='Хайх Утга...' onChange={(e)=> filter(e.target.value, "username")}  />
              </th>
              <th scope="col" className="px-2 py-3">
                <input className='transition-all duration-300 ease-in-out outline-none pl-4 py-2 rounded-sm border border-gray-100 focus:border-gray-300' placeholder='Хайх Утга...' onChange={(e)=> filter(e.target.value, "number")} />
              </th>
              <th scope="col" className="px-2 py-3">
                <select className='py-2 outline-none px-4' onChange={(e)=> filter(e.target.value, "admin")}>
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
                <select className='py-2 outline-none px-4' onChange={(e)=> filter(e.target.value, "teacher")}>
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
                <select className='py-2 outline-none px-4' onChange={(e)=> filter(e.target.value, "service")}>
                  <option value={""}>
                    Шүүх
                  </option>
                  <option value={true}>
                    Тийм
                  </option>
                  <option value={false}>
                    Үгүй
                  </option>
                </select>
              </th>
              <th scope="col" className="px-2 py-3">
                <select className='py-2 outline-none px-4' onChange={(e)=> filter(e.target.value, "artist")}>
                  <option value={""}>
                    Шүүх
                  </option>
                  <option value={true}>
                    Тийм
                  </option>
                  <option value={false}>
                    Үгүй
                  </option>
                </select>
              </th>
              <th scope="col" className="px-2 py-3">
                <select className='py-2 outline-none px-4' onChange={(e)=> filter(e.target.value, "label")}>
                  <option value={""}>
                    Шүүх
                  </option>
                  <option value={true}>
                    Тийм
                  </option>
                  <option value={false}>
                    Үгүй
                  </option>
                </select>
              </th>
            </tr>
          </thead>
          <tbody>
          {foundUsers && foundUsers.length > 0 ? (
            foundUsers.map((row, index) => (
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
                  <p className='hover:underline' onClick={()=> router.push("/user/"+row._id)}>
                  {row.informations[l].firstname}
                  </p>
                </td>
                <td  scope="row" className='px-6 py-3'>
                  <p className='truncate hover:underline' onClick={()=> router.push("/user/"+row._id)}>
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

export default Admin;
