import React from 'react'
import { LinkedinIcon, Instagram, Twitter, Github, } from 'lucide-react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='h-screen lg:mx-64'>
      <Image 
        className='absolute top-0 left-0 z-[-1]'
        src='/space-assets/main.svg' 
        width={1280} height={500} 
        alt='main' 
      />
      <div className=''>
        <h1 className=''>Let&apos;s Connect</h1>
    </div>
      <div className='socials flex'>
        <a href='https://www.linkedin.com/in/'>
          <LinkedinIcon size='32' />
        </a>
        <a href='https://www.instagram.com/'>
          <Instagram size='32' />
        </a>
        <a href='https://twitter.com/'>
          <Twitter size='32' />
        </a>
        <a href=''>
          <Github size='32' />
        </a>
      </div>
    </div>
  )
}

export default page
