import "./white-space.css"
import React from "react"
import { LoremIpsum } from "lorem-ipsum"
import { MdAccountCircle } from "react-icons/md"
import Layout from "../components/layout"
import StyleHx from "../components/style-hx"
import StyleP from "../components/style-p"
import ExampleGroup from "../components/example-group"
import ExampleRow from "../components/example-row"
import ExampleLabel from "../components/example-label"
import RevealBoxWhiteSpace from "../components/reveal-box-white-space"

const shortTextGenerator = new LoremIpsum({
  sentencesPerParagraph: {
    max: 3,
    min: 2,
  },
})

const WhiteSpace = () => {
  return (
    <Layout>
      <article className="page page--white-space">
        <header className="page__header">
          <StyleHx level={1}>Using White Space</StyleHx>
          <StyleP variantName="large">
            PREreview takes a minimal approach to graphic layout and makes
            extensive use of white space to organize information.
          </StyleP>
          <StyleP>
            Consideration should be given to the relative amount of space
            between related and unrelated blocks of information. Subtle
            differences in spacing will provide the user with visual clues as to
            how to understand the page's information.
          </StyleP>
          <div className="white-space">
            <ExampleGroup>
              <ExampleRow>
                <ExampleLabel
                  title="Related Content"
                  subtitle="24px to 32px margin"
                />
                <div className="white-space__card">
                  <RevealBoxWhiteSpace unit="px">
                    <div className="white-space__wrapping-grid">
                      <RevealBoxWhiteSpace>
                        <div className="white-space__example-box">
                          <StyleHx
                            level={2}
                            className="white-space__first-level-info"
                          >
                            Primary Info
                          </StyleHx>
                        </div>
                      </RevealBoxWhiteSpace>
                      <RevealBoxWhiteSpace>
                        <div className="white-space__example-box">
                          <div className="white-space__second-level-info">
                            Seconday Level Info
                          </div>
                        </div>
                      </RevealBoxWhiteSpace>
                      <RevealBoxWhiteSpace>
                        <div className="white-space__example-box">
                          <div className="white-space__third-level-info">
                            Third Level Info
                          </div>
                        </div>
                      </RevealBoxWhiteSpace>
                      <RevealBoxWhiteSpace>
                        <div className="white-space__example-box">
                          <div className="white-space__third-level-info">
                            <span>More third Level Info</span>
                            <MdAccountCircle />
                          </div>
                        </div>
                      </RevealBoxWhiteSpace>
                      <RevealBoxWhiteSpace>
                        <div className="white-space__example-box">
                          <StyleP>
                            {shortTextGenerator.generateParagraphs(1)}
                          </StyleP>
                        </div>
                      </RevealBoxWhiteSpace>
                    </div>
                  </RevealBoxWhiteSpace>
                </div>
              </ExampleRow>
            </ExampleGroup>
            <ExampleGroup>
              <ExampleRow>
                <ExampleLabel
                  title="Unrelated Content"
                  subtitle="48px to 56px margin"
                />
                <div className="white-space__card">
                  <RevealBoxWhiteSpace margin={[0]} padding={[16]} unit="px">
                    <div className="white-space__wrapping-grid">
                      <RevealBoxWhiteSpace className="white-space__unrelated-example-box-container">
                        <div className="white-space__search-box">Search</div>
                      </RevealBoxWhiteSpace>
                      <RevealBoxWhiteSpace>
                        <div className="white-space__unrelated-example-box">
                          <StyleHx
                            level={2}
                            className="white-space__first-level-info"
                          >
                            Primary Info
                          </StyleHx>
                        </div>
                      </RevealBoxWhiteSpace>
                      <RevealBoxWhiteSpace>
                        <div className="white-space__unrelated-example-box">
                          <div className="white-space__second-level-info">
                            Seconday Level Info
                          </div>
                        </div>
                      </RevealBoxWhiteSpace>
                    </div>
                  </RevealBoxWhiteSpace>
                </div>
              </ExampleRow>
            </ExampleGroup>
            <ExampleGroup>
              <ExampleRow>
                <ExampleLabel
                  title="Text Column Gutters"
                  subtitle="2 x line-height"
                />
                <div className="white-space__two-col">
                  <RevealBoxWhiteSpace>
                    <StyleP className="white-space__two-col__block-a">
                      Blocks of information may be visually seperated using
                      generous amounts of white space.
                    </StyleP>
                  </RevealBoxWhiteSpace>
                  <RevealBoxWhiteSpace>
                    <StyleP className="white-space__two-col__block-b">
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
