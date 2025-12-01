import Image from 'next/image'
import React from 'react'

function SellingFact() {
  return (
    <section className='pb-6'>
        <div className='conatiner mx-auto px-4'>
            <div className='mb-10'>
                <h2 className='text-[35px] text-center font-semibold leading-tight'>India’s No.1 Ceiling Fan Brand</h2>
            </div>
            <div className='flex flex-wrap gap-y-5'>
                <div className='w-[33.33%] px-1.5'>
                    <div className='text-center flex flex-col justify-center items-center gap-y-1'>
                        <Image className='mx-auto h-20' src="/assets/icons/hammer.svg" alt="hammer" width={60} height={50} />
                        <p className='text-[13px] lg:text-[18px] font-semibold'>1 Fan Sold Every</p>
                        <div>
                            <p className='lg:text-[60px] font-bold text-[#e13032] leading-tight'>2</p>
                            <p className='text-[11px] lg:text-[18px] font-semibold'>Seconds</p>
                        </div>
                    </div>
                </div>
                <div className='w-[33.33%] px-1.5 border-l border-gray-200'>
                    <div className='text-center flex flex-col justify-center items-center gap-y-1'>
                        <Image className='mx-auto h-20' src="/assets/icons/fan.svg" alt="hammer" width={80} height={80} />
                        <p className='text-[13px] lg:text-[18px] font-semibold'>More Than</p>
                        <div>
                            <p className='lg:text-[60px] font-bold text-[#e13032] leading-tight'>4000+</p>
                            <p className='text-[11px] lg:text-[18px] font-semibold'>Products</p>
                        </div>
                    </div>
                </div>
                <div className='w-[33.33%] px-1.5 border-l border-gray-200'>
                    <div className='text-center flex flex-col justify-center items-center gap-y-1'>
                        <Image className='mx-auto h-20' src="/assets/icons/user.svg" alt="hammer" width={80} height={80} />
                        <p className='text-[13px] lg:text-[18px] font-semibold'>More Than</p>
                        <div>
                            <p className='lg:text-[60px] font-bold text-[#e13032] leading-tight'>10Cr+</p>
                            <p className='text-[11px] lg:text-[18px] font-semibold'>Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SellingFact