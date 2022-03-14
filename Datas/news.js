import Cover1 from '../Assets/Cover1.jpg'
import Cover2 from '../Assets/Cover2.jpg'
import Cover3 from '../Assets/Cover3.jpg'

const getNews = async () => {
    const data = await fetch(`${process.env.API_URL}/api/v1/news`)
    const jsonData = await data.json()
    // console.log(jsonData.data)
    return jsonData.data
}


module.exports = {
  getNews
}
 