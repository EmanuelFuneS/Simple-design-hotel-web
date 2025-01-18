'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='w-full flex items-center justify-between absolute top-0 z-50 '>
      <div>
        <Logo />
      </div>
      <div className='flex lg:hidden'>
        <button onClick={toggleMenu} className='focus:outline-none p-4'>
          {isMenuOpen ? <FaTimes size={24} className='animate-fade-in' /> : <FaBars size={24} className='animate-fade-in' />}
        </button>
      </div>
      <div
        className={`flex-col items-center justify-between w-full lg:flex lg:flex-row lg:w-[50%] font-bold animate-fade-in ${
          isMenuOpen ? 'flex' : 'hidden'
        }`}
      >
        <Link href='/' className='p-2'>
          Home
        </Link>
        <Link href='/facilities' className='pl-2'>
          Facilities
        </Link>
        <Link href='/rooms' className='p-2'>
          Rooms
        </Link>
        <Link href='/contact-us' className='pl-2'>
          Contact-us
        </Link>
      </div>
    </div>
  )
}

export default Header
