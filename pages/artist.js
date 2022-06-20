/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router'
import React, {useContext, useEffect, useState, useRef} from 'react'
import Head from 'next/head';
import { NavbarLocale } from '../locales/Navbar';
import {DataContext} from "../store/GlobalState"
import EditAudioModal from "../components/EditAudioModal"
import AddAudioModal from "../components/AddAudioModal"
import PasswordVerify from '../components/PasswordVerify';
import Loading from '../components/Loading';
import { Messages } from '../locales/DispatchMessages';

export async function getServerSideProps() {
  const api = process.env.API_URL
  return {
    props: {api},
  }
}

const Admin = ({ api }) => {
  const {state, dispatch} = useContext(DataContext)
  const {auth} = state
  const fileRef = useRef()
  const router = useRouter()
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const t = NavbarLocale[l]
  const message = Messages[l]
  const [coverUploaded, setCoverUploaded ] = useState(false)
  const [artistPhoto, setArtistPhoto] = useState()
  const [artistName, setArtistName] = useState()
  const [bio, setBio] = useState({})
  const [loading, setLoading] = useState(false)
  const [audios, setAudios] = useState([])
  const [editAudioModal, setEditAudioModal] = useState(false)
  const [passwordVerifyMdoal, setPasswordVerifyModal] = useState(false) 
  const [currentAudio, setCurrentAudio] = useState()
  const [scrollStop, setScrollStop] = useState(false)
  const [addAudioModal, setAddAudioModal] = useState(false)
  const [informations, setInformations] = useState()
  const [body, setBody] = useState()
  useEffect(() => {
    if (scrollStop) {
      document.body.style.overflow = "hidden";
    } else{
      document.body.style.overflow = 'unset';
    }
  });
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"))
    if(!user || user === undefined ){
        return router.push('/login')
    } 
    else {
      const user = JSON.parse(window.localStorage.getItem("user"))
      setArtistName(user && user.artistName)
      setArtistPhoto(user && user.artistPhoto)
      setBio(user && user.informations[l].bio.text)
      setAudios(user && user.audios)
      setInformations(user && user.informations)
    }
  }, [])
    if(!auth.user || auth.user ===  undefined) {
      return <Loading />
    }

    if(auth.user.artist !== true ){
      return (
        <div className='fixed inset-0 flex justify-center items-center flex-col'>
          <p className=''>
          Танд Артист хэсэгт нэвтрэх эрх байхгүй байна!
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
    const uploadArtistPhoto = (photo) => {
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
        data.append("upload_preset", "artistcoverupload")
        data.append("cloud_name", "ozzo-web")
        fetch("https://api.cloudinary.com/v1_1/ozzo-web/image/upload",{
            method:"post",
            body: data
        })
        .then(resp => resp.json())
        .then(data => {
            setCoverUploaded(true)
            dispatch({type:'NOTIFY',payload:{success: message.success}})
            setArtistPhoto(data.secure_url)
        })
        .catch(err => console.log(err))
    }
    const addAudioField = (index) => {
      setCurrentAudio(index+1)
      setAddAudioModal(true)
      setScrollStop(true)
    }
    const editAudio = (index) => {
      setCurrentAudio(index)
      setEditAudioModal(true)
      setScrollStop(true)
    }
    const UpdateUser = async () => {
    const updatedField = [...informations]
    updatedField[l].bio.text = bio
    setInformations(updatedField)
    setPasswordVerifyModal(true)
    const raw = { 
        "_id" : auth.user._id,
        artistPhoto,
        artistName,
        informations
    };
    setBody(JSON.stringify(raw))
    }

    return(
    <div className='pt-20 cursor-default w '>
      <Head>
        <title> {t.ozzo}</title>
      </Head>
      <div className='w-full lg:px-32 md:px-20 p-5 font-semibold '>
        <div className='lg:w-full font-semibold text-xl flex items-center text-gray-800 mt-10'> 
            <div className='md:h-10 h-8 w-1 bg-red-500 mr-5'></div>
            <p className='uppercase'>Артистын Мэдээлэл Засах</p>
        </div>
        <div className='w-full grid md:grid-cols-2 md:gap-10 text-gray-600' >
          <form className='mt-10 md:pr-10'>
            {artistPhoto ?
            <div className='transition-all duration-300 ease-in-out aspect-1 overflow-hidden w-full bg-cover bg-center rounded-lg mb-10 mt-5 '>
              <div className='relative w-full h-full bg-cover bg-center rounded-lg' style={{'backgroundImage': `url(${artistPhoto}`}}>
                <div className='transition-all duration-300 ease-in-out absolute top-5 right-5 rounded-full bg-white/20 text-white hover:bg-white/50' 
                onClick={()=> setArtistPhoto()}>
                <svg className="h-4 w-4 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </div>
              </div>
            </div>
            :
            <div className={`transition-all duration-300 ease-in-out aspect-1 w-full bg-cover bg-center rounded-lg mb-10 hover:opacity-80 md:pr-10  flex justify-center items-center ${coverUploaded === true ? "border-sky-500 text-sky-500" : "border-gray-500 text-gray-500"}`}>
              <input
                  ref={fileRef}
                  onChange={(e)=> {uploadArtistPhoto(e.target.files[0]) }}
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
                    Артист Ковер Зургаа оруулна уу
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
            <label>Артист нэр</label>
            <input className='transition-all duration-300 ease-in-out w-full my-2 outline-none border text-sm border-gray-200 rounded-md h-10 px-2 focus:border-sky-500
                font-light mb-5' 
                id="username-address"
                name="username"
                type="text"
                value={artistName}
                onChange={(e) => {
                    setArtistName(e.target.value);
                }}
                required
                autoComplete="off"
                placeholder='Артистын нэрээ оруулна уу'
                disabled={l != 0 ? true : false}
                />
           
            <label>Артист Био</label>
            <textarea className=' transition-all duration-300 ease-in-out my-2 resize-none text-sm outline-none w-full h-60 border focus:border-sky-500 rounded-md p-2' placeholder='Артистын биогоо оруулна уу...' spellCheck="false" value={bio} onChange={(e)=> setBio(e.target.value)} />
            <div className='w-full grid my-5'>
              {loading ? 
              <div className="bg-emerald-100 h-10 rounded-md  transition-all duration-300 ease-in-out flex justify-center items-center">
                  <div className="w-5 h-5 border-2 border-gray-200 rounded-full animate-spin" role="status" 
                  style={{"borderColor": 'rgb(16 185 129) transparent rgb(16 185 129) transparent'}}>
                  </div>
              </div>
              :
              <button className=' bg-emerald-500 h-10 rounded-md text-white transition-all duration-300 ease-in-out hover:opacity-80' 
              onClick={()=>UpdateUser()} type="button">
                  Хадгалах
              </button>
              }
            </div>
          </form>

          <form className='md:mt-10'>
            <p className='md:mb-0 mb-5'>Уран бүтээлүүд</p>
              {auth.user.audios ?
              <div className='mt-5'>
              {auth.user.audios.map((row, index) => (
                <div key={index} className="w-full h-20  my-2 rounded-md p-2 flex items-center bg-gray-50 hover:bg-gray-100 justify-between">
                  <div className='flex items-center'>
                  <p className='md:mx-8 mx-4 text-lg'>
                     {index+1}
                  </p>
                  <div className='flex flex-col'>
                    <p className='text-sm truncate text-ellipsis '>
                      {row.title}
                    </p>
                    <p className='text-xs text-black/50 mt-1'>
                      {auth.user.username}
                    </p>
                  </div>
                  </div>
                  <div className='text-sm flex items-center'>
                  {row.duration ? row.duration : "3:45"}
                  <div className='transition-all duration-300 ease-in-out mx-4 rounded-full hover:bg-sky-100 hover:text-sky-500' onClick={()=> editAudio({row, index})}>
                    <svg className="h-5 w-5 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  </div>
                </div>
              ))}
              </div>  
              :
              <></>
            }
          <button className='my-5 transition-all duration-300 ease-in-out w-full h-10  rounded-md font-medium text-white bg-sky-500 hover:opacity-80' type='button' onClick={()=> addAudioField()}>
            Нэмэх
          </button>
          </form>
        
       </div>
     </div>
     {editAudioModal ? 
      <EditAudioModal currentAudio={currentAudio} setEditAudioModal={setEditAudioModal} setScrollStop={setScrollStop} api={api}/>
      :
      <></>
    }
    {addAudioModal ?
      <AddAudioModal setAddAudioModal={setAddAudioModal} setScrollStop={setScrollStop} api={api} />
    :
    <></>
    }
     {passwordVerifyMdoal ?
      <PasswordVerify body={body} setPasswordVerifyModal={setPasswordVerifyModal} setScrollStop={setScrollStop} api={api} method={"PUT"}/>
      :
      <>
      </>
      }
    </div>
  )  
}

export default Admin;
