/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useRef, useEffect, useContext} from 'react'
import { Switch } from '@headlessui/react';
import {DataContext} from "../../../store/GlobalState"
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NavbarLocale } from '../../../locales/Navbar';
import Loading from '../../../components/Loading';
import PasswordVerify from '../../../components/PasswordVerify';
import { Messages } from '../../../locales/DispatchMessages';
import { getCourses, updateCourse } from '../../../Datas/Courses';
import { CoursesLocale } from "../../../locales/Courses"
import moment from 'moment';

export async function getServerSideProps({ params }) {
  const { id } = params;
  const api = process.env.API_URL;
  return {
    props: { courseID : id , api }
  };
}

const TeacherCourse = ({courseID, api}) => {
    const {state, dispatch} = useContext(DataContext)
    const {auth} = state
    const router = useRouter()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = NavbarLocale[l]
    const c = CoursesLocale[l]
    const message  = Messages[l]
    const [loading, setLoading] = useState(false)
    const [courseData, setCourseData] = useState()
    const course = courseData && courseData.course[l]
    const [photo, setPhoto] = useState()
    const [individual, setIndividual] = useState(false)
    const [group, setGroup] = useState(false)
    const [tab, setTab] = useState(0)
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState({individual : 0, group : 0})
    const [beginner, setBeginner] = useState()
    const [intermediate, setIntermediate] = useState()
    const [advanced, setAdvanced] = useState()
    const [updatedBy, setUpdatedBy] = useState([])
    useEffect(()  =>  {
        getCourses().then(response => response &&  response.find((e) => e._id === courseID)).then(data => setCourseData(data)) 
    }, [])
    useEffect(() => {
        const user = window.localStorage.getItem("user")
        if(!user || user === undefined ){
            return router.push('/login')
        } 
        else {
            courseData && setPhoto(courseData.img)
            courseData && setTitle(courseData.course[l].title)
            courseData && setIndividual(courseData.individual)
            courseData && setGroup(courseData.group)
            courseData && setBeginner(courseData.course[l].beginner)
            courseData && setIntermediate(courseData.course[l].intermediate)
            courseData && setAdvanced(courseData.course[l].advanced)
            courseData && setPrice(courseData.price)
            courseData && courseData.updatedBy && setUpdatedBy(courseData.updatedBy)
        }
    }, [courseData, router.locale])

    if(!auth.user || auth.user === undefined){
        return(
            <Loading />
        )
    }
    if(auth.user.teacher !== true ){
        return (
            <div className='fixed inset-0 flex justify-center items-center flex-col'>
            <p className=''>
            Танд энэ хэсэгт нэвтрэх эрх байхгүй байна!
            </p>
            <button className='transition-all duration-300 ease-in-out m-5 pr-8 pl-4 py-2 bg-sky-100 rounded-md text-sky-500 hover:bg-sky-500 hover:text-white flex items-center' type='button' onClick={()=> router.push('/profile')}>
                <svg  className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
                Буцах
            </button>
            </div>
        )
    }
    const updateCourseData = async (id) => {
        setLoading(true)
        const updatedField = [...courseData.course]
        updatedField[l].beginner = beginner
        updatedField[l].intermediate = intermediate
        updatedField[l].advanced = advanced
        if(updatedBy.includes(auth.user.username)) {
            setUpdatedBy(...updatedBy) 
        } else {
            setUpdatedBy([...updatedBy, auth.user.username]) 
        }
        const raw = { 
            _id : id,
            img : photo,
            course : updatedField,
            price,
            individual,
            group,
            updatedBy,
            updatedDate : moment().format("HH:mm:ss MM-DD YYYY")
        };
        try{
            const response = await updateCourse(JSON.stringify(raw))
            if(response.status == 200){
                dispatch({type:'NOTIFY', payload:{success: message.edited_successfully}})
                setLoading(false)
            } else{
                dispatch({type:'NOTIFY', payload:{error: message.error}})
            }
        }catch (err) {}
    }
    const addProgramme = () => {
        if(tab === 0) { 
            setBeginner([...beginner, ""])
        } else if(tab === 1){
            setIntermediate([...intermediate, ""])
        } else if(tab === 2){
            setAdvanced([...advanced, ""])
        }
    }
    const updateProgramme = (value , index) => {
        if(tab === 0) { 
            const updatedField = [...beginner]
            updatedField[index] = value
            setBeginner(updatedField)
        } else if(tab === 1){
            const updatedField = [...intermediate]
            updatedField[index] = value
            setIntermediate(updatedField)
        } else if(tab === 2){
            const updatedField = [...advanced]
            updatedField[index] = value
            setAdvanced(updatedField)
        }
    }
    const deleteProgramme = (index) => {
        if(tab === 0) { 
            setBeginner([
                ...beginner.slice(0, index),
                ...beginner.slice(index +1, beginner.length)
                ])
          
        } else if(tab === 1){
            setIntermediate([
                ...intermediate.slice(0, index),
                ...intermediate.slice(index +1, intermediate.length)
                ])
        } else if(tab === 2){
            setAdvanced([
                ...advanced.slice(0, index),
                ...advanced.slice(index +1, advanced.length)
                ])
        }
    }
    const programmes = [
        {
            title : c.beginner_title,
            programme : beginner,
        },
        {
            title : c.intermediate_title,
            programme : intermediate,
        },
        {
            title : c.advanced_title,
            programme : advanced,
        }
    ]

    return (
        <div className='pt-20 cursor-default'>
            <Head>
                <title> {course && course.title} | {t.ozzo}</title>
            </Head>

            <div className='w-full lg:px-32 md:px-20 p-5  '>
            <div className="lg:mb-10 mb-5 flex cursor-default md:mt-5">
                <p className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black" onClick={() => router.push("/teacher")}> Багш </p>
                <p className="text-sm text-black/50 pr-2 "> / </p>
                <p className="transition-all duration-300 ease-in-out text-sm text-black"> {course && course.title} </p>
            </div>
                <div className='lg:w-full font-semibold text-xl flex items-center text-gray-800 mt-10'> 
                    <div className='md:h-10 h-8 w-1 bg-emerald-400 mr-5'></div>
                    <p className='uppercase'>Хичээлийн Хөтөлбөр Засах</p>
                </div>
            </div> 
            <div className="w-full grid md:grid-cols-2 gap-10 mb-20">
                <form className='md:pr-10'>
                    <div className='flex flex-col lg:pl-32 md:pl-20 p-5 text-gray-700'>
                    {photo ?
                        <div className='transition-all duration-300 ease-in-out aspect-1 overflow-hidden w-full bg-cover bg-center rounded-lg mb-10 mt-5 md:pr-10 '>
                            <div className='relative w-full h-full bg-cover bg-center rounded-lg' style={{'backgroundImage': `url(${photo}`}}>
                            </div>
                        </div>
                    :
                        <div className={`transition-all duration-300 ease-in-out aspect-1 w-full bg-cover bg-center rounded-lg mb-10 hover:opacity-80 md:pr-10  flex justify-center items-center `}>
                            <div className={`w-full aspect-1 flex bg-cover bg-center flex-col justify-center items-center rounded-3xl p-5 border-2 `} >
                                <svg className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                    }
                    </div>
                    
                </form>

                <form>
                    <div className='flex flex-col lg:pr-32 md:pr-20 p-5 text-gray-700'>
                        <div className='flex items-center'>
                            <p className='font-semibold uppercase my-5 text-lg'>Хөтөлбөр</p>
                            <div className='h-2 w-2 scale-75 rounded-full bg-emerald-400 ml-2'></div>
                        </div>
                        <div className='w-full mb-5 flex justify-between'>
                            {programmes.map((row, index) => (
                                <div key={index} className={`transition-all h-10 m-1  md:text-sm text-xs duration-300 ease-in-out font-semibold w-full flex justify-center rounded-md items-center text-center hover:bg-emerald-100 hover:text-emerald-500 ${tab===index ? "bg-emerald-100 text-emerald-500 " : "bg-gray-100/80"}`} 
                                onClick={()=>setTab(index)} >
                                    <span>
                                        {row.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className='w-full my-1'>
                            {programmes[tab].programme && programmes[tab].programme.map((row, index) => (
                                <div key={index} className="flex flex-col mb-5 relative">
                                    <button className='absolute -top-5 right-0 transition-all duration-300 ease-in-out hover:bg-red-100 hover:text-red-500 m-2 rounded-md' type='button' onClick={() => deleteProgramme(index)}>
                                        <svg className="h-4 w-4 m-2 scale-[80%]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    <div className='text-sm'> 
                                        # {index+1}
                                    </div>
                                    <label className='font-base'>{row.title}</label>
                                    <input 
                                    className={`transition-all duration-300 ease-in-out my-2 w-full outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-emerald-300 font-normal placeholder:text-black text-sm disabled:border-gray-100 `}   
                                    id="programme"
                                    name="programme"
                                    type="text"
                                    value={row || ""}
                                    onChange={(e) => updateProgramme(e.target.value, index)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className='w-full grid grid-cols-2 gap-5 my-5'>
                        <button className=' bg-sky-500 h-10 rounded-md text-white transition-all duration-300 ease-in-out hover:opacity-80'
                        onClick={()=> addProgramme()} type="button">
                            Нэмэх
                        </button>
                        {loading ? 
                        <div className="bg-emerald-100 h-10 rounded-md transition-all duration-300 ease-in-out flex justify-center items-center">
                            <div className="w-5 h-5 border-2 border-gray-200 rounded-full animate-spin" role="status" 
                            style={{"borderColor": 'rgb(16 185 129) transparent rgb(16 185 129) transparent'}}>
                            </div>
                        </div>
                        :
                        <button className=' bg-emerald-500 h-10 rounded-md text-white transition-all duration-300 ease-in-out hover:opacity-80'
                        onClick={()=>updateCourseData(courseID)} type="button">
                            Хадгалах
                        </button>
                        }
                        </div>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default TeacherCourse