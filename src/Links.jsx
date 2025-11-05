import EmailLogo from "./assets/emailpng.png"
import GithubLogo from "./assets/githubpng.png"
import LinkedInLogo from "./assets/linkedinpng.png"

import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { useRef } from 'react';
import { useTimeline } from './TimelineProvider';

import GlowingUnderlinedText from "./GlowingUnderlinedText"

function Links() {
    
    let linksParentRef = useRef(null)
    let timeline = useTimeline()

    useGSAP(() => {

        let links = linksParentRef.current.querySelectorAll('div')
        timeline.from(links, {x: -15, autoAlpha: 0, duration: .5, stagger: .1}, "<")
    })

    return ( 
        <>  
        
        <div className="contactLinks text-white text-1.5xl text-center leading-tight container overflow-visible px-16 md:px-32 font-jetbrains mt-8">
            <div ref={linksParentRef} className='w-[100%] overflow-visible flex flex-col items-start gap-7'>
                <div><img className="-translate-y-0.5 inline-block w-10 h-10 mr-4" src={EmailLogo}></img><span>danielpetkoski@outlook.com</span></div>
                <div><img className="-translate-y-0.5 inline-block w-10 mr-4" src={GithubLogo}></img><GlowingUnderlinedText anchor={true} action={"https://github.com/DanielPetk"} color={"cyan-400"}>GitHub</GlowingUnderlinedText></div>
                <div><img className="-translate-y-0.5 inline-block w-10 mr-4" src={LinkedInLogo}></img><GlowingUnderlinedText anchor={true} action={"https://www.linkedin.com/in/danielpetkoski/"} color={"cyan-400"}>LinkedIn</GlowingUnderlinedText></div>
            </div>
        </div>
    
        </>
    )
}

export default Links