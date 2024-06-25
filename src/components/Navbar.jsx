"use client"
import Link from 'next/link'
import {useState, useEffect} from 'react'
import { Menu } from 'lucide-react'

const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true)
    }
  }
  , [])

  const handleMobileView = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='my-2 mx-2 z-30 cursor-pointer px-2 lg:mx-64 flex justify-center items-center h-16'>
      <div className='flex justify-between items-center w-full '>
        <div className='lg:text-3xl md:text-xl text-lg font-bold gradient'>Srisanth</div>
        {
          isMobile ? (
            <Menu className='lg:text-2xl text-lg' onClick={()=>handleMobileView}/>
          ):(
            <nav className='flex space-x-4 text-md lg:text-lg'>
              <Link href='/'>Home</Link>
              <Link href='/about'>About</Link>
              <Link href='/project'>Projects</Link>
              <Link href='/contact'>Contact</Link>
            </nav>
          )
        }
      </div>
    </div>
  )
}

export default Navbar
