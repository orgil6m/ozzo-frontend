/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react'
import {DataContext} from "../../../store/GlobalState"
import Head from 'next/head'
import Loading from '../../../components/Loading'
import { useRouter } from 'next/router'
import { getMessages, deleteMessage } from '../../../Datas/Messages'
import { NavbarLocale } from '../../../locales/Navbar'
import { getRandomColor } from '../../../utils/format'
import ShowMessage from "../../../components/ShowMessage"
import { Messages } from '../../../locales/DispatchMessages'
import moment from 'moment'
import 'moment/locale/mn';
moment.locale('mn')

export const getServerSideProps = (context) => {
    const query  = context.query.message
    if(query){
        return {
            props: { messageIndex : query }
        };
    } else {
        return {
            props : {messageIndex : null} 
        }
    }

}

const MessagesPage = ({messageIndex}) => {
    const {state, dispatch} = useContext(DataContext)
    const {auth} = state
    const router = useRouter()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const message = Messages[l]
    const [messagesData, setMessagesData] = useState("")
    const [selected, setSelected] = useState({})
    const [showMessage, setShowMessage] = useState(false)
    
    useEffect(() => {
        const user = JSON.parse(window.localStorage.getItem("user"))
        if(!user) return router.push('/login')
    }, [])

    useEffect(() => {
        const user = JSON.parse(window.localStorage.getItem("user"))
        if(!user) return router.push('/login')
        getMessages().then(result => {
            setMessagesData(result)
        })
      
    }, [])
    useEffect(()=>{ 
        if(messageIndex) {
            setSelected({row : messagesData[router.query.message], index : router.query.message})
            setShowMessage(true) 
        }
    }, [messagesData, messageIndex])
    if(!auth.user || auth.user === undefined){
        return  <Loading />
    } 
    if(auth.user.admin !== true ){
        return (
            <div className='fixed inset-0 flex justify-center items-center flex-col'>
                <p className=''>
                Танд Админ хэсэгт нэвтрэх эрх байхгүй байна!
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
    
    const deleteThisMessage = async (index) => {
        var raw = JSON.stringify({
            "_id": index
        });
        const response = await deleteMessage(raw)
        if(response.status === 200) {
            setShowMessage(false)
            setSelected({row : {}, index :""})
            getMessages().then(response => {
                setMessagesData(response)
            })
            router.push("/admin/messages")
            dispatch({type:'NOTIFY',payload:{success: message.success }})
        }
    }
    return (
        <div className='pt-20 cursor-default bg-white'>
            <Head>
                <title>Санал Хүсэлтүүд | ОЗЗО ХХК</title>
            </Head>
            <div className='w-full lg:px-32 md:px-20 p-5  '>
                <div className="lg:mb-10 mb-5 flex cursor-default md:mt-5">
                    <p className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black" onClick={() => router.push("/admin")}> Админ </p>
                    <p className="text-sm text-black/50 pr-2 "> / </p>
                    <p className="transition-all duration-300 ease-in-out text-sm pr-2 text-black"> Санал Хүсэлтүүд </p>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>  
                {messagesData.length === 0 || !messagesData || messagesData ===  undefined ?
                <div>
                    Жагсаалт хоосон
                </div>
                :
                <div>
                    {messagesData.map((row, index) => (
                        <div key={index} className={`px-2 py-4 my-1 hover:bg-gray-50 rounded-md ${selected.index === index  ? "bg-gray-50" :""}`} 
                        onClick={()=> {setSelected({row, index}), setShowMessage(true) }}>
                            <div className='flex items-center'>
                                <div className='w-1/12 aspect-1 flex relative'>
                                    <div className='w-full aspect-1 uppercase rounded-full bg-gray-500 flex items-center justify-center text-white' 
                                    style={{backgroundColor: row.avatarColor ? row.avatarColor  : getRandomColor()}}>
                                        <span className='m-2'>
                                            {row.username.slice(0, 1)}
                                        </span>
                                    </div>
                                    {row.unread ?
                                    <div className='w-2 h-2 scale-75 -left-0.5 -top-0.5 absolute rounded-full mr-2 bg-blue-400'>
                                    </div>
                                    :
                                    <></>   
                                    }
                                </div>
                                <div className=' w-9/12 flex flex-col ml-4'>
                                    <p className='text-xs h-1/2 text-gray-900 font-bold'>
                                    {row.email} 
                                    <span className='text-gray-500 font-medium ml-2'>  
                                    | {moment(row.createdTime, "HH:mm:ss").fromNow(true)} 
                                    </span>
                                    </p>
                                    <span className='h-1/2  text-sm m1-2 text-gray-400 font-light truncate text-ellipsis'>
                                        {row.message.slice(0, 50)}...
                                    </span>
                                </div>
                                <div className='w-2/12 flex flex-col items-center justify-center'>
                                    <div className='transition-all duration-300 ease-in-out flex items-center justify-center rounded-full hover:opacity-50'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                    </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                }
                { 
                selected.row === undefined ?
                <></>
                :
                <div className='md:block hidden p-5 border border-gray-100 rounded-md pb-10'>
                    <div className='w-full flex justify-between'>
                        <span className='text-xs text-gray-500'>
                            {selected.row.createdTime && selected.row.createdTime}
                        </span>
                        <div className='flex'>
                            <svg className="mr-2 transition-all duration-100 ease-in-out h-4 w-4 hover:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={()=> likeMessage()}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                            <svg className="mr-2 transition-all duration-100 ease-in-out h-4 w-4 hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={()=> deleteThisMessage(selected.row._id)}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          
                        </div>
                    </div>
                    <div className='flex items-center mt-5'>
                        <div className='rounded-full text-white flex h-10 w-10 justify-center items-center' style={{backgroundColor: selected && selected.row.avatarColor}}>
                            <span className='m-2'>
                            {selected.row.username && selected.row.username.slice(0, 1)}
                            </span>
                        </div>
                        <span className='mx-3 flex flex-col items-start justify-center font-medium'>
                            {selected.row.username && selected.row.username} 
                            <a className='text-xs text-gray-500 flex items-center hover:underline font-light' href={`mailto:${ selected.row.email && selected.row.email}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                                {selected.row.email && selected.row.email}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </a> 
                        </span>
                     
                    </div>
                    <hr className='my-3' />
                    <div >
                        <p className='indent-4'>
                            {selected.row.message && selected.row.message}
                        </p> 
                    </div>
                </div>
                }
                </div>

            </div>
            {showMessage ? <ShowMessage message={selected && selected.row} setShowMessage={setShowMessage}/> : <></>}
        </div>
    )
}

export default MessagesPage