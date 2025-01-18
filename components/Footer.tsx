import React from 'react'
import Link from 'next/link'

import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mt-auto bg-[#14274A] text-[#F7F7F7] w-full min-h-[200px] flex flex-col lg:flex-row items-center justify-around p-4'>
      <div className='flex flex-col gap-4 mb-4 lg:mb-0'>
        <div className='flex flex-col items-start justify-center'>
          <h1 className='text-3xl font-bold'>Luxury</h1>
          <p className='text-sm'>Hotel</p>
        </div>
        <div className='text-xs'>
          <p>497 Evergreen Rd. Roseville, CA 95673</p>
          <p>+44 345 678 903</p>
          <p>luxury_hotels@gmail.com</p>
        </div>
      </div>
      <div className='flex flex-col min-w-[140px] gap-4 mb-4 lg:mb-0'>
        <Link href={'/#about'}>About Us</Link>
        <Link href={'/contact-us'}>Contact</Link>
        <Link href={'/'}>Terms & Conditions</Link>
      </div>
      <div className='flex flex-col min-w-[140px] gap-4 mb-4 lg:mb-0'>
        <Link href={'/'} className='flex gap-4 items-center'>
          <FaFacebookF size={24} />
          Facebook
        </Link>
        <Link href={'/'} className='flex gap-4 items-center'>
          <FaTwitter size={24} />
          Twitter
        </Link>
        <Link href={'/'} className='flex gap-4 items-center'>
          <FaInstagram size={24} />
          Instagram
        </Link>
      </div>
      <div className='flex flex-col gap-4 mb-4 lg:mb-0'>
        <h2 className='text-lg font-bold'>Subscribe to our newsletter</h2>
        <div className='flex text-[#14274a]'>
          <input
            type='text'
            placeholder='Email Address'
            className='bg-[#14274a] pl-3 border-[#e0b973] border-2'
          />
          <button className='bg-[#e0b973] p-3'>OK</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
