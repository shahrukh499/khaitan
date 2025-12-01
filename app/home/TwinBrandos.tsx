import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function TwinBrandos() {
  return (
    <section className='py-6'>
        <div className='container mx-auto px-4'>
            <div className='flex flex-wrap gap-y-3'>
                <div className='w-full lg:w-[50%] px-1.5'>
                    <div className='relative'>
                        <div>
                            <Image className='rounded-2xl' src='/assets/img/banner2-04.webp' alt='hero' height={760} width={1400} />
                        </div>
                        <div className='absolute top-1/2 left-0 translate-y-[-50%] ps-12'>
                            <span className='text-[14px] text-blue-400'>New Arrivals</span>
                            <h3 className='text-[25px] font-semibold leading-tight'>mavic mini pro</h3>
                            <div className='mt-5'>
                                <Link href='#'>Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-[50%] px-1.5'>
                    <div className='relative'>
                        <div>
                            <Image className='rounded-2xl' src='/assets/img/banner2-05.webp' alt='hero' height={760} width={1400} />
                        </div>
                        <div className='absolute top-1/2 left-0 translate-y-[-50%] ps-12'>
                            <span className='text-[14px] text-blue-400'>New Arrivals</span>
                            <h3 className='text-[25px] font-semibold leading-tight'>mavic mini pro</h3>
                            <div className='mt-5'>
                                <Link href='#'>Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TwinBrandos