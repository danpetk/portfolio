import './App.css'
import GlowingHeader from './GlowingHeader'
import BriefInfo from './BriefInfo'
import WorkExperience from './WorkExperience'
import { createContext, useContext, useState } from 'react'

function App() {

  return (
    <>
      <div className="grid grid-cols-1 px-16 place-items-center overflow-visible">
        <GlowingHeader headerTextArray={["testing test", "testing testing test"]}/>
        <BriefInfo/>
        <WorkExperience/>
        
        
        <div className='h-[3000px]'></div>
      </div>
    </>
  ) 
}

export default App

