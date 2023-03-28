import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const AddPosition =() =>{
    const router = useRouter()

    return (
        <div className='pt-20 cursor-default bg-stone-50'>
        <Head>
            <title> Хүний нөөц | ОЗЗО ХХК</title>
        </Head>

        <div className='w-full lg:px-32 md:px-20 lg:py-10 p-5 '>
            <div className="lg:mb-10 mb-5 flex cursor-default">
                <p className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black" onClick={() => router.push("/hr")}> Хүний нөөц </p>
                <p className="text-sm text-black/50 pr-2 "> / </p>
                <p className="transition-all duration-300 ease-in-out text-sm text-black pr-2 " onClick={() => router.push("/admin")}> Ажлын байр оруулах </p>
            </div>
            <div className='lg:w-full font-semibold text-xl flex items-center text-gray-800 my-10'> 
                <div className='md:h-10 h-8 w-1 bg-red-500 mr-5'></div>
                <p className='uppercase'>Ажлын байр оруулах</p>
            </div>
        
        </div>
    </div>
    )
}

export default AddPosition