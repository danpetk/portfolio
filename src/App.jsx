import GlowingHeader from './GlowingHeader'
import BriefInfo from './BriefInfo'
import WorkExperience from './WorkExperience'
import Projects from './Projects'
import ContactInfo from './ContactInfo'
function App() {

  return (
    <>
      <div className="grid grid-cols-1 px-12 md:px-16 place-items-center overflow-visible min-w-[350px] mb-24">
        <GlowingHeader headerTextArray={["hey, i'm dan", "welcome to my website"]}/>
        <BriefInfo/>
        <WorkExperience/>
        <Projects/>
        <ContactInfo/>


        
        {/*<div className='h-[3000px]'></div>*/}
      </div>
    </>
  ) 
}

export default App

