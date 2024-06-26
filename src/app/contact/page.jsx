import React from 'react'
import { LinkedInLogoIcon,TwitterLogoIcon,InstagramLogoIcon,GitHubLogoIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { Dock, DockIcon } from '../../components/magicui/dock'
import { Linkedin } from 'lucide-react'

const page = () => {

  
  return (
    <div className='h-screen lg:mx-64'>
      <Image 
        className='absolute top-0 left-0 z-[-1]'
        src='/space-assets/main.svg' 
        width={1280} height={500} 
        alt='main' 
      />
      <h1 className='text-4xl'>Let&apos;s Connect</h1>
      <div className='content flex justify-center items-center'>
        <div className='left'>
            <Image src="/assets/srisanth.webp" width={350} height={350} 
            className='contrast-100 hover:grayscale rounded-lg w-auto h-auto' alt='My-Image'/>
            <Dock>
              <DockIcon>
                <Linkedin className='h-6 w-6'/>
              </DockIcon>
              <DockIcon>
                <TwitterLogoIcon className='h-6 w-6'/>
              </DockIcon>
              <DockIcon>
                <InstagramLogoIcon className='h-6 w-6'/>
              </DockIcon>
              <DockIcon>
                <GitHubLogoIcon className='h-6 w-6'/>
              </DockIcon>
            </Dock>
          </div>
          <div className='form'>
            
          </div>
      </div>
      
    </div>
  )
}

export default page
