import "./button.css"
import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

export default function Button({
  children,
  className = "",
  pill = false,
  primary = false,
  onMouseUp = () => {},
  element = "button",
  isWaiting = false,
  isFocused = false,
  ...buttonProps
}) {
  const El = element
  return (
    <El
      className={classNames("button", className, {
        "button--pill": pill,
        "button--primary": primary,
        "button--waiting": isWaiting,
        "button--focused": isFocused,
      })}
      {...buttonProps}
      onMouseUp={e => {
        /* having a focus style forces button to catch a sticky focus appearance.
           Blur onMouseUp to release that focus appearance for mouse click only. */
        e.currentTarget.blur()
        onMouseUp(e)
      }}
    >
      <span className="button__contents">
        {children}
        <div className="button__heartbeat" />
      </span>
    </El>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  pill: PropTypes.bool,
  primary: PropTypes.bool,
  onMouseUp: PropTypes.func,
  element: PropTypes.string,
  isWaiting: PropTypes.bool,
}
