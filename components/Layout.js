import React from 'react'
import Navbar from './Navbar'
import {Navbar2} from './Navbar'
const Layout =({children})=> {

  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default Layout;