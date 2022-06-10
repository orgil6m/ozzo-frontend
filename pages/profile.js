/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter, Router } from 'next/router'
import React, {useContext, useEffect, useState, useRef} from 'react'
import Head from 'next/head';
import { NavbarLocale } from '../locales/Navbar';
import { ProfileLocale, Buttons } from '../locales/Profile';
import {DataContext} from "../store/GlobalState"
import PasswordVerify from '../components/PasswordVerify';
import Loading from '../components/Loading';

export async function getServerSideProps() {
  const api = process.env.API_URL
  return {
    props: {api},
  }
}

const Profile = ({api}) => {
    const {state, dispatch} = useContext(DataContext)
    const {auth} = state
    const router = useRouter()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = NavbarLocale[l]
    const Profile = Buttons[l]
    const [tabIndex, setTabIndex] = useState(0)
    const [skills, setSkills] = useState([])
    const [schools, setSchools] = useState([])
    const [exp, setExp] = useState([])
    const fileRef = useRef()
    const [username, setUsername] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [title, setTitle] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [facebook, setFacebook] = useState("")
    const [instagram, setInstagram] = useState("")
    const [youtube, setYoutube] = useState("")
    const [email, setEmail] = useState("")
    const [web, setWeb] = useState("")
    const [informations, setInformations] = useState([{},{},{}])
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [passwordVerifyMdoal, setPasswordVerifyModal] = useState(false)
    const [scrollStop, setScrollStop] = useState(false)
    const [profilephoto, setProfilePhoto] = useState()
    const [body, setBody] = useState()
    const [passwordShow, setPasswordShow] = useState(false)
    useEffect(() => {
        const user = JSON.parse(window.localStorage.getItem("user"))
        if(!user || user === undefined ){
            return router.push('/login')
        } 
        else {
            setInformations(user && user.informations)
            user.informations[l].skills && setSkills(user.informations[l].skills.skill)
            user.informations[l].education && setSchools(user.informations[l].education.schools)
            user.informations[l].experience && setExp(user.informations[l].experience.works)
            setUsername(user && user.username)
            user.informations && setLastname(user.informations[l].lastname)
            setProfilePhoto(user && user.profilephoto)
            setPassword(user && user.password)
            user.informations && setFirstname( user.informations[l].firstname)
            user.informations && setTitle(user.informations[l].title)
            setLinkedin(user && user.linkedin)
            setFacebook(user && user.facebook)
            setInstagram(user && user.instagram)
            setYoutube(user && user.youtube)
            setEmail(user && user.email)
            setWeb(user.web !== undefined ? user.web : "www.ozzo.mn")
        }
    }, [])

    useEffect(() => {
    if (scrollStop) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = 'unset';
    }
    })

    if(!auth.user || auth.user === undefined){
      return(
        <Loading />
      )
    }

    const profileInfos = [
      {
        title : ProfileLocale[l].username,
        val : username,
        action : 'username',
        disabled : true,
        type : "text",
    },
      {
        title : ProfileLocale[l].lastname,
        val : lastname,
        action : "lastname",
        class : "disabled",
        type : "text",
      },
      {
        title : ProfileLocale[l].firstname,
        val : firstname,
        action : "firstname",
        class : "disabled",
        type : "text",
      },
      {
        title: ProfileLocale[l].description,
        val : title,
        action : "title",
        class : "disabled",
        type : "text",
      },
      
    ]
    const socials = [
      {
        title : Profile.linkedin,
        val : linkedin,
        action : "linkedin"
      },
      {
        title : Profile.facebook,
        val : facebook,
        action :"facebook"
      },
      {
        title : Profile.instagram,
        val : instagram,
         action :"instagram"
      },
      {
        title : Profile.youtube,
        val : youtube,
        action :"youtube"
      },
      {
        title : Profile.email,
        val : email,
        action :"email"
      },
      {
        title : Profile.web,
        val : web,
        action :"web",
      },
    ]
    const tabs = [ 
        {
            title: Profile.skills,
        },
        {
            title: Profile.education,
        },
        {
            title: Profile.exp,
        }
    ]

    const setProfileInfos = (field, action) =>{
        if(action === "username") setUsername(field)
        else if(action === "firstname") setFirstname(field)
        else if(action === "lastname") setLastname(field)
        else if(action === "title") setTitle(field)
    }
    const setProfileSocials = (field, action) =>{
        if(action === "linkedin") setLinkedin(field)
        else if(action === "facebook") setFacebook(field)
        else if(action === "instagram") setInstagram(field)
        else if(action === "youtube") setYoutube(field)
        else if(action === "email") setEmail(field)
        else if(action === "web") setWeb(field)
    }
    const addFieldSkills = () =>{
        setSkills([...skills, ''])
    }
    const addFieldSchools = () =>{
        setSchools([...schools, {
            "name": "",
            "degree": "",
            "years": ""
        }])
    }
    const addFieldExp = () =>{
        setExp([...exp, {
            "at" : "",
            "name" : "",
            "years" : ""
        }])
    }
    const deleteSkill = (index) => (
       setSkills([
        ...skills.slice(0, index),
        ...skills.slice(index +1, skills.length)
        ])
    )
    const updateSkill = (index, value) => {
        const updatedField = [...skills]
        updatedField[index] = value;
        setSkills(updatedField)
    }
    const updateSchoolName = (index, value) => {
        const updatedField = [...schools]
        updatedField[index].name = value;
        setSchools(updatedField)
    }
    const updateSchoolDegree = (index, value) => {
        const updatedField = [...schools]
        updatedField[index].degree = value;
        setSchools(updatedField)
    }
    const updateSchoolYear = (index, value) => {
        const updatedField = [...schools]
        updatedField[index].years = value;
        setSchools(updatedField)
    }
     const updateExpAt = (index, value) => {
        const updatedField = [...exp]
        updatedField[index].at = value;
        setExp(updatedField)
    }
    const updateExpName = (index, value) => {
        const updatedField = [...exp]
        updatedField[index].name = value;
        setExp(updatedField)
    }
    const updateExpYear = (index, value) => {
        const updatedField = [...exp]
        updatedField[index].years = value;
        setExp(updatedField)
    }
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

    const uploadProfilePhoto = (photo) => {
      if (photo && photo.size >= 2097152  ){
          dispatch({type:'NOTIFY',payload:{error: "Файлын хэмжээ хэтэрсэн!"}})
          return
      }
      if(!photo || photo=== undefined) {
          dispatch({type:'NOTIFY',payload:{error: "Ковер оруулна уу!"}})
          return
      }
      dispatch({type:'NOTIFY',payload:{loading: true}})
      const data = new FormData()
      data.append("file", photo)
      data.append("upload_preset", "adminCoverUpload")
      data.append("cloud_name", "ozzo-web")
      fetch("https://api.cloudinary.com/v1_1/ozzo-web/image/upload",{
          method:"post",
          body: data
      })
      .then(resp => resp.json())
      .then(data => {
          dispatch({type:'NOTIFY',payload:{success: "Амжилттай!"}})
          setProfilePhoto(data.secure_url)
      })
      .catch(err => console.log(err))
    }
    const UpdateUser = async (id) => {
        setPasswordVerifyModal(true)
        const updatedField = [...informations]
        updatedField[l].lastname = lastname
        updatedField[l].firstname = firstname
        updatedField[l].title = title
        updatedField[l].skills.skill = skills
        updatedField[l].education.schools = schools
        updatedField[l].experience.works = exp
        setInformations(updatedField)
        const raw = { 
            "_id" : auth.user._id,
            profilephoto,
            username,
            username,
            password,
            linkedin,
            facebook,
            instagram,
            youtube,
            email,
            web,
            informations
        };
       setBody(JSON.stringify(raw))
    }
    return(
    <div className='pt-20 cursor-default'>
        <Head>
            <title> {t.ozzo}</title>
        </Head>

        <div className='w-full lg:px-32 md:px-20 p-5 font-semibold '>
            <div className='lg:w-full font-semibold text-xl flex items-center text-gray-800 mt-10'> 
                <div className='md:h-10 h-8 w-1 bg-red-500 mr-5'></div>
                <p className='uppercase'>{Profile.title}</p>
            </div>
        </div> 
        <div className="w-full grid md:grid-cols-2 gap-10">
            <form className='md:pr-10'>
                <div className='flex flex-col lg:pl-32 md:pl-20 p-5 text-gray-700'>
                {profilephoto ?
                    <div className='transition-all duration-300 ease-in-out aspect-1 overflow-hidden w-full bg-cover bg-center rounded-lg mb-10 mt-5  '>
                        <div className='relative w-full h-full bg-cover bg-center rounded-lg' style={{'backgroundImage': `url(${profilephoto}`}}>
                            <div className='transition-all duration-300 ease-in-out absolute top-5 right-5 rounded-full bg-white/20 text-white hover:bg-white/50' 
                            onClick={()=>   dispatch({type:'NOTIFY',payload:{error: "Зураг солих боломжгүй !"}}) }>
                            <svg className="h-4 w-4 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={`transition-all duration-300 ease-in-out aspect-1 overflow-hidden w-full bg-cover bg-center rounded-lg mb-10 mt-5 flex justify-center items-center `}>
                        <input
                            ref={fileRef}
                            onChange={(e)=> {uploadProfilePhoto(e.target.files[0]) }}
                            multiple={false}
                            type="file"
                            accept="image/png, image/jpeg"
                            hidden
                        />
                        <div onClick={() => fileRef.current.click()} className={`w-full aspect-1 flex bg-cover bg-center flex-col justify-center items-center rounded-3xl p-5 border-2  border-dashed `} >
                            
                            <svg className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                                <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
                            </svg>

                            <div className='text-xs m-5 uppercase text-center'>
                                Профайл Зургаа оруулна уу
                            </div>

                            <div className='text-xs text-gray-500 my-1'>
                                <p>Зөвшөөрөх Файл: <span className='font-medium text-black'>png, jpg</span></p> 
                            </div>

                            <div className='text-xs text-gray-500 my-1'>
                                <p>Файлын дээд хэмжээ: <span className='font-medium text-black'>2mb</span></p>
                            </div>

                            <div className='text-xs text-gray-500 my-1'>
                                <p>Зургийн харьцаа: <span className='font-medium text-black'> 1:1</span></p>
                            </div>
                        </div>
                    </div>
                    }
                    <div className='flex items-center'>
                        <p className='font-semibold uppercase my-5 text-lg'>{Profile.profile}</p>
                        <div className='h-2 w-2 scale-75 rounded-full bg-red-500 ml-2'></div>
                    </div>
                    <div className='w-full my-1'>
                    {profileInfos.map((profile, index) => (
                        <div key={index}>
                            <label className='font-base'>{profile.title}</label>
                            <input 
                            className={`transition-all duration-300 ease-in-out my-2 w-full outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-red-300 font-normal placeholder:text-black text-sm disabled:border-gray-100 `}   
                            id={profile.title}
                            name={profile.title}
                            type={profile.type && profile.type}
                            value={profile.val || ""}
                            autoComplete= "false"
                            onChange={(e) => setProfileInfos(e.target.value , profile.action)}
                            disabled={l != "0" ? profile.disabled : ""}
                            />
                            
                        </div>
                    ))}
                    </div>
                    <div className='w-full my-1'>
                        <label className='font-base'>{Profile.password}</label>
                        <div className='relative flex'>
                            <input className='transition-all duration-300 ease-in-out w-full outline-none border text-sm border-gray-200 rounded-md h-10 px-2 focus:border-sky-500 font-normal ' 
                            id="password"
                            name="password"
                            type={passwordShow ? "text" : "password"}
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            // required
                            autoComplete="off"
                            placeholder='Нууц үгээ оруулна уу'
                            />
                            {passwordShow ?
                            <svg className="h-4 w-4 absolute right-3 top-3 text-gray-500 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                            onClick={()=>setPasswordShow(false)}
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            :
                            <svg className="h-4 w-4 absolute right-3 top-3 text-gray-500 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                            onClick={()=>setPasswordShow(true)}
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                            </svg>
                            }
                        </div>
                    </div>
                    <div className='flex items-center'>
                    <p className='font-semibold uppercase my-5 text-lg'>{Profile.socials}</p>
                    <div className='h-2 w-2 scale-75 rounded-full bg-red-500 ml-2'></div>
                    </div>
                    <div className='w-full my-1'>
                    {socials.map((social, index) => (
                        <div key={index}>
                            <label className='font-base'>{social.icon} {social.title}</label>
                            <input 
                                className='transition-all duration-300 ease-in-out my-2  w-full outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-red-300 font-normal text-sm placeholder:text-black'   
                                id={social.title}
                                name={social.title}
                                type="text"
                                value={social.val || ""}
                                onChange={(e) => setProfileSocials(e.target.value, social.action)}
                                disabled={l != "0" ? true : false}
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
                            <p className='font-semibold uppercase text-lg'>{Profile.skills}</p>
                            <div className='h-2 w-2 scale-75 rounded-full bg-sky-500 ml-2'></div>
                        </div>
                        <div className='my-10 w-full z-0'>
                            {skills && skills.map((skill, index) => (
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
                                    <input className='transition-all w-full duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-normal text-sm placeholder:text-black z-0'   
                                        id={skill}
                                        name={skills}
                                        type="text"
                                        value={skill}
                                        onChange={(e)=> updateSkill(index, e.target.value)}  
                                        />
                                </div>
                                ))}
                                <div className='w-full grid grid-cols-2 gap-5'>
                                    <button className=' bg-sky-500 h-10 rounded-md text-white transition-all duration-300 ease-in-out hover:opacity-80' onClick={()=>addFieldSkills()} type="button">
                                        {Profile.add}
                                    </button>
                                    {loading ? 
                                    <div className="bg-emerald-100 h-10 rounded-md  transition-all duration-300 ease-in-out  flex justify-center items-center">
                                        <div className="w-5 h-5 border-2 border-gray-200 rounded-full animate-spin" role="status" 
                                        style={{"borderColor": 'rgb(16 185 129) transparent rgb(16 185 129) transparent'}}>
                                        </div>
                                    </div>
                                    :
                                    <button className=' bg-emerald-500 h-10 rounded-md text-white transition-all duration-300 ease-in-out hover:opacity-80' 
                                    onClick={()=> UpdateUser(auth.user._id)} type="button">
                                        {Profile.save}
                                    </button>
                                    }
                                </div>
                        </div>
                    
                    </div>
                    : tabIndex === 1 ?
                    <div>
                        <div className='flex items-center mt-10'>
                            <p className='font-semibold uppercase text-lg'>{Profile.education}</p>
                            <div className='h-2 w-2 scale-75 rounded-full bg-sky-500 ml-2'></div>
                        </div>
                        <div className='my-10'>
                            {schools && schools.map((school, index) => (
                                    <div key={index} className="flex flex-col mb-10 relative">
                                        <button className='absolute -top-5 right-0 transition-all duration-300 ease-in-out hover:bg-red-100 hover:text-red-500 m-2 rounded-md'
                                            type='button' 
                                            onClick={() => deleteSchool(index) }>
                                            <svg className="h-4 w-4 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>   
                                        <label>
                                            {Profile.school}
                                        </label>
                                        <input className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-normal text-sm placeholder:text-black'   
                                            id="school"
                                            name="school"
                                            type="text"
                                            value={school.name || ""}
                                            onChange={(e)=> updateSchoolName(index, e.target.value)}  
                                            />
                                        <label>
                                            {Profile.degree} 
                                        </label>
                                            <input className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-normal text-sm placeholder:text-black'   
                                                id="degree"
                                                name="degree"
                                                type="text"
                                                value={school.degree || ""}
                                                onChange={(e)=> updateSchoolDegree(index, e.target.value)}  
                                            />
                                        <label>
                                            {Profile.years} (20**-20**)
                                        </label>
                                            <input className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-normal text-sm placeholder:text-black'   
                                                id="schoolYears"
                                                name="schoolYears"
                                                type="text"
                                                value={school.years || ""}
                                                onChange={(e)=> updateSchoolYear(index, e.target.value)}  
                                            />
                                    </div>
                                    
                                ))}
                                <div className='w-full grid grid-cols-2 gap-5'>
                                    <button className=' bg-sky-500 h-10 px-8 rounded-md text-white transition-all duration-300 ease-in-out hover:opacity-80' onClick={()=>addFieldSchools()} type="button">
                                        {Profile.add}
                                    </button>
                                    {loading ? 
                                    <div className="bg-emerald-100 h-10 rounded-md  transition-all duration-300 ease-in-out  flex justify-center items-center">
                                        <div className="w-5 h-5 border-2 border-gray-200 rounded-full animate-spin" role="status" 
                                        style={{"borderColor": 'rgb(16 185 129) transparent rgb(16 185 129) transparent'}}>
                                        </div>
                                    </div>
                                    :
                                    <button className=' bg-emerald-500 h-10 rounded-md text-white transition-all duration-300 ease-in-out hover:opacity-80' onClick={()=>UpdateUser(auth.user._id)} type="button">
                                        {Profile.save}
                                    </button>
                                    }
                                </div>
                        </div>
                    </div>
                    :
                    <div >
                        <div className='flex items-center mt-10'>
                            <p className='font-semibold uppercase text-lg'>{Profile.exp}</p>
                            <div className='h-2 w-2 scale-75 rounded-full bg-sky-500 ml-2'></div>
                        </div>
                        <div className='my-10'>
                            {exp && exp.map((work, index) => (
                                    <div key={index} className="flex flex-col mb-10 relative">
                                        <button className='absolute -top-5 right-0 transition-all duration-300 ease-in-out hover:bg-red-100 hover:text-red-500 m-2 rounded-md'
                                            type='button' 
                                            onClick={() => deleteExp(index) }>
                                            <svg className="h-4 w-4 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                            <label>
                                                {Profile.at}
                                            </label>
                                            <input 
                                                className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-normal text-sm placeholder:text-black'   
                                                id="exp"
                                                name="exp"
                                                type="text"
                                                value={work.at || ""}
                                                onChange={(e)=> updateExpAt(index, e.target.value)}  
                                            />  
                                            <label>
                                                {Profile.work}
                                            </label>
                                            <input 
                                                className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-normal text-sm placeholder:text-black'   
                                                id="work"
                                                name="work"
                                                type="text"
                                                value={work.name || ""}
                                                onChange={(e)=> updateExpName(index, e.target.value)}  
                                            />

                                            <label>
                                                {Profile.years} (20**-20**)
                                            </label>
                                            <input 
                                                className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-normal text-sm placeholder:text-black'   
                                                id="years"
                                                name="year"
                                                type="text"
                                                value={work.years || ""}
                                                onChange={(e)=> updateExpYear(index, e.target.value)}  
                                            />
                                    </div>
                                    
                                ))}
                                <div className='w-full grid grid-cols-2 gap-5'>
                                    <button className=' bg-sky-500 h-10 px-8 rounded-md text-white transition-all duration-300 ease-in-out hover:opacity-80' onClick={()=>addFieldExp()} type="button">
                                        {Profile.add}
                                    </button>
                                    {loading ? 
                                    <div className="bg-emerald-100 h-10 rounded-md  transition-all duration-300 ease-in-out  flex justify-center items-center">
                                        <div className="w-5 h-5 border-2 border-gray-200 rounded-full animate-spin" role="status" 
                                        style={{"borderColor": 'rgb(16 185 129) transparent rgb(16 185 129) transparent'}}>
                                        </div>
                                    </div>
                                    :
                                    <button className=' bg-emerald-500 h-10 rounded-md text-white transition-all duration-300 ease-in-out hover:opacity-80' onClick={()=>UpdateUser(auth.user._id)} type="button">
                                        {Profile.save}
                                    </button>
                                    }
                                </div>
                        </div>
                    </div>
                    }
                </div>
            </form>
        </div>
      {passwordVerifyMdoal ?
        <PasswordVerify body={body} setPasswordVerifyModal={setPasswordVerifyModal} setScrollStop={setScrollStop} api={api} method={"PUT"}/>
        :
        <>
        </>
      }
    </div>
  )  
}

export default Profile;
