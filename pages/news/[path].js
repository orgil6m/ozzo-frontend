import { useRouter } from 'next/router'
import {getNews} from '../../Datas/news'
import Head from 'next/head';

import { NavbarLocale } from '../../locales/Navbar';

export async function getStaticPaths() {
  const response = await getNews();
  const paths = response.map((news) => ({
    params: { path: news.path }
  }));
  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const { path } = params;
  const news = await getNews();
  const current_news = news.find((p) => p.path === path)
  const moreNewsData = news.filter((p) => p.path !== path )
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
    <div className='mt-20 md:pl-10 md:pr-10 p-5'>
      <Head>
        <title>{news.langs[`${l}`].title}  | {t.ozzo}</title>
      </Head>
      <div className=' md:pl-10 md:pr-10 '>
        <div className='w-full h-12 md:text-2xl text-lg uppercase font-semibold text-gray-800 flex items-center justify-start '>
           <div className='transition-all duration-500 ease-in-out md:h-10 h-8 w-1 bg-red-500 mr-3'></div>
            <p>{news.langs[`${l}`].title}</p>
        </div>
        <div className='opacity-50 text-xs h-12 flex items-center'>
          <div className='flex h-full items-center mr-5'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <p>Admin</p> 
          </div>
          <div className='flex h-full items-center mr-5'>
            <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {news.date}
          </div>
        </div>
      </div>
      <div className='md:grid md:grid-cols-3 gap-10 md:pl-10 md:pr-10'>
        <div className='col-span-2'>
          <div className='transition-all duration-500 ease-in-out aspect-video bg-cover bg-center rounded-md' style={{'backgroundImage': `url(${news.cover}`}}> </div>
          <article>
            <p className='text-justify md:text-base text-sm pt-5'> {news.langs[`${l}`].text}</p>
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
            <div key={index} className='md:w-2/3 mt-5'>
              <div className='transition-all duration-500 ease-in-out aspect-video bg-cover bg-center rounded-md' style={{'backgroundImage': `url(${moreNews.cover}`}} 
              onClick={() => { router.push(`/news/${moreNews.path}`)}} > 
                <div className='w-full h-full flex rounded-md justify-end items-start flex-col p-2 bg-gradient-to-b from-transparent to-black/90 backdrop-brightness-150'>
                  <div className='text-white/80 text-xs italic flex flex-col my-2 '>
                    <p>{moreNews.date}</p>
                  </div>
                  <div className='text-white flex flex-col '>
                    <p>{moreNews.langs[`${l}`].title}</p>
                  </div>
                </div>
              </div> 
            </div>
          ))} 
          {/* <div className='cursor-default transition-all ease-in-out duration-200 md:w-2/3 w-full mt-5 flex justify-center items-center bg-zinc-800 text-white h-10 rounded-md hover:opacity-90' onClick={() => { router.push('/news')}}>
            {NavbarLocale[l].more}
          </div> */}
        </div>
      </div>
    </div>
  )  
}

export default News;