import React from 'react'
import { useRouter } from 'next/router';
import {PricingLocale, Pricings} from "../../locales/PricingInfo"
// import 'react-slideshow-image/dist/styles.css'
import { useState } from 'react'


const Pricing = () => {
    const router = useRouter()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const pricingInfo = PricingLocale[l]
    const pricings = Pricings[l]
    const pricingTab = [
      pricingInfo.monthly,
      pricingInfo.seasonally,
      pricingInfo.semiannualy,
      pricingInfo.annually
    ]
    const [tab, setTab] = useState(0) 
    return (
    <div className='w-full py-5 cursor-default my-10'>
      <div className=' lg:w-full font-semibold md:text-xl text-lg flex items-center text-gray-800 mb-5 '> 
        <div className=' md:h-10 h-8 w-1 bg-amber-400 mr-5'></div>
        <p className='w-full uppercase'>{pricingInfo.title}</p>
      </div>
      <div className='md:flex justify-center py-10'>
      {pricingTab.map((price, index) => (
        <div key={index} onClick={() => {setTab(index)}} className="group mb-3">
          <div className='px-5 flex items-center'>
          <div className={`transition-all duration-100 ease-in-out w-4 h-4 group border-2 mr-2 flex items-center justify-center rounded-full group-hover:border-amber-400 ${tab===index ? 'border-amber-400 ' : 'border-gray-300' }`}>
            <div className={`h-2 w-2 group-hover:bg-amber-400 rounded-full ${tab===index ? 'bg-amber-400 ' : '' } `}>
            </div>
          </div>
          <p className='font-light text-sm uppercase transition-all duration-300 ease-in-out'>{price}</p>
        </div>
        </div>
      ))}
      </div>
         <div className='w-full flex justify-center'>
          <p className='uppercase font-light text-lg mb-10'>
            {tab === 0 ? pricingInfo.total : tab === 1 ? pricingInfo.total_season : tab ===2 ? pricingInfo.total_half : pricingInfo.total_annual}
          </p>
        </div>
      <div className='lg:w-full text-gray-800 h-full grid lg:grid-cols-3 md:grid-cols-2 gap-5'> 
        {pricings.types.map((pricing, index) => (
          <div key={index} className='relative group transition-all overflow-hidden duration-300 ease-in-out border border-gray-100 rounded-md p-10 h-full hover:border-gray-300'>
            <div className='w-full flex items-center flex-col '>  
              <p className='uppercase font-semibold text-gray-500 text-sm'>{pricing.type}</p>
              <p className='font-black text-gray-600 uppercase text-2xl mb-3'>
              {tab === 0 ? pricing.price : tab === 1 ? pricing.price_season : tab ===2 ? pricing.price_half :  pricing.price_annual}₮
              </p>
              <div className='w-10 h-1 mb-3 bg-amber-400'></div>
              
              <p className='text-xs text-gray-400'>{pricing.condition}</p>
              
            </div>
             <div className='absolute left-0 top-1/2 transition-all duration-500 ease-in-out rounded-lg group-hover:-translate-y-1/2 opacity-0 group-hover:opacity-100  bg-white '>
              <p className='font-light px-10 py-2 pt-10 text-gray-700 text-xs text-justify'>{pricing.text1}</p>
              <p className='font-light px-10 py-2 pb-10 text-gray-700 text-xs text-justify'>{pricing.text2}</p>
            </div> 
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing