const getGuitars = async () => {
    const products = await fetch(`${process.env.API_URL}/api/ozzo/products`)
    const jsonData = await products.json()
    const guitars = jsonData.data.filter((e) => e.type.includes("guitar"))
    return guitars
}
const getUkuleles = async () => {
    const data = await fetch(`${process.env.API_URL}/api/ozzo/products`)
    const jsonData = await data.json()
    const ukuleles = jsonData.data.filter((e) => e.type.includes("ukulele"))
    return ukuleles
}
const getProducts = async () => {
  const data = await fetch(`${process.env.API_URL}/api/ozzo/products`)
  const jsonData = await data.json()
  return jsonData.data
}

module.exports = {
  getGuitars,
  getUkuleles,
  getProducts
}
 