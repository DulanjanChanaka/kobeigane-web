import React from 'react'
import Image from 'next/image';
import Headline from './Headline';

const About = () => {
  return  (
    <div id='about'className='w-full md:h-screen  p-2 flex items-start py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2 '>
            <Headline title="About"/>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'></p>
                <h2 className='py-4'></h2>
                <p className='py-2 text-gray-600'>Is it a dream to build a bathroom? Do you have a headache when thinking  about it? Here is a precious opportunity for all of you. We will make your dream bathroom. We will provide all the accessories according to your idea, 100% reliable and at a very affordable price.  .Get all the quality bathware accessories you need at an affordable price, make your bathroom dream come true...If you love beautiful design in the bathroom and kitchen and recognise the importance of excellent quality, then this is the right website for you. At Samiko Bathware, you will find an abundance of premium products for  bathrooms and kitchens.


</p>
            </div>
            <div className='w-full  h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src='https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg' alt="Description of the image" ></img>
            </div>
        </div>
    </div>
  )
}

export default About