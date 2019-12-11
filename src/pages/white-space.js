import "./white-space.css"
import React from "react"

import Layout from "../components/layout"
import StyleHx from "../components/style-hx"
import StyleP from "../components/style-p"
import ExampleGroup from "../components/example-group"
import ExampleRow from "../components/example-row"
import ExampleLabel from "../components/example-label"
import RevealBoxWhiteSpace from "../components/reveal-box-white-space"
const WhiteSpace = () => {
  return (
    <Layout>
      <article className="page page--white-space">
        <header className="page__header">
          <StyleHx level={1}>White Space</StyleHx>
          <div className="white-space">
            <ExampleGroup>
              <ExampleRow>
                <ExampleLabel
                  title="Column Gutters"
                  subtitle="2 x line-height"
                />
                <div className="white-space__two-col">
                  <RevealBoxWhiteSpace
                    margin={[0, 18, 0, 0]}
                    padding={[0]}
                    unit="pt"
                  >
                    <StyleP>
                      Blocks of information may be visually seperated using
                      generous amounts of white space.
                    </StyleP>
                  </RevealBoxWhiteSpace>
                  <RevealBoxWhiteSpace
                    margin={[0, 0, 0, 18]}
                    padding={[0]}
                    unit="pt"
                  >
                    <StyleP>
                      The space between text columns should be atleast two times
                      the line-height. In this example the center gutter is 2 x
                      18pt.
                    </StyleP>
                  </RevealBoxWhiteSpace>
                </div>
              </ExampleRow>
            </ExampleGroup>
          </div>
        </header>
      </article>
    </Layout>
  )
}
export default WhiteSpace
