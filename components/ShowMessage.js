
import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import moment from 'moment';

const showMessage = ({message,  setShowMessage, })=>{
    return   (
          <div className="md:hidden transition-all duration-300 ease-in-out flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none cursor-default" >
            <div className='w-screen h-screen fixed bg-black/30 backdrop-blur-sm inset-0' onClick={() => {setShowMessage(false)}}></div>
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
              <div className="text-black absolute right-0 top-0 transition-all duration-200 ease-in-out hover:bg-gray-100/50 p-2 rounded-full m-5" 
              onClick={() => {setShowMessage(false)}}>
                <svg className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div className=' lex flex-col items-center w-full justify-center'>
              <div className='p-5  rounded-md pb-10'>
                    <div className='w-full flex justify-between'>
                        <span className='text-xs text-gray-500'>
                            {message.createdTime}
                        </span>
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 transition-all duration-100 ease-in-out h-4 w-4 hover:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 transition-all duration-100 ease-in-out h-4 w-4 hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          
                        </div>
                    </div>
                  
                    <div className='flex items-center mt-5'>
                        <div className='rounded-full text-white flex h-10 w-10 justify-center items-center' style={{backgroundColor: message.avatarColor}}>
                            <span className='m-2'>
                            {message.username.slice(0, 1)}
                            </span>
                        </div>
                        <span className='mx-3 flex flex-col items-start justify-center font-medium'>
                            {message.username} 
                            <a className='text-xs text-gray-500 flex items-center hover:underline font-light' href={`mailto:${message.email}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                                {message.email}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </a> 
                        </span>
                     
                    </div>
                    <hr className='my-3' />
                    <div >
                        <p className='indent-4 text-justify'>
                            {message.message}
                        </p> 
                    </div>
                </div>
              </div>
                 
             
            </motion.div>
          </div>      
    )
}

export default showMessage