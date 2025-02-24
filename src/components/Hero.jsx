import Image from 'next/image';
import React from 'react'
import { Download, Sparkles, WandSparkles } from 'lucide-react';
import { Button, buttonVariants } from './ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <div className='flex flex-col gap-20 lg:flex-row min-h-screen justify-evenly items-center'>
      <div className='left'>
        <div className="image w-fit h-fit relative">
          <Image 
            src='/assets/srisanth.webp' 
            className='rounded-lg border-white w-auto h-auto'
            width={350} 
            height={350} 
            sizes='(max-width: 768px) 100vw, 350px'
            priority
            alt='hero' 
          />
          <div className='flex mt-2 absolute bottom-2 right-2 text-slate-50 justify-center items-center rounded-lg py-1 px-2 border border-green-300 bg-green-800 bg-opacity-70 w-fit shadow-lg'>
            <Sparkles className='inline m-2 text-green-300' size={20}/>
            <h1 className='text-md font-bold'>Open for Work</h1>
          </div>
        </div>
      </div>
      <div className='intro relative'>
        <div className='content flex flex-col justify-center lg:items-end items-end'>
          <span className='text-lg font-bold border border-purple-800 px-4 rounded-full bg-purple-500 text-purple-200 bg-opacity-35 '>
            <WandSparkles className='inline m-2 text-purple-200' size={20}/>
          UX/UI Designer  
          </span>
          <div className='flex flex-col items-center justify-center'> 
            <h1 className='lg:text-4xl text-xl font-bold'>Hello, I&apos;m 
              <span className='text-gradient ml-2'>Srisanth Seth</span>
            </h1>
            <h2 className='text-lg lg:text-2xl text-center'>A FullStack Developer & Devops Practitioner</h2>
            <Button variant='classic' className="cursor-pointer z-10">
              <Link href='https://drive.google.com/file/d/1azh7k16emQAxGMDYNpErs-kGizpl_cxy/view?usp=sharing'>
                <Download className='inline m-2'/>
                Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className='absolute lg:top-0 lg:right-[-200px] z-[-2] lg:z-0'>
            <Image 
              src="/space-assets/mainIconsdark.svg" 
              className="opacity-20 w-auto h-auto"
              width={550} 
              height={550}
              priority
              sizes='(max-width: 768px) 100vw, 550px' 
              alt='bg'/>  
        </div>
    </div>
    </>
  )
}

export default Hero;
