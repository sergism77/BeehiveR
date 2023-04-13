//this is the Seo.js file in the components folder
//what should seo do?
//it should take in a title and description
//it should render the title and description in the head of the page

import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
    const { site } = useStaticQuery(query)
    const { defaultTitle, defaultDescription, siteUrl } = site.siteMetadata
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}`,
    }
    return (
        <Helmet title={seo.title}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
        </Helmet>
    )
}

export default SEO

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                defaultDescription: description
                siteUrl: url
            }
        }
    }
`
