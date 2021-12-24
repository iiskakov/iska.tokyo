import React from "react"
import { Link } from "gatsby"
import useVariableFont from "react-variable-fonts"
import ReactCursorPosition, {
  INTERACTIONS,
} from "@appinfini/react-cursor-position"
import Pointable from "react-pointable"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import useMousePosition from "../components/useMousePosition"

const PositionLabel = props => {
  const {
    detectedEnvironment: {
      isMouseDetected = false,
      isTouchDetected = false,
    } = {},
    elementDimensions: { width = 0, height = 0 } = {},
    isActive = false,
    isPositionOutside = false,
    position: { x = 0, y = 0 } = {},
  } = props

  return (
    <div style={{
      marginBottom: '1.45rem'
    }} className="example__label">
      <h1
        style={{
          color: `#760000`,
          fontSize: `15vh`,
          fontWeight: `400`,
          fontVariationSettings: `"DSPL" ${y}`,
          marginBottom: '0'
        }}
      >
        iska{" "}
      </h1>
      <div style={{
        paddingLeft: '0.5rem'
      }} >
        <Link to="/">
          <span
            style={{
              paddingRight: '10px',
              fontWeight: `400`,
              fontVariationSettings: `"DSPL" ${y}`,
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
              fontVariationSettings: `"DSPL" ${y}`,
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
              fontVariationSettings: `"DSPL" ${y}`,
            }}
          >
            bookshelf
          </span>
        </Link>
      </div>
    </div >
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <ReactCursorPosition
        style={{ width: `100%`, minHeight: `600px` }}
        activationInteractionPress={INTERACTIONS.PRESS}
        pressDurationInMs={0} //default
        pressMoveThreshold={500} //default
      >
        <PositionLabel />
        <div style={{ paddingLeft: `0.5rem` }}>
          <p>
            † Sup, I'm Iskander.
            <br />
            † I'm a Software Engineering student at 42 Silicon Valley.
            <br />† I once founded an{" "}
            <Link
              target="_blank"
              to="https://kapital.kz/business/54006/kak-prodavat-morozhenoye-s-ledyanoy-skovorody.html"
            >
              ice-cream
            </Link>{" "}
            <Link
              target="_blank"
              to="https://www.buro247.kz/lifestyle/city/novoe-mesto-na-karte-almaty-kafe-morozhenoe-kosm-z.html"
            >
              brand.
            </Link>{" "}
            <br />
          </p>
          <p>
            † Curious about: functional programming and generative design.
          </p>
          <p>
            † First computer: 1999
            <br />
            † First programming language: C<br />
            † Text editor: Doom Emacs.
            <br />
            † Currently learning: Clojure
            <br />† Recent project:{" "}
            <Link
              target="_blank"
              to="https://ikea.today/social-entrepreneurship/"
            >
              IKEA Social Enterpreneurship
            </Link>{" "}
          </p>
          <Link target="_blank" to="https://www.instagram.com/iska/">
            instagram.com/iska
          </Link>{" "}
          <br />
          <Link target="_blank" to="https://www.are.na/iska">
            are.na/iska
          </Link>{" "}
          <br />
          <Link target="_blank" to="https://www.goodreads.com/3005 ">
            goodreads.com/3005
          </Link>
          <br />
          <Link target="_blank" to="https://t.me/iskander3005">
            t.me/iskander3005
          </Link>
          <br />
          <Link target="_blank" to="https://sptfy.com/iska">
            sptfy.com/iska
          </Link>
        </div>
      </ReactCursorPosition>
    </Layout>
  )
}

export default IndexPage
