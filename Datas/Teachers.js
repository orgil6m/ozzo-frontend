const getUsers = async () => {
    const data = await fetch(`${process.env.API_URL}/api/ozzo/users`)
    const jsonData = await data.json()
    return jsonData.data
}
module.exports = {
  getUsers
}
 