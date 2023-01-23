import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as style from '../styles/global.module.css'

const ContentUs = () => {
  const data = useStaticQuery(graphql`
  query {
    allDatoCmsPage(filter: {slug: {eq: "us"}}){
      nodes {
        title
        content
        image{
          gatsbyImageData(
            width: 1400
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
        <GatsbyImage image={url} alt='people meet course' />
        <p>{content}</p>
      </div>
    </div>
  )
}

export default ContentUs
