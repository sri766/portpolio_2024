import Image from 'next/image';
import React from 'react'
// import Gradient from '@/components/Gradient';
import { Download } from 'lucide-react';
import { Button, buttonVariants } from './ui/button';

const Hero = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row min-h-screen justify-evenly items-center'>
      <div className='image '>
        <Image 
          src='/assets/srisanth.webp' 
          className='rounded-lg border-white w-auto h-auto'
          width={350} 
          height={350} 
          sizes='(max-width: 768px) 100vw, 350px'
          priority
          alt='hero' 
        />
      </div>
      <div className='intro relative'>
        <div className='content flex flex-col justify-center items-center'>
          <h1 className='lg:text-4xl text-2xl font-bold'>Hello, I&apos;m 
            <span className='text-gradient ml-2'>Srisanth Seth</span>
          </h1>
          <h2 className='text-xl lg:text-2xl font-medium '>A FullStack Developer & UX/UI Designer</h2>
          <Button className={buttonVariants({variant: "classic"})}>
            <Download className='inline m-2'/>
            Resume
          </Button>
        </div>
      </div>
      <div className='absolute lg:top-0 lg:right-[-200px] z-[-2] lg:z-0'>
            <Image 
              src="/space-assets/mainIconsdark.svg" 
              className="opacity-60 w-auto h-auto "
              width={550} 
              height={550}
              sizes='(max-width: 768px) 100vw, 550px' 
              alt='bg'/>  
        </div>
    </div>
    </>
  )
}

export default Hero;
