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
                <div className='grid grid-cols-1 container px-8 sm:grid-cols-2 sm:px-20 gap-x-10 gap-y-10'>

                    <ProjectEntry
                        previewText={"Compiler"}
                        title={"Crescent Compiler"}
                        tech={["Rust", "Cargo"]}
                        skills={["Grammars","Compiler Design & Phases"]}
                        content={"Full compiler pipeline for a custom programming language in Rust, from source to output. I wrote a lexer and recursive descent parser to turn source code into a structured AST that represents the program's logic, and then validated that tree with semantic analysis. The compiler generates x86-64 (System V) assembly, allowing compiled programs to be assembled into binaries executable on compatible machines."}
                        link={"https://github.com/danpetk/crescent-lang"}
                        gsapUp={false}
                    />

                    <ProjectEntry
                        previewText={"Chat"}
                        title={"Terminal Chat"}
                        tech={["C++", "CMake"]}
                        skills={["Socket Programming", "Multithreading"]}
                        content={"The server and client of a cross-platform terminal-based group chat application. I used the POSIX sockets API for Linux and the Winsock API for Windows to establish communication between clients and the server with TCP. I Handled multiple open TCP connections with blocking I/O simultaneously using C++'s native multithreading library and used FTXUI to render UI directly in the terminal."}
                        link={"https://github.com/danpetk/terminal-chat"}
                        gsapUp={true}
                    />
                    
                    <ProjectEntry
                        previewText={"Website"}
                        title={"Personal Website"}
                        tech={["Vite + React", "TailwindCSS", "GSAP"]}
                        skills={["Components & Hooks", "Responsive Design", "Animations"]}
                        content={"This personal website is my first attempt at making a website from scratch. I used React's components and hooks to organize code and create reusable UI elements (like these project elements). I used TailwindCSS because it makes styling quicker and faster, especially when designing for multiple screen sizes. I used GSAP to streamline animations."}
                        link={null}
                        gsapUp={true}
                    />
                                        
                    <ProjectEntry
                        previewText={"Discord Bot"}
                        title={"Media Conversion Discord Bot"}
                        tech={["Python", "FFmpeg", "Discord.py"]}
                        skills={["Async Code", "Regular exp."]}
                        content={"This was my first big programming project. I wrote a Discord bot that modifies media to a user's liking. When provided with an image/video and a list of instructions, the bot downloads the video, parses the instructions using regular expressions, and then uses FFmpeg to apply the necessary conversions before sending it back to the user."}
                        link={null}
                        gsapUp={false}
                    />


                </div>
            </TimelineProvider>
        </>
    )
}

export default Projects

