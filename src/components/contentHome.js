import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as style from '../styles/global.module.css'

const ContentHome = () => {
  const data = useStaticQuery(graphql`
   {
    allDatoCmsPage(filter: {slug: {eq: "home"}}){
      nodes {
        title
        content
        image{
          gatsbyImageData(
            width: 500
            placeholder: BLURRED
          )        
        }
      }
    }
  }
  `)

  const { title, content, image } = data.allDatoCmsPage.nodes[0]
  const url = getImage(image.gatsbyImageData)

  return (
    <div className={style.cmsPage__container}>
      <h2>{title}</h2>

      <div>
        <p>{content}</p>
        <GatsbyImage image={url} alt='people meet course' />
      </div>
    </div>
  )
}

export default ContentHome
