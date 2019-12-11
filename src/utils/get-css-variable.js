import cssUnits from "units-css"

const getCssVariable = varName => {
  // window.getComputedStyle is not available during SSR.
  const style =
    typeof window !== `undefined`
      ? window.getComputedStyle(document.body).getPropertyValue(varName)
      : ""
  // console.log("getCssVariable", varName, style)

  return style
  //return document.body.style.getPropertyValue(varName)
}

const getCssFontMetrics = (styleName = "none", variantName) => {
  const postfix = variantName ? `--${variantName}` : ""
  const fontSizeStyle = getCssVariable(`--${styleName}-font-size${postfix}`)
  const lineHeightStyle = getCssVariable(`--${styleName}-line-height${postfix}`)
  const topMarginStyle = getCssVariable(`--${styleName}-top-margin${postfix}`)

  // console.log(
  //   "getCssFontMetrics",
  //   `--${styleName}-font-size${postfix}`,
  //   fontSizeStyle,
  //   lineHeightStyle
  // )

  const size = cssUnits.parse(fontSizeStyle)

  const lineHeight = cssUnits.parse(lineHeightStyle)

  const lineHeightNum = cssUnits.convert(size.unit, lineHeightStyle)

  const topMarginNum = cssUnits.convert(size.unit, topMarginStyle)

  return {
    size: size.value,
    sizeStyle: `${size.value}${size.unit}`,
    lineHeight: lineHeightNum,
    lineHeightStyle: `${lineHeightNum}${size.unit}`,
    topMargin: topMarginNum,
    unit: size.unit,
  }
}

export { getCssVariable, getCssFontMetrics }
