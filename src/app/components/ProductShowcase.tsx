"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import product from "@/assets/product-image.png"
import pyramid from "@/assets/pyramid.png"
import tube from "@/assets/tube.png"
import { motion, useScroll, useTransform } from 'framer-motion'


export default function ProductShowcase() {
  
  const showcase = useRef(null)
  const {scrollYProgress}=useScroll({
    target:showcase,
    offset:["start end","end start"]
  })
  const translateY=useTransform(scrollYProgress,[0,1],[150,-150])


  return (
    <div ref={showcase} className='my-10 pb-10 bg-gradient-to-b overflow-x-hidden px-8 from-white to-[#D2DCFF]'>
      <div className='text-center flex flex-col items-center gap-3'>
        <h6 className='border-2 py-1 text-xs w-max px-2 border-gray-800 rounded font-semibold'>Boost your productivity</h6>
          <h1 className='bg-gradient-to-b py-2 text-3xl sm:text-5xl font-bold from-black to-[#001E80] text-transparent bg-clip-text'>A more effecctive way to track progress</h1>
          <p className='sm:max-w-[540px]'>Effortlessly turn your ideas into a fully functional, responsive, Saas website in just minutes with this website. </p>
      </div>

      <div className='relative'>
        <Image alt='product' src={product} className='mt-10' />
        <motion.div 
        className='absolute hidden sm:inline -top-28 -right-28'
        style={{
          translateY:translateY
        }}>          
        <Image alt='pyramid' src={pyramid} width={262} height={262} className=''  />
        </motion.div>
          
        <motion.div 
        className='absolute hidden sm:inline top-24 md:top-60 -left-36'
        style={{
          translateY:translateY
        }}>          
        <Image alt='tube' src={tube} width={248} height={248} className=''  />
        </motion.div>
      </div>


    </div>
  )
}
