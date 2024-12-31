import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

function GlowingHeader({headerTextArray}) {

    
    useGSAP(() => {
        gsap.set(".typeeffect2 span", {opacity: 0})
       
        // const glowingHeaderTimeline = gsap.timeline()

        // glowingHeaderTimeline
        // .from('.typeeffect1 span', {
        //     opacity: 0, 
        //     duration: 0.0001, 
        //     delay: 0.75, 
        //     stagger: 0.05})
        // .to('.typeeffect2 span', {
        //     opacity: 1, 
        //     duration: 0.0001, 
        //     delay: 0.75, 
        //     stagger: 0.05})
        // .from('.blink', {
        //     opacity: 0, 
        //     delay: 0.3, 
        //     duration: 0.001, 
        //     yoyo: true, 
        //     repeat: -1, 
        //     repeatDelay: 0.63
        // });
            

        gsap.from('.typeeffect1 span', {
            opacity: 0, 
            duration: 0.0001, 
            delay: 0.75, 
            stagger: 0.05, 
            onComplete: () => {
                gsap.to('.typeeffect2 span', {
                    opacity: 1, 
                    duration: 0.0001, 
                    delay: 0.75, 
                    stagger: 0.05, 
                    onComplete: () => {
                        gsap.from('.blink', {
                            opacity: 0, 
                            delay: 0.3, 
                            duration: 0.001, 
                            yoyo: true, 
                            repeat: -1, 
                            repeatDelay: 0.63
                        });
                    }
                });
            }
        });
    });
    
    
    let lineNum = 0
    return ( 
        <>    
        <div className="font-argon text-neonheader text-6xl drop-shadow-glowGreen leading-tight container py-24 max-w-screen-2xl">
            <div className='container'>
                <div className='w-[100%]'>
                    
                    {headerTextArray.map((headerText,key) => {
                        lineNum++
                        return(
                            <div className="flex align-middle gap-4">                        
                                <span className={'typeeffect' + (lineNum-1)} ><span>&gt;</span></span>
                                <span className={'typeeffect'+ lineNum}>
                                    {headerText.split('').map((char,index) => { 
                                       
                                        if(index === headerText.length-1 && key === 1)
                                            return <span><span key={index}>{char}</span><span className="blink">_</span></span>
                                        else
                                            return <span key={index}>{char}</span>
                                    })}
                                </span>
                            </div>
                            
                            )  
                        })
                    } 
                </div>
            </div>
        </div>
        </>
    )
}

export default GlowingHeader

