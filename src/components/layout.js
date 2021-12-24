/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
            paddingLeft: `0.5rem`,
          }}
        >
          <p style={{
            marginBottom: `0`,
          }}>Links:</p>
          <Link target="_blank" to="https://github.com/iiskakov">
            github.com/iiskakov
          </Link>{" "}
          <br />
          {/* <Link target="_blank" to="https://www.are.na/iska"> */}
          {/*   are.na/iska */}
          {/* </Link>{" "} */}
          {/* <br /> */}
          <Link target="_blank" to="https://www.instagram.com/iska/">
            instagram.com/iska
          </Link>{" "}
          <br />
          <Link target="_blank" to="https://www.goodreads.com/3005 ">
            goodreads.com/3005
          </Link>
          <br />
          <Link target="_blank" to="https://t.me/iskander3005">
            t.me/iskander3005
          </Link>
          {/* <br /> */}
          {/* <Link target="_blank" to="https://sptfy.com/iska"> */}
          {/*   sptfy.com/iska */}
          {/* </Link> */}

        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
