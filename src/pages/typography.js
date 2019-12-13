import React from "react"
import { LoremIpsum } from "lorem-ipsum"

import Layout from "../components/layout"
import StyleHx from "../components/style-hx"
import ExampleRow from "../components/example-row"
import ExampleLabel from "../components/example-label"
import ExampleHx from "../components/example-hx"
import ExampleTextBlock from "../components/example-text-block"
import RevealBoxWhiteSpace from "../components/reveal-box-white-space"
import StyleP from "../components/style-p"
import StyleDisplayText from "../components/style-display-text"

const Typography = () => {
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
          <StyleHx level={1}>PREreview Typographic Styles</StyleHx>
        </header>

        <section>
          <StyleP variantName="large">
            PREreview uses the open source font "Open Sans" as its primary brand
            type treatment. Open Sans is a sans-serif font with a wide range of
            weights and a large charcter set. It features simple forms that work
            well at large display sizes. However, care must be taken when
            applied to bodies of text – in such situation it is recomended to
            use a relatively large line-spacing that is allows for easier
            eye-tracking accross lines of text.
          </StyleP>
          <ExampleRow>
            <ExampleLabel
              title="Heading 1"
              subtitle="Open Sans 600, 24pt / 32pt"
            />

            <ExampleHx level={1} styleName="header-1">
              {titleGenerator.generateSentences(1)}
            </ExampleHx>
          </ExampleRow>
        </section>
      </article>
    </Layout>
  )
}

export default Typography
