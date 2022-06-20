import React from 'react'
import { useRouter } from 'next/router';
import store_cover from "../../Assets/STORE/store_cover.jpg"
import { getProducts} from '../../Datas/Products';

import { NavbarLocale } from '../../locales/Navbar';
import { StoreLocale } from '../../locales/Store';

import cover2 from "../../Assets/STORE/nexg3.png" 
import cover4 from "../../Assets/STORE/cover4.jpeg" 
import Head from "next/head";


export async function getServerSideProps() {
  const Products = await getProducts();
  const GuitarsData = Products.filter((e) => e.type.includes("guitar"))
  const UkulelesData = Products.filter((e) => e.type.includes("ukulele"))
  return {
    props: {GuitarsData, UkulelesData},
  }
}

const nexg = [
  {
    title : [
      "NEXG ягаан",
      "NEXG pink",
      "NEXG粉红"
    ],
    cover : `https://res.cloudinary.com/ozzo-web/image/upload/v1651203724/Products/NEXG/NEXG_PK.jpg`,
    price : "2,899,900",
    saleprice : "",
    color : "text-pink-300",
    brand : `https://res.cloudinary.com/ozzo-web/image/upload/v1651203991/Products/Assets/NEXG_LOGO.png`,
  },
  {
    title : [
      "NEXG цэнхэр",
      "NEXG blue",
      "NEXG蓝"
    ],
    cover : `https://res.cloudinary.com/ozzo-web/image/upload/v1651203737/Products/NEXG/NEXG_BL.jpg`,
    price : "2,899,900",
    saleprice : "",
    color : "text-blue-500",
    brand : `https://res.cloudinary.com/ozzo-web/image/upload/v1651203991/Products/Assets/NEXG_LOGO.png`,
  },
  {
    title : [
      "NEXG цагаан",
      "NEXG white",
      "NEXG白"
    ],
    cover : `https://res.cloudinary.com/ozzo-web/image/upload/v1651203721/Products/NEXG/NEXG_WH.jpg`,
    price : "2,899,900",
    saleprice : "2,799,900",
    color : "text-gray-400",
    brand : `https://res.cloudinary.com/ozzo-web/image/upload/v1651203991/Products/Assets/NEXG_LOGO.png`,
  },
  {
    title : [
      "NEXG хар",
      "NEXG black",
      "NEXG黑色"
    ],
    cover : `https://res.cloudinary.com/ozzo-web/image/upload/v1651203733/Products/NEXG/NEXG_BK.jpg`,
    price : "2,899,900",
    saleprice : "2,799,900",
    color : "text-black",
    brand : `https://res.cloudinary.com/ozzo-web/image/upload/v1651203991/Products/Assets/NEXG_LOGO.png`,
  }
]

