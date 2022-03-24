import React, { useRef } from "react";
import { useRouter } from 'next/router';

import { Teacherslocale } from '../locales/Teachers';
import {getUsers} from "../Datas/Teachers";
import useSWR from 'swr'


const Teachers = () => {
    const router = useRouter();
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'   
    const teachers  = Teacherslocale[l]
    return (
        <div className="w-full flex flex-col pt-10 text-gray-200 cursor-default select-none py-20 ">
            <div className=' lg:w-full font-semibold  flex items-center text-gray-800 mb-10'> 
                <div className='  md:h-10 h-8 w-1 bg-teal-500 mdmr-5 mr-5'></div>
                <p className='mr-5 uppercase lg:text-2xl text-base'>{teachers.title}</p>
            </div>
            <div className="">
            </div>
        </div>
    )
}

export default Teachers