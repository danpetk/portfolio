
import deepFry from './assets/deepfry.png'
import SkillItem from './SkillItem.jsx'


function DiscordBotProject() {
    
    return ( 
        <>  
                <div className=" text-white text-2xl leading-tight container overflow-visible  font-jetbrains col-span-2 md:col-span-1  ">
                    <div className='w-[100%] overflow-visible bg-gray-900 rounded-lg p-4 '>
                        <div className='titleLine flex flex-col justify-between'>
              
                            <div className='text-4xl'>Media Converter Discord Bot</div>
                            <div className='text-xl'>Jul 2023 - Jan 2024</div>
                            {/*<img className= 'h-40 w-[100%] rounded-lg mt-2'src={deepFry}></img>*/}
                    
                        </div>
                        <div className='skillsList pt-2'>
                            <SkillItem skillText={"Python"}/> 
                            <SkillItem skillText={"FFmpeg"}/>
                            <SkillItem skillText={"Discord.py"}/>
                            <SkillItem altColor={true} skillText={"Async Code"}/>
                            <SkillItem altColor={true} skillText={"Regular Exp."}/>
                     
                        </div>
                        <div className='skillsList pt-4 text-2xl md:text-xl'>
                            I Developed a Discord bot that modifies media to a user's liking. When provided with an image/video and a list of instructions, the bot downloads the video, parses the instructions using regular expressions, and then uses FFmpeg to apply the necessary conversions before sending it back to the user. 
                        </div>
                    </div>
                </div>
           
        </>
    )
}

export default DiscordBotProject

