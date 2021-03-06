import { useRouter } from 'next/router'
import {getNews} from '../../Datas/news'
import Head from 'next/head';

import { NavbarLocale } from '../../locales/Navbar';


export async function getServerSideProps({ params }) {
  const { path } = params;
  const news = await getNews();
  const current_news = news.find((p) => p && p._id === path)
  const moreNewsData = news.filter((p) => p && p._id !== path)
  moreNewsData.reverse();
  const moreNews = moreNewsData.slice(0, 2)
  return {
    props: { news: current_news, moreNews }
  };
}

const News = ({ news, moreNews }) => {
  const router = useRouter()
  const l = router.locale === 'en' ? '1' : router.locale === 'cn' ?  '2'  : '0'
  const t = NavbarLocale[`${l}`]
 
  if(!news || news === undefined){
    return <></>
}

  return(
    <div className='pt-20 cursor-default'>
      <Head>
        <title>{news.content[l].title}  | {t.ozzo}</title>
      </Head>

      <div className='lg:px-32 md:px-20 lg:pt-10 pt-5 px-5 cursor-default'>
         <div className="lg:mb-10 mb-5 flex ">
            <p className="transition-all duration-300 ease-in-out text-sm text-black/50 pr-2 hover:text-black" onClick={() => router.push("/")}> {t.home} </p>
            <p className="text-sm text-black/50 pr-2 "> / </p>
            <p className="transition-all duration-300 ease-in-out text-sm text-black/50 hover:text-black pr-2"  onClick={() => router.push("/news")}> {t.news} </p>
            <p className="text-sm text-black/50 pr-2 "> / </p>
            <p className="transition-all duration-300 ease-in-out text-sm text-black"> {news.content[l].title} </p>
        </div>
        <div className='w-full md:text-2xl text-lg uppercase font-semibold text-gray-800 flex items-center justify-start '>
           <div className='transition-all duration-500 ease-in-out md:h-10 h-8 w-1 bg-red-500 mr-5'></div>
            <p>{news.content[l].title}</p>
        </div>
        <div className='opacity-50 text-xs h-12 flex items-center'>
          <div className='flex h-full items-center mr-5'>
            <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <p>{news.admin}</p> 
          </div>
          <div className='flex h-full items-center mr-5'>
            <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {news.date}
          </div>
        </div>
      </div>

      <div className='w-full lg:px-32 md:px-20 md:grid md:grid-cols-3 gap-10 pb-5 px-5'>
        <div className='col-span-2'>
          <div className='transition-all duration-500 ease-in-out aspect-w-16 aspect-h-9 bg-cover bg-center rounded-md mt-5' 
          style={{'backgroundImage': `url(${news.cover}`}}> </div>
          <article className='mb-10'>
            <p className='text-justify text-sm pt-5'> {news.content[l].text}</p>
          </article>
        </div>
        <div className='md:hidden w-full h-px bg-gray-800 my-5'>
        </div>
        <div className='w-full flex flex-col md:mt-0'>
          <div className='w-full h-12 flex items-center justify-start '>
            <div className='transition-all duration-500 ease-in-out h-2/3 w-1 bg-red-500 mr-3'></div>
            <p className='text-gray-800 uppercase md:text-xl text-lg font-semibold '>{NavbarLocale[l].recent}</p>
          </div>


          {moreNews.map((moreNews, index) => (
            <div key={index} className=' transition-all duration-300 ease-in-out md:w-2/3 mt-5 border border-gray-100 overflow-hidden rounded-lg hover:border-gray-300 group'>
              <div className='transition-all duration-500 ease-in-out aspect-w-16 aspect-h-9 bg-cover bg-center group-hover:opacity-90 ' style={{'backgroundImage': `url(${moreNews.cover}`}} 
              onClick={() => { router.push(`/news/${moreNews._id}`)}} > 
              </div> 
                 <div className='w-full flex rounded-md items-start flex-col p-2'>
                   <div className='text-black flex flex-col '>
                    <p>{moreNews.content[l].title}</p>
                  </div>
                  <div className='text-black/80 text-xs italic flex items-center my-2'>
                    <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>{moreNews.date}</p>
                  </div>
                </div>
            </div>
          ))} 
        </div>
      </div>
    </div>
  )  
}

export default News;