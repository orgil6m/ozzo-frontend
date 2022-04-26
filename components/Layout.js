import React, {useContext, useEffect} from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import moment from 'moment'
import { DataContext } from '../store/GlobalState'

const Layout =({children})=> {
    const {state, dispatch} = useContext(DataContext)
    useEffect(() => {
    const token = window.localStorage.getItem("token");
    const user = JSON.parse(window.localStorage.getItem("user"))
    const tokenExpTime = window.localStorage.getItem("tokenExpTime");
    if (!token || moment().isAfter(moment(tokenExpTime))) {
      // console.log("TOKEN EXPIRED!!!!!!!");
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("tokenExpTime");
      window.localStorage.removeItem("user");
      }else{
        dispatch({type:'AUTH', payload:{
        token: token,
        user: user, 
      }
    
    })
    }

  }, []);
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        {children}
        <Footer />
    </div>
  )
}

export default Layout;