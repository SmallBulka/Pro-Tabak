'use client'
import Winston from "../assets/Winston";
import Donskoy from "../assets/Donskoy";
import Kent from "../assets/Kent";
// import Camel from "../assets/Reynolds";
import Don from "../assets/Don";
import Can from "../assets/Can";
import Сhesterfield from "../assets/Сhesterfield";
import {motion} from "framer-motion"

function LogoTicker() {
  return (
    <div className="py-8 md:py-12">
        <div className="coitainer">
            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            
            <motion.div 
            className="flex gap-14 flex-none pr-14"
            animate={{
                translateX: '-50%',
            }}
            transition={{
                duration: 70,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
            }}
            >
               
                <Winston />
                <Donskoy/>
                <Kent/>
                
                <Don/>
                <Can />
                <Сhesterfield />

                <Winston />
                <Donskoy/>
                <Kent/>
                
                <Don/>
                <Can />
                <Сhesterfield />
            </motion.div>
            </div>
        </div>
    </div>
  )
}

export default LogoTicker