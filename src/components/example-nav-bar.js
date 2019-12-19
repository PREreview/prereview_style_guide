import "./example-nav-bar.css"
import React, { useRef } from "react"
import RevealBoxWhiteSpace from "./reveal-box-white-space"
import PrereviewLogo from "./prereview-logo"
import { useBreakPoints, getBreakPointClasses } from "./break-points"
import Rect, { useRect } from "@reach/rect"
import RevealBreakPoints from "./reveal-break-points"

const ExampleNavBar = ({ children, showBreakPoints }) => {
  const navBarRef = useRef()

  const breakPoints = useBreakPoints(navBarRef, "example-nav-bar")
  const breakPointClasses = getBreakPointClasses(breakPoints, "example-nav-bar")

  // const rect = useRect(navBarRef, true, rect => {
  //   console.log("rect onChange")
  // })

  return (
    <RevealBoxWhiteSpace className="example-nav-bar-container">
      <div className={`example-nav-bar ${breakPointClasses}`} ref={navBarRef}>
        <div className="example-nav-bar__logo">
          <PrereviewLogo />
        </div>
        <div className="example-nav-bar__right">{children}</div>

        <RevealBreakPoints />
      </div>
    </RevealBoxWhiteSpace>
  )
}

export default ExampleNavBar
