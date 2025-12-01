import Image from 'next/image'
import React from 'react'

function CollageSection() {
  return (
    <section className='py-6'>
        <div className='container mx-auto px-4'>
            <div>
                <h2 className='text-[22px] lg:text-[30px] font-semibold mb-5'>Meet Our Bestsellers</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:grid-rows-[1fr_1fr]'>
                {/* First image - Top left */}
                <div className='overflow-hidden rounded-2xl relative aspect-square md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2'>
                    <Image 
                        className='rounded-2xl hover:scale-105 transition-all duration-300 w-full h-full object-cover' 
                        src="/assets/img/cooler1.png" 
                        alt="Cooler" 
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>
                {/* Second image - Top middle */}
                <div className='overflow-hidden rounded-2xl relative aspect-square md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2'>
                    <Image 
                        className='rounded-2xl hover:scale-105 transition-all duration-300 w-full h-full object-cover' 
                        src="/assets/img/fan.png" 
                        alt="Fan" 
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>
                {/* Third image - Bottom spanning 2 columns */}
                <div className='overflow-hidden rounded-2xl relative aspect-2/1 md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-3'>
                    <Image 
                        className='rounded-2xl hover:scale-105 transition-all duration-300 w-full h-full object-cover' 
                        src="/assets/img/juicer2.png" 
                        alt="Juicer" 
                        fill
                        sizes="(max-width: 768px) 100vw, 66vw"
                    />
                </div>
                {/* Fourth image - Right side spanning 2 rows */}
                <div className='overflow-hidden rounded-2xl relative md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3 md:row-span-2 md:h-full'>
                    <div className='relative w-full aspect-1/2 md:h-full md:aspect-[unset]'>
                        <Image 
                            className='rounded-2xl hover:scale-105 transition-all duration-300 w-full h-full object-cover' 
                            src="/assets/img/lamp.png" 
                            alt="Lamp" 
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                    <div className='absolute bottom-2 left-0 p-5 bg-[#00000098] h-[70vh] m-3 rounded-2xl'>
                        <h4 className='text-[20px] font-semibold text-gray-200'>Lights</h4>
                        <hr className='my-3 border-gray-200'/>
                        <p className='text-[16px] text-gray-200'>A placeholder text used in graphic design, publishing, and web development to show the visual form of a document or typeface without relying on meaningful content. The text is derived from a distorted version of a 45 B.C. Latin text by Cicero, which was adapted in the 1500s to create a type specimen book</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CollageSection