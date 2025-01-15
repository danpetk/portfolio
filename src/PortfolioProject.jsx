
import SkillItem from './SkillItem.jsx'


function PortfolioProject() {
    
    return ( 
        <>  
                <div className=" text-white text-2xl leading-tight container overflow-visible font-jetbrains col-span-2 md:col-span-1">
                    <div className='w-[100%] overflow-visible rounded-lg p-4'>
                        <div className='titleLine flex flex-col justify-between'>
              
                            <div className='text-4xl'>Personal Website</div>
                            <div className='text-xl'>Nov 2024 - Jan 2025</div>
                            {/*<img className= 'h-40 rounded-lg mt-2 aspect-auto'src={deepFry}></img>*/}
                    
                        </div>
                        <div className='skillsList pt-2'>
                            <SkillItem skillText={"Vite + React"}/> 
                            <SkillItem skillText={"TailwindCSS"}/>   
                            <SkillItem skillText={"GSAP"}/>
                            
                            <SkillItem altColor={true} skillText={"Components & Hooks"}/>
                            <SkillItem altColor={true} skillText={"Responsive Design"}/>
                            <SkillItem altColor={true} skillText={"Animations"}/>
                        </div>
                        <div className='skillsList pt-4 text-1.5xl md:text-xl'>
                            This personal website is my first attempt at making a website from scratch. I used React's components and hooks to organize code and create reusable UI elements (like these projects). I used TailwindCSS because it makes styling quicker and faster, especially when designing for multiple screen sizes. I used GSAP to streamline animations.
                        </div>
                    </div>
                </div>
           
        </>
    )
}

export default PortfolioProject

