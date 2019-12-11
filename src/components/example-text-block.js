import React from "react"
import { getCssVariable, getCssFontMetrics } from "../utils/get-css-variable"
import StyleHx from "./style-hx"
import RevealTypeWhiteSpace from "./reveal-type-white-space"

/* the semantic level and visual size can be set independantly */

const ExampleTextBlock = ({
  styleName,
  variantName,
  className = "",
  children,
}) => {
  const fontMetrics = getCssFontMetrics(styleName, variantName)

  console.log("fontMetrics", styleName, fontMetrics)
  return (
    <RevealTypeWhiteSpace
      fontSize={fontMetrics.size}
      lineHeight={fontMetrics.lineHeight}
      unit={fontMetrics.unit}
      topMargin={fontMetrics.topMargin}
    >
      {children}
    </RevealTypeWhiteSpace>
  )
}

export default ExampleTextBlock
