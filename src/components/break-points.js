import React, { useState, useEffect } from "react"
import { useRect } from "@reach/rect"

export const breakPoints = [
  { minWidth: 0, maxWidth: 420, name: "--mobile" },
  { minWidth: 0, maxWidth: 640, name: "--small-tablet" },
  { minWidth: 0, maxWidth: 768, name: "--tablet" },
  { minWidth: 0, maxWidth: 1024, name: "--small-desktop" },
  { minWidth: 0, maxWidth: 1280, name: "--large-desktop" },
  { minWidth: 0, maxWidth: 1824, name: "--xlarge-desktop" },
  { minWidth: 0, maxWidth: 2560, name: "--xxlarge-desktop" },
]

export const useBreakPoints = (ref, baseClass = "break-point") => {
  //console.log("useBreakPoints", ref)

  const [activeBreakPoints, setActiveBreakPoints] = useState([])

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (ref.current) {
      setIsLoaded(true)
    }
  })

  const rect = useRect(ref, true, rect => {
    const matchingBreakPoints = breakPoints.filter(breakPoint => {
      return (
        rect.width >= breakPoint.minWidth && rect.width <= breakPoint.maxWidth
      )
    })
    const names = matchingBreakPoints.map(
      matchingBreakPoint => `${baseClass}${matchingBreakPoint.name}`
    )
    //console.log("change", classString)
    setActiveBreakPoints(matchingBreakPoints)
  })

  return activeBreakPoints
}

export const getBreakPointClasses = (activeBreakPoints, baseClass = "") => {
  const names = activeBreakPoints.map(
    activeBreakPoint => `${baseClass}${activeBreakPoint.name}`
  )
  return names.join(" ")
  //console.log("change", classString)
}
