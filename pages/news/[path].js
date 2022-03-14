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
  const current_news = news.find((p) => p.path === path);
  return {
    props: { news: current_news }
  };
}
const News = ({ news }) => {
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
        <div className='italic opacity-50 text-xs h-12 flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {news.date}
        </div>

      </div>
      <div className='grid lg:grid-cols-3 gap-10 md:pl-10 md:pr-10'>
        <div className='col-span-2'>
          {/* <div className='transition-all duration-500 ease-in-out aspect-video bg-cover bg-center drop-shadow-x hover:opacity-90 ' style={{'backgroundImage': `url(${news.cover}`}}> </div> */}
          <article>
            <p className='text-justify md:text-base text-sm pt-5'> {news.langs[`${l}`].text}</p>
          </article>

        </div>
        <div className='w-full flex justify-center items-center'>
          
        </div>
      </div>
    </div>
  )  
}

export default News;