/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useRef, useEffect, useContext} from 'react'
import { Switch } from '@headlessui/react';
import {DataContext} from "../../../store/GlobalState"
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NavbarLocale } from '../../../locales/Navbar';
import Loading from '../../../components/Loading';
import { Messages } from '../../../locales/DispatchMessages';
import { getPositions } from '../../../Datas/Positions';
import { CoursesLocale } from "../../../locales/Courses"
import Verify from '../../../components/Verify';
import moment from 'moment';

export async function getServerSideProps({ params }) {
  const { id } = params;
  const api = process.env.API_URL;
  return {
    props: { id : id , api }
  };
}

const PositionsID = ({id, api}) => {
    const {state, dispatch} = useContext(DataContext)
    const {auth} = state
    const router = useRouter()
    const fileRef = useRef()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = NavbarLocale[l]
    const [loading, setLoading] = useState(false)
    const [position, setPosition] = useState({})
    const [photo, setPhoto] = useState()
    
    const [title, setTitle] = useState("")
    const [location, setLocation] = useState("")
    const [department, setDepartment] = useState("")
    const [type, setType] = useState("")
    const [detail, setDetail] = useState("")
    const [updatedBy, setUpdatedBy] = useState([])
    const [VerifyModal, setVerifyModal] = useState(false) 
    const [open, setOpen] = useState(false)
    const message = Messages[l]
    useEffect(()=> {
        setData()
    }, [])

    useEffect(() => {
        const user = window.localStorage.getItem("user")
        if(!user || user === undefined ){
            return router.push('/login')
        } 
        else {
            // position && setPhoto(position.cover)
            position && setTitle(position.title)
            position && setLocation(position.location)
            position && setType(position.type)
            position && setDepartment(position.department)
            position && setDetail(position.detail)
            position && setOpen(position.open)
            // courseData && setIndividual(courseData.individual)
            // courseData && setGroup(courseData.group)
            // courseData && setBeginner(courseData.course[l].beginner)
            // courseData && setIntermediate(courseData.course[l].intermediate)
            // courseData && setAdvanced(courseData.course[l].advanced)
            // courseData && setPrice(courseData.price)
            // courseData && courseData.updatedBy && setUpdatedBy(courseData.updatedBy)
        }
    }, [position])

    const setData = async () => {
        const res = await getPositions()
        const data = res && res.find(e => e._id === id)
        setPosition(data && data) 
    }

    if(!auth.user || auth.user === undefined){
        return(
            <Loading />
        )
    }
    if(auth.user.admin !== true ){
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

    const uploadPhoto = (photo) => {
        if (photo && photo.size >= 2097152  ){
            dispatch({type:'NOTIFY',payload:{error: message.fileSize_error}})
            return
        }
        if(!photo || photo=== undefined) {
            dispatch({type:'NOTIFY',payload:{error: message.coverPhoto_error}})
            return
        }
        dispatch({type:'NOTIFY',payload:{loading: true}})
        const data = new FormData()
        data.append("file", photo)
        data.append("upload_preset", "humanResource")
        data.append("cloud_name", "ozzo-web")
        fetch("https://api.cloudinary.com/v1_1/ozzo-web/image/upload",{
            method:"post",
            body: data
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch({type:'NOTIFY',payload:{success: message.success}})
            setPhoto(data.secure_url)
        })
        .catch(err => console.log(err))
    }
    const updateCourseData = async (id) => {
        setLoading(true)
        const updatedField = [...courseData.course]
        updatedField[l].title = title
        updatedField[l].beginner = beginner
        updatedField[l].intermediate = intermediate
        updatedField[l].advanced = advanced
        const updatedDate = moment().format("HH:mm:ss MM/DD/YYYY")
        const raw = { 
            _id : id,
            img : photo,
            course : updatedField,
            price,
            individual,
            group,
            updatedDate,
            updatedBy : auth.user.username,
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
        // setBody(JSON.stringify(raw))
    }
    const deleteCourse = async (id) => {
        console.log(id)
    }

    const otherInfos = [
        {
          title : "Байршил",
          value : location,
          action: "location",
          input : "input",
        },
        {
            title : "Салбар/Чиглэл",
            value : department,
            action : "department",
            input :"select",
            options : [
                "Хөгжмийн академи",
                "Хөгжмийн дэлгүүр",
                "Хөгжмийн засвар",
                "Хөгжмийн түрээс",
                "Артист лабель",
                "Oззо тек"
            ]
        },
        {
            title : "Төрөл",
            value : type,
            action : "type",
            input : "select",
            options : [
                "Үндсэн ажилтан",
                "Цагийн ажилтан",
            ]
        },
      
    ]
    const infos = [
        {
            title : "Ажлын байрны нэр",
            value : title,
            action : "title",
            input: "input"
        },
        {
            title : "Гүйцэтгэх үндсэн үүрэг",
            value : detail,
            action : "detail",
            input: "textarea"
        },
        {
          title : "Нээлттэй ажлын байр",
          value : open,
          input : "switch",
          action : "open",
        },
     
    ]
    const setInfo = (field, action) =>{
        if(action === "title") setTitle(field)
        else if(action === "location") setLocation(field)
        else if(action === "lastname") setLastname(field)
        else if(action === "type") setType(field)
        else if(action === "detail") setDetail(field)
        else if(action === "open") setOpen(field)
    }

    return (
        <div className='pt-20 cursor-default'>
            <Head>
                <title> {position.title} | {t.ozzo}</title>
            </Head>
           
            <div className='w-full lg:px-32 md:px-20 p-5  '>
                 {/* ROUTE PATH */}
                <div className="lg:mb-10 mb-5 flex cursor-default md:mt-5">
                    <p className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black" onClick={() => router.push("/hr")}> Хүний нөөц </p>
                    <p className="text-sm text-black/50 pr-2 "> / </p>
                    <p className="transition-all duration-300 ease-in-out text-sm pr-2 text-black/50 hover:text-black" onClick={() => router.push("/hr/positions")}> 
                        Ажлын байр 
                    </p>
                    <p className="text-sm text-black/50 pr-2 "> / </p>
                    <p className="transition-all duration-300 ease-in-out text-sm text-black"> {position.title} </p>
                </div>
                {/* TITLE */}
                <div className='lg:w-full font-semibold text-xl flex items-center text-gray-800 mt-10'> 
                    <div className='md:h-10 h-8 w-1 bg-emerald-400 mr-5'></div>
                    <p className='uppercase'>{position.title}</p>
                </div>
            </div> 

            <div className="w-full grid md:grid-cols-2 gap-10 mb-20">
                <div className='md:pr-10 lg:pl-32 md:pl-20 p-5 text-gray-700'>
                    <div className='flex '>
                    {photo ?
                        <div className='transition-all duration-300 ease-in-out aspect-1 overflow-hidden w-full bg-cover bg-center rounded-lg mb-10 mt-5 md:pr-10 '>
                        <div className='relative w-full h-full bg-cover bg-center rounded-lg' style={{'backgroundImage': `url(${photo}`}}>
                        <div className='transition-all duration-300 ease-in-out absolute top-5 right-5 rounded-full  bg-white/20 text-gray-500 shadow-md hover:bg-gray-100/70' 
                        onClick={()=> setPhoto("")}>
                        <svg className="h-4 w-4 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </div>
                    </div>
                        </div>
                    :
                        <div className={`transition-all duration-300 ease-in-out aspect-w-16 aspect-h-9 w-full bg-cover bg-center rounded-lg mb-10 hover:opacity-80 md:pr-10  flex justify-center items-center `}>
                        <input
                            ref={fileRef}
                            onChange={(e)=> {uploadPhoto(e.target.files[0]) }}
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
                               Ковер зураг оруулна уу
                            </div>
                            <div className='text-xs text-gray-500 my-1'>
                                <p>Зөвшөөрөх Файл: <span className='font-medium text-black'>png, jpg</span></p> 
                            </div>

                            <div className='text-xs text-gray-500 my-1'>
                                <p>Файлын дээд хэмжээ: <span className='font-medium text-black'>2mb</span></p>
                            </div>

                            <div className='text-xs text-gray-500 my-1'>
                                <p>Зургийн харьцаа: <span className='font-medium text-black'> 16:9</span></p>
                            </div>
                        </div>
                        </div>
                    }

                    </div>
                    <div className='flex items-center'>
                        <p className='font-semibold uppercase my-5 text-lg'>Ерөнхий мэдээлэл</p>
                        <div className='h-2 w-2 scale-75 rounded-full bg-red-500 ml-2'></div>
                    </div>
                    {infos.map((row, index) => (
                    <div className='flex  items-center my-1 ml-5' key={index}>
                        
                        {row.input === "switch" ?
                        <>
                        <p className={`w-52 truncate text-sm font-medium `}>
                        {row.title}
                        </p>
                        <Switch
                            checked={row.initialState}
                            onChange={row.setInitialState}
                            className={`${row.initialState ? 'bg-sky-500' : 'bg-gray-500'}
                            relative inline-flex h-8 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 scale-75`}
                        >
                            <span
                            aria-hidden="true"
                            className={`${row.initialState ? 'translate-x-6' : 'translate-x-0'}
                                pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out scale-90`}
                            />
                        </Switch>
                        </>
                        :
                        row.input === "input" ? 
                        <div className='flex flex-col w-full'>
                        <label className='font-base'>{row.title}</label>
                            <input 
                            className={`transition-all duration-300 ease-in-out my-2 w-full outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-emerald-300 font-normal placeholder:text-black text-sm disabled:border-gray-100 `}   
                            id="title"
                            name="title"
                            type="text"
                            value={row.value ? row.value : ""}
                            autoComplete= "false"
                            onChange={(e) => setInfo(e.target.value, row.action)}
                        /> 
                        </div>
                        :
                        row.input === "textarea" ?
                        <div className='flex flex-col w-full'>
                            <label className='font-base'>{row.title}</label>
                            <textarea  className={`transition-all duration-300 ease-in-out my-2 w-full h-40 outline-none border border-gray-200 rounded-md p-2  focus:border-emerald-300 font-normal placeholder:text-black text-sm disabled:border-gray-100 leading-6 resize-none `} 
                        value={row.value}  onChange={(e) => setInfo(e.target.value, row.action)} />
                        </div>
                        :
                        <></>
                    }
                    </div>
                    ))}
                    </div>

                <div className='flex flex-col lg:pr-32 md:pr-20  text-gray-700'>
                  <div className='flex items-center'>
                      <p className='font-semibold uppercase my-5 text-lg'>Бусад</p>
                      <div className='h-2 w-2 scale-75 rounded-full bg-emerald-400 ml-2'></div>
                  </div>
                  {otherInfos.map((row, index) => (
                    <div key={index} className="my-2">
                        <label className='font-base'>{row.title}</label>
                        {row.input === "input" ?
                        <input 
                            className={`transition-all duration-300 ease-in-out my-2 w-full outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-emerald-300 font-normal placeholder:text-black text-sm disabled:border-gray-100 `}   
                            id="title"
                            name="title"
                            type="text"
                            value={row.value ? row.value : ""}
                            autoComplete= "false"
                            onChange={(e) => setInfo(e.target.value, row.action)}
                        /> 
                        : row.input === "select" ?
                        <select className={`transition-all duration-300 ease-in-out my-2 w-full outline-none border border-gray-200 rounded-md h-10 px-2 focus:border-emerald-300 font-normal placeholder:text-black text-sm disabled:border-gray-100 `} value={row.value}>
                            {row.options && row.options.map((option, i) => (
                                <option key={i} value = {option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        :
                        <textarea  className={`transition-all duration-300 ease-in-out my-2 w-full h-40 outline-none border border-gray-200 rounded-md p-2  focus:border-emerald-300 font-normal placeholder:text-black text-sm disabled:border-gray-100 leading-6 resize-none `} 
                        value={row.value}  onChange={(e) => setInfo(e.target.value, row.action)} />

                    }
                    </div>
                  ))}
                 
                </div>
            </div>
            {VerifyModal ?
      <Verify body={body} endpoint={"/api/ozzo/updateUser"} setVerifyModal={setVerifyModal} api={api} method={"PUT"}/>
      :
      <>
      </>
      }
            
        </div>
  )
}
export default PositionsID