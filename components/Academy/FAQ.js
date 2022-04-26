import React from 'react'
import { useRouter } from 'next/router';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { Academy_FAQ } from '../../locales/FAQ';

const FAQ = () => {
    const router = useRouter()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const faq = Academy_FAQ[l]
    return (
    <div className='w-full py-5 cursor-default my-10'>
      <div className=' lg:w-full font-semibold md:text-xl text-lg flex items-center text-gray-800 mb-5 '> 
        <div className=' md:h-10 h-8 w-1 bg-emerald-500 mr-5'></div>
        <p className='w-4/6 uppercase'>{faq.title}</p>
      </div>
    <div className='mt-10'>
        {faq.questions.map((question, index) => (
            <div key={index} className="w-full border border-gray-200 my-4 py-4 px-8 rounded-md flex flex-col ">
                <Disclosure>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="transition-all duration-300 ease-in-out text-left flex justify-between items-center w-full lg:px-4 py-2 font-lght uppercase text-gray-800 rounded-lg">
                            <span className={`${open ? "text-emerald-500" : ""} transition-all duration-500 ease-in-out lg:text-base text-sm`}>{question.question}</span>
                            <ChevronUpIcon className={`${ open ? 'transform rotate-180' : '' } transition-all duration-300 ease-in-out lg:w-5 lg:h-5 h-4 w-4 mx-2 text-emerald-500`} />
                        </Disclosure.Button>
                        <Disclosure.Panel className=" transition-all duration-300 ease-in-out lg:px-4 pt-4 pb-2 text-sm text-gray-500 ">
                            {question.answer}
                        </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        ))}
        
    </div>
    </div>
  )
}

export default FAQ