import Link from 'next/link'
import React from 'react'

interface RoomsCardProps {
  title: string
  imgs: any[]
  type: string
  linkDetails: string
  price: string
}

const RoomsCard = ({
  title,
  imgs,
  type,
  linkDetails,
  price
}: RoomsCardProps) => {
  return (
    <div>
      <div> carrousel</div>
      <div> {type} ROOM</div>
      <div>
        <Link href={linkDetails}> View Room Details</Link>
        <p>${price} Avg/night</p>
      </div>
    </div>
  )
}

export default RoomsCard
