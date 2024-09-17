import Image from 'next/image'
import React from 'react'

interface prop{
    text:string,
    imageSrc:string,
    name:string,
    username:string
}

export default function Card({val}:{val:prop}) {
  return (
    <div className='borde my-5 shadow-sm shadow-gray-400 rounded-lg w-full py-7 px-6 border-gray-800 border-opacity-40 flex flex-col gap-5'>
          
              <div>{val.text}</div>
          
              <div className='flex gap-2 font-semibold'>
                <Image src={val.imageSrc} width={40} height={40} alt={val.name} style={{height:"auto",width:"auto"}} /> 
                <div>
                  <div>
                  {val.name}
                  </div>
                  <div>
                  {val.username}
                  </div>
                  </div>
                  
                  </div>
          
          </div>
  )
}

