import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import AnimatedHeader from './AnimatedHeader.jsx'
import {TimelineProvider} from './TimelineProvider.jsx'
import MSU from './MSU.jsx'

function Education() {
    
    return ( 
        <>    

        
        <TimelineProvider>
            <AnimatedHeader headerText={"Education"} />
            <MSU />
        </TimelineProvider>
        </>
    )
}

export default Education

