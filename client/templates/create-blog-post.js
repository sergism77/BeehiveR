//this is the create-blog-post.js file
//this will be used to create and/or edit a blog post
//this is a template file

import React from "react"
import { graphql } from "gatsby"
import Layout from "../SDK/components/Layout"
import SEO from "../SDK/components/Seo"

export default function Template({ data }) {
    const post = data.markdownRemark
    return (
        <Layout>
        <SEO title={post.frontmatter.title} />
        <div>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        </Layout>
    )
    }

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

// Path: src/templates/create-blog-poset.js