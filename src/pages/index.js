import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import StyleHx from "../components/style-hx"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <article className="page page--headers">
      <header className="page__header">
        <StyleHx level={1}> Welcome to the PREreview Style Guide</StyleHx>
      </header>
    </article>
  </Layout>
)

export default IndexPage
