import EmailLogo from "./assets/emailsvg.svg"
import GithubLogo from "./assets/githubsvg.svg"
import LinkedInLogo from "./assets/linkedinsvg.svg"
import AnimatedHeader from "./AnimatedHeader"



function ContactInfo() {
    
    return ( 
        <>  
            <AnimatedHeader headerText={'Contact Me'}/>
        
            <div className=" text-white text-1.5xl text-center leading-tight container overflow-visible px-16 md:px-32 font-jetbrains">
                <div className='w-[100%] overflow-visible flex flex-col items-start gap-5'>
                    <div><img className="-translate-y-0.5 inline-block h-8 mr-4" src={EmailLogo}></img><span>Email: danielpetkoski@outlook.com</span></div>
                    <div><img className="-translate-y-0.5 inline-block h-10 mr-4" src={GithubLogo}></img>Github: <a className='underline text-cyan-400' href="https://github.com/DanielPetk">https://github.com/DanielPetk</a></div>
                    <div><img className="-translate-y-0.5 inline-block h-10 mr-4" src={LinkedInLogo}></img>LinkedIn: <a className="underline text-cyan-400" href="https://www.linkedin.com/in/danielpetkoski/">https://www.linkedin.com/in/danielpetkoski/</a></div>
                </div>
            </div>
           
        </>
    )
}

export default ContactInfo