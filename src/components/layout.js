/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/base/reset.scss"
import "../styles/layout/layout.scss"
import "../styles/component/header.scss"

const Layout = ({ children, themeColor }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          id="main-container"
          style={themeColor === 'black' ? { backgroundColor:'black', color: 'white'} : {}}
        >
          <main id="main" >{children}</main>
          <footer style={{width: 'fit-content', margin: '30px auto 0', paddingBottom: '30px', marginTop: '40px'}}>
            TK Photography© {new Date().getFullYear()}
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
