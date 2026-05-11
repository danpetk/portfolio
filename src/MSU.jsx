import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { useRef } from 'react';
import { useTimeline } from './TimelineProvider';
import SkillItem from './SkillItem.jsx'
import dsLogo from "./assets/DSLogo.png"
import msuLogo from "./assets/msu.png"



function MSU() {

    let mainContainer = useRef(null)
    let timeline = useTimeline()

    useGSAP(() => {

        timeline.from(mainContainer.current, {autoAlpha: 0, x: -15, duration: .5 }, "<")
    }, [timeline]);
    

    return ( 
        <>  
      <>
  <div ref={mainContainer} className="text-white text-2xl leading-tight container overflow-visible px-8 sm:px-20 font-jetbrains">
    <div className="w-full overflow-visible rounded-lg p-4 pb-3 bg-[#0c0f14] border border-[#1a1f26]">
      <div className="titleLine flex">
        <img className="h-28 rounded-lg" src={msuLogo} alt="Michigan State University Logo" />
        <div className="pl-4 flex flex-col justify-around">
          <div className="text-4xl">Michigan State University</div>
          <div className="text-xl leading-10">East Lansing, Michigan</div>
          <div className="text-xl">Aug 2023 - May 2026</div>
        </div>
      </div>

      <hr className="border-[#1a1f26] mt-4" />


      <div className="skillsList pt-4 text-1.5xl md:text-xl">
        <div className="text-2xl">Bachelor of Science in Computer Science, Minor in Mathematics</div>
        <ul className="list-disc pl-6 pt-2 grid grid-cols-1 gap-2">
            <li>4.0 GPA</li>
            <li>5x Dean's List</li>
            <li>Tau Beta Pi Engineering Honor Society</li>
        </ul>
      </div>
    </div>
  </div>
</>

           
        </>
    )
}

export default MSU


