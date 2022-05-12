
import { useRouter } from 'next/router';
import { motion } from "framer-motion";

const ShowTeacher = ({partner,  setShowPartner, setScrollStop})=>{
    const router = useRouter();
    return   (
          <div className="transition-all duration-300 ease-in-out flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none cursor-default" >
            <div className='w-screen h-screen fixed bg-black/30 backdrop-blur-sm inset-0' onClick={() => {setShowPartner(false); setScrollStop(false)}}></div>

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
              <div className=" text-black absolute right-0 top-0 transition-all duration-200 ease-in-out hover:bg-gray-100/50 p-2 rounded-full m-5" 
              onClick={() => {setShowPartner(false); setScrollStop(false)}}>
                <svg className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div className='my-10 flex flex-col items-center w-full justify-center'>
                <div className='lg:w-1/3 w-1/2'>
                  <img src={partner.logo}/>
                </div>
                <div className='w-full lg:px-20 p-10  text-justify'>
                  <p className='font-semibold text-lg uppercase'>{partner.title}</p>
                  <div className={`border scale my-4  border-purple-300`}></div>
                  <p className=' font-light'>{partner.text1}</p>
                </div>
              <div className='flex'>
                 {partner.fb ? 
                      <div className='mx-1 hover:opacity-90'>
                                <a href={partner.fb} >
                                  <div className=" flex items-center hover:underline my-1">
                                    <div className="bg-gradient-to-r from-sky-500 to-sky-600 rounded-md w-6 h-6 flex items-center justify-center">
                                      <svg  x="0px" y="0px" width="16" height="16" viewBox="0 0 24 24" fill="#fff">  
                                        <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" />
                                      </svg>
                                    </div>
                                  </div>
                                </a>
                      </div>  
                      : <div></div>}  
                  {partner.ig ? 
                      <div className='mx-1 hover:opacity-90'>
                        <a href={partner.ig} >
                          <div className=" flex items-center hover:underline my-1">
                            <div className="bg-gradient-to-r from-fuchsia-400 to-fuchsia-500 rounded-md w-6 h-6 flex items-center justify-center">
                              <svg x="0px" y="0px" width="16" height="16" viewBox="0 0 30 30" fill="white">   
                                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
                              </svg>
                            </div>
                          </div>
                        </a>
                      </div>  
                      : <div></div>}
                   {partner.web ? 
                      <div className='mx-1 hover:opacity-90'>
                                  <a href={partner.web} >
                                    <div className=" flex items-center hover:underline my-1">
                                        <div className="bg-gradient-to-r from-indigo-400 to-indigo-500 rounded-lg w-6 h-6 flex items-center justify-center">
                                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                      </div>  
                      : <div></div>}
                    
              </div>
              </div>
                 
             
            </motion.div>
          </div>      
    )
}

export default ShowTeacher