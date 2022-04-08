import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import MapGoogle from "../components/Contact/Map"
import { NavbarLocale } from '../locales/Navbar';
import Branches from "../components/Academy/Branches";
import { ContactLocale, PhoneNumbers, Emails, placeholder, SocialLinks, Youtube } from "../locales/Contact";

const Contact = () => {
  const router = useRouter();
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const t = NavbarLocale[l]
  const contact = ContactLocale[l]

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
        <Branches />
        <div className="grid lg:grid-cols-2 lg:gap-20 mt-5">
          <div>
              <div className="my-10">
                  <div className='lg:w-full font-semibold flex items-center text-gray-800 '> 
                    <div className='md:h-10 h-8 w-1 bg-emerald-500 mr-5'></div>
                    <p className='mr-5 uppercase lg:text-xl text-base'>{contact.numbers}</p>
                  </div>
              </div>
              {PhoneNumbers[l].numbers.map((numbers, index) => (
                <div key={index}>
                   <a href={`tel: ${numbers.number}`}>
                  <div className="flex items-start text-gray-700">
                    <div className="my-1 p-1 bg-emerald-500 rounded-md">
                      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="white">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <p className="font-thin my-1 mx-2 hover:underline"> {numbers.title} : <span className="font-medium">{numbers.number}</span> </p>
                  </div>
                  </a>
                </div> 
              ))} 
             
              <div className="my-10 ">
                  <div className='lg:w-full font-semibold  flex items-center text-gray-800'> 
                    <div className='md:h-10 h-8 w-1 bg-sky-500 mr-5'></div>
                    <p className='mr-5 uppercase lg:text-xl text-base'>{contact.socials}</p>
                  </div>
              </div>
              {SocialLinks[l].facebook.map((fb, index) => (
                    <div key={index}>
                    <a href={`${fb.url}`}   >
                      <div className="flex items-start text-gray-700">
                        <div className="my-1 p-1 bg-sky-500 rounded-md">
                          <svg  x="0px" y="0px" width="16" height="16" viewBox="0 0 24 24" fill="#fff">  
                            <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" />
                          </svg>
                        </div>
                        <p className="font-thin my-1 mx-2 hover:underline"> {fb.title}  </p>
                      </div>
                      </a>
                    </div> 
              ))} 
               <div className="w-full my-5 border-b border-gray-100"></div>
              {SocialLinks[l].instagram.map((ig, index) => (
                    <div key={index}>
                    <a href={`${ig.url}`}   >
                      <div className="flex items-start text-gray-700">
                        <div className="my-1 p-1 bg-pink-500 rounded-md">
                           <svg x="0px" y="0px" width="16" height="16" viewBox="0 0 30 30" fill="white">   
                                        <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
                                      </svg>
                        </div>
                        <p className="font-thin my-1 mx-2 hover:underline"> {ig.title} </p>
                      </div>
                    </a>
                    </div> 
              ))} 
               <div className="my-5 border-b border-gray-100"></div>
              {Youtube.map((yt, index) => (
                <div key={index}>
                   <a href={`${yt.url}`}   >
                      <div className="flex items-start text-gray-700">
                        <div className="my-1 p-1 bg-red-600 rounded-md">
                           <svg  x="0px" y="0px" width="16" height="16" viewBox="0 0 64 64" fill="white">
                            <path d="M56.456,17.442c-0.339-1.44-1.421-2.595-2.866-3.053C49.761,13.174,41.454,12,32,12s-17.761,1.174-21.591,2.389 c-1.445,0.458-2.527,1.613-2.866,3.053C6.903,20.161,6,25.203,6,32c0,6.797,0.903,11.839,1.544,14.558 c0.339,1.44,1.421,2.595,2.866,3.053C14.239,50.826,22.546,52,32,52s17.761-1.174,21.591-2.389 c1.445-0.458,2.527-1.613,2.866-3.053C57.097,43.839,58,38.797,58,32C58,25.203,57.097,20.161,56.456,17.442z M27,40V24l14.857,8 L27,40z" />
                        </svg>
                        </div>
                        <p className="font-thin my-1 mx-2 hover:underline"> {yt.title} </p>
                      </div>
                      </a>
                </div>
              ))}
               <div className="my-10 ">
                  <div className='lg:w-full font-semibold  flex items-center text-gray-800'> 
                    <div className='md:h-10 h-8 w-1 bg-indigo-400 mr-5'></div>
                    <p className='mr-5 uppercase lg:text-xl text-base'>{contact.emails}</p>
                  </div>
              </div>
              {Emails[l].id.map((email, index) => (
                    <div key={index}>
                    <a href={`mailto:${email.email}`} >
                      <div className="flex items-start text-gray-700">
                        <div className="my-1 p-1 bg-indigo-400 rounded-md">
                          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="white">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        <p className="font-thin my-1 mx-2 hover:underline"> {email.title} : <span className="font-medium">{email.email}</span>  </p>
                      </div>
                      </a>
                    </div> 
              ))} 
              <div className="lg:my-20"></div>
          </div>
          <div>
            <div className="my-10">
              <div className='lg:w-full font-semibold  flex items-center text-gray-800'> 
                <div className='md:h-10 h-8 w-1 bg-indigo-400 mr-5'></div>
                  <p className='mr-5 uppercase lg:text-xl text-base'>{contact.message}</p>
                </div>
            </div>
            <div className="flex">
              <input className="transition-all duration-300 ease-in-out mr-5 appearance-none block w-full text-gray-700 border focus:border-indigo-400 rounded-md py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder={placeholder[l].name} />
              <input className="transition-all duration-300 ease-in-out appearance-none block w-full  text-gray-700 border focus:border-indigo-400 rounded-md py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder={placeholder[l].email} />
            </div>
            <div className="lg:mb-0 mb-20">
              <textarea className="transition-all duration-300 ease-in-out resize-none h-40 mr-5 appearance-none block w-full text-gray-700 border focus:border-indigo-400 rounded-md py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder={placeholder[l].message} />
              <button className="transition-all duration-300 ease-in-out rounded-md bg-indigo-400 text-white w-40 px-4 py-2 font-semibold hover:bg-indigo-500 active:scale-95">{placeholder[l].button}</button>
            </div>
          </div> 
        </div>
      </div>

    </div>)
}

const LocationModal = ({open, info}) => {
  return <div hidden={!open}>
    {info}
  </div>
}

export default Contact;
