import "./prereview-logo.css"
import React from "react"
import resolvePath from "../utils/resolve-path"

const PrereviewLogo = ({ color = "normal" }) => (
  <div className={`prereview-logo prereview-logo--${color}`}>
    <div className="prereview-logo__logo-icon">
      {color === "white" && (
        <img src={resolvePath("/images/prereview_logo_icon_white.svg")} />
      )}
      {color === "normal" && (
        <img src={resolvePath("/images/prereview_logo_icon_colour.svg")} />
      )}
    </div>

    <div className="preveview-logo__logo-text">
      {color === "white" && (
        <img
          src={resolvePath("/images/prereview_logo_text_white.svg")}
          width="191"
        />
      )}
      {color === "normal" && (
        <img
          src={resolvePath("/images/prereview_logo_text_colour.svg")}
          width="191"
        />
      )}
    </div>
  </div>
)

export default PrereviewLogo
