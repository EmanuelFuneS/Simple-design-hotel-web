'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import BgImage3 from '@/public/img/aboutImage3.jpg'
import BgImage2 from '@/public/img/aboutImage2.jpg'
import BgImage from '@/public/img/aboutImage.jpg'
import Link from 'next/link'

const images = [BgImage, BgImage2, BgImage3]

const About = () => {
  const [randomIndex, setRandomIndex] = useState<number>()

  useEffect(() => {
    const index = Math.floor(Math.random() * 3)
    setRandomIndex(index)
    console.log(index)
  }, [])

  return (
    <div id='about' className='relative h-screen'>
      <div className='absolute inset-0 bg-[#14274A] bg-opacity-50 z-10' />
      {randomIndex !== undefined ? (
        <Image
          src={images[randomIndex]}
          alt='Hotel Photo'
          layout='fill'
          objectFit='cover'
        />
      ) : (
        <></>
      )}
      <div className='z-30 relative top-96 w-full h-60 flex flex-col items-center justify-center'>
        <div className=' m-6 pl-60 w-full '>
          <p className='text-xl'>WELCOME TO</p>
          <h1 className='text-6xl font-bold'>Luxury</h1>
          <h2 className='text-3xl font-bold'>Hotels</h2>
          <p className='text-lg'>Book your Stay and enjoy Luxury</p>
          <p className='text-lg'>redefine at the most affordable rates.</p>
        </div>
        <div className='m-6'>
          <button className='w-[268px] h-[78px] bg-[#E0B973] text-lg font-bold text-white m-10 rounded-2xl transition-transform duration-300 hover:scale-110'>
            <Link href={'/rooms'}>BOOK NOW</Link>
          </button>
        </div>
        <div className='mt-auto'>
          <p>Scroll</p>
        </div>
      </div>
    </div>
  )
}

export default About
