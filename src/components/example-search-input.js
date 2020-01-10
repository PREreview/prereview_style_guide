import "./example-search-input.css"
import React, { useRef } from "react"
import RevealBoxWhiteSpace from "./reveal-box-white-space"
import PrereviewLogo from "./prereview-logo"
import { useBreakPoints, getBreakPointClasses } from "./break-points"
import Rect, { useRect } from "@reach/rect"
import RevealBreakPoints from "./reveal-break-points"

const ExampleSearchInput = ({ children, size = "large" }) => {
  // const navBarRef = useRef()

  // const breakPoints = useBreakPoints(navBarRef, "example-search-input")
  // const breakPointClasses = getBreakPointClasses(breakPoints, "example-search-input")

  return (
    <RevealBoxWhiteSpace
      className={`example-search-input-container`}
      display="block"
    >
      <div className={`example-search-input  example-search-input--${size}`}>
        <input
          className="example-search-input__input"
          type="text"
          placeholder="Search by title, DOI, author, etc..."
        />
      </div>
    </RevealBoxWhiteSpace>
  )
}

export default ExampleSearchInput
