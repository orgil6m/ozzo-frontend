import React from 'react'

export async function getServerSideProps({ params }) {
  const { user } = params;
  return {
    props: { username : user  }
  };
}

const User = ({username}) => {

  useEffect(()  =>  {
    getUser().then(response => response &&  response.find((e) => e._id === courseID)).then(data => setCourseData(data)) 
}, [])
  return (
    <div className='pt-20 cursor-default'>
      {username}
    </div>
  )
}

export default User