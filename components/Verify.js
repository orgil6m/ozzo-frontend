import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import { useState, useRef, useEffect, useContext } from 'react';
import {DataContext} from "../store/GlobalState"
import {Messages} from "../locales/DispatchMessages"

const VerifyModal = ({body, dataFetch, setVerifyModal, setScrollStop,  type, action})=>{
    const router = useRouter()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const {state, dispatch} = useContext(DataContext)
    const message = Messages[l]
    const {auth} = state
    const verify = async (e) => {
      e && e.preventDefault()
        try {
            const response = await dataFetch
            const resJson = await response.json();
            if(response.status == 200){
              if(action === "routerBack") router.back()
              setScrollStop(false)
              setVerifyModal(false)
              dispatch({type:'NOTIFY', payload:{success: message.success}})
              if(type !=="admin" ){
              dispatch({type:'AUTH', payload:{
                  ...auth,
                  user: resJson.user,
              }})
              window.localStorage.setItem("user", JSON.stringify(resJson.user));
            }
          }
        }
        catch (err) {}
    }

    return   (
          <div className="transition-all duration-300 ease-in-out flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none cursor-default" >
            <div className='w-screen h-screen fixed bg-black/30 backdrop-blur-sm inset-0' onClick={() => {setVerifyModal(false); setScrollStop(false)}}></div>
            <motion.div className="bg-white rounded-lg flex flex-col md:w-1/3 relative max-h-[90%] w-11/12 overflow-y-scroll "
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
              <div className="text-black absolute right-0 top-0 transition-all duration-200 ease-in-out hover:bg-gray-100/50 p-2 rounded-full m-5" 
              onClick={() => {setVerifyModal(false); setScrollStop(false)}}>
                <svg className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div className='flex flex-col justify-center items-center' onSubmit={verify}>
                <p className='mt-10 font-medium md:px-24 px-12 text-center'>
                  Та энэ үйлдлийг хийхдээ итгэлтэй байна уу?
                </p>
              <div className='grid grid-cols-2 gap-5 mb-10 my-8'>
                <button className='transition-all duration-300 ease-in-out px-8 py-2  bg-red-100 rounded-md text-red-500 hover:bg-red-500 hover:text-white'
                    type='button' onClick={()=> setVerifyModal(false)} >
                  Үгүй 
                </button>
                <button className='transition-all duration-300 ease-in-out px-8 py-2  bg-sky-100 rounded-md text-sky-500 hover:bg-sky-500 hover:text-white'
                    type='button' onClick={() => verify() }>
                  Тийм 
                </button>
              </div>
              </div>
            </motion.div>
          </div>      
    )
}

export default VerifyModal