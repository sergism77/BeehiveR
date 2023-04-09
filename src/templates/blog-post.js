//this is the template for the blog post page
//only administrators will be able to publish blog posts
//othe users will be able to see the blog posts but not publish them
//other users will be able to log their inspections and see the inspection history
//they will also be able to ask questions and see the answers
//they will be able to answer questions and see the answers
//they will be able to see the inspection history
//so this is the template for the blog post page for administrators
//blog will be stored in markdown files on our server

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
        <SEO title={post.frontmatter.title} />
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
    )
    }

export default Post

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
            }
        }
    }
`
