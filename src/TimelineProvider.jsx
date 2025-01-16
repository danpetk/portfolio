import React, { createContext, useContext, useRef } from "react"
import { gsap } from "gsap"

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const TimelineContext = createContext()


export const TimelineProvider = ({ children }) => {

  const scrollRef = useRef(null);

  const timeline = useRef(gsap.timeline({scrollTrigger: {trigger: scrollRef.current, start: "center 80%"}}))

  return (
    <TimelineContext.Provider ref={scrollRef} value={timeline.current}>
      {children}
    </TimelineContext.Provider>
  )
}

export const useTimeline = () => useContext(TimelineContext)