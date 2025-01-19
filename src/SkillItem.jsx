
function SkillItem({skillText, altColor=false}) {
    
    return ( 
        <>  

        
            <label htmlFor="skill" className={`mr-2 ${altColor ?"bg-pink-950" :"bg-blue-950" } px-4 text-lg sh md:text-base rounded-full min-w-20 text-center inline-block `}>{skillText}</label>
           
        </>
    )
}

export default SkillItem

