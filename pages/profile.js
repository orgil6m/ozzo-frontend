import { useRouter } from 'next/router'
import React, {useContext, useEffect, useState} from 'react'
import moment from 'moment';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { NavbarLocale } from '../locales/Navbar';
import {DataContext} from "../store/GlobalState"
import {initState} from "../Models/ProfileModel"

export async function getServerSideProps() {
  const base = process.env.BASE_URL
  return {
    props: {base},
  }
}

const Profile = () => {
    const {state, dispatch} = useContext(DataContext)
    const {auth} = state
    const router = useRouter()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = NavbarLocale[l]
    const [tabIndex, setTabIndex] = useState(0)
    const [userData, setUserData] = useState(initState)
    const [skills, setSkills] = useState([])
    const [schools, setSchools] = useState([])
    const [exp, setExp] = useState([])
    const [locale, setLocale] = useState(0) 

    useEffect(() => {
    const token = window.localStorage.getItem("token");
    const tokenExpTime = window.localStorage.getItem("tokenExpTime");
    if (!token || moment().isAfter(moment(tokenExpTime))) {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("tokenExpTime");
        window.localStorage.removeItem("user");
        dispatch({type:'NOTIFY',payload:{success: "Амжилттай гарлаа!"}})
        dispatch({type:'AUTH', payload:{}})
        router.push('/login')
    }else{
        const user = JSON.parse(window.localStorage.getItem("user"))
        setSkills(user && user.informations[l].skills.skill)
        setSchools(user && user.informations[l].education.schools)
        setExp(user && user.informations[l].experience.works)
    }
    }, [])

    if(Object.keys(auth).length === 0){
      return <></>
    }
    console.log(userData)
    const profileInfos = [
      {
        title : "Харагдах нэр",
        val : userData,
      },
      {
        title : "Овог",
        val : `${auth.user.informations[l].lastname}`,
      },
      {
        title : "Өөрийн нэр",
        val : `${auth.user.informations[l].firstname}`
      },
      {
        title: "Тодорхойлолт",
        val : `${auth.user.informations[l].title}`
      }
    ]
    const socials = [
      {
        title : "Linkedin Хаяг",
        val : `${auth.user.linkedin}`,
      },
      {
        title : "Facebook Хаяг",
        val : `${auth.user.facebook}`,
      },
      {
        title : "Instagram Хаяг",
        val : `${auth.user.instagram}`,
      },
      {
        title : "YouTube Хаяг",
        val : `${auth.user.youtube}`,
      },
      {
        title : "Email Хаяг",
        val : `${auth.user.email}`,
      },
      {
        title : "Web Хаяг",
        val : `${auth.user.website}`,
      },
    ]
    const tabs = [ 
        {
            title: `${auth.user.informations[l].skills.title}`,
            val : `${auth.user.informations[l].skills.skill}`,
        },
        {
            title: `${auth.user.informations[l].education.title}`,
            val:`${auth.user.informations[l].education.schools}`,
        },
        {
            title: `${auth.user.informations[l].experience.title}`,
            val:`${auth.user.informations[l].experience.works}`,

        }
    ]

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUserData({...userData, [name]:value})
        dispatch({type:"NOTIFY", payload:{}})
    }

    const addFieldSkills = () =>{
        setSkills([...skills, ''])
    }
    const addFieldSchools = () =>{
        setSchools([...schools, ''])
    }
    const addFieldExp = () =>{
        setExp([...exp, ''])
    }

    const deleteSkill = (index) => (
       setSkills([
        ...skills.slice(0, index),
        ...skills.slice(index +1, skills.length)
        ])
    )
    const deleteSchool = (index) => (
       setSchools([
        ...schools.slice(0, index),
        ...schools.slice(index + 1, schools.length)
        ])
    )
    const deleteExp = (index) => {
        setExp([
        ...exp.slice(0, index),
        ...exp.slice(index + 1, exp.length)
        ])  
    }


    return(
    <div className='pt-20 cursor-default  '>
        <Head>
            <title> {t.ozzo}</title>
        </Head>

        <div className='w-full lg:px-32 md:px-20 p-5 font-semibold '>
          
          
            <div className='lg:w-full font-semibold text-xl flex items-center text-gray-800 mt-10'> 
                <div className='md:h-10 h-8 w-1 bg-red-500 mr-5'></div>
                <p className='uppercase'>Хэрэглэгчийн Мэдээлэл Засах</p>
            </div>
        </div> 
        
        <div className="w-full grid md:grid-cols-2">
            
        <form>
            <div className='flex flex-col lg:px-32 md:px-20 p-5 text-gray-700'>
                {auth.user.profilephoto ?
                <div className='transition-all duration-300 ease-in-out aspect-1 bg-cover bg-center relative rounded-lg mb-10 hover:opacity-80' 
                style={{'backgroundImage': `url(${auth.user.profilephoto}`}} >
                    <div className='absolute top-3 right-3 text-white rounded-full bg-white/30' onClick={()=> console.log("hi")}>
                    <svg  className="h-4 w-4 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </div>
                </div>
                :
                <div className='transition-all duration-300 ease-in-out aspect-1 bg-cover bg-center rounded-lg mb-10 hover:opacity-80 bg-gray-100 flex justify-center items-center'>
                    <label htmlFor="email" className="relative text-gray-400 focus-within:text-gray-600 block">

                        <input type="file" name="imageInput" className="" />
                    </label>
                    {/* <input type="file" name="" id='input_file' />
                    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg> */}
                </div>
                }
                <div className='flex items-center'>
                    <p className='font-semibold uppercase my-5 text-lg'>Профайл</p>
                    <div className='h-2 w-2 scale-75 rounded-full bg-red-500 ml-2'></div>
                </div>
                <div className='w-full my-1'>
                {profileInfos.map((profile, index) => (
                <div key={index}>
                    <label className='font-base'>{profile.title}</label>
                    <input 
                    className='transition-all duration-300 ease-in-out my-2  w-full outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-red-300 font-light placeholder:text-black text-sm'   
                    id={profile.title}
                    name={profile.title}
                    type="text"
                    value={profile.val}
                    />
                </div>
                ))}
                </div>

                <div className='flex items-center'>
                <p className='font-semibold uppercase my-5 text-lg'>Сошиал хаягууд</p>
                <div className='h-2 w-2 scale-75 rounded-full bg-red-500 ml-2'></div>
                </div>

                <div className='w-full my-1'>
                {socials.map((social, index) => (
                    <div key={index}>
                    <label className='font-base'>{social.icon} {social.title}</label>
                    <input 
                        className='transition-all duration-300 ease-in-out my-2  w-full outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-red-300 font-light text-sm placeholder:text-black'   
                        id="firstname"
                        name="firstname"
                        type="text"
                    />
                    </div>
                ))}
                </div>
                

            </div>
        </form>
        <form>
            <div className='flex flex-col lg:w-10/12 text-gray-700 p-5 md:mr-16 mr-0  '>
                <div className='flex w-full mt-5 justify-between items-center uppercase'>
                {tabs.map((tab, index) => ( 
                    <div key={index} className={`transition-all h-10 m-1 md:text-sm text-xs duration-300 ease-in-out font-semibold w-full flex justify-center rounded-md items-center text-center hover:bg-sky-100 hover:text-sky-500 ${tabIndex===index ? "bg-sky-100 text-sky-500 " :""}`} onClick={() => setTabIndex(index)}>
                        <p>{tab.title}</p>
                    </div>
                ))}
                </div>
                {tabIndex === 0 ?
                <div>
                    <div className='flex items-center mt-10'>
                        <p className='font-semibold uppercase text-lg'>{auth.user.informations[l].skills.title}</p>
                        <div className='h-2 w-2 scale-75 rounded-full bg-sky-500 ml-2'></div>
                    </div>
                    <div className='my-10 w-full'>
                        {skills.map((skill, index) => (
                           <div key={index} className="flex flex-col mb-10 relative">
                                <button className='absolute -top-5 right-0 transition-all duration-300 ease-in-out hover:bg-red-100 hover:text-red-500 m-2 rounded-md'
                                        type='button' 
                                        onClick={() => deleteSkill(index)}>
                                        <svg className="h-4 w-4 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                <label>
                                    # {index+1}
                                </label>
                                <input className='transition-all w-full duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-light text-sm placeholder:text-black'   
                                    id={skill}
                                    name="firstname"
                                    type="text"
                                    value={skill}
                                    onChange={(e)=> handleChangeInput(e)}
                                    />
                              
                            </div>
                            ))}
                            <div className='w-full grid grid-cols-2 gap-5'>
                                <button className=' bg-sky-500 h-10 rounded-md text-white transition-all duration-300 ease-in-out hover:opacity-80' onClick={()=>addFieldSkills()} type="button">
                                    Талбар нэмэх
                                </button>
                                <button className=' bg-emerald-500 h-10 rounded-md text-white transition-all duration-300 ease-in-out hover:opacity-80' onClick={()=>addFieldSkills()} type="button">
                                    Хадгалах
                                </button>
                            </div>
                    </div>
                  
                </div>
                : tabIndex === 1 ?
                <div>
                    <div className='flex items-center mt-10'>
                        <p className='font-semibold uppercase text-lg'>{auth.user.informations[l].education.title}</p>
                        <div className='h-2 w-2 scale-75 rounded-full bg-sky-500 ml-2'></div>
                    </div>
                    <div className='my-10'>
                        {schools.map((school, index) => (
                                <div key={index} className="flex flex-col mb-10 relative">
                                    <button className='absolute -top-5 right-0 transition-all duration-300 ease-in-out hover:bg-red-100 hover:text-red-500 m-2 rounded-md'
                                        type='button' 
                                        onClick={() => deleteSchool(index) }>
                                        <svg className="h-4 w-4 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>

                                    <label>
                                        Сургууль
                                    </label>
                                    <input className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-light text-sm placeholder:text-black'   
                                        id="school"
                                        name="school"
                                        type="text"
                                        value={school.name}
                                        />
                                    <label>
                                        Зэрэг 
                                    </label>
                                        <input className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-light text-sm placeholder:text-black'   
                                            id="firstname"
                                            name="firstname"
                                            type="text"
                                             value={school.degree}
                                        />
                                    
                                    <label>
                                        Он (20**-20**)
                                    </label>
                                        <input className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-light text-sm placeholder:text-black'   
                                            id="firstname"
                                            name="firstname"
                                            type="text"
                                            value={school.years}
                                        />
                                        
                                </div>
                                
                            ))}
                            <div className='w-full grid grid-cols-2 gap-5'>
                                <button className=' bg-sky-500 h-10 px-8 rounded-md text-white transition-all duration-300 ease-in-out hover:opacity-80' onClick={()=>addFieldSchools()} type="button">
                                    Талбар нэмэх
                                </button>
                                <button className=' bg-emerald-500 h-10 px-8 rounded-md text-white transition-all duration-300 ease-in-out hover:opacity-80' onClick={()=>addFieldExp()} type="button">
                                    Хадгалах
                                </button>
                            </div>
                    </div>
                </div>
                :
                <div >
                    <div className='flex items-center mt-10'>
                        <p className='font-semibold uppercase text-lg'>{auth.user.informations[l].experience.title}</p>
                        <div className='h-2 w-2 scale-75 rounded-full bg-sky-500 ml-2'></div>
                    </div>
                    <div className='my-10'>
                        {exp.map((work, index) => (
                                <div key={index} className="flex flex-col mb-10 relative">
                                     <button className='absolute -top-5 right-0 transition-all duration-300 ease-in-out hover:bg-red-100 hover:text-red-500 m-2 rounded-md'
                                        type='button' 
                                        onClick={() => deleteExp(index) }>
                                        <svg className="h-4 w-4 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                        <label>
                                            Хаана
                                        </label>
                                        <input 
                                            className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-light text-sm placeholder:text-black'   
                                            id="exp"
                                            name="exp"
                                            type="text"
                                             value={work.at}
                                        />  
                                        <label>
                                        Хийсэн ажил
                                        </label>
                                        <input 
                                            className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-light text-sm placeholder:text-black'   
                                            id="work"
                                            name="work"
                                            type="text"
                                            value={work.name}
                                        />

                                        <label>
                                            Он (20**-20**)
                                        </label>
                                        <input 
                                            className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-light text-sm placeholder:text-black'   
                                            id="years"
                                            name="year"
                                            type="text"
                                            value={work.years}
                                        />
                                </div>
                                
                            ))}
                            <div className='w-full grid grid-cols-2 gap-5'>
                                <button className=' bg-sky-500 h-10 px-8 rounded-md text-white transition-all duration-300 ease-in-out hover:opacity-80' onClick={()=>addFieldExp()} type="button">
                                    Талбар нэмэх
                                </button>
                                <button className=' bg-emerald-500 h-10 px-8 rounded-md text-white transition-all duration-300 ease-in-out hover:opacity-80' onClick={()=>addFieldExp()} type="button">
                                    Хадгалах
                                </button>
                            </div>
                    </div>
                </div>
                }
                  
            </div>
        </form>
        </div>
    
    </div>
  )  
}

export default Profile;
