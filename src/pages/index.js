import * as React from 'react'
import ContentHome from '../components/contentHome'
import CoursePreview from '../components/coursePreview'
import GirlImage from '../components/girlImage'
import Layout from '../components/layout'
import useCourse from '../hooks/useCourse'
import * as style from '../styles/global.module.css'

const IndexPage = () => {
  const courses = useCourse()
  return (
    <Layout>
      <GirlImage />

      <ContentHome />

      <h2 className={style.title}>Nuestros cursos</h2>

      <ul className={style.cmsCourse_list}>
        {courses.map(course => (
          <CoursePreview key={course.id} course={course} />
        ))}
      </ul>

    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>May Help?</title>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' integrity='sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
    <link rel='preconnect' href='https://fonts.googleapis.com' />
    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
    <link href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap' rel='stylesheet' />
  </>
)
