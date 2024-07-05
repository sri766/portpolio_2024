"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Call it initially to set the state based on the initial window size

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleMobileView = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='my-2 mx-2 z-30 cursor-pointer px-2 lg:mx-64 flex justify-center items-center h-16'>
      <div className='flex justify-between items-center w-full '>
        <div className='lg:text-4xl md:text-xl text-2xl font-bold gradient'>Srisanth</div>
        {isMobile ? (
          <>
            <Menu className='lg:text-2xl text-lg' onClick={handleMobileView} />
            <AnimatePresence>
              {isMenuOpen && (
                <motion.nav
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className='absolute top-16 left-0 w-full bg-[#030014] shadow-lg z-[5] min-h-80'
                >
                  <div className='flex justify-end p-4'>
                    <X className='text-xl' onClick={handleMobileView} />
                  </div>
                  <div className='flex flex-col items-center space-y-6 text-xl'>
                    <Link href='/' onClick={handleMobileView}>Home</Link>
                    <Link href='/about' onClick={handleMobileView}>About</Link>
                    <Link href='/project' onClick={handleMobileView}>Projects</Link>
                    <Link href='/blog' onClick={handleMobileView}>Blogs</Link>
                    <Link href='/contact' onClick={handleMobileView}>Contact</Link>
                  </div>
                </motion.nav>
              )}
            </AnimatePresence>
          </>
        ) : (
          <nav className='flex space-x-4 text-md lg:text-lg'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/project'>Projects</Link>
            <Link href='/blog'>Blogs</Link>
            <Link href='/contact'>Contact</Link>
          </nav>
        )}
      </div>
    </div>
  )
}

export default Navbar
