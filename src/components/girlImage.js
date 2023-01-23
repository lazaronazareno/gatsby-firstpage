import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as style from '../styles/global.module.css'

const GirlImage = () => {
  const { image } = useStaticQuery(graphql`
  query {
    image: file(relativePath: {eq :"girl.jpg"}) {
      sharp: childImageSharp {
        gatsbyImageData(
          width: 1400
          placeholder: BLURRED
          formats: [WEBP]
        )
      }
    }
  }
  `)
  const url = getImage(image.sharp.gatsbyImageData)
  return (
    <div className={style.image__container}>
      <GatsbyImage
        image={url}
        alt='A girl with a book, soft smile'
      />
      <div className={style.image__info_container}>
        <h1>May Help?</h1>
        <p>Aprende habilidades valiosas para alcanzar tus metas personales y profesionales"
          Descripción: "Nuestra plataforma ofrece cursos en línea diseñados para ayudarte a desarrollar habilidades esenciales para mejorar tu vida. Desde la gestión del tiempo hasta el aprendizaje de un nuevo idioma, nuestros cursos están diseñados para ayudarte a alcanzar tus metas personales y profesionales.
        </p>
      </div>
    </div>
  )
}

export default GirlImage
