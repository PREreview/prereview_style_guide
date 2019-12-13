import "./site-nav.css"
import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const SiteNav = () => {
  return (
    <nav className="site-nav">
      <ul>
        <li>
          <Link to="/typography/">Typography</Link>
        </li>
        <li>
          <ul>
            <li>
              <Link to="/headers/">Headers</Link>
            </li>
            <li>
              <Link to="/text/">Body Text</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/white-space/">White Space</Link>
        </li>
      </ul>
    </nav>
  )
}

export default SiteNav
