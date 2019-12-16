import "./logo-usage.css"
import React from "react"
import { LoremIpsum } from "lorem-ipsum"
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

const Logo = () => {
  const titleGenerator = new LoremIpsum({
    wordsPerSentence: {
      max: 8,
      min: 4,
    },
  })

  const textGenerator = new LoremIpsum({
    sentencesPerParagraph: {
      max: 12,
      min: 6,
    },
  })

  const shortTextGenerator = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
  })

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
                      src="/images/prereview_logo_h_colour_cropped.svg"
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
                      src="/images/prereview_logo_icon_colour.svg"
                    />
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
