import "./style-hx.css"
import React from "react"

/* the semantic level and visual size can be set independantly */

const StyleHx = ({ level = 1, size, className = "", children }) => {
  const El = `h${level}`
  return (
    <El className={`style-h${size ? size : level} ${className}`}>{children}</El>
  )
}

export default StyleHx
