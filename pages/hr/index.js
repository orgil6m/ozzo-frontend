import React, {useContext, useEffect, useState} from 'react'
import {DataContext} from "../../store/GlobalState"
import Head from 'next/head'
import Loading from '../../components/Loading'
import { useRouter } from 'next/router'
import {PartnersLocale} from "../../locales/Partners"
import { NavbarLocale } from '../../locales/Navbar'
import moment from 'moment'
import 'moment/locale/mn';
moment.locale('mn')
import CountUp from 'react-countup';
import { getPositions, getRequests } from '../../Datas/Positions'

const Index = () => {
    const {state, dispatch} = useContext(DataContext)
    const {auth} = state

    const router = useRouter()
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    const t = NavbarLocale[l]
    const [requests, setRequests] = useState([])
    const [positions, setPositions] = useState([])
    const fetchData = async () => {
        const positions = await getPositions()
        setPositions(positions)
        const requests = await getRequests()
        setRequests(requests)
    }
    useEffect(() => {
        const user = JSON.parse(window.localStorage.getItem("user"))
        if(!user) return router.push('/login')

        fetchData()
    }, [router])
   
    if(!auth.user || auth.user === undefined){
        return  <Loading />
    } 

    if(auth.user.admin !== true ){
        return (
            <div className='fixed inset-0 flex justify-center items-center flex-col'>
                <p className=''>
                Танд хүний нөөцийн хэсэгт нэвтрэх эрх байхгүй байна!
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

    const hrPanel = [
        {
            title : "Ажлын байр",
            icon : FolderIcon(),
            color : "sky-500",
            quantity : positions.length,
            path : "/hr/positions",
            icon2 : EditIcon(),
            data : positions,
        },    
        {
            title : "Ажил Горилогчийн хүсэлтүүд",
            icon : InboxIcon(),
            color : "indigo-500",
            quantity : requests.length,
            path : "/hr/requests",
            icon2 : RightIcon(),
            data : requests,
        },    
    ]

    return (
        <div className='pt-20 cursor-default bg-stone-50'>
            <Head>
                <title> Хүний нөөц | ОЗЗО ХХК</title>
            </Head>
        
            <div className='w-full lg:px-32 md:px-20 lg:py-10 p-5 '>
                <div className="lg:mb-10 mb-5 flex cursor-default">
                    <p className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black" onClick={() => router.push("/hr")}> Хүний нөөц </p>
                    <p className="text-sm text-black/50 pr-2 "> / </p>
                </div>
                <div className='lg:w-full font-semibold text-xl flex items-center text-gray-800 my-10'> 
                    <div className='md:h-10 h-8 w-1 bg-red-500 mr-5'></div>
                    <p className='uppercase'>Хүний нөөцийн удирдлага</p>
                </div>
                <div className='grid md:grid-cols-2 gap-5'>
                    {hrPanel.map((row, index) => (
                        <div key={index} className="transition-all duration-300 ease-in-out  flex flex-col px-5 rounded-md bg-white ">
                            <div className='flex md:flex-row flex-col items-center my-5 py-2'>
                                <div className={`rounded-lg bg-${row.color}/10 text-${row.color}`}>
                                    {row.icon}
                                </div>
                                <div className='flex flex-col md:ml-5 truncate md:mt-0 mt-5 md:items-start items-center'> 
                                    <div className={`font-bold text-3xl my-1 flex text-gray-600 -mr-2`}>
                                        <CountUp start={0} end={row.quantity} duration={0.5} />
                                        <div className={`h-1 w-1 rounded-full mr-2 bg-${row.color} animate-pulse`}>
                                        </div>
                                    </div>
                                    <p className='text-xs truncate text-gray-400'>{row.title}</p>
                                </div>
                            </div>
                            <div className='grid grid-cols-1'>
                        <div className='bg-white rounded-lg md:mx-0'>
                            <div className='mx-5 divide-y '>
                                {row.data && row.data.slice(0, 3).map((data, i) => (
                                    <div key={i} className="md:block hidden px-2 py-4 hover:bg-gray-50 rounded-md group" 
                                    onClick={()=> router.push({
                                        pathname : row.path + `/`+ data._id
                                    })}>
                                        <div className='flex justify-between items-center px-4 '>
                                            <span className='truncate'>{data.title}</span>
                                            <div className={`bg-${row.color}/10 text-${row.color} rounded-full`} >
                                              {row.icon2}
                                            </div>
                                        </div>
                                    </div>
                                ))} 
                                {row.data && row.data.length !== 0 ?
                                    <div className='py-2 w-full flex  justify-center'>
                                        {console.log(row.path)}
                                        <button className={`transition-all duration-300 ease-in-out px-8 py-3 mx-4 bg-${row.color}/10 text-${row.color} hover:bg-${row.color} text-sm rounded-md hover:text-white my-2 flex justify-center items-center`} onClick={()=> router.push(row.path)}>
                                            Бүгдийг харах
                                        </button>
                                    </div>
                                :
                                <div className='w-full flex items-center justify-center text-gray-400 text-sm mt-4'>
                                    Хоосон байна
                                </div>
                                }
                            </div> 
                        </div>
                    </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Index



const FolderIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
       
    )
}

const InboxIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
    </svg>
    )
}


const EditIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
    )
}
const RightIcon = ()  => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    )
}