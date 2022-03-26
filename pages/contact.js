import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import MapGoogle from "../components/Map"
import { NavbarLocale } from '../locales/Navbar';
import { ContactLocale } from "../locales/Contact";
import { Addresses } from "../locales/Contact";
import { contactNumbers } from "../locales/Contact";



const Contact = () => {
  const router = useRouter();
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const t = NavbarLocale[l]
  const contact = ContactLocale[l]
  const address = Addresses[l]
  return (
    <div className="pt-20 cursor-default">
      <Head>
        <title>{t.contact}  | {t.ozzo}</title>
      </Head>
      <MapGoogle />
      <div className='lg:px-32 md:px-20 lg:mt-10 p-5' >

        <div className="lg:mb-10 mb-5 flex cursor-default">
          <p className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black" onClick={() => router.push("/")}> {t.home} </p>
          <p className="text-sm text-black/50 pr-2 "> / </p>
          <p className="transition-all duration-300 ease-in-out text-sm  hover:text-black"> {t.contact} </p>
        </div>

        <div className="my-10">
          <div className='lg:w-full font-semibold  flex items-center text-gray-800 mb-10'> 
            <div className='md:h-10 h-8 w-1 bg-teal-500 mr-5'></div>
            <p className='mr-5 uppercase lg:text-2xl text-base'>{contact.locations}</p>
          </div>
        </div>

        <div className="my-10">
          {address.address.map((location, index) => (
            <div key={index}>
              <div className="flex items-start text-gray-700">
                <div className="mt-1">
                  <svg className="h-4 w-4 mr-2 opacity-80" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-light "> {location} </p>
              </div>
            </div> 
            ))} 
        </div>

        <div className="my-10">
          {/* <div className='lg:w-full font-semibold  flex items-center text-gray-800 my-10'> 
            <div className='md:h-10 h-8 w-1 bg-blue-500 mr-5'></div>
            <p className='mr-5 uppercase lg:text-2xl text-base'>{contact.numbers}</p>
          </div> */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
            {contactNumbers[l].sections.map((contact, index) =>(
              <div key={index}>
                <div className="w-full h-full flex flex-col text-center items-center">
                  <div className="font-semibold text-gray-700 mb-5"> 
                    {contact.title}
                  </div>

                  {/* <div className="flex my-1">
                    <div className="bg-teal-500 mr-2 w-6 h-6 rounded-md flex items-center">
                        <svg className="h-4 w-4 m-1" viewBox="0 0 20 20" fill="white">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                    </div>
                    {contact.numbers.map((number, index) =>(
                    <div key={index} className="flex mr-1 ">   
                      <a href={`tel: ${number}`} className="font-light">
                        <p>{number}</p>
                       </a>
                    </div>
                    ))}
                  </div> */}
                  
                  <div className="flex">
                    <div className="bg-teal-500 w-6 h-6 rounded-md flex items-center m-1">
                        <svg className="h-4 w-4 m-1" viewBox="0 0 20 20" fill="white">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                    </div>
                    <a href={`${contact.facebook}`}>
                      <div className=" flex items-center hover:underline m-1">
                        <div className="bg-gradient-to-r from-sky-500 to-sky-600 rounded-md w-6 h-6 flex items-center justify-center">
                          <svg  x="0px" y="0px" width="16" height="16" viewBox="0 0 24 24" fill="#fff">  
                            <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" />
                          </svg>
                        </div>
                      </div>
                    </a>

                    <a href={`${contact.instagram}`}>
                      <div className=" flex items-center hover:underline m-1">
                        <div className="bg-gradient-to-r from-fuchsia-400 to-fuchsia-500 rounded-md w-6 h-6 flex items-center justify-center">
                          <svg x="0px" y="0px" width="16" height="16" viewBox="0 0 30 30" fill="white">   
                            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
                          </svg>
                        </div>
                      </div>
                    </a>

                    <a href={`mailto:${contact.email}`}>
                      <div className=" flex items-center hover:underline m-1">
                        <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-md w-6 h-6 flex items-center justify-center">
                          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="white">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div> 
            ))}
           
            
          </div>
        </div>

      </div>

    </div>)
}

export default Contact;