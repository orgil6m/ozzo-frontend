const getOpenPositions = async () => {
    const data = await fetch(`${process.env.API_URL}/api/ozzo/getOpenPositions`)
    const jsonData = await data.json()
    return jsonData.data
}
const getPositions = async () => {
    const response = await fetch(`${process.env.API_URL}/api/ozzo/getPositions`, {
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

const getRequests = async () => {
  const response = await fetch(`${process.env.API_URL}/api/ozzo/positions/getRequests`, {
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


module.exports = {
    getOpenPositions,
    getPositions,
    getRequests,
}
 