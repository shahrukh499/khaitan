import Image from 'next/image'
import React from 'react'

function TrustSection() {
  return (
    <section className='py-6 lg:py-12'>
        <div className='container mx-auto px-4'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-[50%] lg:w-[33.33%] px-1.5'>
                    <div className='flex items-center'>
                        <div className='w-[80px] h-[80px] shadow-lg rounded-full flex justify-center flex-col p-2'>
                            <Image className='rounded-full align-middle mx-auto' src="/assets/icons/payment-app.gif" alt="brand 1" width={50} height={50} />
                        </div>
                        <div className="ml-3 w-[340px]">
                            <h5 className="text-[18px] lg:text-[20px] font-bold mb-0">FREE US DELIVERY</h5>
                            <p className="text-[14px] text-var(--rbb-general-body-text-color)">For US customers (including Alaska and Hawaii) or orders over $200</p>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[50%] lg:w-[33.33%] px-1.5'>
                    <div className='flex items-center'>
                        <div className='w-[80px] h-[80px] shadow-lg rounded-full flex justify-center flex-col p-2'>
                            <Image className='rounded-full align-middle mx-auto' src="/assets/icons/payment-app.gif" alt="brand 1" width={50} height={50} />
                        </div>
                        <div className="ml-3 w-[340px]">
                            <h5 className="text-[18px] lg:text-[20px] font-bold mb-0">Secure payment</h5>
                            <p className="text-[14px] text-var(--rbb-general-body-text-color)">We accept Visa, American Express, Paypal, Payoneer Mastercard and Discover</p>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[50%] lg:w-[33.33%] px-1.5'>
                    <div className='flex items-center'>
                        <div className='w-[80px] h-[80px] shadow-lg rounded-full flex justify-center flex-col p-2'>
                            <Image className='rounded-full align-middle mx-auto' src="/assets/icons/payment-app.gif" alt="brand 1" width={50} height={50} />
                        </div>
                        <div className="ml-3 w-[340px]">
                            <h5 className="text-[18px] lg:text-[20px] font-bold mb-0">3 year warranty</h5>
                            <p className="text-[14px] text-var(--rbb-general-body-text-color)">All of our products are made with care and covered for one year against manufacturing defects</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TrustSection