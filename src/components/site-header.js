import "./site-header.css"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import StyleHx from "./style-hx"
import PrereviewLogo from "./prereview-logo"

const SiteHeader = ({ siteTitle }) => (
  <header className="site-header">
    <div className="site-header__logo">
      <PrereviewLogo color="white" />
    </div>

    <StyleHx level={1} size={2} className="site-header__title">
      <Link to="/">{siteTitle}</Link>
    </StyleHx>
  </header>
)

SiteHeader.propTypes = {
  siteTitle: PropTypes.string,
}

SiteHeader.defaultProps = {
  siteTitle: ``,
}

export default SiteHeader
