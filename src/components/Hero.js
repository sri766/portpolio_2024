import Image from 'next/image';
import React from 'react'
import Gradient from '@/components/Gradient';
import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <>
      <div className='flex min-h-screen justify-evenly items-center'>
      <div className='image '>
        <Image 
          src='/sri.png' 
          className='rounded-lg border-white'
          width={350} 
          height={350} 
          priority
          alt='hero' 
        />
        {/* <Gradient /> */}
      </div>
      <div className='intro relative'>
        <div className='content block bottom-10'>
          <h1 className='text-4xl font-bold'>Hello, I'm 
            <span className='text-gradient ml-2'>Srisanth Seth</span>
          </h1>
          <h2 className='text-2xl font-medium '>A FullStack Developer and UX/UI Designer</h2>
          <button className='btn text-xl px-4 bg-gray-500 bg-opacity-30 my-4 py-2 rounded-lg flex justify-center items-center'>
            <Download className='inline m-2'/>
            Resume
          </button>
        </div>
      </div>
      <div className='absolute top-0 right-[-200px]'>
            <Image 
              src="/space-assets/mainIconsdark.svg" 
              className="opacity-50"
              width={550} 
              height={550} 
              alt='bg'/>  
        </div>
    </div>
    </>
  )
}

export default Hero;
