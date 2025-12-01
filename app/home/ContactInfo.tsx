import Image from 'next/image'
import React from 'react'
import Form from '../components/Form'

function ContactInfo() {
  return (
    <section className='lg:py-12 py-6 bg-gray-100'>
        <div className='container mx-auto lg:px-4'>
            <div className='flex flex-wrap justify-center'>
                <div className='w-full lg:w-[40%] lg:px-1.5'>
                    <div className='flex flex-wrap h-full lg:px-14 py-2 lg:py-10 bg-[#e13032] lg:rounded-2xl'>
                        <div className='w-[25%] lg:w-full px-1.5 border-r md:border-r-0 lg:border-b border-white'>
                            <div className='lg:flex items-center gap-x-2 lg:pb-6'>
                                <Image className='lg:w-[50px] w-[40px] h-16 mx-auto lg:mx-0' src="/assets/icons/shopping-cart.svg" alt="phone" width={80} height={50} />
                                <p className='text-[12px] lg:text-[25px] text-center text-white font-semibold'>Buy in store or online</p>
                            </div>
                        </div>

                        <div className='w-[25%] lg:w-full px-1.5 border-r md:border-r-0 lg:border-b border-white'>
                            <div className='lg:flex items-center gap-x-2 lg:py-6'>
                                <Image className='lg:w-[50px] w-[40px] h-16 mx-auto lg:mx-0' src="/assets/icons/gear.svg" alt="phone" width={80} height={50} />
                                <p className='text-[12px] lg:text-[25px] text-center text-white font-semibold'>Service and Installation</p>
                            </div>
                        </div>
                        <div className='w-[25%] lg:w-full px-1.5 border-r md:border-r-0 lg:border-b border-white'>
                            <div className='lg:flex items-center gap-x-2 lg:py-6'>
                                <Image className='lg:w-[50px] w-[40px] h-16 mx-auto lg:mx-0' src="/assets/icons/certification.svg" alt="phone" width={80} height={50} />
                                <p className='text-[12px] lg:text-[25px] text-center text-white font-semibold'>Product Warranty</p>
                            </div>
                        </div>
                        <div className='w-[25%] lg:w-full px-1.5'>
                            <div className='lg:flex items-center gap-x-2  lg:pt-6'>
                                <Image className='lg:w-[50px] w-[40px] h-16 mx-auto lg:mx-0' src="/assets/icons/group.svg" alt="phone" width={80} height={50} />
                                <p className='text-[12px] lg:text-[25px] text-center text-white font-semibold'>Top Rated Products</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-[45%] px-1.5'>
                    <Form />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactInfo