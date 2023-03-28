import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { getRequests } from '../../../Datas/Positions'
import moment from 'moment'
import 'moment/locale/mn'
moment.locale('mn')

const Requests =() =>{
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [select, setSelect] = useState()
    const fetchData = async () => {
        setLoading(true)
        const res = await getRequests()
        setData(res)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [router])

  
    
    return (
        <div className='pt-20 cursor-default bg-stone-50'>
        <Head>
            <title> Хүний нөөц | ОЗЗО ХХК</title>
        </Head>

        <div className='w-full lg:px-32 md:px-20 lg:py-10 p-5 '>
            <div className="lg:mb-10 mb-5 flex cursor-default">
                <p className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black" onClick={() => router.push("/hr")}> Хүний нөөц </p>
                <p className="text-sm text-black/50 pr-2 "> / </p>
                <p className="transition-all duration-300 ease-in-out text-sm text-black pr-2 " onClick={() => router.push("/admin")}> Хүсэлтүүд </p>
            </div>
            <div className='lg:w-full font-semibold text-xl flex items-center text-gray-800 my-10'> 
                <div className='md:h-10 h-8 w-1 bg-red-500 mr-5'></div>
                <p className='uppercase'>Ажил горилогчийн хүсэлтүүд</p>
            </div>
            <div className='overflow-scroll w-full'>
                {/* TABLE */}
                <table className="w-full text-sm text-left text-gray-500 my-10 ">
                    <thead className="text-xs text-gray-800 uppercase bg-gray-100 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                <p className='truncate'>
                                    Зураг
                                </p>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <p className='truncate'>
                                    Овог, нэр
                                </p>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <p className='truncate'>
                                    Ажлын байр
                                </p>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <p className='truncate'>
                                    Төрөл
                                </p>
                            </th>
                           
                            <th scope="col" className="px-6 py-3">
                                <p className='truncate'>
                                    Илгээсэн огноо
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <thead className="text-xs text-gray-800 uppercase border-b ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                        Хайх
                        </th>
                        <th scope="col" className="px-2 py-3">
                        <input className='transition-all duration-300 ease-in-out outline-none pl-4 py-2 rounded-sm border border-gray-100 focus:border-gray-300' placeholder='Хайх Утга...'  />
                        </th>
                        <th scope="col" className="px-2 py-3">
                        <input className='transition-all duration-300 ease-in-out outline-none pl-4 py-2 rounded-sm border border-gray-100 focus:border-gray-300' placeholder='Хайх Утга...'  />
                        </th>
                        <th scope="col" className="px-2 py-3">
                        <input className='transition-all duration-300 ease-in-out outline-none pl-4 py-2 rounded-sm border border-gray-100 focus:border-gray-300' placeholder='Хайх Утга...'  />
                        </th>
                       
                        
                    </tr>
                    </thead>
                    <tbody>
                    {data && data.length > 0 ? (
                    data.map((row, index) => (
                        
                        <tr key={index} onClick={()=> {setSelect(index)} } className={`border-b ${select === index ? "text-gray-900 bg-gray-100" : ""}`}> 
                        {row.cover ?
                        <td scope="row" className="w-20 font-medium text-gray-900 " >
                            <div className='h-20 w-20 bg-cover bg-center m-2 rounded-sm' 
                            style={{'backgroundImage': `url(${row.cover}`}}
                            onClick={()=> router.push("/hr/positions/"+row._id)}
                            >
                            </div>
                        </td>
                        :
                        <td scope="row" className=" font-medium text-gray-900">
                            <div className='h-20 w-20 flex bg-gray-100 justify-center items-center m-2 rounded-sm' onClick={()=> router.push("/hr/positions/"+row._id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            </div>
                        </td>
                        }
                        <td scope="row" className='px-6 py-3'>
                            <p className='hover:underline' onClick={()=> router.push("/hr/positions/"+row._id)}>
                            {row.lastname && row.lastname.slice(0, 1)}. {row.firstname}
                            </p>
                        </td>
                        <td scope="row" className='px-6 py-3'>
                            <p className='hover:underline' onClick={()=> router.push("/hr/positions/"+row._id)}>
                            {row.position}
                            </p>
                        </td>
                        <td scope="row" className='px-6 py-3'>
                            <p className='hover:underline' onClick={()=> router.push("/hr/positions/"+row._id)}>
                            {row.department}
                            </p>
                        </td>
                       
                        <td scope="row" className='px-6 py-3'>
                            <p className='hover:underline' onClick={()=> router.push("/hr/positions/"+row._id)}>
                            {moment(row.created_date).calendar()}
                            </p>
                        </td>
                        </tr>
                    )))
                    :
                    <tr>
                    <td colSpan={10} className="text-center my-2">
                        <div className='my-5 text-red-400 font-medium'>
                        Илэрц олдсонгүй
                        </div>
                    </td>
                    </tr>
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default Requests