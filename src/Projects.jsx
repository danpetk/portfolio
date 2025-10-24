import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

import AnimatedHeader from './AnimatedHeader.jsx'

import ProjectEntry from './ProjectEntry.jsx'
import ProjectPlaceholder from './ProjectPlaceholder.jsx'

import {TimelineProvider} from './TimelineProvider.jsx'


function Projects() {
    
    return ( 
        <>    
            
            <TimelineProvider>
                <AnimatedHeader headerText={"Projects"} />
                <div className='grid grid-cols-2 container px-8 sm:px-20 gap-x-10 gap-y-10'>

                    <ProjectEntry
                        previewText={"Chat"}
                        title={"Terminal Chat"}
                        tech={["C++", "CMake"]}
                        skills={["Socket Programming", "Multithreading"]}
                        content={"This personal website is my first attempt at making a website from scratch. I used React's components and hooks to organize code and create reusable UI elements (like these projects). I used TailwindCSS because it makes styling quicker and faster, especially when designing for multiple screen sizes. I used GSAP to streamline animations."}
                        link={null}
                        gsapUp={false}
                    />
                    
                    <ProjectEntry
                        previewText={"Website"}
                        title={"Personal Website"}
                        tech={["Vite + React", "TailwindCSS", "GSAP"]}
                        skills={["Components & Hooks", "Responsive Design", "Animations"]}
                        content={"This personal website is my first attempt at making a website from scratch. I used React's components and hooks to organize code and create reusable UI elements (like these projects). I used TailwindCSS because it makes styling quicker and faster, especially when designing for multiple screen sizes. I used GSAP to streamline animations."}
                        link={null}
                        gsapUp={true}
                    />
                                        
                    <ProjectEntry
                        previewText={"Discord Bot"}
                        title={"Media Conversion Discord Bot"}
                        tech={["Python", "FFmpeg", "Discord.py"]}
                        skills={["Async Code", "Regular exp."]}
                        content={"I Developed a Discord bot that modifies media to a user's liking. When provided with an image/video and a list of instructions, the bot downloads the video, parses the instructions using regular expressions, and then uses FFmpeg to apply the necessary conversions before sending it back to the user."}
                        link={null}
                        gsapUp={true}
                    />

                    <ProjectPlaceholder gsapUp={false}/>

                </div>
            </TimelineProvider>
        </>
    )
}

export default Projects

