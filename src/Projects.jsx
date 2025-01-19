import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

import AnimatedHeader from './AnimatedHeader.jsx'
import DiscordBotProject from './DiscordBotProject.jsx'
import PortfolioProject from './PortfolioProject.jsx'
import {TimelineProvider} from './TimelineProvider.jsx'


function Projects() {
    
    return ( 
        <>    
            
            <TimelineProvider>
                <AnimatedHeader headerText={"Projects"} />
                <div className='grid grid-cols-2 container px-8 sm:px-20 gap-x-10 gap-y-10 drop-shadow-glowBlue'>
                    <DiscordBotProject gsapUp={false}/>
                    <PortfolioProject gsapUp={true}/>
                </div>
            </TimelineProvider>
        </>
    )
}

export default Projects

