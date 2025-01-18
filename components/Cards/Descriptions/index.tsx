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
    <div className='text-[#14274A] text-center md:text-start flex lg:flex-row flex-col items-center justify-center md:justify-between'>
      <div className=' w-full md:w-[50%] md:border-l-2 md:border-[#14274A]  flex flex-col items-center md:items-start md:pl-7 gap-5 justify-between'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p className='pl-4 md:pl-0'>{description}</p>
        <Link
          className='bg-[#E0B973] text-center p-1 w-44 font-bold text-white rounded-lg my-4 md:m-4'
          href={link}
        >
          Explore
        </Link>
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
