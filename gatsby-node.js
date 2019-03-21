const path = require('path')
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
    return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              author
            }
          }
        }
      }
    }
  `).then(result=>{
      console.log("result",result)
      result.data.allMarkdownRemark.edges.forEach(({node})=>{
        createPage({
            path:node.frontmatter.path,
            component:blogPostTemplate
        })
      })
  })
}
