/* eslint-disable react-hooks/exhaustive-deps */

import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import { useState, useRef, useEffect, useContext } from 'react';
import {DataContext} from "../store/GlobalState"

const EditAudioModal = ({currentAudio,  setEditAudioModal, setScrollStop , api})=>{
    const {state, dispatch} = useContext(DataContext)
    const {auth} = state
    const router = useRouter();
    const fileRef = useRef()
    const [coverUploaded, setCoverUploaded] = useState()
    const [audios, setAudios] = useState()
    const [audioUploaded, setAudioUploaded] = useState()
    const [audio, setAudio] = useState()
    const [err, setErr] = useState()
    const [loading, setLoading] = useState(false)
    const [audioName, setAudioName] = useState("")

    useEffect(() => {
        if(currentAudio.row.src) setAudio(currentAudio.row.src)
        if(currentAudio.row.title) setAudioName(currentAudio.row.title)
        if(auth.user.audios) setAudios(auth.user.audios)
    }, [])

    const uploadAudio = (audio) => {
        if (audio && audio.size >= 20971520  ){
            setErr(" * Аудио хэмжээ хэтэрсэн")
            return
        } 
        setErr()
        setLoading(true)
        const data = new FormData()
        data.append("file", audio)
        data.append("upload_preset", "AudioUpload")
        data.append("cloud_name", "ozzo-web")
        fetch("https://api.cloudinary.com/v1_1/ozzo-web/video/upload",{
            method:"post",
            body: data
        })
        .then(resp => resp.json())
        .then(data => {
            setAudioUploaded(true)
            setLoading(false)
            setAudio(data.secure_url)
        })
        .catch(err => console.log(err))
    }
    const updateAudio = async () => {
        const updatedField = [...audios]
        updatedField[currentAudio.index].src = audio
        updatedField[currentAudio.index].title = audioName
        setAudios(updatedField)
        setLoading(true)
        const raw = { 
            "_id" : auth.user._id,
           audios
        };
          try {
            setLoading(true)
            const response = await fetch(`${api}/api/ozzo/users`, {
                method: "PUT",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(raw),
            })
            const resJson = await response.json();
            if(response.status === 200){
                 setLoading(false)
                  dispatch({type:'AUTH', payload:{
                    ...auth,
                    user: resJson.user,
                }})
                window.localStorage.setItem("user", JSON.stringify(resJson.user));
                setEditAudioModal(false)
            } else{
                setErr(resJson.message)
            }
        } catch(err){}
        
    }
    const deleteAudio = async () => {
        setAudios([
             audios.splice(currentAudio.index, 1)
        ])
        console.log(audios)
        setLoading(true)
        const raw = { 
            "_id" : auth.user._id,
            audios
        };
          try {
            const response = await fetch(`${api}/api/ozzo/users`, {
                method: "PUT",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(raw),
            })
            const resJson = await response.json();
            if(response.status === 200){
                 setLoading(false)
                  dispatch({type:'AUTH', payload:{
                    ...auth,
                    user: resJson.user,
                }})
                window.localStorage.setItem("user", JSON.stringify(resJson.user));
                dispatch({type:'NOTIFY', payload:{success: "Амжилттай устлаа"}})
                setScrollStop(false)
                setEditAudioModal(false)
            } else{
                setErr(resJson.message)
            }
        } catch(err){}
    }
    return   (
          <div className="transition-all duration-300 ease-in-out flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none cursor-default" >
            <div className='w-screen h-screen fixed bg-black/30 backdrop-blur-sm inset-0' onClick={() => {setEditAudioModal(false); setScrollStop(false)}}></div>

            <motion.div className="bg-white rounded-lg flex flex-col lg:w-1/2 relative max-h-[90%] w-11/12 overflow-y-scroll "
             initial="hidden" animate="visible" variants={{
            hidden :{
                scale :.8,
                opacity:0,
            },
            visible:{
                scale:1,
                opacity:1,
            },
          }}>
            <div className=" text-black absolute right-0 top-0 transition-all duration-200 ease-in-out hover:bg-gray-100/50 p-2 rounded-full m-5" 
            onClick={() => {setEditAudioModal(false); setScrollStop(false)}}>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <div className='p-10'>
            <label>
                Уран бүтээлийн нэр
            </label>
            <input className='transition-all duration-300 ease-in-out w-full my-2 outline-none border text-sm border-gray-200 rounded-md h-10 px-2 focus:border-sky-500
                font-light mb-5' 
                id="username-address"
                name="username"
                type="text"
                value={audioName}
                onChange={(e) => {
                    setAudioName(e.target.value);
                }}
                required
                autoComplete="off"
                placeholder='Уран бүтээлийн нэрээ оруулна уу'/>
                {/* {currentAudio.title} */}
            <label>
                Уран бүтээл
            </label>   
        
            <div className={`transition-all duration-300 ease-in-out w-full bg-cover bg-center rounded-lg mb-10 hover:opacity-80 my-2 flex justify-center items-center ${coverUploaded === true ? "border-sky-500 text-sky-500" : "border-gray-500 text-gray-500"}`}>
            <input
                ref={fileRef}
                onChange={(e)=> {uploadAudio(e.target.files[0])}}
                multiple={false}
                type="file"
                accept="audio/mp3, audio/wav"
                hidden
            />
                {audio ?
                <div className='flex w-full items-center'>
                    <audio src={audio} controls className='w-10/12' />
                    <div className='w-10 h-10 ml-4'>
                        <div className='transition-all duration-300 ease-in-out w-full bg-red-100 h-full rounded-lg text-red-500 flex justify-center items-center hover:text-white hover:bg-red-500' onClick={() => setAudio()} >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                </div>
                    :
                <div onClick={() => fileRef.current.click()} className={`w-full  flex bg-cover bg-center flex-col justify-center items-center rounded-3xl p-5 border-2  border-dashed `} >
                {loading ?
                    <div className=" h-10 rounded-md m-5 transition-all duration-300 ease-in-out  flex justify-center items-center">
                        <div className="w-8 h-8 border-4 rounded-full animate-spin" role="status" 
                        style={{"borderColor": 'rgb(239 68 68) transparent rgb(239 68 68) transparent'}}>
                        </div>
                    </div>
                    :
                    <>
                <svg className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                    <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
                </svg>
                
                        <div className='text-xs m-4 uppercase text-center'>
                            <p>
                                Уран бүтээлээ оруулна уу
                            </p>
                            {/* } */}
                        </div>
                        <div className='text-xs text-gray-500 my-1'>
                            <p>Зөвшөөрөх Файл: <span className='font-medium text-black'>mp3, wav</span></p> 
                        </div>
                        <div className='text-xs text-gray-500 my-1'>
                            <p>Файлын дээд хэмжээ: <span className='font-medium text-black'>20mb</span></p>
                        </div>
                        </>
                        }
                </div>
                }
            <p className='text-red-500 text-sm italic'>
            {err}
            </p>
            </div>
            <div className='w-full flex justify-center'>
                <button className='transition-all duration-300 ease-in-out px-8 py-2 mx-4 bg-red-100 rounded-md text-red-500 hover:bg-red-500 hover:text-white'
                type='button' onClick={() => deleteAudio()}>
                    Устгах
                </button>
                <button className='transition-all duration-300 ease-in-out px-8 py-2 mx-4 bg-sky-100 rounded-md text-sky-500 hover:bg-sky-500 hover:text-white'
                type='button' onClick={() => updateAudio()}>
                    Хадгалах
                </button>
            </div>
            </div>
           
            </motion.div>
          </div>      
    )
}

export default EditAudioModal