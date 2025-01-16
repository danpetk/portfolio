import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { useTimeline } from './TimelineProvider';
// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function AnimatedHeader({headerText}) {

    let headerBracketRef = useRef(null);
    let headerTextRef = useRef(null);
    const timeline = useTimeline();



    useGSAP(() => {

        let headerLetters
        if(headerTextRef.current){
            headerLetters = headerTextRef.current.querySelectorAll('span')
        }

        gsap.set(headerLetters, {opacity: 0})
        gsap.set(headerBracketRef.current, {opacity: 0, x: -15})

        // Create trigger point for section animation
        ScrollTrigger.create({
            animation: timeline,
            trigger: headerBracketRef.current,
            start: "center 80%"
        })
            
        timeline.to(headerBracketRef.current, {
            opacity: 1,
            duration: .2,
            x: 15,                 
        }).to(headerLetters, {
            opacity: 1, 
            duration: 0.0001, 
            delay: 0.05, 
            stagger: 0.03, 
        });    
        
    }, [timeline]);
    
    
    
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

