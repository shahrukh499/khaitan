import { Rating } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ProductsCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  link: string;
  rating: number;
  reviews: number;
}

function ProductsCard(props: ProductsCardProps) {
  const { id, title, price, image, link, rating, reviews } = props;
  return (
    <div className='p-2 shadow group transition-all duration-300 my-2 rounded-2xl bg-[url("/assets/img/card-bg.webp")] bg-cover bg-center'>
        <div className='overflow-hidden'>
            <Link href='#'>
                <Image 
                    src={image}
                    alt='product image'
                    width={500}
                    height={500}
                    className='group-hover:scale-105 transition-all duration-300 w-full h-full object-cover'
                />
            </Link>
        </div>
        <div className='mb-3'>
            <Link href={link} className='text-[14px] font-semibold hover:text-[#FF3333] line-clamp-2'>{title}</Link>
        </div>
        <div className='flex items-center mb-2'>
            <Rating name="size-small" defaultValue={rating} size="small" readOnly />
            <span className='text-[12px] text-gray-500'>{reviews} reviews</span>
        </div>
        <div>
            <span className='text-[14px] font-semibold'>MRP: ₹{price}</span>
        </div>
    </div>
  )
}

export default ProductsCard