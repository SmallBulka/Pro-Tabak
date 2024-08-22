'use client'
import Winston from "../assets/Winston";
import Donskoy from "../assets/Donskoy";
import Kent from "../assets/Kent";
import Pepe from "../assets/Pepe";
import Don from "../assets/Don";
import Can from "../assets/Can";
import Chapman from "../assets/Chapman";
import Сhesterfield from "../assets/Сhesterfield";
import {motion} from "framer-motion"

function LogoTicker() {
  return (
    <div className=" md:pt-12">
        <div className="coitainer">
            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            
            <motion.div 
            className="flex gap-14 flex-none pr-14"
            animate={{
                translateX: '-50%',
            }}
            transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
            }}
            >
               
               <Winston />
               <Chapman/>
                <Pepe/>
                <Kent/>
                <Donskoy/>
                <Don/>
                <Can />
                <Сhesterfield />
                

                <Winston />
               <Chapman/>
                <Pepe/>
                <Kent/>
                <Donskoy/>
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