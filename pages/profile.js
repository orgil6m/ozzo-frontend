import { useRouter } from 'next/router'
import React, {useContext, useEffect, useState} from 'react'
import moment from 'moment';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { NavbarLocale } from '../locales/Navbar';
import {DataContext} from "../store/GlobalState"

export async function getServerSideProps() {
  const base = process.env.BASE_URL
  return {
    props: {base},
  }
}

const Profile = ({base}) => {
  
    const {state, dispatch} = useContext(DataContext)
    const {auth} = state
    const router = useRouter()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = NavbarLocale[l]
    const [tabIndex, setTabIndex] = useState(0)

    const [skills, setSkills] = useState([])
    const [schools, setSchools] = useState([])
    const [exp, setExp] = useState([])

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
        setSkills(user && user.skills[l].skill)
        setSchools(user && user.education[l].schools)
        setExp(user && user.experience[l].works)
    }
    }, [])

    if(Object.keys(auth).length === 0){
      return <></>
    }
    // const skillsNumber = auth.user.skills[l].skill.length 
    // console.log(skillsNumber)
    // console.log(auth.user.skills[l].skill)
    const profileInfos = [
      {
        title : "Харагдах нэр",
        val : `${auth.user.username}`
      },
      {
        title : "Овог",
        val : `${auth.user.lastname[l]}`,
      },
      {
        title : "Өөрийн нэр",
        val : `${auth.user.firstname[l]}`
      },
      {
        title: "Тодорхойлолт",
        val : `${auth.user.title[l]}`
      }
    ]
    const socials = [
      {
        title : "Linkedin Хаяг",
        val : `${auth.user.linkedin}`,
        icon : <LinkedinIcon />
      },
      {
        title : "Facebook Хаяг",
        val : `${auth.user.facebook}`,
        icon : <FacebookIcon />
      },
      {
        title : "Instagram Хаяг",
        val : `${auth.user.instagram}`,
        icon : <InstagramIcon />
      },
      {
        title : "YouTube Хаяг",
        val : `${auth.user.youtube}`,
        icon : <YoutubeIcon />
      },
      {
        title : "Email Хаяг",
        val : `${auth.user.email}`,
        icon : <EmailIcon />
      },
      {
        title : "Web Хаяг",
        val : `${auth.user.website}`,
        icon : <WebIcon />
      },
    ]
    const tabs = [ 
        {
            title: `${auth.user.skills[l].title}`,
            val : `${auth.user.skills[l].skill}`,
            icon : <SkillsIcon />
        },
        {
            title: `${auth.user.education[l].title}`,
            val:`${auth.user.education[l].schools}`,
            icon : <EducationIcon />
        },
        {
            title: `${auth.user.experience[l].title}`,
            val:`${auth.user.experience[l].works}`,
            icon : < ExperienceIcon/>

        }
    ]


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
        ...skills.slice(index + 1, skills.length)
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
    <div className='pt-20 cursor-default w '>
      <Head>
        <title> {t.ozzo}</title>
      </Head>
      <div className='w-full lg:px-32 md:px-20 p-5'>
            <div className='lg:w-full font-semibold text-xl flex items-center text-gray-800 mt-10'> 
            <div className='md:h-10 h-8 w-1 bg-red-500 mr-5'></div>
            <p className='uppercase'>Хэрэглэгчийн Мэдээлэл Засах</p>
        </div>
    </div> 
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full grid md:grid-cols-2"
        >
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

                        {/* <MailIcon className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3" /> */}

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
                    id="firstname"
                    name="firstname"
                    type="text"
                    defaultValue={profile.val}
                    // onChange={(e) => setPassword(e.target.value)}
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
                        defaultValue={social.val ? social.val : `Оруулаагүй`}
                        // onChange={(e) => setPassword(e.target.value)}
                        
                    />
                    </div>
                ))}
                </div>
                

            </div>
        </form>
        <form>
            <div className='flex flex-col lg:w-10/12  text-gray-700 p-5 md:mr-16 mr-0  '>
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
                        <p className='font-semibold uppercase text-lg'>{auth.user.skills[l].title}</p>
                        <div className='h-2 w-2 scale-75 rounded-full bg-sky-500 ml-2'></div>
                    </div>
                    <div className='my-10 w-full'>
                        {skills.map((skill, index) => (
                           <div key={index} className="flex flex-col mb-10 relative">
                                <button className='absolute -top-5 right-0 transition-all duration-300 ease-in-out hover:bg-red-100 hover:text-red-500 m-2 rounded-md'
                                        type='button' 
                                        onClick={() => deleteSkill(index) }>
                                        <svg className="h-4 w-4 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                <label>
                                    # {index+1}
                                </label>
                                <input className='transition-all w-full duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-light text-sm placeholder:text-black'   
                                    id="firstname"
                                    name="firstname"
                                    type="text"
                                    defaultValue={skill}
                                        // onChange={(e) => setPassword(e.target.value)}
                                    />
                              
                            </div>
                            ))}

                            <button className='mr-5 bg-sky-500 h-10 px-8 rounded-md text-white transition-all duration-300 ease-in-out hover:opacity-80' onClick={()=>addFieldSkills()} type="button">
                                Талбар нэмэх
                            </button>
                            <button className='mr-5 bg-emerald-500 h-10 px-8 rounded-md text-white transition-all duration-300 ease-in-out hover:opacity-80' onClick={()=>addFieldSkills()} type="button">
                                Хадгалах
                            </button>
                    </div>
                  
                </div>
                : tabIndex === 1 ?
                <div>
                    <div className='flex items-center mt-10'>
                        <p className='font-semibold uppercase text-lg'>{auth.user.education[l].title}</p>
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
                                        defaultValue={school.name}
                                        // onChange={(e) => this.value = e.target.value }
                                        // onChange={(e) => setPassword(e.target.value)}
                                        />
                                    <label>
                                        Зэрэг 
                                    </label>
                                        <input className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-light text-sm placeholder:text-black'   
                                            id="firstname"
                                            name="firstname"
                                            type="text"
                                            defaultValue={school.degree}
                                            // onChange={(e) => setPassword(e.target.value)}
                                        />
                                    
                                    <label>
                                        Он (20**-20**)
                                    </label>
                                        <input   className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-light text-sm placeholder:text-black'   
                                            id="firstname"
                                            name="firstname"
                                            type="text"
                                            defaultValue={school.years}
                                            // onChange={(e) => setPassword(e.target.value)}
                                        />
                                        
                                </div>
                                
                            ))}
                            <button className='mr-5 bg-sky-500 h-10 px-8 rounded-md text-white transition-all duration-300 ease-in-out hover:opacity-80' onClick={()=>addFieldSchools()} type="button">
                                Талбар нэмэх
                            </button>
                            <button className='mr-5 bg-emerald-500 h-10 px-8 rounded-md text-white transition-all duration-300 ease-in-out hover:opacity-80' onClick={()=>addFieldExp()} type="button">
                                Хадгалах
                            </button>
                    </div>
                </div>
                :
                <div >
                    <div className='flex items-center mt-10'>
                        <p className='font-semibold uppercase text-lg'>{auth.user.experience[l].title}</p>
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
                                            defaultValue={work.at}
                                            // onChange={(e) => setPassword(e.target.value)}
                                            
                                        />  
                                        <label>
                                        Хийсэн ажил
                                        </label>
                                        <input 
                                            className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-light text-sm placeholder:text-black'   
                                            id="work"
                                            name="work"
                                            type="text"
                                            defaultValue={work.name}
                                            // onChange={(e) => setPassword(e.target.value)}
                                            
                                        />

                                        <label>
                                            Он (20**-20**)
                                        </label>
                                        <input 
                                            className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-light text-sm placeholder:text-black'   
                                            id="years"
                                            name="year"
                                            type="text"
                                            defaultValue={work.years}
                                            // onChange={(e) => setPassword(e.target.value)}
                                            
                                        />
                                </div>
                                
                            ))}
                            <button className='mr-5 bg-sky-500 h-10 px-8 rounded-md text-white transition-all duration-300 ease-in-out hover:opacity-80' onClick={()=>addFieldExp()} type="button">
                                Талбар нэмэх
                            </button>
                            <button className='mr-5 bg-emerald-500 h-10 px-8 rounded-md text-white transition-all duration-300 ease-in-out hover:opacity-80' onClick={()=>addFieldExp()} type="button">
                                Хадгалах
                            </button>
                    </div>
                </div>
                }
            </div>
        </form>
        </motion.div>
    
    </div>
  )  
}

