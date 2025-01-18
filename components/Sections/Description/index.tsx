import React from 'react'
import DescriptionCard from '@/components/Cards/Descriptions'
import Image from '@/public/img/descriptionImage.jpg'
import Image2 from '@/public/img/descriptionImage2.jpg'

const descriptions = [
  {
    title: 'Luxury redefined',
    description: `Our rooms are designed to transport 
you into an environment made for leisure. 
Take your mind off the day-to-day of home 
life and find a private paradise for yourself.`,
    link: 'https://cordobaturismo.gov.ar',
    img: Image
  },
  {
    title: 'Leave your worries in the sand',
    description: `We love life at the beach. Being close
to the ocean with access to endless sandy
beach ensures a relaxed state of mind. It 
seems like time stands still watching the 
ocean. `,
    link: 'https://sierrasdecordoba.com',
    img: Image2
  }
]

const Description = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-start p-6 text-[#14274A]'>
      <h3 className='m-6 text-xl text-center font-semibold'>
        All our room types are including complementary brakfast.
      </h3>
      <div className='flex flex-col justify-center items-center gap-6 lg:w-[80%] md:w-[95%] sm:w-full'>
        {descriptions.map((item, idx) => {
          return (
            <DescriptionCard
              key={idx}
              title={item.title}
              description={item.description}
              link={item.link}
              img={item.img}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Description
