import "./reveal-box-white-space.css"
import React, { useState, useEffect } from "react"
import IconButton from "./icon-button"
import getCssWhiteSpace from "../utils/get-css-white-space"
import { IoMdEyeOff, IoMdEye } from "react-icons/io"
import { HDimension, VDimension } from "./dimensions"

const RevealBoxWhiteSpace = ({
  padding,
  margin,
  unit = "px",
  display,
  children,
  defaultReveal = false,
  className = "",
}) => {
  const [isRevealing, setIsRevealing] = useState(defaultReveal)

  const [topMargin, setTopMargin] = useState(0)
  const [topMarginUnit, setTopMarginUnit] = useState("px")
  const [rightMargin, setRightMargin] = useState(0)
  const [rightMarginUnit, setRightMarginUnit] = useState("px")
  const [bottomMargin, setBottomMargin] = useState(0)
  const [bottomMarginUnit, setBottomMarginUnit] = useState("px")
  const [leftMargin, setLeftMargin] = useState(0)
  const [leftMarginUnit, setLeftMarginUnit] = useState("px")

  const [topPadding, setTopPadding] = useState(0)
  const [topPaddingUnit, setTopPaddingUnit] = useState(0)
  const [rightPadding, setRightPadding] = useState(0)
  const [rightPaddingUnit, setRightPaddingUnit] = useState(0)
  const [bottomPadding, setBottomPadding] = useState(0)
  const [bottomPaddingUnit, setBottomPaddingUnit] = useState(0)
  const [leftPadding, setLeftPadding] = useState(0)
  const [leftPaddingUnit, setLeftPaddingUnit] = useState(0)

  const [parentCssDisplay, setParentCssDisplay] = useState()
  const [cssDisplay, setCssDisplay] = useState(display)

  const myRef = React.useRef()
  const childRef = React.useRef()

  const clonedChild = React.cloneElement(React.Children.only(children), {
    ref: childRef,
  })

  const getMyDisplayMode = (parentMode, childMode) => {
    let result
    if (parentMode === "inline") {
      if (childMode === "inline") {
        result = "inline-block"
      } else if (childMode === "block") {
        result = "block"
      } else {
        result = "inline-block"
      }
    } else if (parentMode === "block") {
      if (childMode === "inline") {
        result = "inline-block"
      } else if (childMode === "block") {
        result = "block"
      } else {
        result = "inline-block"
      }
    } else if (parentMode === "inline-block") {
      if (childMode === "inline") {
        result = "inline-block"
      } else if (childMode === "block") {
        result = "block"
      } else {
        result = "inline-block"
      }
    } else {
      result = "inline-block"
    }
    //console.log("getMyDisplayMode", parentMode, childMode, result)
    return result
  }

  useEffect(() => {})

  useEffect(() => {
    if (myRef.current) {
      const myOffsetParentMetrics = getCssWhiteSpace(
        myRef.current.parentElement
      )
      // console.log(
      //   "parent",
      //   myRef.current.parentElement,
      //   myOffsetParentMetrics.display
      // )
      setParentCssDisplay(myOffsetParentMetrics.display)
    }

    /* if margin and padding is undefined, we try to derive from child */

    if (parentCssDisplay) {
      if (childRef.current && margin === undefined && padding === undefined) {
        const metrics = getCssWhiteSpace(childRef.current)
        setTopMargin(metrics.margin.top)
        setTopMarginUnit(metrics.margin.topUnit)
        setRightMargin(metrics.margin.right)
        setRightMarginUnit(metrics.margin.rightUnit)
        setBottomMargin(metrics.margin.bottom)
        setBottomMarginUnit(metrics.margin.bottomUnit)
        setLeftMargin(metrics.margin.left)
        setLeftMarginUnit(metrics.margin.leftUnit)

        setTopPadding(metrics.padding.top)
        setTopPaddingUnit(metrics.padding.topUnit)
        setRightPadding(metrics.padding.right)
        setRightPaddingUnit(metrics.padding.rightUnit)
        setBottomPadding(metrics.padding.bottom)
        setBottomPaddingUnit(metrics.padding.bottomUnit)
        setLeftPadding(metrics.padding.left)
        setLeftPaddingUnit(metrics.padding.leftUnit)

        if (!cssDisplay) {
          const myDisplay = getMyDisplayMode(parentCssDisplay, metrics.display)
          // console.log("myDisplay", parentCssDisplay, metrics.display, myDisplay)
          setCssDisplay(myDisplay)
        }
      } else {
        setTopPaddingUnit(unit)
        setRightPaddingUnit(unit)
        setBottomPaddingUnit(unit)
        setLeftPaddingUnit(unit)

        if (!cssDisplay) {
          setCssDisplay(getMyDisplayMode(parentCssDisplay, display))
        }

        if (margin) {
          if (margin.length === 1) {
            setTopMargin(margin[0])
            setRightMargin(margin[0])
            setBottomMargin(margin[0])
            setLeftMargin(margin[0])
          } else if (margin.length === 2) {
            setTopMargin(margin[0])
            setBottomMargin(margin[0])
            setRightMargin(margin[1])
            setLeftMargin(margin[1])
          } else if (margin.length === 4) {
            setTopMargin(margin[0])
            setRightMargin(margin[1])
            setBottomMargin(margin[2])
            setLeftMargin(margin[3])
          }
        }
        if (padding) {
          if (padding.length === 1) {
            setTopPadding(padding[0])
            setRightPadding(padding[0])
            setBottomPadding(padding[0])
            setLeftPadding(padding[0])
          } else if (padding.length === 2) {
            setTopPadding(padding[0])
            setBottomPadding(padding[0])
            setRightPadding(padding[1])
            setLeftPadding(padding[1])
          } else if (padding.length === 4) {
            setTopPadding(padding[0])
            setRightPadding(padding[1])
            setBottomPadding(padding[2])
            setLeftPadding(padding[3])
          }
        }
      }
    }
  })

  return (
    <div
      ref={myRef}
      className={`reveal-box-white-space ${
        isRevealing
          ? "reveal-box-white-space--active"
          : "reveal-box-white-space--inactive"
      } ${className} reveal-box-white-space--${cssDisplay}`}
      style={{ display: cssDisplay }}
      title={`parentCssDisplay: ${parentCssDisplay}`}
    >
      <div className="reveal-box-white-space__button">
        <IconButton
          onClick={() => setIsRevealing(!isRevealing)}
          className="reveal-box-white-space__icon-button"
        >
          <IoMdEye className="reveal-box-white-space__button__icon" />
        </IconButton>
      </div>
      {clonedChild}
      <div
        className="reveal-box-white-space__top-margin"
        style={{
          height: `${topMargin}${topMarginUnit}`,
          top: cssDisplay === "block" ? `-${topMargin}${topMarginUnit}` : "0",
        }}
      >
        {topMargin > 0 && <VDimension size={topMargin} unit={topMarginUnit} />}
      </div>
      <div
        className="reveal-box-white-space__bottom-margin"
        style={{
          height: `${bottomMargin}${bottomMarginUnit}`,
          bottom:
            cssDisplay === "block"
              ? `-${bottomMargin}${bottomMarginUnit}`
              : "0",
        }}
      >
        {bottomMargin > 0 && (
          <VDimension size={bottomMargin} unit={bottomMarginUnit} />
        )}
      </div>
      <div
        className="reveal-box-white-space__left-margin"
        style={{ width: `${leftMargin}${leftMarginUnit}` }}
      >
        {leftMargin > 0 && (
          <HDimension size={leftMargin} unit={leftMarginUnit} />
        )}
      </div>
      <div
        className="reveal-box-white-space__right-margin"
        style={{ width: `${rightMargin}${rightMarginUnit}` }}
      >
        {rightMargin > 0 && (
          <HDimension size={rightMargin} unit={rightMarginUnit} />
        )}
      </div>
      <div className="reveal-box-white-space__spacer">
        <div
          className="reveal-box-white-space__top-padding"
          style={{
            height: `${topPadding}${topPaddingUnit}`,
            top: cssDisplay !== "block" ? `${topMargin}${topMarginUnit}` : 0,
            left: `${leftMargin}${leftMarginUnit}`,
            right: `${rightMargin}${rightMarginUnit}`,
          }}
        >
          {topPadding > 0 && (
            <VDimension size={topPadding} unit={topPaddingUnit} />
          )}
        </div>
        <div
          className="reveal-box-white-space__bottom-padding"
          style={{
            height: `${bottomPadding}${bottomPaddingUnit}`,
            bottom:
              cssDisplay !== "block" ? `${bottomMargin}${bottomMarginUnit}` : 0,
            left: `${leftMargin}${leftMarginUnit}`,
            right: `${rightMargin}${rightMarginUnit}`,
          }}
        >
          {bottomPadding > 0 && (
            <VDimension size={bottomPadding} unit={bottomPaddingUnit} />
          )}
        </div>
        <div
          className="reveal-box-white-space__left-padding"
          style={{
            width: `${leftPadding}${leftPaddingUnit}`,
            left: `${leftMargin}${leftMarginUnit}`,
            top: cssDisplay !== "block" ? `${topMargin}${topMarginUnit}` : 0,
            bottom:
              cssDisplay !== "block" ? `${bottomMargin}${bottomMarginUnit}` : 0,
          }}
        >
          {leftPadding > 0 && (
            <HDimension size={leftPadding} unit={leftPaddingUnit} />
          )}
        </div>
        <div
          className="reveal-box-white-space__right-padding"
          style={{
            width: `${rightPadding}${rightPaddingUnit}`,
            right: `${rightMargin}${rightMarginUnit}`,
            top: cssDisplay !== "block" ? `${topMargin}${topMarginUnit}` : 0,
            bottom:
              cssDisplay !== "block" ? `${bottomMargin}${bottomMarginUnit}` : 0,
          }}
        >
          {rightPadding > 0 && (
            <HDimension size={rightPadding} unit={rightPaddingUnit} />
          )}
        </div>
      </div>
    </div>
  )
}

export default RevealBoxWhiteSpace
