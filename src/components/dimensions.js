import "./dimensions.css"
import React from "react"

const HDimension = ({ size, unit }) => {
  return (
    <div className="h-dimension" title={`${size}${unit}`}>
      <div className="h-dimension__size">
        {" "}
        <span className="h-dimension__size__value">{size}</span>
        <span className="h-dimension__size__unit">{unit}</span>
      </div>
      <div className="h-dimension__line">
        <div className="h-dimension__left-end" />
        <div className="h-dimension__left-line" />
        <div className="h-dimension__right-line" />
        <div className="h-dimension__right-end" />
      </div>
    </div>
  )
}

const VDimension = ({ size, unit }) => {
  return (
    <div className="v-dimension" title={`${size}${unit}`}>
      <div className="v-dimension__size">
        <span className="v-dimension__size__value">{size}</span>
        <span className="v-dimension__size__unit">{unit}</span>
      </div>
      <div className="v-dimension__line">
        <div className="v-dimension__top-end" />
        <div className="v-dimension__top-line" />

        <div className="v-dimension__bottom-line" />
        <div className="v-dimension__bottom-end" />
      </div>
    </div>
  )
}

export { HDimension, VDimension }
