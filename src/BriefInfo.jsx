import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import GlowingUnderlinedText from './GlowingUnderlinedText'

function BriefInfo() {

    const scrollToLinks = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        })
    }

    useGSAP(() => {

        const briefInfoTimeline = gsap.timeline()

        briefInfoTimeline
        .from('.topinfo', {autoAlpha: 0, y: -15, duration: 0.6, delay: 2.9, ease: "power1.out"})
        .from('.midinfo', {autoAlpha: 0, y: 15, duration: 0.6, ease: "power1.out"}, "<+=.1")
        .from('.bottominfo', {autoAlpha: 0, y: -15, duration: 0.6, ease: "power1.out"}, "<+=.1")
        .from('.downArrow', {autoAlpha: 0, y: 15, duration: .6,  ease: "power1.out"}, "<+=.1")        
        
        //
        //gsap.from('.topinfo', {opacity: 0, y: -15, duration: 0.6, delay: 3.3, ease: "power1.out"})
        //gsap.from('.bottominfo', {opacity: 0, y: 15, duration: 0.6, delay: 3.4, ease: "power1.out"})
        //gsap.from('.downArrow', {opacity: 0, y: -15, duration: .6, delay: 3.5, ease: "power1.out", onComplete: () =>{
        //    gsap.to('.downArrowa', {y: -10, duration: 2, delay: .2, ease: "expo.inOut", yoyo: true, repeat: -1 })
        //}})
    })


    return (
        <>   
        <div className=" text-white text-3xl text-center leading-snug container mt-6 overflow-visible px-16 md:px-32 font-jetbrains mb-6">
            <div className='w-[100%] overflow-visible flex flex-col items-center'>
                <div className='topinfo'>I'm Daniel Petkoski, a computer science student at Michigan State University with a minor in math.</div><br></br>
                <div className='midinfo'>I have experience with everything from low-level programming with C++ to math with Python to frontend development with JavaScript. As a passionate programmer, I'm always learning new technologies and expanding what I know. No matter what I'm working on, I strive to write good code.</div><br></br>
                <div className='bottominfo'>You can <GlowingUnderlinedText anchor={false} action={scrollToLinks} yellow={true}>contact me</GlowingUnderlinedText> for my resume or scroll down for an overview!</div><br></br>
                <div className='downArrow w-0 h-0 border-solid border-l-transparent border-l-[1.9rem] border-r-transparent border-r-[1.9rem] border-t-[1.9rem] border-t-white'></div>
            </div>
        </div>
        </>
    )
}

export default BriefInfo

