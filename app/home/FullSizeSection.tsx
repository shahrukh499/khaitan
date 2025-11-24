import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function FullSizeSection() {
  return (
    <section>
        <div className='container mx-auto px-4'>
            <div className='relative'>
                <div className='overflow-hidden'>
                    <Image className='rounded-lg hover:scale-105 transition-all duration-300' src="/assets/img/homepages-08-banner-04.webp" alt="full size section" width={1920} height={1080} />
                </div>
                <div className='absolute -translate-y-1/2 top-1/2 right-10 lg:right-32 p-5'>
                    <h2 className='text-2xl font-bold mb-5'>
                        Full Size Section
                    </h2>
                    <Link href='#' className='text-[14px] font-bold'>Learn More</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FullSizeSection