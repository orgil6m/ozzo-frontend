import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import { useRouter } from 'next/router'

export default function Example() {
    const router = useRouter();
    const { pathname, asPath, query } = router;
    const t = router.locale === 'en' ? ["en" , "mn", "cn"]: router.locale === 'cn' ?  ["cn" , "mn", "en"] : ["mn" , "en", "cn"]
    return ( 
    <div className="w-24 text-right ">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="transition-all duration-500 ease-in-out inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-800 hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <GlobeIcon aria-hidden="true"/>
            <p className='capitalize'>{t[0]}</p>
            <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1 text-slate-400" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95" >
          <Menu.Items className="absolute left-0 w-24 mt-2 origin-top-right bg-white divide-y divide-gray-100 shadow-lg rounded-md  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <div className="px-1 py-1 ">        
              <Menu.Item>
                {({ active }) => (
                  <button className={`${ active ? 'bg-gray-100 text-black' : 'text-gray-900' } group flex rounded-md items-center w-full px-2 py-2 text-sm`} 
                  onClick={() => { 
                    router.push({ pathname, query }, asPath,  { locale: t[1] })
                    }} >
                    {active ? (  <TranlationIcon className="w-5 h-5 mr-2" aria-hidden="true" />): (
                    <TranlationIcon className="w-5 h-5 mr-2" aria-hidden="true" /> )}
                    <p className='capitalize'>{t[1]}</p>
                  </button>
                )}
              </Menu.Item>
              </div>
               <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button className={`${ active ? 'bg-gray-100 text-black' : 'text-gray-900' } group flex rounded-md items-center w-full px-2 py-2 text-sm`} 
                   onClick={() => { 
                     router.push({ pathname, query }, asPath, { locale: t[2] }) }} >
                    {active ? ( <TranlationIcon/> ) : ( 
                    <TranlationIcon /> )}
                      <p className='capitalize'>{t[2]}</p>
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

function GlobeIcon(props){
  return (
    <svg className="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="#d64635">
      <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
  </svg>
//   <svg  className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="#D64635" strokeWidth={2}>
//   <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
// </svg>
  )
}

function TranlationIcon(props){
  return (
  <svg className="h-4 w-4 mx-1 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
  </svg>
  )
}
