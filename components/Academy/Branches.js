import React from 'react'
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { BranchesLocale } from '../../locales/Branches'
import ShowBranch from "../Academy/ShowBranch"

const Branches = () => {
    const router = useRouter();
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const branches = BranchesLocale[l]
    const [showBranch, setShowBranch] = useState(false);
    const [currentBranch, setCurrentBranch] = useState({})
    const [scrollStop, setScrollStop] = useState(false)
    useEffect(() => {
    if (scrollStop) {
      document.body.style.overflow = "hidden";
    } else{
    document.body.style.overflow = 'unset';
    }
    });
    return (
        <div className='h-full w-full grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-10 cursor-default'>
            {branches.branches.map((branch, index) => (
              <div key={index} className={`transition-all duration-300 ease-in-out border border-gray-200 rounded-md text-gray-700 font-semibold text-base uppercase overflow-hidden hover:-translate-y-2 flex flex-col items-center relative group`} onClick={()=> {setShowBranch(true); setCurrentBranch(branch); setScrollStop(true)}}>
                    <div className='w-full aspect-h-9 aspect-w-16 bg-cover bg-center' style={{'backgroundImage': `url(${branch.cover}`}}>
                    </div>
                  <div className='w-full flex justify-center p-5 items-center'>
                    {branch.title}
                  </div>
                  <div className='transition-all duration-300 ease-in-out absolute right-3 top-3 text-white p-1 rounded-full'>
                    <svg className="h-4 w-4 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                </div>
            ))}   
        {showBranch ? <ShowBranch branch={currentBranch} setShowBranch={setShowBranch} setScrollStop={setScrollStop}  /> : <></>}
        </div>
          
  )
}

export default Branches