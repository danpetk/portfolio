import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { useRef } from 'react';
import { useTimeline } from './TimelineProvider';

import SkillItem from './SkillItem.jsx'


function ProjectEntry({previewText, title, tech, skills, content, link, gsapUp}) {

    
    const timeline = useTimeline()
    let mainRef = useRef(null)

    let animDirScale = gsapUp ? 1 : -1
    useGSAP(() => {
        timeline.from(mainRef.current, {y:15 * animDirScale, autoAlpha:0, duration: .45,}, "<.1")
    })

    return ( 
    <>  
    {/* [#0a0d11] */}
    <div ref={mainRef} className="bg-[#0c0f14] rounded-xl shadow-lg border border-[#1a1f26] overflow-hidden w-full max-w-4xl mx-auto">
        <div className="flex items-center gap-2 px-4 py-2 bg-[#10141a] border-b border-[#1a1f26]">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div> {/* hover:bg-[#ff7b73] transition-colors" */}
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div> {/* hover:bg-[#ffd05f] transition-colors */}
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div> {/* hover:bg-[#46d65b] transition-colors" */}
                
            </div>
            <div className="text-neutral-400 font-jetbrains text-sm ml-4 select-none">
                <span className="relative top-[1.5px]">{previewText}</span>
            </div>
            {link && (
                <div className="font-jetbrains text-sm ml-auto select-none">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-neonheader hover:text-[#00ff00] transition-colors duration-150 relative top-[1.5px]">REPOSITORY</a>
                </div>
            )}
        </div>

        <div className="p-4 text-gray-100 text-2xl leading-tight font-jetbrains overflow-visible">
            <div className="container overflow-visible">
            <div className="w-full overflow-visible rounded-lg">
                <div className="titleLine flex flex-col justify-between">
                <div className="text-4xl text-white">{title}</div>
                {/* <div className='text-xl'>Jul 2023 - Jan 2024</div> */}
                </div>

                <div className="skillsList pt-2">
                    {
                        tech.map((techUsed) => {
                            return <SkillItem skillText={techUsed} />
                        })
                    }

                    {
                        skills.map((skillUsed) => {
                            return <SkillItem skillText={skillUsed} altColor={true} />
                        })
                    }
                </div>

                <div className="pt-4 text-lg md:text-xl text-gray-300">
                    {content}
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default ProjectEntry;

