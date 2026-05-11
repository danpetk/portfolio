import GlowingHeader from './GlowingHeader'
import BriefInfo from './BriefInfo'
import WorkExperience from './WorkExperience'
import Projects from './Projects'
import ContactInfo from './ContactInfo'
import Education from './Education'

function App() {

  return (
    <>
      <div className="grid grid-cols-1 px-12 md:px-16 place-items-center overflow-visible min-w-[350px] mb-24">
        <GlowingHeader headerTextArray={["hello there", "welcome to my website"]}/>
        <BriefInfo/>
        <Education/>
        <WorkExperience/>
        <Projects/>
        <ContactInfo/>
        <div className='sm:h-[30px]'></div>
        <footer className='text-secondary'>nothing to see here :0</footer>
      </div>
    </>
  ) 
}

export default App

