
const getUsers = async () => {
    const response = await fetch(`${process.env.API_URL}/api/ozzo/getUsers`, {
      method :"POST",
      headers: {
        authorization: window.localStorage.getItem('token'),
        "Content-Type": "application/json"
      },
    }
  )
  const jsonData = await response.json()
  return jsonData.data
}
const getUser = async (userID) => {
  const response = await fetch(`${process.env.API_URL}/api/ozzo/getUser`, {
    method :"POST",
    headers: {
      authorization: window.localStorage.getItem('token'),
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id : userID
    })
  })
  return response
}

const insertUser = async (body) => {
  const response = await fetch(`${process.env.API_URL}/api/ozzo/insertUser`, {
    method: "POST", 
    headers: {
      authorization: window.localStorage.getItem('token'),
      "Content-Type": "application/json",
    },
    body: body
  });
  return response
}

const getArtists = async () => {
    const data = await fetch(`${process.env.API_URL}/api/ozzo/getArtists`)
    const jsonData = await data.json()
    return jsonData.data
}
const getTeachers = async () => {
    const data = await fetch(`${process.env.API_URL}/api/ozzo/getTeachers`)
    const jsonData = await data.json()
    return jsonData.data
}
const getDirectors = async () => {
  const data = await fetch(`${process.env.API_URL}/api/ozzo/getDirectors`)
  const jsonData = await data.json()
  return jsonData.data
}
const getCrew = async () => {
  const data = await fetch(`${process.env.API_URL}/api/ozzo/getCrew`)
  const jsonData = await data.json()
  return jsonData.data
}

module.exports = {
  getUsers,
  getUser,
  insertUser,
  getTeachers,
  getArtists,
  getDirectors,
  getCrew
}
 