import { useRef } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import './App.css'

function App() {

  useGSAP(() => {
    
    gsap.from('.test span', {opacity: 0, duration: .001, delay: .4, stagger: .1})

    gsap.from('.blink', {opacity: 0, delay: .3, yoyo: true, repeat: -1 })

  });
  

  return (
    <>   
      <br></br>
      <br></br>
      <div className="font-argon text-green-500 text-8xl drop-shadow-glow content-center text-center test" >
        <span>T</span>
        <span>e</span>
        <span>s</span>
        <span>t</span>
        <span>i</span>  
        <span>n</span>
        <span>g</span>
        <span> </span> 
        <span>G</span>
        <span>l</span>
        <span>o</span>
        <span>w</span>
        <span className="blink">_</span>
      </div>
    </>
  )
}

export default App

