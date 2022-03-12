import { useRouter } from 'next/router'
import {newsData} from '../../Datas/news'

export const getStaticProps = async ({params}) => {
  const news = newsData.filter(p => p.id.toString() === params.id)
  return {
    props: news[0],
  };
}
export const getStaticPaths = async () => { 
  const paths = newsData.map(news =>({
    params : {id: news.id.toString()}, 
  }))
  return {
    paths,
    fallback: true, 
  };
}

const News = (news) => {
  console.log(news.covers)
  return(
    <div className='w-full mt-20 md:p-10 p-5'>
      <div className='lg:w-4/5 w-full shadow-xl border border-gray-200/80 md:p-10 p-5'>
        <div className='lg:text-xl text-lg uppercase text-gray-800 font-normal w-full h-16 flex items-center justify-start'>
           <div className='transition-all duration-500 ease-in-out md:h-10 h-8 w-1 bg-red-500 mr-5 '></div>
          {news.title}
          </div>
          <div className='grid grid-cols-1 '>
              <div className='transition-all duration-500 ease-in-out mt-5 h-80 bg-cover bg-center drop-shadow-x hover:opacity-90 ' style={{'backgroundImage': `url(${news.covers}`}} > 
              </div>
              <div className='p-10'>hi</div>
              <div>hi</div>
          </div>
      </div>
    </div>
  )  
}


export default News;