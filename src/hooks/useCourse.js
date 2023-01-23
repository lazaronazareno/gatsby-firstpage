import { graphql, useStaticQuery } from 'gatsby'

const useCourse = () => {
  const data = useStaticQuery(graphql`
  query {
    allDatoCmsCourse {
      nodes {
        title
        id
        slug
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

  return data.allDatoCmsCourse.nodes.map(course => ({
    title: course.title,
    slug: course.slug,
    id: course.id,
    content: course.content,
    image: course.image
  }))
}

export default useCourse
