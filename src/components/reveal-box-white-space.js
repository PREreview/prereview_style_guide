import "./reveal-box-white-space.css"
import React, { useState } from "react"
import IconButton from "./icon-button"
import { IoMdEyeOff, IoMdEye } from "react-icons/io"
import { HDimension, VDimension } from "./dimensions"

const RevealBoxWhiteSpace = ({
  padding,
  margin,
  unit = "px",
  children,
  defaultReveal = false,
}) => {
  let leftMargin = 0,
    rightMargin = 0,
    topMargin = 0,
    bottomMargin = 0

  if (margin.length === 1) {
    leftMargin = rightMargin = topMargin = bottomMargin = margin[0]
  } else if (margin.length === 2) {
    topMargin = bottomMargin = margin[0]
    leftMargin = rightMargin = margin[1]
  } else if (margin.length === 4) {
    ;[topMargin, rightMargin, bottomMargin, leftMargin] = margin
  }

  let leftPadding = 0,
    rightPadding = 0,
    topPadding = 0,
    bottomPadding = 0

  if (padding.length === 1) {
    leftPadding = rightPadding = topPadding = bottomPadding = padding[0]
  } else if (padding.length === 2) {
    topPadding = bottomPadding = padding[0]
    leftPadding = rightPadding = padding[1]
  } else if (padding.length === 4) {
    ;[topPadding, rightPadding, bottomPadding, leftPadding] = padding
  }

  const [isRevealing, setIsRevealing] = useState(defaultReveal)

  return (
    <div
      className={`reveal-box-white-space ${
        isRevealing
          ? "reveal-box-white-space--active"
          : "reveal-box-white-space--inactive"
      }`}
      style={{
        paddingLeft: `${leftMargin}${unit}`,
        paddingRight: `${rightMargin}${unit}`,
        paddingBottom: `${bottomMargin}${unit}`,
        paddingTop: `${topMargin}${unit}`,
      }}
      onClick={() => setIsRevealing(!isRevealing)}
    >
      <div className="reveal-box-white-space__button">
        <IconButton
          onClick={() => setIsRevealing(!isRevealing)}
          className="reveal-box-white-space__icon-button"
        >
          <IoMdEye className="reveal-box-white-space__button__icon" />
        </IconButton>
      </div>

      <div
        className="reveal-box-white-space__top-margin"
        style={{ height: `${topMargin}${unit}` }}
      >
        {topMargin > 0 && <VDimension size={topMargin} unit={unit} />}
      </div>
      <div
        className="reveal-box-white-space__bottom-margin"
        style={{ height: `${bottomMargin}${unit}` }}
      >
        {bottomMargin > 0 && <VDimension size={bottomMargin} unit={unit} />}
      </div>
      <div
        className="reveal-box-white-space__left-margin"
        style={{ width: `${leftMargin}${unit}` }}
      >
        {leftMargin > 0 && <HDimension size={leftMargin} unit={unit} />}
      </div>
      <div
        className="reveal-box-white-space__right-margin"
        style={{ width: `${rightMargin}${unit}` }}
      >
        {rightMargin > 0 && <HDimension size={rightMargin} unit={unit} />}
      </div>
      <div
        className="reveal-box-white-space__spacer"
        style={{
          paddingLeft: leftPadding,
          paddingRight: rightPadding,
          paddingTop: topPadding,
          paddingBottom: bottomPadding,
        }}
      >
        <div
          className="reveal-box-white-space__top-padding"
          style={{ height: `${topPadding}${unit}` }}
        />
        <div
          className="reveal-box-white-space__bottom-padding"
          style={{ height: `${bottomPadding}${unit}` }}
        />
        <div
          className="reveal-box-white-space__left-padding"
          style={{ width: `${leftPadding}${unit}` }}
        />
        <div
          className="reveal-box-white-space__right-padding"
          style={{ width: `${rightPadding}${unit}` }}
        />
        {children}
      </div>
    </div>
  )
}

export default RevealBoxWhiteSpace
