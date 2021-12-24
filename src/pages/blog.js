import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"






const IndexPage = () => {
  return (
    <Layout>
      <h1 style={{ fontSize: '8vw', color: 'rgb(118, 0, 0)', fontVariationSettings: '"DSPL" 420', marginBottom: '0' }}>blog</h1>
      <div style={{
        paddingLeft: '0.5rem',
        paddingBottom: '1.5rem'
      }} >
        <Link to="/">
          <span
            style={{
              paddingRight: '10px',
              fontWeight: `400`,
            }}
          >
            home
          </span>
        </Link>
        <Link to="/blog">
          <span
            style={{
              paddingRight: '10px',
              fontWeight: `400`,
            }}
          >
            blog
          </span>
        </Link>
        <Link to="/bookshelf">
          <span
            style={{
              paddingRight: '10px',
              fontWeight: `400`,
            }}
          >
            bookshelf
          </span>
        </Link>
      </div>

      <div style={{ paddingLeft: `0.5rem` }}>
        <p style={{ fontSize: '2em' }}>Recent blogposts</p>
        <p>
          <Link target="_blank" to="https://telegra.ph/What-is-the-essence-of-good-writing-12-20">
            What is the essence of good writing?
          </Link>
          <i class="text-light text-muted"><small> Dec, 16, 2021</small></i>
        </p>
        <p>
          <Link target="_blank" to="#">Jorne split keyboard how-to guide</Link>
          <i class="text-light text-muted"><small> Nov, 28, 2021</small></i>
        </p>
        <p>
          <Link target="_blank" to="#">Using Sony A24 as a webcam on OSx</Link>
          <i class="text-light text-muted"><small> Sept, 6, 2021</small></i>
        </p>
        <p>
          <Link target="_blank" to="#">My typing and keyboards journey</Link>
          <i class="text-light text-muted"><small> June, 11, 2021</small></i>
        </p>


      </div>
    </Layout >
  )
}

export default IndexPage
