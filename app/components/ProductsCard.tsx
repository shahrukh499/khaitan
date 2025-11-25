import { Rating } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProductsCard() {
  return (
    <div className='p-2 shadow group transition-all duration-300'>
        <div className='overflow-hidden'>
            <Link href='#'>
                <Image 
                    src={'/assets/img/1-36.webp'}
                    alt='product image'
                    width={500}
                    height={500}
                    className='group-hover:scale-105 transition-all duration-300 w-full h-full object-cover'
                />
            </Link>
        </div>
        <div className='mb-3'>
            <Link href='#' className='text-[14px] font-semibold hover:text-[#FF3333] line-clamp-2'>Nova A12 Factory Unlocked 4G/LTE Smartphone</Link>
        </div>
        <div className='flex items-center mb-2'>
            <Rating name="size-small" defaultValue={2} size="small" readOnly />
            <span className='text-[12px] text-gray-500'>0 reviews</span>
        </div>
        <div>
            <span className='text-[14px] font-semibold'>156.00 - 300.00</span>
        </div>
    </div>
  )
}

export default ProductsCard