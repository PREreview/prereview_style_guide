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

const Text = () => {
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
          <StyleHx level={1}>Styling Bodies of text</StyleHx>
        </header>

        <section>
          <ExampleRow>
            <ExampleLabel
              title="Heading 1"
              subtitle="Open Sans 600, 24pt / 32pt"
            />

            <ExampleHx level={1} styleName="header-1">
              {titleGenerator.generateSentences(1)}
            </ExampleHx>
          </ExampleRow>
          <ExampleRow>
            <ExampleLabel
              title="Lead Text"
              subtitle="Open Sans 500, 13pt / 22pt"
            />

            <ExampleTextBlock styleName="basic" variantName="large">
              <StyleP variantName="large">
                {shortTextGenerator.generateParagraphs(1)}
              </StyleP>
            </ExampleTextBlock>
          </ExampleRow>
          <ExampleRow>
            <ExampleLabel
              title="Body Text"
              subtitle="Open Sans 400, 11pt / 18pt"
            />
            <div>
              <ExampleTextBlock styleName="basic">
                <StyleP>{textGenerator.generateParagraphs(1)}</StyleP>
              </ExampleTextBlock>
              <ExampleTextBlock styleName="basic">
                <StyleP>{textGenerator.generateParagraphs(1)}</StyleP>
              </ExampleTextBlock>
            </div>
          </ExampleRow>
          <ExampleRow>
            <ExampleLabel
              title="Display Text"
              subtitle="Open Sans 300, 32pt / 40pt"
            />
            <div>
              <ExampleTextBlock styleName="display-1">
                <StyleDisplayText>
                  {titleGenerator.generateSentences(2)}
                </StyleDisplayText>
              </ExampleTextBlock>
              <ExampleTextBlock styleName="basic">
                <StyleP>{textGenerator.generateParagraphs(1)}</StyleP>
              </ExampleTextBlock>
            </div>
          </ExampleRow>
          <ExampleRow>
            <ExampleLabel
              title="Small Text"
              subtitle="Open Sans 400, 10pt / 15pt"
            />
            <div>
              <ExampleTextBlock styleName="basic" variantName="small">
                <StyleP variantName="small">
                  {textGenerator.generateParagraphs(1)}
                </StyleP>
              </ExampleTextBlock>
            </div>
          </ExampleRow>
        </section>
      </article>
    </Layout>
  )
}

export default Text
