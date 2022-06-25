const insertCourse = async (body) => {
  const response = await fetch(`${process.env.API_URL}/api/ozzo/insertCourse`, {
    method: `POST`,
    headers: {
      authorization: window.localStorage.getItem('token'),
      "Content-Type": "application/json",
    },
    body: body,
});
return response
}

const getCourses = async () => {
  const response = await fetch(`${process.env.API_URL}/api/ozzo/getCourses`, {
    method: `POST`,
    headers: {
      authorization: window.localStorage.getItem('token'),
      "Content-Type": "application/json",
    },
  })
  const jsonData = await response.json()
  return jsonData.data
}
const getCoursesPublic = async () => {
    const response = await fetch(`${process.env.API_URL}/api/ozzo/getCourses`, {
      method : "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    const jsonData = await response.json()
    return jsonData.data
}
const updateCourse = async (body) => {
  const response = await fetch(`${process.env.API_URL}/api/ozzo/updateCourse`, {
    method: `PUT`,
    headers: {
      authorization: window.localStorage.getItem('token'),
      "Content-Type": "application/json",
    },
    body: body,
  });
  return response
}


module.exports = {
  insertCourse,
    getCourses,
    getCoursesPublic,
    updateCourse,
}
 