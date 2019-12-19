import "./nav-bar-page.css"
import "../components/button.css"
import React from "react"
import { withPrefix } from "gatsby"
import { LoremIpsum } from "lorem-ipsum"
import resolvePath from "../utils/resolve-path"
import Layout from "../components/layout"
import StyleHx from "../components/style-hx"
import ExampleRow from "../components/example-row"
import ExampleGroup from "../components/example-group"
import ExampleLabel from "../components/example-label"
import ExampleHx from "../components/example-hx"
import ExampleTextBlock from "../components/example-text-block"
import RevealBoxWhiteSpace from "../components/reveal-box-white-space"
import StyleP from "../components/style-p"
import { VDimension } from "../components/dimensions"
import Button from "../components/button"
import ExampleNavBar from "../components/example-nav-bar"

const NavBarPage = () => {
  return (
    <Layout>
      <article className="page page--headers">
        <header className="page__header">
          <StyleHx level={1}>Navigation Bar</StyleHx>
        </header>

        <section>
          <StyleP variantName="large">
            The Header should use an adaptive layout to allow for functional
            navitagation for both mobile and desktop users. On narrow screens,
            the logo may be reduced to only the icon variant to allow more space
            for navigation controls.
          </StyleP>

          <ExampleGroup>
            <ExampleLabel
              title="Navigation Bar with Adaptive Logo"
              subtitle="CSS media queries may control the display of the logo"
            />
            <StyleP></StyleP>
            <div className="nav-bar-page__nav-bar-row">
              <ExampleNavBar>
                <RevealBoxWhiteSpace>
                  <a className="nav-bar-page__nav-bar__item">Lorem</a>
                </RevealBoxWhiteSpace>
                <RevealBoxWhiteSpace>
                  <a className="nav-bar-page__nav-bar__item">Ipsum</a>
                </RevealBoxWhiteSpace>
                <RevealBoxWhiteSpace>
                  <a className="nav-bar-page__nav-bar__item">Dolor</a>
                </RevealBoxWhiteSpace>
              </ExampleNavBar>
              <div className="nav-bar-page__nav-bar__v-dim">
                <VDimension size={80} unit="px" />
              </div>
            </div>
          </ExampleGroup>
        </section>
      </article>
    </Layout>
  )
}

export default NavBarPage
