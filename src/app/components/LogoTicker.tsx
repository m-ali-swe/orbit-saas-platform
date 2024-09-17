"use client"
import React from 'react'

import acme from "@/assets/logo-acme.png"
import quantum from "@/assets/logo-quantum.png"
import echo from "@/assets/logo-echo.png"
import celestial from "@/assets/logo-celestial.png"
import pulse from "@/assets/logo-pulse.png"
import apex from "@/assets/logo-apex.png"
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function LogoTicker() {
  return (
    <div className='py-10 mx-auto px-4 sm:px-10 lg:px-16  overflow-x-hidden flex justify-start [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>

    <motion.div 
    initial={{
      translateX:"-50%"
    }}
    animate={{
      translateX:"0%",
    }}
    transition={{
      repeat:Infinity,
      ease:"linear",
      duration:15
    }}
     className='flex-shrink-0 flex-none b-gray-400 flex  justify-evenly '>
        {[acme,apex,quantum,echo,celestial,pulse,acme,apex,quantum,echo,celestial,pulse].map((val,idx)=>{
          return (<Image src={val} alt="logo" className='w-24 h-auto mx-12' key={idx}/>)
        })}

      
    </motion.div>
        </div>
  )
}
