import { useRouter } from 'next/router';
import { motion } from "framer-motion";

import Branches from './Branches';
import {BranchesLocale} from "../../locales/Branches"
import Link from 'next/link';

const ShowType = ({branch,  setShowBranch, setScrollStop})=>{
    const router = useRouter();
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const branches = BranchesLocale[l];

    return   (
          <div className="transition-all duration-300 ease-in-out flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none" >
            <div className='w-screen h-screen absolute left-0 top-0 bg-black/30 backdrop-blur-sm'  onClick={() => {setShowBranch(false); setScrollStop(false)}}>
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
                <div className="text-black z-20 absolute right-0 top-0 transition-all duration-200 ease-in-out hover:bg-gray-100/50 p-2 rounded-full m-5 md:bg-transparent bg-gray-100/80" 
                onClick={() => {setShowBranch(false); setScrollStop(false)}}>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='md:flex lg:w-full overflow-x-hidden'>
                    <div className='md:w-1/2 md:m-10 '>
                        <div className='aspect-w-16 aspect-h-9 bg-cover bg-center' placeholder="blur" loading="eager" style={{'backgroundImage': `url(${branch.cover}`}} > </div>
                    </div>
                   <div className='md:w-1/2 md:mx-0 mx-10 my-10 md:pr-10'>
                        <p className='uppercase font-semibold text-gray-800 text-xl'>
                            {branch.title}
                        </p>
                         <div className='my-4 text-gray-600 mb-5'>
                            <div className='mt-5'>
                                <p className='uppercase font-medium text-gray-900 mb-1 text-sm'>
                                    {branches.manager} :
                                </p>
                                <p className='font-light text-sm'>
                                    {branch.manager}
                                </p>
                            </div>
                        </div>
                        <div className='my-4 text-gray-600 mb-5'>
                            <div className='mt-5'>
                                <p className='uppercase font-medium text-gray-900 mb-1 text-sm'>
                                    {branches.location_title} :
                                </p>
                                <p className='font-light text-sm'>
                                    {branch.location}
                                </p>
                            </div>
                        </div>
                        <div className='my-4 text-gray-600 mb-5'>
                            <div className='mt-5'>
                                <p className='uppercase font-medium text-gray-900 mb-5 text-sm'>
                                    {branches.register} :
                                </p>
                            </div>
                            <div className='font-medium'>
                                <Link href={branch.url} >
                                    <a target="_blank">
                                        <div className='transition-all duration-300 ease-in-out h-10 border border-blue-500 rounded-md text-blue-500 flex justify-center items-center hover:bg-blue-500 hover:text-white my-2 mr-2'>
                                            <p className='uppercase  text-sm'>{branches.viaOnline}</p>
                                        </div>
                                    </a>
                                </Link>

                                <Link href={`tel:${branch.phone}`}>
                                    <a>
                                        <div className='transition-all duration-300 ease-in-out h-10 border border-emerald-500 rounded-md text-emerald-500 flex justify-center items-center hover:bg-emerald-500 hover:text-white my-2 mr-2' >
                                            <p className='uppercase text-sm'>{branches.viaPhone}</p>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                       </div>
                    </div>
                </div>
            </motion.div>
          </div>      
    )
}

export default ShowType