import GlowingHeader from './GlowingHeader'
import BriefInfo from './BriefInfo'
import WorkExperience from './WorkExperience'
import Projects from './Projects'
import { createContext, useContext, useState } from 'react'
import AnimatedHeader from './AnimatedHeader'
import ContactInfo from './ContactInfo'
function App() {

  return (
    <>
      <div className="grid grid-cols-1 px-16 place-items-center overflow-visible min-w-[350px]">
        <GlowingHeader headerTextArray={["testing testing", "welcome to my website"]}/>
        <BriefInfo/>
        <WorkExperience/>
        <Projects/>
        <AnimatedHeader headerText={'Contact Me'}/>
        <ContactInfo/>
        
        
        <div className='h-[3000px]'></div>
      </div>
    </>
  ) 
}

export default App

