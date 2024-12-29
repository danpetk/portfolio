import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

import AnimatedHeader from './AnimatedHeader.jsx'
import SkillItem from './SkillItem.jsx'
import deepFry from './assets/deepfry.jpg'

function Projects() {
    
    return ( 
        <>    
            <AnimatedHeader headerText={"Projects"} />
            
            <div className='grid grid-cols-2 container px-8 sm:px-20 gap-x-10 gap-y-10'>
               
               <div className=" text-white text-2xl leading-tight container overflow-visible  font-jetbrains">
                    <div className='w-[100%] overflow-visible bg-gray-900 rounded-lg p-4'>
                        <div className='titleLine flex flex-col justify-between'>
              
                            <div className='text-4xl'>Media Converter Discord Bot</div>
                            <div className='text-xl'>Jul 2023 - Jan 2024</div>
                            <img className= 'h-52 rounded-lg mt-2'src={deepFry}></img>
                    
                        </div>
                        <div className='skillsList pt-2'>
                            <SkillItem skillText={"Python"}/> 
                            <SkillItem skillText={"FFmpeg"}/>
                            <SkillItem skillText={"Discord.py API"}/>
                
                     
                        </div>
                        <div className='skillsList pt-4 text-2xl md:text-xl'>
                            This was the first large project I worked on individually.
                        </div>
                    </div>
                </div>
                <div className=" text-white text-2xl leading-tight container overflow-visible  font-jetbrains">
                    <div className='w-[100%] overflow-visible bg-gray-900 rounded-lg p-4'>
                        <div className='titleLine flex flex-col justify-between gap-2'>
              
                            <div className='text-4xl'>Media Converter Discord Bot</div>
                            <div className='text-xl'>Jul 2023 - Jan 2024</div>
                            <img className= 'h-52 rounded-lg'src={deepFry}></img>
                    
                        </div>
                        <div className='skillsList pt-2'>
                            <SkillItem skillText={"Python"}/> 
                            <SkillItem skillText={"FFmpeg"}/>
                            <SkillItem skillText={"Discord.py API"}/>
                            <SkillItem altColor={true} skillText={"Manufacturing Week"}/>
                     
                        </div>
                        <div className='skillsList pt-2 text-2xl md:text-xl'>
                            <ul className='list-disc pl-6 pt-2 grid grid-cols-1 gap-2'>
                                <li>I want to dedicate this text box to those who were irreversibly scarred by improper use of a chuck key during manufacturing week. May you rest and repair.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Projects

