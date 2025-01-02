import GithubLogo from "./assets/githubsvg.svg"


function ContactInfo() {
    
    return ( 
        <>  

        
            <div className=" text-white text-2xl text-center leading-tight container overflow-visible px-16 md:px-32 font-jetbrains">
                <div className='w-[100%] overflow-visible flex flex-col items-start gap-8'>
                    <div className='opinfo'><img className="inline-block h-10" src={GithubLogo}></img><span>Email.</span></div>
                    <div className='opinfo'>Github.</div>
                    <div className='opinfo'>LinkedIn.</div>
                    
                </div>
            </div>
           
        </>
    )
}

export default ContactInfo
