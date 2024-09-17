"use client"
import React from 'react'

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Card from './Card';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const first=testimonials.slice(0,3)
const second=testimonials.slice(3,6)
const third=testimonials.slice(6,9)

export default function Testimonials() {
  return (
    <div className='my-10 px-5 flex flex-col gap-5 sm:px-20'>
      
      <div className='flex flex-col items-center gap-5'>
      <p className='border px-4 py-1 rounded border-gray-700'>Testimonials</p>
      <h1 className='text-3xl sm:text-5xl text-center font-bold'>What our users say</h1>
      <p className='w-full sm:w-[80%] md:w-[70%] lg:w-[55%] text-center'>From intutive design to powerful features, our app has become an essential tool for users around the world.</p>

      </div>


      <div className='flex justify-evenly items-center gap-3 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] '>
      
      <div className='overflow-hidden  b-gray-300 h-[600px] '>
       <motion.div
       initial={{
        translateY:"0%"
       }} 
       animate={{
        translateY:"-50%"
       }}
       transition={{
        duration:15,
        repeat:Infinity,
        repeatType:"loop",
        ease:"linear"

       }}
       className='-translate-y-1/ b-pink-300 flex flex-col'>

        {[...first,...first].map((val,idx)=>{
          return (
            <Card val={val} key={idx} />
          )
        })}
      </motion.div>
        </div>
      <div className='overflow-hidden  md:flex hidden h-[600px] '>
       <motion.div
       initial={{
        translateY:"0%"
       }} 
       animate={{
        translateY:"-50%"
       }}
       transition={{
        duration:20,
        repeat:Infinity,
        repeatType:"loop",
        ease:"linear"

       }}
       className='-translate-y-1/ b-pink-300 flex flex-col'>

        {[...second,...second].map((val,idx)=>{
          return (
            <Card val={val} key={idx} />
          )
        })}
      </motion.div>
        </div>
      <div className='overflow-hidden lg:flex hidden h-[600px] '>
       <motion.div
       initial={{
        translateY:"0%"
       }} 
       animate={{
        translateY:"-50%"
       }}
       transition={{
        duration:17,
        repeat:Infinity,
        repeatType:"loop",
        ease:"linear"

       }}
       className='-translate-y-1/  b-pink-300 flex flex-col'>

        {[...third,...third].map((val,idx)=>{
          return (
            <Card val={val} key={idx} />
          )
        })}
      </motion.div>
        </div>


      {/* <div className='md:flex hidden flex-col gap-5'>
        {second.map((val,idx)=>{
          return (
            <Card val={val} key={idx} />
          )
        })}
      </div>
      <div className='lg:flex hidden flex-col gap-5'>
        {third.map((val,idx)=>{
          return (
            <Card val={val} key={idx} />
          )
        })}
      </div> */}
      
      </div>
      
      </div>
  )
}
