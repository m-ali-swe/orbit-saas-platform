"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import cogImage from "@/assets/cog.png"
import cylinder from "@/assets/cylinder.png"
import noodle from "@/assets/noodle.png"
import { ArrowRight } from 'lucide-react'
import { motion,useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const heroref = useRef(null)
  const {scrollYProgress}=useScroll({
    target:heroref,
    offset:["start end","end start"]
  })
  const translateY=useTransform(scrollYProgress,[0,1],[50,-150])
  
  // useMotionValueEvent(translateY,"change",(latest_val)=>{console.log(latest_val)})
  
  
  return (
    <div ref={heroref} className='pt-12 h-[800px] sm:h-auto justify-between overflow-y-hidden sm:pt-20 overflow-x-hidden bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] sm:flex flex-col sm:flex-row '>
      <div className='flex  z-0 pt-6  px-8 sm:px-10 flex-col gap-5 sm:w-[500px] flex-shrink-0'>
        <span className='border border-gray-400 px-3 py-1 rounded-md w-max text-xs'>Version 2.0 is here</span>
        <h1 className='font-bold text-4xl sm:text-6xl bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text'>Pathway to productivity</h1>
        <p className='text-xl text-[#010D3E] font-medium'>Celebrate the joy of accomplishment with an app designed to track your progress, otivate your efforts, and celebrate your success.</p>
        
        <div className='flex gap-5 items-center'>
            <button className='w-28 h-8 bg-gray-800 text-gray-100 rounded-md '>Get for free</button>
            <button className='w-32 text-center justify-center h-8 bg-white rounded-md flex items-center'>Learn more <ArrowRight className='size-4'/> </button>
        </div>
      
      </div>

      <div className='mt-5 lg:pl-32 relative w-[90%] flex-shrink-0 lg:w-[1000px] lg:justify-start flex  sm:h-[648px] md:h-[600px]sm:mt-0 bg-gray-00 '>
        <motion.div 
        animate={{
          translateY:[-30,30]
        }}
        transition={{
          repeat:Infinity,
          repeatType:"mirror",
          duration:3,
          ease:"easeInOut"

        }}
        className='relative'
        >
        <Image className='md:h-auto md:w-auto lg:-translate-x-10 sm:h-[80%] sm:w-[80%] lg:h-[90%] md:translate-x-0 sm:-translate-x-24 ' alt="Cog" src={cogImage} />
        </motion.div>

        <motion.div
        style={{
          translateY:translateY,
          rotate:30

        }}
        className='absolute z-10 hidden md:block top-0 -left-20 '>
        <Image className=' ' alt='cylinder' width={220} height={220} src={cylinder} />
        </motion.div>

        <motion.div
        style={{
          translateY:translateY,
          rotate:30
        }}
        className='absolute hidden md:block bottom-0 left-[550px]'
        >
        <Image className='' alt='noodle' width={220} height={220} src={noodle} />
        </motion.div>

      </div>


    </div>
  )
}

