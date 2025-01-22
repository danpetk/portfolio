
function GlowingUnderlinedText({children, anchor, action, yellow=false}) {
    
    if(anchor){
        if(yellow){
            return ( 
                <>  
                    <a className={`relative inline-block text-yellow-400 group`} href={action}><span className="drop-shadow-glowYellow">{children}</span>
                        <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100 rounded-lg`}></span>
                    </a> 
                </>
            )            
        }
        else{
            return ( 
                <>  
                    <a className={`relative inline-block text-sky-500 group`} href={action}>{children}
                        <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-sky-500 scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100 rounded-lg`}></span>
                    </a> 
                </>
            )   
        }
    
    }
    else{
        if(yellow){
            return ( 
                <>  
                    <span className={`relative inline-block cursor-pointer text-yellow-400 group`} onClick={action}><span className="drop-shadow-glowYellow">{children}</span>
                        <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100 rounded-lg`}></span>
                    </span> 
                </>
            )
        }
        else{
            return ( 
                <>  
                    <span className={`relative inline-block cursor-pointer text-cyan-400 group`} onClick={action}>{children}
                        <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-cyan-400 scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100 rounded-lg`}></span>
                    </span> 
                </>
            )
        }
        
    }
}

export default GlowingUnderlinedText

