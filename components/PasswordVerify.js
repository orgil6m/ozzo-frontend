
import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import { useState, useRef, useEffect, useContext } from 'react';
import {DataContext} from "../store/GlobalState"

const PasswordVerifyModal = ({body, setPasswordVerifyModal, setScrollStop, api, type})=>{

    const {state, dispatch} = useContext(DataContext)
    const {auth} = state
    const router = useRouter();
    const [passwordshow, setPasswordShow] = useState(false)
    const [err, setErr] = useState("")
    const [password, setPassword ] = useState("")
    const [loading, setLoading] = useState(false)

    const passwordVerify =  async (e) => {
      e.preventDefault()
      if(password === auth.user.password) {
        setErr()
        setLoading(true)
        try {
            const response = await fetch(`${api}/api/ozzo/users`, {
                method: "PUT",
                headers: {
                "Content-Type": "application/json",
                },
                body: body,
            });
            const resJson = await response.json();
        if(response.status == 200){
            setPasswordVerifyModal(false)
            setLoading(false)
            dispatch({type:'NOTIFY', payload:{success: resJson.message}})
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
      } else{
        setErr("* Нууц үг буруу")
      }
    }

    return   (
          <div className="transition-all duration-300 ease-in-out flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none cursor-default" >
            <div className='w-screen h-screen fixed bg-black/30 backdrop-blur-sm inset-0' onClick={() => {setPasswordVerifyModal(false); setScrollStop(false)}}></div>
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
          <div className=" text-black absolute right-0 top-0 transition-all duration-200 ease-in-out hover:bg-gray-100/50 p-2 rounded-full m-5" 
          onClick={() => {setPasswordVerifyModal(false); setScrollStop(false)}}>
            <svg className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <form className='flex flex-col justify-center items-center' onSubmit={passwordVerify}>
            <div className='m-10'>
              Hууц Үг Баталгаажуулалт
            </div>
            <div className='relative flex w-2/3'>
            <input className='transition-all duration-300 ease-in-out w-full outline-none border text-sm border-gray-200 rounded-md h-10 px-2 focus:border-sky-500 font-light ' 
              id="password"
              name="password"
              type={passwordshow ? "text" : "password"}
              value={password}
              onChange={(e) => {
                  setPassword(e.target.value)
              }}
              // required
              autoComplete="off"
              placeholder='Нууц үгээ оруулна уу'
            />
            {passwordshow ?
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
            <div className='mt-5 text-xs italic text-red-500'>
             {err}
           </div>
            <button className='transition-all duration-300 ease-in-out px-8 py-2 mx-4 mb-10 mt-5 bg-sky-100 rounded-md text-sky-500 hover:bg-sky-500 hover:text-white'
                type='button' onClick={() => passwordVerify() }>
              Баталгаажуулах
            </button>
          </form>
          
            </motion.div>
          </div>      
    )
}

export default PasswordVerifyModal