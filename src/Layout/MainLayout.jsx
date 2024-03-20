import React from 'react'
import Footer from '../components/User/Footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from "../components/User/Header/Header"

function MainLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout