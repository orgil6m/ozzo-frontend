import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { ChevronDownIcon } from '@heroicons/react/solid'

import {NavbarLocale } from '../locales/Navbar';

export default function Example() {
    const router = useRouter();
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = NavbarLocale[l]
    return (
    <div>
      <Menu as="div" className=" inline-block text-left cursor-default">
        <div>
          <Menu.Button className="transition-all duration-500 ease-in-out inline-flex justify-center w-full px-4 py-2 text-gray-500 text-md hover:text-black hover:border-red-500 border-b-2 border-transparent  focus:outline-none" >
            {t.services}
           <ChevronDownIcon className="w-4 h-4 ml-2 mt-1 text-gray-500" aria-hidden="true" />
          </Menu.Button>
        </div>
        <Transition as={Fragment} 
          enter="transition ease-out duration-100" 
          enterFrom="transform opacity-0 scale-95" 
          enterTo="transform opacity-100 scale-100" 
          leave="transition ease-in duration-75" 
          leaveFrom="transform opacity-100 scale-100" 
          leaveTo="transform opacity-0 scale-95" 
        >

          <Menu.Items className="absolute -bottom-20 left-0 w-full flex h-20 items-center justify-around mt-2 bg-white backdrop-blur-lg border border-gray-100/20 rounded-b-md shadow-lg focus:outline-none ">

            {t.service.map((service, index) => (
              <div key={index}>
                  <Menu.Item>
                    {({ active }) => (
                      <div className={`${ active ? `transition  duration-300 ease-in-out ${service.color} ` : '' } flex rounded-md items-center w-full px-2 py-2 text-sm`} 
                      onClick={() => {router.push(service.url)}}>
                      <div className={`p-1 mr-2 rounded-lg ${service.color}`}>
                        {service.icon}
                      </div>
                      {service.title}
                      </div>
                    )}
                  </Menu.Item>
                </div>
            ))}

          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
