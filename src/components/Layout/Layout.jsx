import React, { useState } from 'react'
import "./Layout.css"
import Sidebar from '../Sidebar/Sidebar'
import { Paper } from '@mui/material'
import Navbar from '../Navbar/Navbar'

const Layout = ({children}) => {
  const [menuBar,setMenuBar] = useState(false)
  return (
    <Paper elevation={2}  className='layout'>
      <Sidebar menuBar={menuBar} setMenuBar={setMenuBar}/>
      <div className='content'>
        <Navbar menuBar={menuBar} setMenuBar={setMenuBar}/>
        {children}
      </div>
    </Paper>
  )
}

export default Layout