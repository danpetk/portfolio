import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function GlowingHeader({headerText}) {

    
    useGSAP(() => {
        gsap.set('.headerTypeEffect span', {opacity: 0})
        gsap.from('.headerBracket', {
            opacity: 0,
            duration: .15,
            x: -15,
            scrollTrigger: {trigger: '.headerBracket', start: "center 80%"},
            onComplete: ()=>{
                gsap.to('.headerTypeEffect span', {
                    opacity: 1, 
                    duration: 0.0001, 
                    delay: 0.05, 
                    stagger: 0.03, 
                });
            }    
        })    
    });
    
    
    
    return ( 
        <>    
        <div className="font-argon text-cyan-400 drop-shadow-glowCyan text-4xl leading-tight container py-12 max-w-screen-2xl">
            <div className='container'>
                <div className='w-[100%] mt-10'>

                            <span className='headerBracket inline-block'>&gt;</span>
                            <span> </span>
                            <span className='headerTypeEffect'>
                                {headerText.split('').map((char,index) => {  
                                    return <span key={index}>{char}</span>
                                })}
                            </span>
                </div>
            </div>
        </div>
        </>
    )
}

export default GlowingHeader

