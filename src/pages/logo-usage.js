import "./logo-usage.css"
import React, { useRef } from "react"
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
import StyleDisplayText from "../components/style-display-text"
import { VDimension } from "../components/dimensions"
import PrereviewLogo from "../components/prereview-logo"

const Logo = () => {
  return (
    <Layout>
      <article className="page page--headers">
        <header className="page__header">
          <StyleHx level={1}>PREreview Logo Usage</StyleHx>
        </header>

        <section>
          <StyleP variantName="large"></StyleP>
          <ExampleGroup>
            <ExampleRow>
              <ExampleLabel
                title="Wide Header Logo"
                subtitle="When space permits, the full logo should be used"
              />
              <div className="logo-usage__nav-bar-example">
                <RevealBoxWhiteSpace display="block">
                  <div className="logo-usage__nav-bar">
                    <img
                      className="logo-usage__nav-bar__logo"
                      src={resolvePath(
                        "/images/prereview_logo_h_colour_cropped.svg"
                      )}
                    />
                    <div className="logo-usage__nav-bar__logo_v-dim">
                      <VDimension size="48" unit="px" />
                    </div>
                  </div>
                </RevealBoxWhiteSpace>
              </div>
            </ExampleRow>
          </ExampleGroup>
          <ExampleGroup>
            <ExampleRow>
              <ExampleLabel
                title="Narrow Header Logo"
                subtitle="On narrow screen, the icon-only logo may be used"
              />
              <div className="logo-usage__nav-bar-example">
                <RevealBoxWhiteSpace display="block">
                  <div className="logo-usage__nav-bar">
                    <img
                      className="logo-usage__nav-bar__icon-logo"
                      src={resolvePath(
                        "/images/prereview_logo_icon_colour.svg"
                      )}
                    />
                    <div className="logo-usage__nav-bar__logo_v-dim">
                      <VDimension size="48" unit="px" />
                    </div>
                  </div>
                </RevealBoxWhiteSpace>
              </div>
            </ExampleRow>
          </ExampleGroup>
          <ExampleGroup>
            <ExampleRow>
              <ExampleLabel
                title="White Logo On Red Background"
                subtitle="A white variant of the logo is available for placement on the red PREreview Brand Color"
              />
              <div className="logo-usage__nav-bar-example">
                <RevealBoxWhiteSpace>
                  <div className="logo-usage__nav-bar logo-usage__nav-bar--red">
                    <PrereviewLogo color="white" />
                    <div className="logo-usage__nav-bar__logo_v-dim">
                      <VDimension size="48" unit="px" />
                    </div>
                  </div>
                </RevealBoxWhiteSpace>
              </div>
            </ExampleRow>
          </ExampleGroup>
        </section>
      </article>
    </Layout>
  )
}

export default Logo
