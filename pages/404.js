import React from 'react'
import error404 from "../Assets/404.svg"
import { useRouter } from 'next/router'

const Custom404 = () => {
    const router = useRouter()
    return(
    <div className='fixed inset-0 h-screen w-screen flex flex-col items-center justify-center pt-10'>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-400">
            <p className='uppercase font-bold md:text-2xl text:lg'>
                Хуудас олдсонгүй!
            </p>
        </span>

        <img className='md:h-1/2 h-1/3 my-5' src={error404.src} alt="404" />
       <button className='transition-all duration-300 ease-in-out outline-none py-2 pr-8 pl-6 mt-5 bg-red-100 text-red-500 rounded-md flex items-center hover:text-white hover:bg-red-500' onClick={()=> router.back()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>
           Буцах
       </button>
    </div>
    
  )
}

export default Custom404