import React from 'react'
import Navigation from './nav'
import * as style from '../styles/global.module.css'
import { Link } from 'gatsby'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer className={style.footer}>
        <div>
          <Navigation />

          <Link to='/'>May Help?</Link>
        </div>
      </footer>
      <p className={style.footer_p}>May Help?. Todos los derechos Reservados {year} &copy; </p>
    </>
  )
}

export default Footer
