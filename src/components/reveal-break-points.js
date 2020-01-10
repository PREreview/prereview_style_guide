import "./reveal-break-points.css"
import React, { useRef } from "react"
import { breakPoints, getBreakPointClasses } from "./break-points"

const RevealBreakPoints = () => {
  const myRef = useRef()
  const allBreakPoints = breakPoints
  // const activeBreakPoints = useBreakPoints(myRef, "reveal-break-points__break")
  //const breakPointClasses = getBreakPointClasses(breakPoints)

  return (
    <div className="reveal-break-points" ref={myRef}>
      {breakPoints.map((breakPoint, i) => (
        <div
          key={i}
          style={{
            width: `${breakPoint.maxWidth}px`,
          }}
          className={`reveal-break-points__break reveal-break-points__break${breakPoint.name}`}
        >
          <div className="reveal-break-points__break__label-box">
            <div className="reveal-break-points__break__label">
              {breakPoint.maxWidth}px
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RevealBreakPoints
