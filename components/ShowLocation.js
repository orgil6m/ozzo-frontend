
import { useRouter } from 'next/router';

const showLocation = ({setScrollStop})=>{
    const router = useRouter();
    return (
        <div className="transition-all duration-300 ease-in-out flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm backdrop-brightness-50 cursor-default" >
            <div className="bg-white rounded-lg flex flex-col lg:w-1/2 relative max-h-full w-2/3 overflow-y-scroll ">
                <div className=" text-black absolute right-0 top-0 transition-all duration-200 ease-in-out hover:bg-gray-100/50 p-2 rounded-full m-5" 
                onClick={() => {(false); setScrollStop(false)}}>
                <svg className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </div>

            </div>
          </div>      
    )
}

export default showLocation