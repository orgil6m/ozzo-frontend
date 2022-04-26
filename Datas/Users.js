const getUsers = async () => {
    const data = await fetch(`${process.env.API_URL}/api/ozzo/users`)
    const jsonData = await data.json()
    return jsonData.data
}

const getArtists = async () => {
    const data = await fetch(`${process.env.API_URL}/api/ozzo/artists`)
    const jsonData = await data.json()
    return jsonData.data
}

const getTeachers = async () => {
    const data = await fetch(`${process.env.API_URL}/api/ozzo/teachers`)
    const jsonData = await data.json()
    return jsonData.data
}

module.exports = {
  getUsers,
  getTeachers,
  getArtists
}
 