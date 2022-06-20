import Link from 'next/link';
import { useRouter } from 'next/router'
import react, { useState, useContext } from 'react';
import Image from 'next/image';
import OzzoLogo from '../Assets/LOGO_ozzo.png'
import LocaleDropDown from './LocaleDropDown'
import { DataContext } from '../store/GlobalState';
import { NavbarLocale} from '../locales/Navbar';
import { Buttons } from "../locales/Profile"
import { Messages } from '../locales/DispatchMessages';

const Sidebar = () => {
    const {state, dispatch} = useContext(DataContext)
    const {auth, notify} = state
    const router = useRouter()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = NavbarLocale[l]
    const Button = Buttons[l]
    const message = Messages[l]
    const [showSidebar, setShowSidebar] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const logout = () => {
        console.log("Logget Out!!!!!!!");
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("tokenExpTime");
        window.localStorage.removeItem("user");
        dispatch({type:'NOTIFY',payload:{success: message.logout_successfully}})
        dispatch({type:'AUTH', payload:{}})
        router.push('/')
    }

    const LoggedUser = () =>{
        return (
            <div className="flex flex-col justify-around items-between text-gray-500 mt-10">
                {auth.user.admin === true  ?
                <>
                <Link href='/admin' >
                    <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 text-base hover:text-black hover:border-red-500 flex items-center ${router.pathname == "/admin" ? "border-red-500  text-black " : "border-white"}`}>
                        <svg className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                        {Button.admin}
                    </a>
                </Link>
                <div className='w-full h-px bg-gray-200 ml-2'></div>  
                </>
                :
                <></>}
                {auth.user.teacher === true ?
                <>
                    <Link href='/teacher' >
                        <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 text-base hover:text-black hover:border-red-500 flex items-center ${router.pathname == "/teacher" ? "border-red-500  text-black " : "border-white"}`}>
                            <svg className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>
                            {Button.teacher}
                        </a>
                    </Link>
                    <div className='w-full h-px bg-gray-200 ml-2'></div>   
                </>
                :
                <></>}
                {auth.user.artist === true ?
                <>
                    <Link href='/artist' >
                        <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 text-base hover:text-black hover:border-red-500 flex items-center ${router.pathname == "/artist" ? "border-red-500  text-black " : "border-white"}`}>
                            <svg  className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                            </svg>
                            {Button.artist}
                        </a>
                    </Link>
                    <div className='w-full h-px bg-gray-200 ml-2'></div>   
                </>
                :
                <></>}
                {auth.user.service ===  true  ?
                <>
                <Link href='/service' >
                    <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 text-base hover:text-black hover:border-red-500 flex items-center ${router.pathname == "/service" ? "border-red-500  text-black " : "border-white"}`}>
                       <svg className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {Button.service}
                    </a>
                </Link>
                <div className='w-full h-px bg-gray-200 ml-2'></div>  
                </>
                :
                <></>
                }
                <Link href='/profile' >
                    <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 text-base hover:text-black hover:border-red-500 flex items-center ${router.pathname == "/profile" ? "border-red-500  text-black " : "border-white"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {Button.profile}
                    </a>
                </Link>
                <div className='w-full h-px bg-gray-200 ml-2'></div>   
                <div onClick={() => {setShowSidebar(!showSidebar), logout()}} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 text-base text-red-500 hover:border-red-500 flex items-center border-white`}>
                    <svg  className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    {Button.logout}
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='lg:hidden w-full flex items-center p-3 bg-white justify-between fixed top-0 shadow-sm z-10 cursor-default'>
                <div className=''>
                    <Link href='/'>
                        <a className='inline-flex items-center p-2 mr-4 '>
                            <div className="h-10 w-24 relative ml-2"> 
                                <Image src={OzzoLogo} layout="fill" alt='Logo' />
                            </div>
                        </a>
                    </Link>
                </div>
                
                <div className='flex items-center pr-5' >
                    <div className='pr-5'>
                        <LocaleDropDown />
                    </div>
                        <svg onClick={() => setShowSidebar(!showSidebar)} className="lg:hidden h-6 w-6 z-50 flex items-center cursor-pointer right-10 top-6 ease-in-out duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        
                </div>
            </div>
            
            <div onClick={() => setShowSidebar(!showSidebar)} className={`top-0 right-0 w-screen text-white fixed h-screen  bg-black ease-in-out duration-300 ${ showSidebar ? "opacity-50 z-20 " : "hidden z-0 " }`}>
            </div>
            <div className={`top-0 right-0 w-10/12 bg-white p-5 text-black fixed h-full z-40 flex flex-col justify-start ease-in-out duration-300 shadow-2xl ${ showSidebar ? "translate-x-0 " : "translate-x-full" }`} >
                <svg  onClick={() => setShowSidebar(!showSidebar)} className={`lg:hidden h-6 w-6 z-50 flex items-center absolute right-10 top-6 cursor-pointer ease-in-out duration-300 ${showSidebar ? "flex" : "hidden"}` } fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

            {Object.keys(auth).length === 0  ?
                <div className="flex flex-col justify-around items-between text-gray-500 mt-10">
                    <Link href='/' >
                        <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 text-base hover:text-black hover:border-red-500 ${router.pathname == "/" ? "border-red-500  text-black " : "border-white"}`}>
                            {t.home}
                        </a>
                    </Link>

                    <div className='w-full h-px bg-gray-200 ml-2'></div>  
                    <Link href='/about' >
                        <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 text-base hover:text-black hover:border-red-500 ${router.pathname == "/about" ? "border-red-500  text-black " : "border-white"}`}>
                            {t.about}
                        </a>
                    </Link>
                    
                    <div className='w-full h-px bg-gray-200 ml-2'></div>
                    <div onClick={() => setIsOpen(!isOpen)} className='flex transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 border-white text-base hover:text-black cursor-pointer' >
                        {t.services}
                        <svg className={`transition-all duration-200 ease-in-out h-4 w-4 ml-2 mt-1 ${!isOpen ? "rotate-360":"rotate-90" }`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                    <div>
                        <div className='pl-4 ' >
                            {t.service.map((service, index) => (
                                <div key={index}>
                                    <Link href={service.url}>     
                                        <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 hover:text-black hover:border-red-500 ${!isOpen ? "hidden":"block" } ${router.pathname == service.url ? "border-red-500  text-black " : "border-white"}`}>
                                            {service.title}
                                        </a>
                                    </Link>
                                </div> 
                            ))}
                        </div>    
                        
                    </div>
                    <div className='w-full h-px bg-gray-200 ml-2'></div>
                    <Link href='/news'>
                        <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 text-base hover:text-black hover:border-red-500 ${router.pathname == "/news" ? "border-red-500  text-black " : "border-white"}`}>
                            {t.news}
                        </a>
                    </Link>

                    <div className='w-full h-px bg-gray-200 ml-2'></div>
                    <Link href='/contact'>
                        <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 pt-2 border-l-2 text-base hover:text-black hover:border-red-500 ${router.pathname == "/contact" ? "border-red-500  text-black " : "border-white"}`}>
                            {t.contact}
                        </a>
                    </Link>

                    <div className='w-full h-px bg-gray-200 ml-2'></div>
                    <Link href='/login'>
                        <a onClick={() => setShowSidebar(!showSidebar)} className={`transition-all duration-500 ease-in-out m-2 pl-3 py-2 flex pt-2 border-l-2 text-base items-center hover:text-black hover:border-red-500 ${router.pathname == "/contact" ? "border-red-500  text-black " : "border-white"}`}>
                           
                            {t.login}

                        </a>
                    </Link>
                </div>
                :
                <LoggedUser />
                }
            </div>
        </>
    )
}

export default Sidebar;
