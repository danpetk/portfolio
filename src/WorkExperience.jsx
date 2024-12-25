import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import dsLogo from "./assets/DSLogo.png"
import AnimatedHeader from './AnimatedHeader.jsx'

function WorkExperience() {
    
    return ( 
        <>    
            <AnimatedHeader headerText={"Work Experience"} />

            <div className=" text-white text-2xl leading-tight container overflow-visible px-20 font-jetbrains">
                <div className='w-[100%] overflow-visible border-neonheader bg-gray-900 grid grid-cols-3 grid-rows-2 rounded-lg '>
                    <div className='titleLine p-4 flex col-span-3'>
                        <div className='workImage'><img className='h-28 rounded-lg' src={dsLogo}></img></div>
                        <div className='pl-4 py-3 flex flex-col justify-around'>
                            <div className='text-4xl'>Dassault Systèmes</div>
                            <div className='text-2xl leading-10'>R&D Web Development Intern</div>
                        </div>
                    </div>
                    <div className='col-span-3'></div>
                </div>
            </div>
        </>
    )
}

export default WorkExperience

