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
                        <div className='overflow-hidden'>
                            <Image className='rounded-lg hover:scale-105 transition-all duration-300' src="/assets/img/homepages-08-banner-01.jpg" alt="brand 1" width={840} height={840} />
                        </div>
                        <div className='absolute bottom-0 left-0 p-5'>
                            <h2 className='text-2xl font-bold mb-5'>
                                BamBook Pro
                            </h2>
                            <Link href='#' className='text-[14px] font-bold'>Learn More</Link>
                        </div>
                    </div>
               </div>
               <div className='w-full md:w-[50%] lg:w-[33.33%] px-1.5'>
                    <div className='relative'>
                        <div className='overflow-hidden'>
                            <Image className='rounded-lg hover:scale-105 transition-all duration-300' src="/assets/img/homepages-08-banner-01.jpg" alt="brand 1" width={840} height={840} />
                        </div>
                        <div className='absolute bottom-0 left-0 p-5'>
                            <h2 className='text-2xl font-bold mb-5'>
                                BamBook Pro
                            </h2>
                            <Link href='#' className='text-[14px] font-bold'>Learn More</Link>
                        </div>
                    </div>
               </div>
               <div className='w-full md:w-[50%] lg:w-[33.33%] px-1.5'>
                    <div className='relative'>
                        <div className='overflow-hidden'>
                            <Image className='rounded-lg hover:scale-105 transition-all duration-300' src="/assets/img/homepages-08-banner-01.jpg" alt="brand 1" width={840} height={840} />
                        </div>
                        <div className='absolute bottom-0 left-0 p-5'>
                            <h2 className='text-2xl font-bold mb-5'>
                                BamBook Pro
                            </h2>
                            <Link href='#' className='text-[14px] font-bold'>Learn More</Link>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Brandos