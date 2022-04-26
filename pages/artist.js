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
                Артист удирдлагын хэсэгт тавтай морил! <span className='font-bold'>{auth.user.firstname[l]} {auth.user.lastname[l]} </span>
              </p>
        </div>
     </div>
    </div>
  )  
}

export default Admin;



function LinkedinIcon (){
    return(
        <svg width="16" height="16" viewBox="0 0 32 32" fill="white" >
            <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" />
        </svg>
    )
}
function FacebookIcon (){
    return(
        <svg  x="0px" y="0px" width="16" height="16" viewBox="0 0 24 24" fill="#fff">  
            <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" />
        </svg>
    )
}
function InstagramIcon (){
    return(
        <svg x="0px" y="0px" width="16" height="16" viewBox="0 0 30 30" fill="white">   
            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
        </svg>
    )
}
function YoutubeIcon (){
    return(
        <svg  x="0px" y="0px" width="16" height="16" viewBox="0 0 64 64" fill="white">
            <path d="M56.456,17.442c-0.339-1.44-1.421-2.595-2.866-3.053C49.761,13.174,41.454,12,32,12s-17.761,1.174-21.591,2.389 c-1.445,0.458-2.527,1.613-2.866,3.053C6.903,20.161,6,25.203,6,32c0,6.797,0.903,11.839,1.544,14.558 c0.339,1.44,1.421,2.595,2.866,3.053C14.239,50.826,22.546,52,32,52s17.761-1.174,21.591-2.389 c1.445-0.458,2.527-1.613,2.866-3.053C57.097,43.839,58,38.797,58,32C58,25.203,57.097,20.161,56.456,17.442z M27,40V24l14.857,8 L27,40z" />
        </svg>
    )
}
function EmailIcon (){
    return(
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="white">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
    )
}

function WebIcon (){
    return(
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
    )
}