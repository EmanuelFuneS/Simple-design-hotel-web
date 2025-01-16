import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface DescriptionCardProps {
  title: string
  description: string
  link: string
  img: any
}

const DescriptionCard = ({
  title,
  description,
  link,
  img
}: DescriptionCardProps) => {
  return (
    <div className='text-[#14274A] flex flex-row items-center justify-between'>
      <div className='w-[50%] h-[60%] border-l-2 border-[#14274A]  flex flex-col items-start pl-7 justify-between'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p>{description}</p>
        <Link className='bg-[#E0B973] text-center p-1 w-44 font-bold text-white rounded-lg' href={link}>Explore</Link>
      </div>
      <div className='relative w-[400px] h-[256px]'>
        <Image
          src={img}
          alt={`${title} Photo`}
          objectFit='cover'
          layout='fill'
          className='rounded'
        />
      </div>
    </div>
  )
}

export default DescriptionCard
