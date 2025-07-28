import React from 'react'
import CarPng from "../../assets/car.png"
import buildingImage from "../../assets/building2.jpg"
import {FaArrowRight} from "react-icons/fa"
import Navbar from "../Navbars/Navbar"
import { motion } from "motion/react"

const bgImage = {
  backgroundImage: `url(${buildingImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}
const Hero = () => {
  return (
    <main style={bgImage} className="overflow-x-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-blue-800/90">
        <div className="container text-white ">
          {/* Navbar components here */}
          <Navbar/>
          {/* Hero Section here */}
          <section className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[800px]">
            {/* text content section */}
            <div className="space-y-8 mt-[100px] md:mt-[20px]">
              <motion.div 
                  initial={{ opacity: 0, y:-100}}
                  whileInView={{ opacity:1, y: 0}}
                  transition={{
                    type:"spring",
                    stiffness:"100",
                    damping:10,
                    delay:1,
                    duration: 0.4,
                  }}
                  className="space-y-8"
              >
               <h1                
                  className="text-5xl lg:text-7xl font-bold leading-tight uppercase ">
                    Honda <br />{""} <span className="text-transparent text-outline ">Sports EV</span> 
                </h1>

              <button 
                className="outline-btn flex justify-center items-center gap-4 group">
                  Explore
                <FaArrowRight
                className="group-hover:translate-x-2 transition"/>
              </button>

              </motion.div>
              
              
              {/* features section here */}
              <motion.div 
                 initial={{ opacity: 0, y: 100}}
                  whileInView={{ opacity: 1, y: 0}}
                  transition={{
                    type:"spring",
                    stiffness:"100",
                    damping:10,
                    delay:1.2,
                    duration: 0.4,
                  }}
                 className='bg-black/40 p-6 space-y-2 lg:max-w-[450px] !mt-[60px]'>
                  <h1 className="text-xl uppercase">
                    Vehicle features
                  </h1>
                <p className='w-100 text-xs leading-loose'>
                  The car features rear-hinged suicide doors. Yuki Terai is credited with the exterior design. The interior fits four adults, with the front passengers seated on a single bench seat. The dashboard is decorated in wood trim with a long digital screen as the instrument and infotainment panel
                </p>
              </motion.div>
           </div>
              {/* image section */}
              <div className="relative">
                <motion.img 
                 initial={{ opacity: 0, x: 200}}
                  whileInView={{ opacity:1, x: 0, scale:1.1}}
                  transition={{
                    duration: 1,
                  }}

                src={CarPng} 
                alt="car" 
                className="w-full relative z-30"/>

                {/* glowing circle */}
                <motion.div 
                initial={{ opacity: 0, y: 0, scale:0.5 }}
                  whileInView={{ opacity:1, y: 0, scale:1 }}
                  transition={{
                    type:"spring",
                    stiffness:"100",
                    damping:10,
                    delay:0.8,
                    duration: 0.8,
                  }}
                className="border-[20px] border-cyan-200 rounded-full h-[180px]
                 w-[180px] md:h-[330px] md:w-[330px] absolute top-0 left-1/2 shadow-[0_0_40px_10px_#d2e6ff,inset_0_0_40px_10px_#d2e6ff]" >
               
                </motion.div>
                {/* Bg text here */}
                <motion.div 
                initial={{ opacity: 0, x: -100}}
                  whileInView={{ opacity:1, x: 0}}
                  transition={{
                    type:"spring",
                    stiffness:"100",
                    damping:10,
                    delay:1.4,
                    duration: 0.8,
                  }}
                className="absolute -top-40 left-0 z-[1]">
                 <h1 className="text-[180px] font-bold text-cyan-200/10 leading-none">
                 {" "}
                 Sport
                 </h1>
                </motion.div>
              </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Hero