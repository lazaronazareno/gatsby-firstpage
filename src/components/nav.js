import { Link } from 'gatsby'
import React from 'react'
import * as style from '../styles/global.module.css'

const Navigation = () => {
  return (
    <div className={style.nav}>
      <Link activeClassName={style.nav_active} to='/'>Inicio</Link>
      <Link activeClassName={style.nav_active} to='/us'>Nosotros</Link>
    </div>
  )
}

export default Navigation
