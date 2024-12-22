import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

function BriefInfo() {
    


    useGSAP(() => {
        gsap.from('.topinfo', {opacity: 0, y: -15, duration: 0.6, delay: 3.3, ease: "power1.out"})
        gsap.from('.bottominfo', {opacity: 0, y: 15, duration: 0.6, delay: 3.4, ease: "power1.out"})
        gsap.from('.downArrow', {opacity: 0, y: -15, duration: .6, delay: 3.5, ease: "power1.out", onComplete: () =>{
            gsap.to('.downArrowa', {y: -10, duration: 2, delay: .2, ease: "expo.inOut", yoyo: true, repeat: -1 })
        }})
    })


    return (
        <>   
        <div className=" text-white text-3xl text-center leading-tight container mt-6 overflow-visible px-32 font-jetbrains">
            <div className='w-[100%] overflow-visible flex flex-col items-center'>
                <div className='topinfo'>My name is Daniel Petkoski. I'm a passionate computer science student at Michigan State University with a minor in math.</div><br></br>
                <div className='bottominfo'>You can contact me for my resume or scroll down for an overview!</div><br></br>
                <div className='downArrow w-0 h-0 border-solid border-l-transparent border-l-[1.9rem] border-r-transparent border-r-[1.9rem] border-t-[1.9rem] border-t-white'></div>
            </div>
        </div>
        </>
    )
}

export default BriefInfo

