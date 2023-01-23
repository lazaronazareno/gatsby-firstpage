import React from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as style from '../styles/global.module.css'

export const query = graphql`
  query($slug: String!) {
    allDatoCmsCourse(filter:{slug: {eq : $slug}}) {
      nodes {
        title
        content
        image {
            gatsbyImageData(
              width: 1400
              placeholder: BLURRED
            )        
          }
      }
    }
  }`

const Course = ({ data: { allDatoCmsCourse: { nodes } } }) => {
  const { title, content, image } = nodes[0]
  const url = getImage(image.gatsbyImageData)

  return (
    <Layout>
      <main className={style.cmsDinamicCourse__container}>
        <h1>{title}</h1>

        <div>
          <p>{content}</p>
          <GatsbyImage image={url} alt='people meet course' />
        </div>
      </main>

    </Layout>
  )
}

export default Course

export const Head = ({ data: { allDatoCmsCourse: { nodes } } }) => (
  <>
    <title>{nodes[0].title}</title>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' integrity='sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
    <link rel='preconnect' href='https://fonts.googleapis.com' />
    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
    <link href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap' rel='stylesheet' />
  </>
)
