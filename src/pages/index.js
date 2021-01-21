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
        style={{ maxWidth: `40%`, minHeight: `600px` }}
      >
        <h1
          style={{
            ...customStyles,
            color: `#760000`,
            fontSize: `15vh`,
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
          Now interested in functional programming, generative design and
          complex systems.
          <br />
          Most recent project:{" "}
          <Link to="https://optimistic-kowalevski-550adb.netlify.app/">
            IKEA Social Enterpreneurship
          </Link>{" "}
        </p>
        <p>
          First computer: 1999
          <br />
          First programming language: C<br />
          Text editor: Doom Emacs.
          <br />
          Currently obsessed with: Clojure
          <br />
          Recent project:{" "}
        </p>
        <Link to="https://www.instagram.com/iska/">
          instagram.com/iska
        </Link>{" "}
        <br />
        <Link to="https://www.are.na/iska">are.na/iska</Link> <br />
        <Link to="https://www.goodreads.com/3005 ">
          goodreads.com/3005
        </Link>{" "}
        <br />
      </div>
    </Layout>
  )
}

export default IndexPage
