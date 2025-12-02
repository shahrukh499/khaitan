import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Brandos() {
  return (
    <section className='py-6'>
        <div className='container mx-auto px-4'>
            <div className='flex flex-wrap gap-y-3'>
               <div className='w-full md:w-[50%] lg:w-[33.33%] px-1.5'>
                    <div className='relative'>
                        <div className='overflow-hidden rounded-2xl'>
                            <Link href='#'>
                                <Image className='rounded-2xl hover:scale-105 transition-all duration-300' src="/assets/img/fan.jpg" alt="brand 1" width={840} height={840} />
                            </Link>
                        </div>
                        <div className='absolute bottom-0 left-0 p-5 w-full bg-linear-to-t from-[#000000] to-[#00000000] rounded-b-2xl'>
                            <h2 className='text-2xl font-bold mb-2 text-white'>
                                Khaitan Fan
                            </h2>
                            <Link href='#' className='text-[14px] font-bold text-white'>Learn More</Link>
                        </div>
                    </div>
               </div>
               <div className='w-full md:w-[50%] lg:w-[33.33%] px-1.5'>
                    <div className='relative'>
                        <div className='overflow-hidden rounded-2xl'>
                            <Link href='#'>
                                <Image className='rounded-2xl hover:scale-105 transition-all duration-300' src="/assets/img/Geysers.jpg" alt="brand 1" width={840} height={840} />
                            </Link>
                        </div>
                        <div className='absolute bottom-0 left-0 p-5 w-full bg-linear-to-t from-[#000000] to-[#00000000] rounded-b-2xl'>
                            <h2 className='text-2xl font-bold mb-2 text-white'>
                                Khaitan Geysers
                            </h2>
                            <Link href='#' className='text-[14px] font-bold text-white'>Learn More</Link>
                        </div>
                    </div>
               </div>
               <div className='w-full md:w-[50%] lg:w-[33.33%] px-1.5'>
                    <div className='relative'>
                        <div className='overflow-hidden rounded-2xl'>
                            <Link href='#'>
                                <Image className='rounded-2xl hover:scale-105 transition-all duration-300' src="/assets/img/mixer.jpg" alt="brand 1" width={840} height={840} />
                            </Link>
                        </div>
                        <div className='absolute bottom-0 left-0 p-5 w-full bg-linear-to-t from-[#000000] to-[#00000000] rounded-b-2xl'>
                            <h2 className='text-2xl font-bold mb-2 text-white'>
                                Khaitan Mixer
                            </h2>
                            <Link href='#' className='text-[14px] font-bold text-white'>Learn More</Link>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Brandos