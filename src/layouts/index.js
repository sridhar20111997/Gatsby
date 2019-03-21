/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
    return graphql(`
    {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                author
            }
        }
    }
  `).then(result=>{
      console.log("result",result)
      result.data.allMarkdownRemark.edges.forEach(({node}))=>{
        createPage({
            path:node.frontmatter.path,
            component:blogPostTemplate
        })
      })
  }
}
