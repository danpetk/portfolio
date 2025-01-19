
import AnimatedHeader from "./AnimatedHeader"
import Links from "./Links"

import { TimelineProvider } from "./TimelineProvider"



function ContactInfo() {


    return ( 
        <>  
        <TimelineProvider>
            <AnimatedHeader headerText={'Contact Me'}/>
            <Links/>
        </TimelineProvider>
        </>
    )
}

export default ContactInfo