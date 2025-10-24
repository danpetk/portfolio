import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import AnimatedHeader from './AnimatedHeader.jsx'
import Dassault from './Dassault.jsx'
import {TimelineProvider} from './TimelineProvider.jsx'
function WorkExperience() {
    
    return ( 
        <>    

        
        <TimelineProvider>
            <AnimatedHeader headerText={"Work Experience"} />
            <Dassault />
        </TimelineProvider>
        </>
    )
}

export default WorkExperience

