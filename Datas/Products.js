const getProducts = async () => {
  const data = await fetch(`${process.env.API_URL}/api/ozzo/getProducts`)
  const jsonData = await data.json()
  return jsonData.data
}

module.exports = {
  getProducts
}
 