import React from 'react'
import Image from 'next/image';
import Headline from './Headline';

const About = () => {
  return (
    <>
     <Headline title='About '/>

    <div className=' p-5 lg:px-[270px] w-full'>
        <div className=' lg:flex flex-row  w-full   shadow-xl backdrop-blur-sm bg-white/70  drop-shadow-md rounded-lg '>
            <div className='p-5 flex flex-col justify-center lg:w-3/5'>
                <p className='text-xs '>DEVISION</p>
                <h1 className='text-2xl pb-3 font-medium '>KOBEIGANE  MOH</h1>
                <div className='h-[2px] bg-orange-400 w-[210px]'></div>
                <p className='  text-base pt-10 pb-5 font-light'> The aim of our organization is to provide financial and administrative services for the development of the Northern Province in Sri Lanka. This website contains valuable information for your awareness, including educational resources and economic development updates. We highly value your feedback, and your contributions are essential for the success of our services and the socio-economic progress we aim to achieve. Please feel free to share your thoughts and contribute to the discussion on the significance of financial and administrative services for the betterment of the community. Your accurate information and meaningful insights are crucial for your understanding and active participation in our services </p>
                
            </div>
            <div className='lg:w-2/5  w-full h-full '>
                <Image src='/Assets/about.jpg'  width='514' height='220' alt="about" />
            </div>
        </div>
        
    </div>
    </>
  )
}

export default About