import "./reveal-type-white-space.css"
import React, { useState } from "react"
import { IoMdEyeOff, IoMdEye } from "react-icons/io"
import IconButton from "./icon-button"

const RevealTypeWhiteSpace = ({
  children,
  lineHeight = 20,
  fontSize = 10,
  topMargin = 0,
  unit = "pt",
  defaultReveal = false,
}) => {
  const getBackground = () => {
    let rows = []
    for (let i = 0; i < 20; i++) {
      rows.push(
        <div
          key={i}
          className="reveal-type-white-space__bg-row"
          style={{ height: `${lineHeight}${unit}`, position: "relative" }}
        >
          <div
            className="reveal-type-white-space__bg-row__text-height"
            style={{
              height: `${fontSize}${unit}`,
              position: "relative",
              top: `${(lineHeight - fontSize) / 2}${unit}`,
              fontSize: `8pt`,
              lineHeight: `${fontSize}${unit}`,
            }}
          >
            {i === 0 && (
              <div
                className="reveal-type-white-space__bg-row__text-height-label"
                style={{ height: `${fontSize}${unit}` }}
              >
                {`${fontSize}${unit}`}
              </div>
            )}
          </div>
          <div className="reveal-type-white-space__bg-row__right-margin" />
        </div>
      )
    }
    return rows
  }

  const [isRevealing, setIsRevealing] = useState(defaultReveal)

  return (
    <div
      className={`reveal-type-white-space ${
        isRevealing
          ? "reveal-type-white-space--active"
          : "reveal-type-white-space--inactive"
      }`}
    >
      <div className="reveal-type-white-space__button">
        <IconButton
          onClick={() => setIsRevealing(!isRevealing)}
          className="reveal-type-white-space__icon-button"
        >
          <IoMdEye className="reveal-type-white-space__button__icon" />
        </IconButton>
      </div>

      <div
        className="reveal-type-white-space__type"
        onClick={() => setIsRevealing(!isRevealing)}
      >
        {children}

        <div className="reveal-type-white-space__leading">
          <div
            className="reveal-type-white-space__top-margin"
            style={{ height: `${topMargin}${unit}` }}
          >
            <span className="reveal-type-white-space__top-margin__label">
              {topMargin}
              {unit}
            </span>
          </div>
          {getBackground()}
        </div>
      </div>
    </div>
  )
}

export default RevealTypeWhiteSpace
