import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../Styles/NavBottom.module.css'
import { Storage } from './Storage'

function NavBottom() {
  const detail = useContext(Storage)
  
  return (
    <>
    <div className={classes.navbottom}>
      <NavLink to={'/'} onClick={detail.all}>
      Fruits And Vegetables Store
      </NavLink>
    </div>
   
    </>
  )
}

export default NavBottom