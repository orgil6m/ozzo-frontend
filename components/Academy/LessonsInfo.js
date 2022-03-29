import React from 'react'
import { useRouter } from 'next/router';


const LessonsInfo = () => {
    const router = useRouter()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
   
    return (
    <div className='w-full py-5 cursor-default my-10'>
      <div className=' lg:w-full font-semibold md:text-xl text-lg flex items-center text-gray-800 mb-5 '> 
        <div className=' md:h-10 h-8 w-1 bg-sky-500 mr-5'></div>
        <p className='w-4/6 uppercase'>Lessons Info</p>
      </div>
     
    </div>
  )
}

export default LessonsInfo