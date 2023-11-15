import Image from 'next/image'
import React from 'react'

const Homepage = () => {
  return (
    <div>
        <div className='w-full lg:h-[600px] pt-[50px]'>
            <Image src='/Assets/herosection.jpg' width='1024' height='700'  className='top-0 left-0 w-full h-full object-cover'/>
        </div>
    </div>
  )
}

export default Homepage