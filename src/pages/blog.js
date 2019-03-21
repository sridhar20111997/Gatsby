import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const BlogPage = ({ data }) => {
  console.log('data.allMarkdownRemark.edges', data.allMarkdownRemark.edges);
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(post => {
        return (
          <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>Posted by {post.node.frontmatter.author} </small>
            <br />
            <br />
            <Link to={post.node.frontmatter.path}>Read More</Link>
            <br />
            <br />
            <hr />
          </div>
        );
      })}
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
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
`;

export default BlogPage;
