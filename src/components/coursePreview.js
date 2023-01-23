import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as style from '../styles/global.module.css'
import { Link } from 'gatsby'

const CoursePreview = ({ course }) => {
  const { title, content, slug, image } = course
  const url = getImage(image.gatsbyImageData)

  return (
    <li className={style.cmsCourse__container}>
      <GatsbyImage image={url} alt='people meet course' />
      <div className={style.cmsCourse__image_container}>
        <h3>{title}</h3>
        <p>{content}</p>

        <Link to={slug} className={style.button}>Ver más</Link>
      </div>
    </li>
  )
}

export default CoursePreview
