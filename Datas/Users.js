const getUsers = async () => {
    const response = await fetch(`${process.env.API_URL}/api/ozzo/users`
    // , {
    //   headers: {
    //     authorization: window.localStorage.getItem('token')
    //   }
    // }
    )
  const jsonData = await response.json()
  return jsonData.data
}

const getUser = async (userID) => {
  const response = await fetch(`${process.env.API_URL}/api/ozzo/getUser`, {
    method :"post",
    headers: {
      authorization: window.localStorage.getItem('token')
    },
    body: {
      id : userID,
    }
  })
  return response
}

const getUsersID = async () => {
  const response = await fetch(`${process.env.API_URL}/api/ozzo/usersID`)
  const jsonData = await response.json()
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
  getUser,
  getUsersID,
  getTeachers,
  getArtists
}
 