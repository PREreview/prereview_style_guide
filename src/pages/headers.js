import "./page.css"
import React from "react"
import { LoremIpsum } from "lorem-ipsum"

import Layout from "../components/layout"
import StyleHx from "../components/style-hx"
import ExampleGroup from "../components/example-group"
import ExampleRow from "../components/example-row"
import ExampleLabel from "../components/example-label"
import ExampleHx from "../components/example-hx"
import RevealTypeWhiteSpace from "../components/reveal-type-white-space"

const Headers = () => {
  const titleGenerator = new LoremIpsum({
    wordsPerSentence: {
      max: 8,
      min: 4,
    },
  })
  return (
    <Layout>
      <article className="page page--headers">
        <header className="page__header">
          <StyleHx level={1}>Styling Headers</StyleHx>
        </header>
        <section>
          <ExampleGroup>
            <ExampleRow>
              <ExampleLabel title="Heading 1" subtitle="Open Sans 600, 24pt" />

              <ExampleHx level={1} styleName="header-1">
                {titleGenerator.generateSentences(1)}
              </ExampleHx>
            </ExampleRow>
          </ExampleGroup>
          <ExampleGroup>
            <ExampleRow>
              <ExampleLabel title="Heading 2" subtitle="Open Sans 500, 20pt" />
              <ExampleHx level={2} styleName="header-2">
                {titleGenerator.generateSentences(1)}
              </ExampleHx>
            </ExampleRow>
          </ExampleGroup>
          <ExampleGroup>
            <ExampleRow>
              <ExampleLabel title="Heading 3" subtitle="Open Sans 500, 16pt" />
              <ExampleHx level={3} styleName="header-3">
                {titleGenerator.generateSentences(1)}
              </ExampleHx>
            </ExampleRow>
          </ExampleGroup>
          <ExampleGroup>
            <ExampleRow>
              <ExampleLabel title="Heading 4" subtitle="Open Sans 500, 14pt" />
              <ExampleHx level={4} styleName="header-4">
                {titleGenerator.generateSentences(1)}
              </ExampleHx>
            </ExampleRow>
          </ExampleGroup>
          <ExampleGroup>
            <ExampleRow>
              <ExampleLabel title="Heading 5" subtitle="Open Sans 500, 11pt" />
              <ExampleHx level={5} styleName="header-5">
                {titleGenerator.generateSentences(1)}
              </ExampleHx>
            </ExampleRow>
          </ExampleGroup>
        </section>
      </article>
    </Layout>
  )
}

export default Headers
