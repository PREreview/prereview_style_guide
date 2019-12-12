/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SiteNav from "../components/site-nav"
import SiteHeader from "./site-header"
import "./layout.css"
import "./semantic.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SiteHeader siteTitle={data.site.siteMetadata.title} />
      <SiteNav />
      <div className="site-layout__main">
        <div className="site-layout__main-left"></div>
        <main className="site-layout__main-content">{children}</main>
        <div className="site-layout__main-right"></div>
      </div>
      {/* <footer>© {new Date().getFullYear()}, PREreview</footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
