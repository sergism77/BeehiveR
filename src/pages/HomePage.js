//this is the HomePage.js file in the pages folder
//this is the home page
//this is the first page that will be loaded
//this is the page that will be loaded when the user goes to the root url

import React from "react"
import { graphql } from "gatsby"
import Layout from "../SDK/components/layout/Layout"
import SEO from "../SDK/components/Seo"
import Hero from "../SDK/components/Hero"
import About from "../SDK/components/About"
import Services from "../SDK/components/Services"
import Contact from "../SDK/components/Contact"
import Blog from "../SDK/components/Blog"

export default function HomePage({ data }) {
    return (
        <Layout>
            <SEO title="Home" />
            <Hero />
            <About />
            <Services />
            <Blog posts={data.allMarkdownRemark.edges} />
            <Contact />
        </Layout>
    )
}

export const query = graphql`
    query HomePageQuery {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 3
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                        excerpt
                        featuredImage {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

