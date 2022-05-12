import { useRouter } from 'next/router'
import React, {useContext, useEffect, useState, useRef} from 'react'
import moment from 'moment';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { NavbarLocale } from '../locales/Navbar';
import {DataContext} from "../store/GlobalState"
import {initState} from "../Models/ProfileModel"
import PasswordVerify from '../components/PasswordVerify';
import Loading from '../components/Loading';
export async function getServerSideProps() {
  const base = process.env.BASE_URL
  const api = process.env.API_URL
  return {
    props: {base, api},
  }
}

const Profile = ({api}) => {
    const {state, dispatch} = useContext(DataContext)
    const {auth} = state
    const router = useRouter()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = NavbarLocale[l]
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
    const [loading, setLoading] = useState(false)
    const [passwordVerifyMdoal, setPasswordVerifyModal] = useState(false)
    const [scrollStop, setScrollStop] = useState(false)
    const [profilephoto, setProfilePhoto] = useState()
    const [body, setBody] = useState()

    useEffect(() => {
        const user = JSON.parse(window.localStorage.getItem("user"))
        if(!user || user === undefined ){
            return router.push('/login')
        } 
        else {
            setInformations(user && user.informations)
            setSkills(user && user.informations[l].skills.skill)
            setSchools(user && user.informations[l].education.schools)
            setExp(user && user.informations[l].experience.works)
            setUsername(user && user.username)
            setLastname(user && user.informations[l].lastname)
            setProfilePhoto(user && user.profilephoto)
            setFirstname(user && user.informations[l].firstname)
            setTitle(user && user.informations[l].title)
            setLinkedin(user && user.linkedin)
            setFacebook(user && user.facebook)
            setInstagram(user && user.instagram)
            setYoutube(user && user.youtube)
            setEmail(user && user.email)
            setWeb(user && user.web)
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
        title : "Харагдах нэр",
        val : username,
        action : 'username',
        disabled : true
    },
      {
        title : "Овог",
        val : lastname,
        action : "lastname",
        class : "disabled"
      },
      {
        title : "Өөрийн нэр",
        val : firstname,
        action : "firstname",
        class : "disabled"
      },
      {
        title: "Тодорхойлолт",
        val : title,
        action : "title",
        class : "disabled"
      }
    ]
    const socials = [
      {
        title : "Linkedin Хаяг",
        val : linkedin,
        action : "linkedin"
      },
      {
        title : "Facebook Хаяг",
        val : facebook,
        action :"facebook"
      },
      {
        title : "Instagram Хаяг",
        val : instagram,
         action :"instagram"
      },
      {
        title : "YouTube Хаяг",
        val : youtube,
        action :"youtube"
      },
      {
        title : "Email Хаяг",
        val : email,
        action :"email"
      },
      {
        title : "Web Хаяг",
        val : web,
        action :"web",
      },
    ]
    const tabs = [ 
        {
            title: "Чадварууд",
        },
        {
            title: `Боловсрол`,
        },
        {
            title: `Туршлага`,
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
      data.append("upload_preset", "artistcoverupload")
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
        updatedField[l].education.shools = schools
        updatedField[l].experience.works = exp
        setInformations(updatedField)
        const raw = { 
            "_id" : auth.user._id,
            profilephoto,
            username,
            username,
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
                <p className='uppercase'>Хэрэглэгчийн Мэдээлэл Засах</p>
            </div>
        </div> 
        <div className="w-full grid md:grid-cols-2">
            <form>
                <div className='flex flex-col lg:px-32 md:px-20 p-5 text-gray-700'>
                    {profilephoto ?
                    <div className='transition-all duration-300 ease-in-out aspect-1 overflow-hidden w-full bg-cover bg-center rounded-lg mb-10 mt-5 md:pr-10 '>
                <div className='relative w-full h-full bg-cover bg-center rounded-lg' style={{'backgroundImage': `url(${profilephoto}`}}>
                    <div className='transition-all duration-300 ease-in-out absolute top-5 right-5 rounded-full bg-white/20 text-white hover:bg-white/50' 
                    onClick={()=> console.log("Тийм юм байдаггүй юм аа")}>
                    <svg className="h-4 w-4 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </div>
                </div>
                </div>
                :
                <div className={`transition-all duration-300 ease-in-out aspect-1 w-full bg-cover bg-center rounded-lg mb-10 hover:opacity-80 md:pr-10  flex justify-center items-center `}>
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
                        <p className='font-semibold uppercase my-5 text-lg'>Профайл</p>
                        <div className='h-2 w-2 scale-75 rounded-full bg-red-500 ml-2'></div>
                    </div>
                    <div className='w-full my-1'>
                    {profileInfos.map((profile, index) => (
                        <div key={index}>
                            <label className='font-base'>{profile.title}</label>
                            <input 
                            className={`transition-all duration-300 ease-in-out my-2 w-full outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-red-300 font-light placeholder:text-black text-sm disabled:border-gray-100 `}   
                            id={profile.title}
                            name={profile.title}
                            type="text"
                            value={profile.val || ""}
                            onChange={(e) => setProfileInfos(e.target.value , profile.action)}
                            disabled={l != "0" ? profile.disabled : ""}
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
                            <p className='font-semibold uppercase text-lg'>Чадварууд</p>
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
                                    <input className='transition-all w-full duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-light text-sm placeholder:text-black z-0'   
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
                                        Нэмэх
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
                                        Хадгалах
                                    </button>
                                    }
                                </div>
                        </div>
                    
                    </div>
                    : tabIndex === 1 ?
                    <div>
                        <div className='flex items-center mt-10'>
                            <p className='font-semibold uppercase text-lg'>Боловсрол</p>
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
                                            Сургууль
                                        </label>
                                        <input className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-light text-sm placeholder:text-black'   
                                            id="school"
                                            name="school"
                                            type="text"
                                            value={school.name || ""}
                                            onChange={(e)=> updateSchoolName(index, e.target.value)}  
                                            />
                                        <label>
                                            Зэрэг 
                                        </label>
                                            <input className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-light text-sm placeholder:text-black'   
                                                id="firstname"
                                                name="firstname"
                                                type="text"
                                                value={school.degree || ""}
                                                onChange={(e)=> updateSchoolDegree(index, e.target.value)}  
                                            />
                                        <label>
                                            Он (20**-20**)
                                        </label>
                                            <input className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-light text-sm placeholder:text-black'   
                                                id="firstname"
                                                name="firstname"
                                                type="text"
                                                value={school.years || ""}
                                                onChange={(e)=> updateSchoolYear(index, e.target.value)}  
                                            />
                                    </div>
                                    
                                ))}
                                <div className='w-full grid grid-cols-2 gap-5'>
                                    <button className=' bg-sky-500 h-10 px-8 rounded-md text-white transition-all duration-300 ease-in-out hover:opacity-80' onClick={()=>addFieldSchools()} type="button">
                                        Нэмэх
                                    </button>
                                    {loading ? 
                                    <div className="bg-emerald-100 h-10 rounded-md  transition-all duration-300 ease-in-out  flex justify-center items-center">
                                        <div className="w-5 h-5 border-2 border-gray-200 rounded-full animate-spin" role="status" 
                                        style={{"borderColor": 'rgb(16 185 129) transparent rgb(16 185 129) transparent'}}>
                                        </div>
                                    </div>
                                    :
                                    <button className=' bg-emerald-500 h-10 rounded-md text-white transition-all duration-300 ease-in-out hover:opacity-80' onClick={()=>UpdateUser(auth.user._id)} type="button">
                                        Хадгалах
                                    </button>
                                    }
                                </div>
                        </div>
                    </div>
                    :
                    <div >
                        <div className='flex items-center mt-10'>
                            <p className='font-semibold uppercase text-lg'>Ажлын Туршлага</p>
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
                                                Хаана
                                            </label>
                                            <input 
                                                className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-light text-sm placeholder:text-black'   
                                                id="exp"
                                                name="exp"
                                                type="text"
                                                value={work.at || ""}
                                                onChange={(e)=> updateExpAt(index, e.target.value)}  
                                            />  
                                            <label>
                                            Хийсэн ажил
                                            </label>
                                            <input 
                                                className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-light text-sm placeholder:text-black'   
                                                id="work"
                                                name="work"
                                                type="text"
                                                value={work.name || ""}
                                                onChange={(e)=> updateExpName(index, e.target.value)}  
                                            />

                                            <label>
                                                Он (20**-20**)
                                            </label>
                                            <input 
                                                className='transition-all duration-300 ease-in-out my-2 outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-sky-300 font-light text-sm placeholder:text-black'   
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
                                        Нэмэх
                                    </button>
                                    {loading ? 
                                    <div className="bg-emerald-100 h-10 rounded-md  transition-all duration-300 ease-in-out  flex justify-center items-center">
                                        <div className="w-5 h-5 border-2 border-gray-200 rounded-full animate-spin" role="status" 
                                        style={{"borderColor": 'rgb(16 185 129) transparent rgb(16 185 129) transparent'}}>
                                        </div>
                                    </div>
                                    :
                                    <button className=' bg-emerald-500 h-10 rounded-md text-white transition-all duration-300 ease-in-out hover:opacity-80' onClick={()=>UpdateUser(auth.user._id)} type="button">
                                        Хадгалах
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
      <PasswordVerify body={body} setPasswordVerifyModal={setPasswordVerifyModal} setScrollStop={setScrollStop} api={api}/>
      :
      <>
      </>
      }
    </div>
  )  
}

export default Profile;
