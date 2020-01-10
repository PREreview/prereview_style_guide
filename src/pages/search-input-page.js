import "./search-input-page.css"
import "../components/button.css"
import React from "react"
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
import ExampleSearchInput from "../components/example-search-input"

const SearchInputPage = () => {
  return (
    <Layout>
      <article className="page page--search-input">
        <header className="page__search-input">
          <StyleHx level={1}>Search Input</StyleHx>
        </header>

        <section>
          <StyleP variantName="large">
            For pages where Search is the primary form of user interaction, a
            large search input field may be used.
          </StyleP>

          <ExampleGroup>
            <ExampleLabel
              title="Primary Search Input"
              subtitle="Open Sans 500, 13pt"
            />
            <StyleP></StyleP>
            <div className="search-input-page__row">
              <div className="search-input-page__search">
                <ExampleSearchInput />
              </div>
              <div className="search-input-page__row__v-dim">
                <VDimension size={56} unit="px" />
              </div>
            </div>
          </ExampleGroup>
          <StyleP variantName="large">
            In situations where Search is not the primary call to action, a more
            compact search input is recommended.
          </StyleP>
          <ExampleGroup>
            <ExampleLabel
              title="Secondary Search Input"
              subtitle="Open Sans 500, 13pt"
            />
            <StyleP></StyleP>
            <div className="search-input-page__row">
              <div className="search-input-page__search">
                <ExampleSearchInput size="small" />
              </div>
              <div className="search-input-page__row__v-dim">
                <VDimension size={40} unit="px" />
              </div>
            </div>
          </ExampleGroup>
        </section>
      </article>
    </Layout>
  )
}

export default SearchInputPage
