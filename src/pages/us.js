import React from 'react'
import ContentUs from '../components/contentUs'
import Layout from '../components/layout'

const Us = () => {
  return (
    <Layout>
      <ContentUs />
    </Layout>
  )
}

export default Us

export const Head = () => (
  <>
    <title>Nosotros - May Help?</title>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' integrity='sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
    <link rel='preconnect' href='https://fonts.googleapis.com' />
    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
    <link href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap' rel='stylesheet' />
  </>
)
