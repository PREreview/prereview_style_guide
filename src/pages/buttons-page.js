import "./buttons-page.css"
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

const ButtonsPage = () => {
  return (
    <Layout>
      <article className="page page--headers">
        <header className="page__header">
          <StyleHx level={1}>UI Elements</StyleHx>
        </header>

        <section>
          <StyleP variantName="large"></StyleP>

          <ExampleGroup>
            <ExampleRow>
              <ExampleLabel
                title="Standard Button"
                subtitle="For Non-Primary Actions"
              />
              <div>
                <div className="buttons-page__button-row">
                  <div className="buttons-page__button-example">
                    <Button disabled={true}>Disabled</Button>
                  </div>
                  <div className="buttons-page__button-example">
                    <Button>Enabled</Button>
                  </div>
                  <div className="buttons-page__button-example">
                    <Button isFocused={true}>Focused</Button>
                  </div>
                </div>
              </div>
            </ExampleRow>
          </ExampleGroup>
          <ExampleGroup>
            <ExampleRow>
              <ExampleLabel
                title="Primary Button"
                subtitle="For Primary Actions"
              />
              <div className="buttons-page__button-row">
                <div className="buttons-page__button-example">
                  <Button primary={true} disabled={true}>
                    Disabled
                  </Button>
                </div>
                <div className="buttons-page__button-example">
                  <Button primary={true}>Enabled</Button>
                </div>
                <div className="buttons-page__button-example">
                  <Button primary={true} isFocused={true}>
                    Focused
                  </Button>
                </div>
              </div>
            </ExampleRow>
          </ExampleGroup>
          <ExampleGroup>
            <ExampleRow>
              <ExampleLabel
                title="Action Button"
                subtitle="For Calls To Action "
              />
              <div className="buttons-page__button-row">
                <div className="buttons-page__button-example">
                  <Button pill={true} primary={true} disabled={true}>
                    Disabled
                  </Button>
                </div>
                <div className="buttons-page__button-example">
                  <Button pill={true} primary={true}>
                    Enabled
                  </Button>
                </div>
                <div className="buttons-page__button-example">
                  <Button pill={true} primary={true} isFocused={true}>
                    Focused
                  </Button>
                </div>
              </div>
            </ExampleRow>
          </ExampleGroup>
          <ExampleGroup>
            <ExampleRow>
              <ExampleLabel title="Button Construction" subtitle="" />
              <div className="buttons-page__button-row">
                <div className="buttons-page__button-example">
                  <VDimension size={32} unit="px" />
                  <div className="button">
                    <RevealBoxWhiteSpace defaultReveal={true}>
                      <div className="button__contents">Layout</div>
                    </RevealBoxWhiteSpace>
                  </div>
                </div>
                <div className="buttons-page__button-example">
                  <div className="button button--primary">
                    <RevealBoxWhiteSpace defaultReveal={true}>
                      <div className="button__contents">Layout</div>
                    </RevealBoxWhiteSpace>
                  </div>
                </div>
                <div className="buttons-page__button-example">
                  <div className="button button--primary button--pill">
                    <RevealBoxWhiteSpace defaultReveal={true}>
                      <div className="button__contents">Layout</div>
                    </RevealBoxWhiteSpace>
                  </div>
                </div>
              </div>
            </ExampleRow>
          </ExampleGroup>
        </section>
      </article>
    </Layout>
  )
}

export default ButtonsPage
