const getNews = async () => {
    const data = await fetch(`${process.env.API_URL}/api/ozzo/news`)
    const jsonData = await data.json()
    return jsonData.data
}
module.exports = {
  getNews
}
 