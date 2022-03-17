import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { ChevronDownIcon } from '@heroicons/react/solid'

import { mn, en , cn } from '../locales/Navbar';

export default function Example() {
    const router = useRouter();
    const t = router.locale === 'en' ? en : router.locale === 'cn' ?  cn : mn;
    const [sOpen, setsOpen] = useState(false);
    return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div >
          <Menu.Button className="transition-all duration-500 ease-in-out inline-flex justify-center w-full px-4 py-2 text-gray-500 text-md hover:text-black hover:border-red-500 border-b-2 border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" >
            {t.services}
           <ChevronDownIcon className="w-5 h-5 ml-2 mt-1 text-slate-400" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95" >
          <Menu.Items className="absolute right-0 w-64 mt-2 bg-white rounded-md divide-y divide-gray-100 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                  <button className={`${ active ? 'transition duration-300 ease-in-out bg-gray-100 text-black' : 'text-gray-900' } group flex rounded-md items-center w-full px-2 py-2 text-sm`} 
                  onClick={() => { router.push('/services/academy')}} >
                    {active ? (  <StudyIcon />): (
                    <StudyIcon /> )}
                    {t.academy}
                  </button>
                )}
            </Menu.Item>
               </div>
                <div className="px-1 py-1 ">
            <Menu.Item>
                 {({ active }) => (
                  <button className={`${ active ? 'transition duration-300 ease-in-out bg-gray-100 text-black' : 'text-gray-900' } group flex rounded-md items-center w-full px-2 py-2 text-sm`} 
                  onClick={() => { router.push('/services/store')}} >
                    {active ? (  <StoreIcon />): (
                    <StoreIcon /> )}
                    {t.store}
                  </button>
                )}
            </Menu.Item>
            </div>
             <div className="px-1 py-1 ">
            <Menu.Item>
                 {({ active }) => (
                  <button className={`${ active ? 'transition duration-300 ease-in-out  bg-gray-100 text-black' : 'text-gray-900' } group flex rounded-md items-center w-full px-2 py-2 text-sm`} 
                  onClick={() => { router.push('/services/maintenance')}} >
                    {active ? (  <SettingsIcon />): (
                    <SettingsIcon /> )}
                    {t.maintenance}
                  </button>
                )}
            </Menu.Item>
            </div>
           
            <div className="px-1 py-1 ">
            <Menu.Item>
                 {({ active }) => (
                  <button className={`${ active ? 'transition duration-300 ease-in-out  bg-gray-100 text-black' : 'text-gray-900' } group flex rounded-md items-center w-full px-2 py-2 text-sm`} 
                  onClick={() => { router.push('/services/rent')}} >
                    {active ? (  <RentIcon />): (
                    <RentIcon /> )}
                    {t.rent}
                  </button>
                )}
            </Menu.Item>
            </div>
             <div className="px-1 py-1 ">
            <Menu.Item>
                 {({ active }) => (
                  <button className={`${ active ? 'transition duration-300 ease-in-out  bg-gray-100 text-black' : 'text-gray-900' } group flex rounded-md items-center w-full px-2 py-2 text-sm`} 
                  onClick={() => { router.push('/services/dev')}} >
                    {active ? (  <DevIcon />): (
                    <DevIcon /> )}
                    {t.dev}
                  </button>
                )}
            </Menu.Item>
            </div>
         
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

function StudyIcon(props){
  return (
    <svg  className="h-5 w-5 m-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="#d64635" strokeWidth={2}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
  )
}

function StoreIcon(props){
  return (
    <svg  className="h-5 w-5 m-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="#d64635" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
}

function SettingsIcon(props){
  return (
    <svg  className="h-5 w-5 m-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="#d64635" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}
function RentIcon(props){
  return (
   <svg className="h-5 w-5 m-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="#D64635" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function DevIcon(props){
  return (
  // <svg className="h-5 w-5 m-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="#D64635" strokeWidth={2}>
  //   <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  // </svg>
  <svg className="h-5 w-5 m-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="#D64635" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
  )
}
function WebIcon(props){
  return (
  <svg className="h-5 w-5 m-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="#D64635" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
</svg>

  )
}
