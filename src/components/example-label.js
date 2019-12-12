import "./example-label.css"
import React from "react"
import PropTypes from "prop-types"
import StyleHx from "./style-hx"

const ExampleLabel = ({ title, subtitle }) => {
  return (
    <div className="example-label">
      <StyleHx level={5}>{title}</StyleHx>
      <div className="example-label__subtitle"> {subtitle}</div>
    </div>
  )
}

export default ExampleLabel