export default Profile;



function LinkedinIcon (){
    return(
        <svg width="16" height="16" viewBox="0 0 32 32" fill="white" >
            <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z" />
        </svg>
    )
}
function FacebookIcon (){
    return(
        <svg  x="0px" y="0px" width="16" height="16" viewBox="0 0 24 24" fill="#fff">  
            <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" />
        </svg>
    )
}
function InstagramIcon (){
    return(
        <svg x="0px" y="0px" width="16" height="16" viewBox="0 0 30 30" fill="white">   
            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
        </svg>
    )
}
function YoutubeIcon (){
    return(
        <svg  x="0px" y="0px" width="16" height="16" viewBox="0 0 64 64" fill="white">
            <path d="M56.456,17.442c-0.339-1.44-1.421-2.595-2.866-3.053C49.761,13.174,41.454,12,32,12s-17.761,1.174-21.591,2.389 c-1.445,0.458-2.527,1.613-2.866,3.053C6.903,20.161,6,25.203,6,32c0,6.797,0.903,11.839,1.544,14.558 c0.339,1.44,1.421,2.595,2.866,3.053C14.239,50.826,22.546,52,32,52s17.761-1.174,21.591-2.389 c1.445-0.458,2.527-1.613,2.866-3.053C57.097,43.839,58,38.797,58,32C58,25.203,57.097,20.161,56.456,17.442z M27,40V24l14.857,8 L27,40z" />
        </svg>
    )
}
function EmailIcon (){
    return(
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="white">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
    )
}
function WebIcon (){
    return(
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
    )
}


function SkillsIcon (){
    return(
         <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
    )
}

function EducationIcon (){
    return(
       <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
    )
}

function ExperienceIcon (){
    return(
     <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
    )
}
