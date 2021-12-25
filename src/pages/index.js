import React from "react"
import { Link } from "gatsby"
import ReactCursorPosition, {
  INTERACTIONS,
} from "@appinfini/react-cursor-position"
import Layout from "../components/layout"
import { useEffect } from 'react';

function useImperativeDisableScroll({ element, disabled }) {
  useEffect(() => {
    if (!element) {
      return
    }

    element.style.overflowY = disabled ? 'hidden' : 'scroll'

    return () => {
      element.style.overflowY = 'scroll'
    }
  }, [disabled])
}

const PositionLabel = props => {
  const {
    position: { y = 0 } = {},
  } = props

  return (
    <div style={{
      marginBottom: '1.45rem'
    }} className="example__label">
      <h1
        style={{
          color: `#760000`,
          fontSize: `8vw`,
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
  useImperativeDisableScroll({ element: document.body, disabled: true })
  return (
    <Layout>
      <ReactCursorPosition
        style={{ width: `100%` }}
        activationInteractionPress={INTERACTIONS.PRESS}
        pressDurationInMs={0} //default
        pressMoveThreshold={500} //default
      >
        <PositionLabel />
        <div style={{ paddingLeft: `0.5rem`, height: '100%', overflow: 'hidden', touchAction: 'none' }}>
          <p>
            † I'm Iskander, a Software Engineering student at 42 Silicon Valley.
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
              company.
            </Link>{" "}
            <br />
          </p>
          <p>
            † Curious about: functional programming and generative design.
            <br />
            † First computer in: 1999
            <br />
            † First programming language: C<br />
            † Text editor: Doom Emacs.
            <br />
            † Currently learning: Clojure
            {/* <br />† Recent project:{" "} */}
            {/* <Link */}
            {/*   target="_blank" */}
            {/*   to="https://ikea.today/social-entrepreneurship/" */}
            {/* > */}
            {/*   IKEA Social Enterpreneurship */}
            {/* </Link>{" "} */}
          </p>
        </div>
      </ReactCursorPosition>
    </Layout>
  )
}

export default IndexPage
