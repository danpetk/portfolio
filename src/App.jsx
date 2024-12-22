import './App.css'
import GlowingHeader from './GlowingHeader'
import BriefInfo from './BriefInfo'
import AnimatedHeader from './AnimatedHeader'

function App() {

  return (
    <>
      <div className="grid grid-cols-1 px-16 place-items-center overflow-visible">
        <GlowingHeader headerTextArray={["testing test", "testing testing test"]}/>
        <BriefInfo/>
        <AnimatedHeader headerText={"Work Experience"}/>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> testing
        
      </div>
    </>
  ) 
}

export default App

