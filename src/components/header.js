import React from 'react'
import Navigation from './nav'
import * as style from '../styles/global.module.css'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header className={style.header}>
      <div>
        <Link to='/'>May Help?</Link>

        <Navigation />
      </div>
    </header>
  )
}

export default Header
