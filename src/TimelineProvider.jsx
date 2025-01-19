import React, { createContext, useContext, useRef } from "react"
import { gsap } from "gsap"

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const TimelineContext = createContext()


export const TimelineProvider = ({ children }) => {

  const timeline = useRef(gsap.timeline())

  return (
    <TimelineContext.Provider value={timeline.current}>
      {children}
    </TimelineContext.Provider>
  )
}

export const useTimeline = () => useContext(TimelineContext)