import React from "react"
import { Link } from "gatsby"
import useVariableFont from "react-variable-fonts"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import useMousePosition from "../components/useMousePosition"

const initialSettings = {
  DSPL: 100,
}

const IndexPage = () => {
  const { x, y } = useMousePosition()
  const [normalStyles] = useVariableFont("TTAlientzVar", "normal")
  const [customStyles, updateStyles] = useVariableFont(
    "TTAlientzVar",
    initialSettings
  )

  const randomSetting = () => y

  return (
    <Layout>
      <div
        onMouseMove={() => updateStyles({ DSPL: randomSetting() })}
        onTap={() => updateStyles({ DSPL: randomSetting() })}
        style={{ width: `100%`, minHeight: `600px` }}
      >
        <div style={{ paddingLeft: `0.5rem` }}>
          <h1
            style={{
              ...customStyles,
              color: `#760000`,
              fontSize: `12vh`,
              fontWeight: `400`,
            }}
          >
            iska
          </h1>
          <p>
            Sup, I'm Iskander.
            <br />
            I'm a student at 42 Silicon Valley.
            <br />I once founded an{" "}
            <Link to="https://kapital.kz/business/54006/kak-prodavat-morozhenoye-s-ledyanoy-skovorody.html">
              ice-cream
            </Link>{" "}
            <Link to="https://www.buro247.kz/lifestyle/city/novoe-mesto-na-karte-almaty-kafe-morozhenoe-kosm-z.html">
              brand
            </Link>{" "}
            <br />
          </p>
          <p>
            Curious about: functional programming, generative design and complex
            systems.
            <br />
            Trying to master: stoicism, brazilian jiu-jistu, meditation.
          </p>
          <p>
            First computer: 1999
            <br />
            First programming language: C<br />
            Text editor: Doom Emacs.
            <br />
            Currently learning: Clojure
            <br />
            Recent project:{" "}
            <Link to="https://optimistic-kowalevski-550adb.netlify.app/">
              IKEA Social Enterpreneurship
            </Link>{" "}
          </p>
          <Link to="https://www.instagram.com/iska/">instagram.com/iska</Link>{" "}
          <br />
          <Link to="https://www.are.na/iska">are.na/iska</Link> <br />
          <Link to="https://www.goodreads.com/3005 ">goodreads.com/3005</Link>
          <br />
          <Link to="https://t.me/iskander3005">t.me/iskander3005</Link>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
