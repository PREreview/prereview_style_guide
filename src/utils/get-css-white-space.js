import cssUnits from "units-css"

const getCssWhiteSpace = el => {
  if (typeof window === "undefined") {
    return undefined
  }

  const style = window.getComputedStyle(el)
  //console.log("style", style);

  const margin = {
    top: cssUnits.parse(style.marginTop).value,
    topUnit: cssUnits.parse(style.marginTop).unit,
    bottom: cssUnits.parse(style.marginBottom).value,
    bottomUnit: cssUnits.parse(style.marginBottom).unit,
    left: cssUnits.parse(style.marginLeft).value,
    leftUnit: cssUnits.parse(style.marginLeft).unit,
    right: cssUnits.parse(style.marginRight).value,
    rightUnit: cssUnits.parse(style.marginRight).unit,
  }

  const padding = {
    top: cssUnits.parse(style.paddingTop).value,
    topUnit: cssUnits.parse(style.paddingTop).unit,
    bottom: cssUnits.parse(style.paddingBottom).value,
    bottomUnit: cssUnits.parse(style.paddingBottom).unit,
    left: cssUnits.parse(style.paddingLeft).value,
    leftUnit: cssUnits.parse(style.paddingLeft).unit,
    right: cssUnits.parse(style.paddingRight).value,
    rightUnit: cssUnits.parse(style.paddingRight).unit,
  }

  //console.log("margin", margin)

  return {
    margin: margin,
    padding: padding,
    display: style.display,
  }
}

export default getCssWhiteSpace
