import "./prereview-logo.css"
import React from "react"
import resolvePath from "../utils/resolve-path"

const PrereviewLogo = ({ color = "white" }) => (
  <div className={`prereview-logo prereview-logo--${color}`}>
    <div className="prereview-logo__logo-icon">
      {color === "white" && (
        <img src={resolvePath("/images/prereview_logo_icon_white.svg")} />
      )}
    </div>
    <div className="preveview-logo__logo-text">
      {color === "white" && (
        <img src={resolvePath("/images/prereview_logo_text_white.svg")} />
      )}
    </div>
  </div>
)

export default PrereviewLogo
