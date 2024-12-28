import './App.css'
import GlowingHeader from './GlowingHeader'
import BriefInfo from './BriefInfo'
import WorkExperience from './WorkExperience'
import Projects from './Projects'
import { createContext, useContext, useState } from 'react'

function App() {

  return (
    <>
      <div className="grid grid-cols-1 px-16 place-items-center overflow-visible">
        <GlowingHeader headerTextArray={["hey, i'm dan", "welcome to my website"]}/>
        <BriefInfo/>
        <WorkExperience/>
        <Projects/>
        
        <div className='h-[3000px]'></div>
      </div>
    </>
  ) 
}

export default App

