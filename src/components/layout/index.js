/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header"
import Footer from '../footer'
import './layout.scss'

const propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.string.isRequired,
};

const defaultProps = {
  page: null,
};

const Layout = ({ children,page }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} page={page}/>
      <div
        style={{
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout

// https://tsukamon.com/blogs/3