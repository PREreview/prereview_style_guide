import "./example-nav-bar.css"
import React, { useRef } from "react"
import { MdMenu } from "react-icons/md"
import RevealBoxWhiteSpace from "./reveal-box-white-space"
import PrereviewLogo from "./prereview-logo"
import { useBreakPoints, getBreakPointClasses } from "./break-points"
import Rect, { useRect } from "@reach/rect"
import RevealBreakPoints from "./reveal-break-points"
import IconButton from "./icon-button"

const ExampleNavBar = ({
  children,
  showBreakPoints = false,
  mobileMenu = false,
  onMobileMenuClick = () => {},
  className = "",
  adaptiveLogo = true,
}) => {
  const navBarRef = useRef()

  const breakPoints = useBreakPoints(navBarRef, "example-nav-bar")
  const breakPointClasses = getBreakPointClasses(breakPoints, "example-nav-bar")

  // const rect = useRect(navBarRef, true, rect => {
  //   console.log("rect onChange")
  // })

  return (
    <RevealBoxWhiteSpace className="example-nav-bar-container">
      <div
        className={`example-nav-bar ${className} ${
          adaptiveLogo ? breakPointClasses : ""
        }`}
        ref={navBarRef}
      >
        {mobileMenu && (
          <div className="example-nav-bar__mobile-menu">
            <IconButton
              className="example-nav-bar__mobile-menu__button"
              onClick={onMobileMenuClick}
            >
              <MdMenu />
            </IconButton>
          </div>
        )}
        <div className="example-nav-bar__logo">
          <PrereviewLogo />
        </div>
        <div className="example-nav-bar__right">{children}</div>

        {showBreakPoints && <RevealBreakPoints />}
      </div>
    </RevealBoxWhiteSpace>
  )
}

export default ExampleNavBar
