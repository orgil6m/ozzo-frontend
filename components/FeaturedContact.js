import React from "react";
import { useRouter } from 'next/router';
import { NavbarLocale } from '../locales/Navbar';
import { ContactLocale, Numbers, Addresses, Socials } from "../locales/Contact";

const FeaturedContact = () => {
  const router = useRouter();
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const t = NavbarLocale[l]
  const contacts = ContactLocale[l]
  const socials = Socials[l]

  return (
    <div className="drop-shadow-lg bg-gray-50 lg:px-32 md:px-20 lg:py-10 p-5 cursor-default">
        <div className='grid lg:grid-cols-4 lg:gap-10 gap-5 md:grid-cols-2 grid-col-1 '>
            <div className="col-span-1">
                <div className='w-full pt-5 md:mb-10 mb-5'>
                    <div className=' lg:w-full flex-col font-semibold md:text-xl text-lg flex  text-gray-800 mb-5 '> 
                        <p className='w-4/6 uppercase'>{socials.title}</p>
                        <div className=' h-1 w-10 bg-red-500 mt-2'></div>
                    </div>
                </div>
                <a href="https://www.linkedin.com/in/ozzo-llc">
                    <div className=" flex items-center hover:underline my-1">
                        <div className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-md w-6 h-6 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 32 32" fill="white" >
                                <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z">
                                </path>
                            </svg>
                        </div>
                        <span className="p-2 font-thin  -right-24">
                            Ozzo LLC
                        </span>
                    </div>
                </a>
                <a href="https://www.facebook.com/ozzomusiccenter">
                    <div className=" flex items-center hover:underline my-1">
                        <div className="bg-gradient-to-r from-sky-500 to-sky-600 rounded-md w-6 h-6 flex items-center justify-center">
                            <svg  x="0px" y="0px" width="16" height="16" viewBox="0 0 24 24" fill="#fff">  
                            <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" />
                            </svg>
                        </div>
                        <span className="p-2 font-thin">
                            Ozzo Music Center 
                        </span>
                    </div>
                </a>
                <a href="https://www.instagram.com/ozzo_music_center/">
                    <div className=" flex items-center hover:underline my-1">
                        <div className="bg-gradient-to-r from-fuchsia-400 to-fuchsia-500 rounded-md w-6 h-6 flex items-center justify-center">
                            <svg x="0px" y="0px" width="16" height="16" viewBox="0 0 30 30" fill="white">   
                                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
                            </svg>
                        </div>
                        <span className="p-2 font-thin  -right-24">
                            @ozzo_music_center  
                        </span>
                    </div>
                </a>
                <a href="https://www.youtube.com/c/DaavkaTunes">
                    <div className=" flex items-center hover:underline my-1">
                        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-md w-6 h-6 flex items-center justify-center">
                        <svg  x="0px" y="0px" width="16" height="16" viewBox="0 0 64 64" fill="white">
                            <path d="M56.456,17.442c-0.339-1.44-1.421-2.595-2.866-3.053C49.761,13.174,41.454,12,32,12s-17.761,1.174-21.591,2.389 c-1.445,0.458-2.527,1.613-2.866,3.053C6.903,20.161,6,25.203,6,32c0,6.797,0.903,11.839,1.544,14.558 c0.339,1.44,1.421,2.595,2.866,3.053C14.239,50.826,22.546,52,32,52s17.761-1.174,21.591-2.389 c1.445-0.458,2.527-1.613,2.866-3.053C57.097,43.839,58,38.797,58,32C58,25.203,57.097,20.161,56.456,17.442z M27,40V24l14.857,8 L27,40z" />
                        </svg>
                        </div>
                            <span className="p-2 font-thin  -right-24">
                            DaavkaTunes
                            </span>
                    </div>
                </a>
            </div>
            <div className="col-span-1">
                <div className='w-full pt-5 md:mb-10 mb-5'>
                    <div className=' lg:w-full flex-col font-semibold md:text-xl text-lg flex text-gray-800 mb-5 '> 
                        <p className='w-4/6 uppercase'>{contacts.title}</p>
                        <div className=' h-1 w-10 bg-red-500 mt-2'></div>
                    </div>
                </div>
                <div className=" flex flex-col justify-center">
                    {Numbers.map((numbers, index) => (
                        <div key={index}>
                            <a href={`tel: ${numbers}`}>
                                <div className=" flex items-center hover:underline" >
                                    <svg className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <p className="font-thin text-sm">{numbers}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="md:col-span-2 mb-10 ">
                <div className=' w-full pt-5 md:mb-10 mb-5 '>
                    <div className=' lg:w-full flex-col font-semibold md:text-xl text-lg flex  text-gray-800 mb-5 '> 
                        <p className='w-4/6 uppercase'>{contacts.title2}</p>
                        <div className=' h-1 w-10 bg-red-500 mt-2'></div>
                    </div>
                </div>
                {Addresses[l].address.map((address, index) => (
                    <div key={index} >
                        <div className="flex items-center hover:underline" >
                            <div className="flex ">
                                <svg className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <p className="font-thin text-sm ">{address}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )}

export default FeaturedContact;
