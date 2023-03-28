const getMessages = async () => {
    const response = await fetch(`${process.env.API_URL}/api/ozzo/getMessages`, {
      method : "POST",
      headers: {
        authorization: window.localStorage.getItem('token'),
        "Content-Type": "application/json"
      },
    })
    const jsonData = await response.json()
    return jsonData.data && jsonData.data.reverse()
}

const postMessage = async (body) => {
  const response = await fetch(`${process.env.API_URL}/api/ozzo/postMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
});
return response
}

const deleteMessage = async (body) => {
  const response = await fetch(`${process.env.API_URL}/api/ozzo/deleteMessage`,{
    method: "DELETE",
    headers: {
      authorization: window.localStorage.getItem('token'),
      "Content-Type": "application/json"
  },
    body: body,
  })
  return response
} 

module.exports = {
  getMessages,
  postMessage,
  deleteMessage,
}
 