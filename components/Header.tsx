import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

const Header = () => {
  return (
    <div className='w-full flex items-center justify-evenly absolute top-0 z-50 '>
      <div>
        <Logo />
      </div>
      <div className='flex flex-row items-center justify-between w-[50%] font-bold'>
        <Link href={'/'}>Home</Link>
        <Link href={'/facilities'}>Facilities</Link>
        <Link href={'/rooms'}>Rooms</Link>
        <Link href={'/contact-us'}>Contact-us</Link>
      </div>
    </div>
  )
}

export default Header
