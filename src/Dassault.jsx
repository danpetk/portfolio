
import SkillItem from './SkillItem.jsx'
import dsLogo from "./assets/DSLogo.png"


function Dassault() {
    
    return ( 
        <>  
            <div className=" text-white text-2xl leading-tight container overflow-visible px-8 sm:px-20  font-jetbrains">
                <div className='w-[100%] overflow-visible border-neonheader rounded-lg p-4 drop-shadow-glowBlue'>
                    <div className='titleLine flex'>
                        <img className='h-28 rounded-lg' src={dsLogo}></img>
                        <div className='pl-4 flex flex-col justify-around'>
                            <div className='text-4xl'>Dassault Systèmes</div>
                            <div className='text-xl leading-10'>R&D Web Development Intern</div>
                            <div className='text-xl'>May - Aug (2024/2025)</div>
                        </div>
                    </div>
                    <div className='skillsList pt-2'>
                        <SkillItem skillText={"JavaScript"}/> 
                        <SkillItem skillText={"HTML"}/>
                        <SkillItem skillText={"CSS"}/>
                        <SkillItem skillText={"PHP"}/>  
                        <SkillItem skillText={"SQL"}/>
                        <SkillItem skillText={"Apache"}/>
                        <SkillItem altColor={true} skillText={"Unit Testing"}/>
                        <SkillItem altColor={true} skillText={"Source Control"}/>
                        <SkillItem altColor={true} skillText={"Refactoring"}/>
                        <SkillItem altColor={true} skillText={"Teamwork"}/>

                    </div>
                    <div className='skillsList pt-2 text-1.5xl md:text-xl'>
                        <ul className='list-disc pl-6 pt-2 grid grid-cols-1 gap-2'>
                            <li>Developed internal 3D model library website using the XAMPP tech stack with users around the world</li>
                            <li>Leveraged JS, HTML, and CSS for frontend development alongside PHP to interface with a MariaDB backend </li>
                            <li>Migrated legacy codebase to use modern technologies; set up Apache server to host upgraded website</li>
                            <li>Created both UI and backend unit tests to ensure proper functionality of website</li>
                        </ul>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default Dassault

