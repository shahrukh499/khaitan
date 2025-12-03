import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function FullSizeSection() {
  return (
    <section>
        <div className='container mx-auto px-4'>
            <div>
                <h2 className='text-[25px] lg:text-[35px] font-semibold text-center mb-5'>Driving With Innovation</h2>
            </div>
            <div className='relative'>
                <div className='overflow-hidden rounded-2xl'>
                    <Link href='#'>
                        <Image className='rounded-2xl hover:scale-105 transition-all duration-300' src="/assets/img/homepages-08-banner-04.jpg" alt="full size section" width={1920} height={1080} />
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FullSizeSection