/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useRef, useEffect, useContext} from 'react'
import { Switch } from '@headlessui/react';
import {DataContext} from "../../store/GlobalState"
import { getUsersID, getUser, getUsers } from '../../Datas/Users';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NavbarLocale } from '../../locales/Navbar';
import Loading from '../../components/Loading';
import PasswordVerify from '../../components/PasswordVerify';

export async function getStaticPaths() {
  const response = await getUsers();
  const paths = response.map(row => ({
    params: { user: row._id}
  }));
  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const { user } = params;
  const users = await getUsers();
  const current_user = users.find((p) => p._id === user)
  const api = process.env.API_URL;
  return {
    props: { userData: current_user, api }
  };
}

const AdminUser = ({userData, api}) => {
  const {state, dispatch} = useContext(DataContext)
  const {auth} = state
  const router = useRouter()
  const fileRef = useRef()
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const t = NavbarLocale[l]
  // const[ userData, setUserData] = useState()
  const [username, setUsername] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [title, setTitle] = useState("")
  const [informations, setInformations] = useState([{},{},{}])
  const [loading, setLoading] = useState(false)
  const [passwordshow, setPasswordShow] = useState(false)
  const [passwordVerifyMdoal, setPasswordVerifyModal] = useState(false)
  const [scrollStop, setScrollStop] = useState(false)
  const [profilephoto, setProfilePhoto] = useState()
  const [number, setNumber] = useState()
  const [password, setPassword] = useState()
  const [body, setBody] = useState()

  const [isAdmin, setIsAdmin] = useState(false)
  const [isTeacher, setIsTeacher] = useState(false)
  const [isService, setIsService] = useState(false)
  const [isArtist, setIsArtist] = useState(false)
  const [isLabel, setIsLabel] = useState(false)

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
      },
      {
        title: "Холбогдох дугаар",
        val : number,
        action : "number",
        class : "disabled"
      },
  ]
  const roles = [
    {
      title : "Админы Эрх",
      initialState : isAdmin,
      setInitialStat : setIsAdmin,
    },
    {
      title : "Багшийн эрх",
      initialState : isTeacher,
      setInitialStat : setIsTeacher,
    },
    {
      title : "Артистын эрх",
      initialState : isArtist,
      setInitialStat : setIsArtist,
    },
    {
      title : "Cервисийн эрх",
      initialState : isService,
      setInitialStat : setIsService,
    },
    {
      title : "Лабель эрх",
      initialState : isLabel,
      setInitialStat : setIsLabel,
    }
  ]

  useEffect(() => {
      const user = window.localStorage.getItem("user")
      if(!user || user === undefined ){
          return router.push('/login')
      } 
      else {
        setInformations( userData && userData.informations)
        setUsername(userData &&  userData.username)
        setLastname(userData &&  userData.informations[l].lastname)
        setProfilePhoto(userData &&  userData.profilephoto)
        setFirstname(userData &&  userData.informations[l].firstname)
        setTitle(userData &&  userData.informations[l].title)
        setNumber(userData &&  userData.number)
        setPassword(userData &&  userData.password)
        setIsAdmin(userData &&  userData.admin)
        setIsArtist(userData &&  userData.artist)
        setIsTeacher(userData &&  userData.teacher)
        setIsService(userData &&  userData.service)
        setIsLabel(userData &&  userData.label)
      }
      
  }, [])

  if(!auth.user || auth.user === undefined){
      return(
        <Loading />
      )
    }
  // if(auth.user.admin !== true ){
  //     return (
  //       <div className='fixed inset-0 flex justify-center items-center flex-col'>
  //         <p className=''>
  //         Танд Админ хэсэгт нэвтрэх эрх байхгүй байна!
  //         </p>
  //         <button className='transition-all duration-300 ease-in-out m-5 pr-8 pl-4 py-2 bg-sky-100 rounded-md text-sky-500 hover:bg-sky-500 hover:text-white flex items-center' type='button' onClick={()=> router.push('/profile')}>
  //           <svg  className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  //             <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
  //           </svg>
  //           Буцах
  //         </button>
  //       </div>
  //     )
  //   }

  const setProfileInfos = (field, action) =>{
      if(action === "username") setUsername(field)
      else if(action === "firstname") setFirstname(field)
      else if(action === "lastname") setLastname(field)
      else if(action === "title") setTitle(field)
  }
  const UpdateUser = async (id) => {
      setPasswordVerifyModal(true)
      const updatedField = [...informations]
      updatedField[l].lastname = lastname
      updatedField[l].firstname = firstname
      updatedField[l].title = title
      setInformations(updatedField)
      const raw = { 
          "_id" : id,
          profilephoto,
          username,
          number, 
          password,
          informations,
          teacher:isTeacher,
          admin:isAdmin,
          service:isService,
          artist:isArtist,
          label :isLabel,
      };
      setBody(JSON.stringify(raw))
  }
  console.log(isTeacher)
  return (
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
        <div className="w-full grid md:grid-cols-2 mb-20">
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
              <div>
                <div className='flex items-center'>
                  <p className='font-semibold uppercase my-5 text-lg'>Системд Хандах Эрх</p>
                  <div className='h-2 w-2 scale-75 rounded-full bg-red-500 ml-2'></div>
                </div>
                {roles.map((row, index) => (
                  <div className='flex items-center my-1 ml-5' key={index}>
                    <p className='w-32 truncate text-sm font-medium'>
                      {row.title}
                    </p>
                    <Switch
                        checked={row.initialState}
                        onChange={row.setInitialStat}
                        className={`${row.initialState ? 'bg-sky-500' : 'bg-gray-500'}
                          relative inline-flex h-8 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 scale-75`}
                      >
                        <span
                          aria-hidden="true"
                          className={`${row.initialState ? 'translate-x-6' : 'translate-x-0'}
                            pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out scale-90`}
                        />
                    </Switch>
                  </div>
                ))}
               
               
              </div>
              </div>
            </form>

            <form>
              <div className='flex flex-col md:w-3/4 p-5 text-gray-700'>
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
                          type={profile.type && profile.type}
                          value={profile.val || ""}
                          onChange={(e) => setProfileInfos(e.target.value , profile.action)}
                          disabled={l != "0" ? profile.disabled : ""}
                          />
                          
                      </div>
                  ))}
                    <label className='font-base'>Нууц үг</label>
                    <div className='relative flex '>
                      <input className='transition-all duration-300 ease-in-out w-full outline-none border text-sm border-gray-200 rounded-md h-10 px-2 focus:border-sky-500 font-light ' 
                        id="password"
                        name="password"
                        type={passwordshow ? "text" : "password"}
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
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
                </div>
                
                {loading ? 
                  <div className="bg-sky-100 h-10 rounded-md my-5 transition-all duration-300 ease-in-out  flex justify-center items-center">
                      <div className="w-5 h-5 border-2 border-gray-200 rounded-full animate-spin" role="status" 
                      style={{"borderColor": 'rgb(16 185 129) transparent rgb(16 185 129) transparent'}}>
                      </div>
                  </div>
                  :
                  <button className=' bg-sky-500 h-10 rounded-md my-5 text-white transition-all duration-300 ease-in-out hover:opacity-80'
                   onClick={()=>UpdateUser(userData._id)} type="button">
                      Хадгалах
                  </button>
                  }
              </div>
            </form>
        </div>
        {passwordVerifyMdoal ?
          <PasswordVerify body={body} setPasswordVerifyModal={setPasswordVerifyModal} setScrollStop={setScrollStop} api={api} type={"admin"}/>
          :
          <>
        </>
      }
    </div>
  )
}

export default AdminUser