const Store = ({GuitarsData, UkulelesData}) => {
  const router = useRouter();
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const t = NavbarLocale[l]
  const locale = StoreLocale[l]
  return (
    <div className='pt-20 '>
      <Head>
        <title>{t.service[1].title}</title>
      </Head>
      <div className='w-full bg-fixed bg-bottom bg-cover' style={{'backgroundImage': `url(${store_cover.src}`}}>
          <div className='p-32 w-full h-[30rem]'>
          </div>
      </div>
      <div className='lg:px-32 md:px-20 lg:mt-10 p-5' >
        {/* PATH ROUTER */}
        <div className="lg:mb-10 mb-5 flex cursor-default">
          <p className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black" onClick={() => router.push("/")}> {t.home} </p>
          <p className="text-sm text-black/50 pr-2 "> / </p>
          <p className="transition-all duration-300 ease-in-out text-sm  hover:text-black"> {t.service[1].title} </p>
        </div>
        <div className='w-full flex justify-center items-center h-20 md:text-4xl text-2xl uppercase font-semibold md:my-10 my-5 '>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400  to-indigo-400">
            {locale.featuredProducts}
          </span>
        </div>
        <div className='w-full grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-3 mb-10'>
           {nexg.map((row, index) => (
             <div key={index} className="transition-all duration-300 ease-in-out border border-gray-100 w-full flex flex-col justify-center items-center rounded-md md:hover:-translate-y-2 hover:border-gray-200 relative">
                  <div className={`mt-10 ${row.color} font-light uppercase`}>
                    {row.title[l]}
                  </div>
                <img className='w-2/3 my-5' src={row.cover} alt="nexg cover"/>
                <div className='flex flex-col text-gray-800'>
                  {row.saleprice ?
                  <>
                    <div className='font-bold mb-10 text-lg'>
                      <span className='text-xs font-light mr-1'>
                      {locale.salesPrice} :
                      </span>
                      <p>
                      {row.saleprice} ₮
                      </p>
                    </div>
                  </>
                  :
                  <div className='font-bold mb-10 text-lg'>
                     <span className='text-xs font-light mr-1'>
                      {locale.price} :
                      </span>
                      <p>
                      {row.price} ₮
                      </p>
                    </div>
                  }
                </div>
                <div className='absolute top-3 right-3 bg-white rounded-full border border-gray-100 shadow-sm'>
                  <img className='w-20' src={row.brand} alt="brand"/>
                </div>
              </div>
           ))}
        </div>
     
      </div>
         <div className='w-full bg-fixed bg-bottom bg-cover' style={{'backgroundImage': `url(${cover2.src}`}}>
          <div className='p-32 w-full h-[30rem] flex justify-center items-center '>
          </div>
        </div>

      <div className='lg:px-32 md:px-20 lg:mt-10 p-5' >
        <div className='w-full flex justify-center items-center h-20 md:text-4xl text-2xl uppercase font-semibold md:my-10 my-5 '>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400  to-violet-400">
            {locale.featuredGuitars}
          </span>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5'>
           {GuitarsData.map((row, index) => (
             <div key={index} className="transition-all duration-300 ease-in-out border border-gray-100 w-full flex flex-col justify-center items-center rounded-md md:hover:-translate-y-2 hover:border-gray-200 relative">
                <div className={`mt-10 text-gray-500 font-medium`}>
                    {row.title}
                  </div>
                <img className='my-5 ' src={row.cover} alt="guitars cover"/>
                <div className='flex flex-col text-gray-800'>
                  {row.saleprice ?
                  <>
                    <div className='font-bold mb-10 text-lg'>
                      <span className='text-xs font-light mr-1'>
                      {locale.salesPrice} :
                      </span>
                      <p>
                      {row.saleprice} ₮
                      </p>
                    </div>
                  </>
                  :
                  <div className='font-bold mb-10 text-lg'>
                     <span className='text-xs font-light mr-1'>
                      {locale.price} :
                      </span>
                      <p>
                      {row.price} ₮
                      </p>
                    </div>
                  }
                </div>
                <div className='absolute top-3 right-3 bg-white rounded-full border border-gray-100 shadow-sm'>
                  <img className='w-20' src={row.brand} alt="brands" />
                </div>
                 <div className='absolute top-3 left-3 bg-white rounded-full flex'>
                  {row.colors.map((color, i) => (
                    <div key={i} className={`md:h-4 md:w-4 h-3 w-3 rounded-full mr-1  ${color.class}`}>
                    </div>
                  ))}
                </div>
              </div>
           ))}
        </div>
      </div>
      <div className='w-full bg-fixed bg-center bg-cover' style={{'backgroundImage': `url(${cover4.src}`}}>
          <div className='p-32 w-full h-[30rem] flex justify-center items-center'>
          </div>
        </div>
      <div className='lg:px-32 md:px-20 lg:mt-10 p-5 mb-20' >
           <div className='w-full flex justify-center items-center h-20 md:text-4xl text-2xl uppercase font-semibold md:my-10 my-5 '>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400  to-violet-400">
            {locale.featuredUkuleles}
          </span>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5'>
           {UkulelesData.map((row, index) => (
             <div key={index} className="transition-all duration-300 ease-in-out border border-gray-100 w-full flex flex-col justify-center items-center rounded-md md:hover:-translate-y-2 hover:border-gray-200 relative">
                <div className={`mt-10 text-gray-500 font-medium`}>
                    {row.title}
                  </div>
                <img className='my-5 ' src={row.cover} alt="ukuleles cover"/>
                <div className='flex flex-col text-gray-800'>
                  {row.saleprice ?
                  <>
                    <div className='font-bold mb-10 text-lg'>
                      <span className='text-xs font-light mr-1'>
                      {locale.salesPrice} :
                      </span>
                      <p>
                      {row.saleprice} ₮
                      </p>
                    </div>
                  </>
                  :
                  <div className='font-bold mb-10 text-lg'>
                     <span className='text-xs font-light mr-1'>
                      {locale.price} :
                      </span>
                      <p>
                      {row.price} ₮
                      </p>
                    </div>
                  }
                </div>
                <div className='absolute top-3 right-3 bg-white rounded-full border border-gray-100 shadow-sm'>
                  <img className='w-20' src={row.brand} alt="ukuleles cover" />
                </div>
                 <div className='absolute top-3 left-3 bg-white rounded-full flex'>
                  {row.colors.map((color, i) => (
                    <div key={i} className={`md:h-4 md:w-4 h-3 w-3 rounded-full mr-1  ${color.class}`}>
                    </div>
                  ))}
                </div>
              </div>
           ))}
        </div>

                    
      </div>
    </div>
  )
}
  
export default Store