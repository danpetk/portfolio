import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function AnimatedHeader({headerText}) {

    let headerBracketRef = useRef(null);
    let headerTextRef = useRef(null);

    useGSAP(() => {

        let headerLetters
        if(headerTextRef.current){
            headerLetters = headerTextRef.current.querySelectorAll('span')
        }

        gsap.set(headerLetters, {opacity: 0})
        gsap.from(headerBracketRef.current, {
            opacity: 0,
            duration: .15,
            x: -15,
            scrollTrigger: {trigger: headerBracketRef.current, start: "center 80%"},
            onComplete: ()=>{
                gsap.to(headerLetters, {
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
        <div className="font-argon text-cyan-400 drop-shadow-glowCyan text-4xl leading-tight container py-10 max-w-screen-2xl">
            <div className='container'>
                <div className='w-[100%] mt-10'>

                            <span ref={headerBracketRef} className='headerBracket inline-block'>&gt;</span>
                            <span> </span>
                            <span ref={headerTextRef} className='headerTypeEffect'>
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

export default AnimatedHeader

