/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql, reporter }) => {
  const response = await graphql(`
  query {
    allDatoCmsCourse {
      nodes {
        slug
      }
    }
  }
  `)
  console.log(response.data.allDatoCmsCourse.nodes)

  if (response.errors) {
    reporter.panic('No hubo resultados', response.errors)
  }

  const courses = response.data.allDatoCmsCourse.nodes

  courses.forEach(course => {
    actions.createPage({
      path: course.slug,
      component: require.resolve('./src/components/course.js'),
      context: {
        slug: course.slug
      }
    })
  })
}
