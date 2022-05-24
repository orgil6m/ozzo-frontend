import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router' 

const Products = () => {
    const router = useRouter()
    return (
        <div className='pt-20 cursor-default'>
            <Head>
                <title>Бараанууд | ОЗЗО ХХК</title>
            </Head>
            <div className='w-full lg:px-32 md:px-20 p-5  '>
            <div className="lg:mb-10 mb-5 flex cursor-default md:mt-5">
                <p className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black" onClick={() => router.push("/admin")}> Админ </p>
                <p className="text-sm text-black/50 pr-2 "> / </p>
                <p className="transition-all duration-300 ease-in-out text-sm pr-2 text-black" onClick={() => router.push("/admin/users")}> Бараанууд </p>
            </div>
            </div>
        </div>
    )
}

export default Products