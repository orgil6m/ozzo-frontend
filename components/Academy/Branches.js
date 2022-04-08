import React from 'react'
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { BranchesLocale } from '../../locales/Branches'
import { NavbarLocale } from '../../locales/Navbar';
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
        <div className='h-full w-full grid lg:grid-cols-4 md:grid-cols-2 gap-5 cursor-default'>
            {branches.branches.map((branch, index) => (
              <div key={index} className={`transition-all duration-300 ease-in-out  border border-gray-100 rounded-md text-gray-700 font-semibold text-base shadow-sm uppercase overflow-hidden hover:-translate-y-2`} onClick={()=> {setShowBranch(true); setCurrentBranch(branch); setScrollStop(true)}}>
                    <div className='w-full aspect-h-9 aspect-w-16 bg-cover bg-center' style={{'backgroundImage': `url(${branch.cover}`}}>
                    </div>
                  <div className='w-full flex justify-center px-5 pt-5 items-center'>
                    {branch.title}
                  </div>
                   <div className='capitalize w-full flex items-center justify-center'>
                        <p className='text-xs text-black/50 font-light my-5 text-center'>{NavbarLocale[l].learnmore}</p>
                    </div>
                </div>
            ))}   

        {showBranch ? <ShowBranch branch={currentBranch} setShowBranch={setShowBranch} setScrollStop={setScrollStop}  /> : <></>}
        </div>
          
  )
}

export default Branches