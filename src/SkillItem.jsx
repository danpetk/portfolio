
function SkillItem({skillText, altColor=false}) {
    
    return ( 
        <>  

        
<label
  htmlFor="skill"
  className={`mr-2 ${
    altColor ? "bg-pink-950" : "bg-blue-950"
  } px-4 text-lg md:text-base rounded-full min-w-20 text-center inline-block leading-none`}
>
  <span className="relative top-[1px]">{skillText}</span>
</label>

           
        </>
    )
}

export default SkillItem

