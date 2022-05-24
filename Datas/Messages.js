const getMessages = async () => {
    const data = await fetch(`${process.env.API_URL}/api/ozzo/messages`)
    const jsonData = await data.json()
    return jsonData.data.reverse()
}
module.exports = {
  getMessages
}
 