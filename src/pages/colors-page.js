import "./colors-page.css"
import React from "react"
import Layout from "../components/layout"
import StyleHx from "../components/style-hx"
import ExampleGroup from "../components/example-group"
import ExampleLabel from "../components/example-label"
import StyleP from "../components/style-p"
import { VDimension } from "../components/dimensions"
import ExampleSearchInput from "../components/example-search-input"
import { getCssVariable } from "../utils/get-css-variable"

const ColorsPage = () => {
  const renderSwatch = colorName => {
    const colorVarName = `--${colorName}`
    const colorValue = getCssVariable(colorVarName)

    return (
      <div className="page__colors__color-info">
        <div
          className="page__colors__color-swatch"
          style={{ background: colorValue }}
        ></div>
        {colorValue}
      </div>
    )
  }

  const primaryColors = [
    "prereview-red",
    "prereview-black",
    "prereview-white",
    "prereview-grey",
  ]
  const secondaryColors = [
    "prereview-blue",
    "prereview-light-blue",
    "prereview-gold",
    "prereview-light-gold",
    "prereview-coral",
    "prereview-spring-green",
    "prereview-xxxlight-grey",
    "prereview-xxlight-grey",
    "prereview-xlight-grey",
    "prereview-light-grey",
  ]
  return (
    <Layout>
      <article className="page page--colors">
        <header className="page__colors">
          <StyleHx level={1}>PREreview Colors</StyleHx>
        </header>

        <section>
          <StyleP variantName="large">
            The PREreview color system is composed of primary and secondary
            palette. The secondary colors are intended to be used in
            illustrations and in select cases where the primary color range is
            not sufficient for clear communication.{" "}
          </StyleP>

          <ExampleGroup>
            <ExampleLabel
              title="Primary Colors"
              subtitle="These should be the primary colours used in PREReview website, digital, and print materials."
            />
            <StyleP></StyleP>
            <div className="page__colors__swatches">
              {primaryColors.map(color => renderSwatch(color))}
            </div>
          </ExampleGroup>
          <ExampleGroup>
            <ExampleLabel
              title="Secondary Colors"
              subtitle="To maintain a unified visual identity across supporting visuals, these colours should be
used in illustrations that appear in PREReview website, digital, and print materials."
            />
            <StyleP></StyleP>
            <div className="page__colors__swatches">
              {secondaryColors.map(color => renderSwatch(color))}
            </div>
          </ExampleGroup>

          <ExampleGroup>
            <StyleP variantName="large">
              Text color should be optimized for legibility and accessibility.
            </StyleP>
            <br />
            <ExampleLabel
              title="Primary Text Color"
              subtitle={`Unrich Black: ${getCssVariable("--unrich-black")}`}
            />
            <StyleP>
              Black text set on white should use <em>unrich</em> black - a
              slightly desaturated black that is easier to read.
            </StyleP>
            <br />
            <ExampleLabel
              title="Secondary Text Color"
              subtitle={`Grey: ${getCssVariable("--basic-font-color--light")}`}
            />
            <StyleP className="page__colors__light-text">
              Light text set on white should use a grey that is dark enough to
              meet accessibility standards.
            </StyleP>
          </ExampleGroup>
          <ExampleGroup>
            <ExampleLabel
              title="Calls to Action and Featured Text"
              subtitle={`White text with ${getCssVariable(
                "--prerview-red-text-shadow"
              )} shadow on Red ${getCssVariable("--prereview-red")}`}
            />
            <div className="page_colors__cta-example">
              <StyleHx level={1}>Splash Page Text</StyleHx>
            </div>
            <StyleP>
              Note that the PREreview brand color combination of white on
              #ff3333 red does not meet the WCAG accessability standard for
              color contrast. In this case, a text shadow may be employed to
              achieve a higher effective contrast between the text and
              background.
              <blockquote>
                ...if a letter is lighter at the top than it is a the bottom, it
                may be difficult to maintain the contrast ratio between the
                letter and the background over the full letter. In this case,
                the designer might darken the background behind the letter, or
                add a thin black outline (at least one pixel wide) around the
                letter in order to keep the contrast ratio between the letter
                and the background above 4.5:1. – 
                <a href="https://www.w3.org/WAI/WCAG20/quickref/20140916/#visual-audio-contrast-contrast">
                  w3.org
                </a>
              </blockquote>
            </StyleP>
          </ExampleGroup>
        </section>
      </article>
    </Layout>
  )
}

export default ColorsPage
