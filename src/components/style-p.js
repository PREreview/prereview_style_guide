import "./style-p.css"
import React from "react"

const StyleP = React.forwardRef(
  ({ variantName, className = "", children }, ref) => {
    return (
      <p
        ref={ref}
        className={`style-p ${
          variantName ? "style-p--" + variantName : ""
        } ${className}`}
      >
        {children}
      </p>
    )
  }
)

export default StyleP
