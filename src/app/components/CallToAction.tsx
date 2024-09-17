"use client"
import React, { useRef } from 'react'
import star from "@/assets/star.png"
import spring from "@/assets/spring.png"
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function CallToAction() {
  const first = useRef(null)
  const {scrollYProgress}=useScroll({
    target:first,
    offset:["start end","end start"]
  })
  const translateY=useTransform(scrollYProgress,[0,1],[150,-150])

  return (      
      <div ref={first} className='flex lg:mt-52 mt-16 sm:mt-10 sm:h-[400px] h-[300px] lg:h-[360px] relative px-8 flex-col gap-5 items-center bg-gradient-to-b from-white to-[#D2DCFF] '>
        
        <h2 className='sm:text-5xl text-3xl font-bold text-center'>Sign up for free today</h2>
        <p className='text-center w-full md:w-[60%] lg:w-[50%] '>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>

        <div className='flex gap-3'>
          
          <button className='bg-gray-800 text-white px-4 py-1 rounded'>Get for free</button>
          
          <button  className='flex gap-1 items-center bg-gray-100 text-black px-4 py-1 rounded'>
            <span className='text-center'>Learn more</span>
          <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='size-4 '>
<path d="M16.0306 10.5306L11.5306 15.0306C11.3897 15.1715 11.1986 15.2507 10.9994 15.2507C10.8001 15.2507 10.609 15.1715 10.4681 15.0306C10.3272 14.8897 10.2481 14.6986 10.2481 14.4994C10.2481 14.3001 10.3272 14.109 10.4681 13.9681L13.6875 10.75H4.5C4.30109 10.75 4.11032 10.671 3.96967 10.5303C3.82902 10.3897 3.75 10.1989 3.75 9.99999C3.75 9.80108 3.82902 9.61031 3.96967 9.46966C4.11032 9.329 4.30109 9.24999 4.5 9.24999H13.6875L10.4694 6.02999C10.3285 5.88909 10.2493 5.69799 10.2493 5.49874C10.2493 5.29948 10.3285 5.10838 10.4694 4.96749C10.6103 4.82659 10.8014 4.74744 11.0006 4.74744C11.1999 4.74744 11.391 4.82659 11.5319 4.96749L16.0319 9.46749C16.1018 9.53726 16.1573 9.62016 16.1951 9.71142C16.2329 9.80269 16.2523 9.90052 16.2522 9.99931C16.252 10.0981 16.2324 10.1959 16.1944 10.2871C16.1564 10.3782 16.1007 10.461 16.0306 10.5306Z" fill="currentColor"/>
</svg>
 </button>

        </div>
        <motion.div
        style={{
          translateY:translateY
        }}
        className='absolute hidden md:inline -left-48  -top-20 lg:-left-20 '>
      <Image className='' src={star} alt='star' width={360} />

        </motion.div>
        <motion.div
        style={{
          translateY:translateY
        }}
        className='absolute hidden md:block lg:top-0 top-10 lg:right-10 right-0'>
      <Image className='' src={spring} alt='spring' width={360} />
          </motion.div>
      


    </div>
  )
}
