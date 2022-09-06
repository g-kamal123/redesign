import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import NavBottom from './NavBottom'
import NavHead from './NavHead'
import Product from './Product'

function Redesign() {
  return (
    <div>
        <Nav />
        <NavHead />
        <NavBottom />
        <Routes>
          <Route path='/' element={<Product />}/>
          <Route path='/fruits' element={<Product />}/>
          <Route path='/vegetables' element={<Product />}/>
          <Route path='/dryFruits' element={<Product />}/>
          <Route path='/nonVeg' element={<Product />}/>
          <Route path='/dairy' element={<Product />}/>
        </Routes>
        {/* <Product /> */}
    </div>
  )
}

export default Redesign