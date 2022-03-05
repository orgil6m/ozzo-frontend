import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import { useRouter } from 'next/router'

export default function Example() {
    const router = useRouter();
    const { pathname, asPath, query } = router;
    const t = router.locale === 'en' ? ["En" , "Mn", "Cn"]: router.locale === 'cn' ?  ["Cn" , "Mn", "En"] : ["Mn" , "En", "Cn"]
    return ( 
    <div className="w-24 text-right ">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="transition-all duration-500 ease-in-out inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-black rounded-md hover:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <GlobeIcon aria-hidden="true"/>
            {t[0]}
            <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1 text-slate-400" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95" >
          <Menu.Items className="absolute left-0 w-24 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <div className="px-1 py-1 ">         
              <Menu.Item>
                {({ active }) => (
                  <button className={`${ active ? 'bg-gray-100 text-black' : 'text-gray-900' } group flex rounded-md items-center w-full px-2 py-2 text-sm`} 
                  onClick={() => { router.push({ pathname, query }, asPath, { locale: t[1] })}} >
                    {active ? (  <GlobeIcon className="w-5 h-5 mr-2" aria-hidden="true" />): (
                    <GlobeIcon className="w-5 h-5 mr-2" aria-hidden="true" /> )}
                    {t[1]}
                  </button>
                )}
              </Menu.Item>
              </div>
               <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button className={`${ active ? 'bg-gray-100 text-black' : 'text-gray-900' } group flex rounded-md items-center w-full px-2 py-2 text-sm`} 
                   onClick={() => { router.push({ pathname, query }, asPath, { locale: t[2] })}} >
                    {active ? ( <GlobeIcon className="w-5 h-5 mr-2 " aria-hidden="true" /> ) : ( 
                    <GlobeIcon className="w-5 h-5 mr-2" aria-hidden="true" /> )}
                        {t[2]}
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mr-2 text-gray-500"
      viewBox="0 0 20 20"
      fill="currentcolor">
      <path
        fillRule="evenodd"
        d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
        clipRule="evenodd"
      />
  </svg>
  )
}
