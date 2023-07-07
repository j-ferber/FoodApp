import React from 'react'
import Header from './Header'
import Nav from './Nav'
import { useState, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import DataContext from './context/DataContext'

const Layout = () => {
  const {search,setSearch} = useContext(DataContext)

  return (
    <div className="app">
      <Header />
      <Nav search={search} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout