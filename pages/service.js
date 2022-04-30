import { useRouter } from 'next/router'
import React, {useContext, useEffect, useState} from 'react'
import moment from 'moment';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { NavbarLocale } from '../locales/Navbar';
import {DataContext} from "../store/GlobalState"
import Image from 'next/image';


export async function getServerSideProps() {
  const base = process.env.BASE_URL
  return {
    props: {base},
  }
}


const Admin = ({base}) => {
  
    const {state, dispatch} = useContext(DataContext)
    const {auth} = state
    const router = useRouter()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = NavbarLocale[l]
    const logout = ()=> {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("tokenExpTime");
        window.localStorage.removeItem("user");
        dispatch({type:'NOTIFY',payload:{success: "Амжилттай гарлаа!"}})
        dispatch({type:'AUTH', payload:{}})
        router.push('/login')
    }
    useEffect(() => {
    const token = window.localStorage.getItem("token");
    const tokenExpTime = window.localStorage.getItem("tokenExpTime");
    if (!token || moment().isAfter(moment(tokenExpTime))) {
        logout()
    } 
}, [])
    if(Object.keys(auth).length === 0){
      return <></>
    }

    return(
      
    <div className='pt-20 cursor-default w '>
      <Head>
        <title> {t.ozzo}</title>
      </Head>
      <div className='w-full lg:px-32 md:px-20 lg:py-10 p-5  '>
        <div className='p-2 px-10 m-5 rounded-md text-neutral-500 font-light text-sm flex flex-col items-end'>
            <p>
                Засвар удирдлагын хэсэгт тавтай морил! <span className='font-bold'>{auth.user.informations[l].firstname} {auth.user.informations[l].lastname} </span>
              </p>
        </div>
     </div>
    </div>
  )  
}

export default Admin;
