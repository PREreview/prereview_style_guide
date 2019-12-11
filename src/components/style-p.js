import "./style-p.css"
import React from "react"

const StyleP = ({ variantName, className = "", children }) => {
  return (
    <p
      className={`style-p ${
        variantName ? "style-p--" + variantName : ""
      } ${className}`}
    >
      {children}
    </p>
  )
}

export default StyleP
