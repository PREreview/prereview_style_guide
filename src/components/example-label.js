import "./example-label.css"
import React from "react"
import PropTypes from "prop-types"
import StyleHx from "./style-hx"

const ExampleLabel = ({ title, subtitle }) => {
  return (
    <div className="example-label">
      <StyleHx level={5}>{title}</StyleHx>
      <span className="example-label__subtitle"> {subtitle}</span>
    </div>
  )
}

export default ExampleLabel
