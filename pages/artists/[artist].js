import { useRouter } from 'next/router'
import {getArtists} from '../../Datas/Users'
import Head from 'next/head';

import {LabelLocale} from '../../locales/Label'
import { NavbarLocale } from '../../locales/Navbar';
import label_cover from "../../Assets/LABEL/label_cover.jpg"
import { useState } from 'react';
import AudioPlayer from "../../components/AudioPlayer"

export async function getStaticPaths() {
  const response = await getArtists();
  const paths = response.map(artist => ({
    params: { artist: artist && artist.artistName || ''}
  }));
  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const { artist } = params;
  const artists = await getArtists();
  const current_artist = artists.find((p) => p && p.artistName === artist || false)
  return {
    props: { artist: current_artist }
  };
}

const News = ({ artist }) => {
  const router = useRouter()
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const t = NavbarLocale[l]
  const label = LabelLocale[l]
  const [audioModalShow, setAudioModalShow] = useState(false)
  const [audioIndex, setAudioIndex] = useState()

  if(!artist || artist === undefined){
    return <></>
  }

  return(
    <div className='pt-20 cursor-default '>
      <Head>
        <title>{artist.artistName}  | {t.ozzo}</title>
      </Head>
      <div className='w-full bg-fixed md:bg-center bg-top bg-cover h-[30rem] ' style={{'backgroundImage': `url(${label_cover.src}`}}>
      </div>
      
      <div className='w-full overflow-hidden flex lg:px-32 justify-center lg:-mt-36 rounded-full -mt-28'>
       
        <div className='lg:w-72 w-56 lg:border-8 border-4 border-white aspect-1 bg-cover bg-center rounded-full bg-white' 
          style={{'backgroundImage': `url(${artist.artistPhoto}`}}>
        </div>
    
      </div>

       <div className='w-full flex  justify-center items-center mt-5'>
          <p className='text-gray-700 font-light text-xl mr-2'>
            {label.artist} : 
          </p>
          <p className='text-gray-700 font-medium text-3xl'>
            {artist.artistName}
          </p>
        </div>
      
      <div className='md:px-10 px-5 lg:pt-5 md:flex justify-center cursor-default'>
          <div className='lg:w-1/2 md:w-2/3 md:flex md:flex-col items-center'> 
             <div className="lg:mb-10 my-10 flex ">
            <p className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black" onClick={() => router.push("/")}> {t.home} </p>
            <p className="text-sm text-black/50 pr-2 "> / </p>
            <p className="transition-all duration-300 ease-in-out text-sm text-black/50 hover:text-black pr-2"  onClick={() => router.replace("/services/label")}> {t.artists} </p>
            <p className="text-sm text-black/50 pr-2 "> / </p>
            <p className="transition-all duration-300 ease-in-out text-sm text-black"> {artist.artistName} </p>
        </div>
            {artist.informations[l].bio ? 
            <>
              <div className='transition-all duration-500 ease-in-out lg:w-full font-semibold text-2xl flex items-center mb-5 '> 
              <p className='uppercase'>{artist.informations[l].bio.title}</p>
                <div className='h-2 w-2 rounded-full my-2 bg-sky-500 ml-2'></div>
              </div>
              <div className='mb-5'>
                <p className='w-full text-justify'>
                  {artist.informations[l].bio.text ? artist.informations[l].bio.text : artist.informations[l].bio.title}
                </p>
              </div>
            </>
            :
            <>
            </>
            }
            <div className='mb-10'>
              <div className='w-full flex justify-center my-2'>
                <div className=' flex'>
                {artist.linkedin ? 
                  <div className='mx-1 hover:opacity-90'>
                            <a href={artist.linkedin} >
                              <div className=" flex items-center hover:underline my-1">
                                  <div className="bg-black rounded-md w-6 h-6 flex items-center justify-center">
                                      <svg width="16" height="16" viewBox="0 0 32 32" fill="white" >
                                          <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z">
                                          </path>
                                      </svg>
                                  </div>
                              </div>
                            </a>
                  </div>  
                : <div></div>}

                {artist.facebook ? 
                <div className='mx-1 hover:opacity-90'>
                          <a href={artist.facebook} >
                            <div className=" flex items-center hover:underline my-1">
                              <div className="bg-black rounded-md w-6 h-6 flex items-center justify-center">
                                <svg  x="0px" y="0px" width="16" height="16" viewBox="0 0 24 24" fill="#fff">  
                                  <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" />
                                </svg>
                              </div>
                            </div>
                          </a>
                </div>  
                : <div></div>}

                {artist.instagram ? 
                <div className='mx-1 hover:opacity-90'>
                          <a href={artist.instagram} >
                            <div className=" flex items-center hover:underline my-1">
                              <div className="bg-black  rounded-md w-6 h-6 flex items-center justify-center">
                                <svg x="0px" y="0px" width="16" height="16" viewBox="0 0 30 30" fill="white">   
                                  <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
                                </svg>
                              </div>
                            </div>
                          </a>
                </div>  
                : <div></div>}

                {artist.youtube ? 
                <div className='mx-1 hover:opacity-90'>
                          <a href={artist.youtube} >
                            <div className=" flex items-center hover:underline my-1">
                              <div className="bg-black  rounded-md w-6 h-6 flex items-center justify-center">
                                <svg  x="0px" y="0px" width="16" height="16" viewBox="0 0 64 64" fill="white">
                                  <path d="M56.456,17.442c-0.339-1.44-1.421-2.595-2.866-3.053C49.761,13.174,41.454,12,32,12s-17.761,1.174-21.591,2.389 c-1.445,0.458-2.527,1.613-2.866,3.053C6.903,20.161,6,25.203,6,32c0,6.797,0.903,11.839,1.544,14.558 c0.339,1.44,1.421,2.595,2.866,3.053C14.239,50.826,22.546,52,32,52s17.761-1.174,21.591-2.389 c1.445-0.458,2.527-1.613,2.866-3.053C57.097,43.839,58,38.797,58,32C58,25.203,57.097,20.161,56.456,17.442z M27,40V24l14.857,8 L27,40z" />
                                </svg>
                              </div>
                            </div>
                          </a>
                </div>  
                : <div></div>}

                {artist.email ? 
                <div className='mx-1 hover:opacity-90'>
                            <a href="mailto:${artist.mail}" >
                              <div className=" flex items-center hover:underline my-1">
                                <div className="bg-black rounded-md w-6 h-6 flex items-center justify-center">
                                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="white">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                  </svg>
                                </div>
                              </div>
                            </a>
                </div>  
                : <div></div>}

                {artist.website ? 
                <div className='mx-1 hover:opacity-90'>
                          <a href={artist.website} >
                            <div className=" flex items-center hover:underline my-1">
                                <div className="bg-black  rounded-lg w-6 h-6 flex items-center justify-center">
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
            </div>

            {artist.audios ? 
              <div className='w-full my-10 mb-32'> 
                <div className='transition-all duration-500 ease-in-out font-semibold text-2xl flex items-center mb-5 '> 
                  <p className='uppercase'>{label.covers}</p>
                  <div className='h-2 w-2 rounded-full my-2 bg-red-500 ml-2'></div>
                </div>
              {artist.audios.map((row, index) => (
                <div key={index} className={`transition-all ease-in-out duration-300 flex items-center p-2 my-2 hover:bg-gray-100 hover:text-sky-500 rounded-md ${audioIndex === index ? "bg-gray-100 text-sky-500" : ""}`} onClick={() => {setAudioModalShow(true) , setAudioIndex(index)}}>
                  <div className='w-20 aspect-1 bg-cover bg-center rounded-lg mr-5' style={{'backgroundImage': `url(${artist.artistPhoto}`}}> 
                  </div>
                  <p className='w-full md:text-base text-sm font-medium truncate '>
                    {row.title}
                  </p>
                  <div className='w-20 h-10 flex justify-start items-center text-gray-500 ' >
                  <p className='mx-3 text-sm font-bold'>{row.duration && row.duration }</p>
                  </div>
                  <div className='md:w-20 flex justify-center items-center text-gray-500 hover:text-sky-500' onClick={()=> console.log("hi")}>
                    <svg className="h-4 w-4 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </div>
                </div>
              ))}
              </div>  
              :
              <></>
            }
          </div>
      </div>
     { audioModalShow  ?
        <AudioPlayer data={artist.audios} audioIndex={audioIndex} setAudioIndex={setAudioIndex} artist={artist}   />
        :
        <></>
      }
    </div>
  
  )  
}

export default News;