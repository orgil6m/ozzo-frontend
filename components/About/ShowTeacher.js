import { useRouter } from 'next/router';
import { motion } from "framer-motion";

const ShowTeacher = ({profile,  setShowTeacher, setScrollStop, base})=>{
    const router = useRouter();
    const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
    return   (
          <div className="transition-all duration-300 ease-in-out flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none " >
            <div className='w-screen h-screen absolute left-0 top-0 bg-black/60 backdrop-blur-sm'  onClick={() => {setShowTeacher(false); setScrollStop(false)}}>
            </div>
            <motion.div className="bg-white rounded-lg flex flex-col lg:w-2/3 relative max-h-[90%] w-11/12  overflow-y-scroll "
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
              onClick={() => {setShowTeacher(false); setScrollStop(false)}}>
                <svg className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div className='md:flex lg:w-full '>
                <div className='md:w-1/3 m-10'>
                  {profile.profilephoto ? 
                  <div className='aspect-1 bg-cover bg-center  rounded-lg' style={{'backgroundImage': `url(${profile.profilephoto}`}}> </div>
                  : 
                    <div className='transition-all duration-500 ease-in-out rounded-md hover:-translate-y-2 w-full aspect-1 bg-cover bg-neutral-200 bg-center flex items-center justify-center'>
                      <svg className="h-40 w-40 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  }
                  <div>
                  
                    <div className='my-5 flex justify-center'>
                      {profile.linkedin ? 
                      <div className='mx-1 hover:opacity-90'>
                                <a href={profile.linkedin} >
                                  <div className=" flex items-center hover:underline my-1">
                                      <div className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-md w-6 h-6 flex items-center justify-center">
                                          <svg width="16" height="16" viewBox="0 0 32 32" fill="white" >
                                              <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z">
                                              </path>
                                          </svg>
                                      </div>
                                  </div>
                                </a>
                      </div>  
                      : <div></div>}

                      {profile.facebook ? 
                      <div className='mx-1 hover:opacity-90'>
                                <a href={profile.facebook} >
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

                      {profile.instagram ? 
                      <div className='mx-1 hover:opacity-90'>
                                <a href={profile.instagram} >
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

                      {profile.youtube ? 
                        <div className='mx-1 hover:opacity-90'>
                                  <a href={profile.youtube} >
                                    <div className=" flex items-center hover:underline my-1">
                                      <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-md w-6 h-6 flex items-center justify-center">
                                        <svg  x="0px" y="0px" width="16" height="16" viewBox="0 0 64 64" fill="white">
                                          <path d="M56.456,17.442c-0.339-1.44-1.421-2.595-2.866-3.053C49.761,13.174,41.454,12,32,12s-17.761,1.174-21.591,2.389 c-1.445,0.458-2.527,1.613-2.866,3.053C6.903,20.161,6,25.203,6,32c0,6.797,0.903,11.839,1.544,14.558 c0.339,1.44,1.421,2.595,2.866,3.053C14.239,50.826,22.546,52,32,52s17.761-1.174,21.591-2.389 c1.445-0.458,2.527-1.613,2.866-3.053C57.097,43.839,58,38.797,58,32C58,25.203,57.097,20.161,56.456,17.442z M27,40V24l14.857,8 L27,40z" />
                                        </svg>
                                      </div>
                                    </div>
                                  </a>
                        </div>  
                        : <div></div>}

                      {profile.email ? 
                        <div className='mx-1 hover:opacity-90'>
                                    <a href="mailto:${profile.mail}" >
                                      <div className=" flex items-center hover:underline my-1">
                                        <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-md w-6 h-6 flex items-center justify-center">
                                          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="white">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                          </svg>
                                        </div>
                                      </div>
                                    </a>
                        </div>  
                        : <div></div>}

                      {profile.website ? 
                        <div className='mx-1 hover:opacity-90'>
                                  <a href={profile.website} >
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
                     {profile.informations[l].skills ? 
                     <div className='my-5 '>
                      
                       <p className='uppercase text-gray-700 font-bold mb-2'>
                         {profile.informations[l].skills.title}
                       </p>
                      {profile.informations[l].skills.skill.map((skills, index) => (
                        <div key={index}>
                          <div className='m-1'>
                            <p className='font-light text-gray-700 text-xs'><span className='text-emerald-500 font-medium'># </span>{skills}</p>
                          </div>
                        </div>
                      ))}
                    </div> : <div></div>}
                  </div>
              </div>
                  
                <div className='md:w-2/3  md:mx-0 mx-10 md:pr-10'>
                  <div className='mt-10 flex text-lg text-gray-700 font-medium'>
                    <p className='mr-2'>{profile.informations[l].firstname} {profile.informations[l].lastname}</p> 
                  </div>
                   <div className='flex text-sm text-gray-700 font-light'>
                    <p className='mr-2'>{profile.informations[l].title}</p> 
                  </div>
                  <div className='w-full h-0.5 bg-teal-500 my-2 scale-y-50 '>
                  </div>

                  {profile.informations[l].education ? 
                  <div className='w-full text-gray-700 mt-5 mr-5'>
                    <p className='uppercase font-bold'>{profile.informations[l].education.title}</p>
                    <div>
                       {profile.informations[l].education.schools.map((school, index) =>(
                          <div key={index}>
                            <div className='my-3'>
                              <p className='text-gray-500 font-light text-xs'>{school.years}</p>
                              <p className='text-gray-800 text-sm'>{school.name}</p>
                            </div>
                          </div>
                       ))}
                    </div>
                  </div> : <div className='text-gray-700 uppercase font-light text-sm mt-5 mr-5'>Боловсрол оруулаагүй</div>}
                  {profile.informations[l].experience ? 
                  <div className='w-full text-gray-700 mt-5 mb-10 mr-5'>
                    <p className='uppercase font-bold'>{profile.informations[l].experience.title}</p>
                     <div>
                       {profile.informations[l].experience.works.map((school, index) =>(
                          <div key={index}>
                            <div className='my-3'>
                              <p className='text-gray-500 font-light text-xs '>{school.at} |  {school.years}</p>
                              <p className='text-gray-800 text-sm'>{school.name}</p>
                            </div>
                          </div>
                       ))}
                    </div>
                  </div> : <div className='text-gray-700 uppercase font-light text-sm mt-5 mr-5'>Туршлага оруулаагүй</div> }

                </div>
              </div>
            </motion.div>
          </div>      
    )
}

export default ShowTeacher