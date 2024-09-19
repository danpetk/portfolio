import { useRef } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import './App.css'

function App() {

  useGSAP(() => {
    gsap.from('.penis', {opacity: 0})
  });
  

  return (
    <>   
      <br></br>
      <br></br>
      <div className="font-argon font-extrabold text-green-500 text-5xl drop-shadow-glow content-center text-center penis" >What is up fans</div>
    </>
  )
}

export default App

