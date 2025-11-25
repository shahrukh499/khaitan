'use client'
import Link from 'next/link'
import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import Image from 'next/image';

function Footer() {
  return (
    <footer className='bg-[#0A111E] py-12'>
        <div className='container mx-auto px-4'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-[33.33%]'>
                    <div>
                        <h5 className='text-[20px] text-white font-bold mb-5'>Follow Us</h5>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <Link href='#'>
                            <FacebookOutlinedIcon sx={{color:'#ffffff'}} />
                        </Link>
                        <Link href='#'>
                            <TwitterIcon sx={{color:'#ffffff'}} />
                        </Link>
                    </div>
                </div>
                <div className='w-full lg:w-[33.33%]'>
                    <div>
                        <h5 className='text-[20px] text-white font-bold mb-5'>We Accept</h5>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <Image src="/assets/icons/visa.png" alt="payment" width={50} height={50} />
                        <Image src="/assets/icons/paypal.png" alt="payment" width={50} height={50} />
                        <Image src="/assets/icons/rupay.png" alt="payment" width={50} height={50} />
                    </div>
                </div>
            </div>
            <div className='border-t border-white/20 my-12'></div>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-[25%]'>
                    <div>
                        <h5 className='text-[20px] text-white font-bold mb-5'>CUSTOMER CARE</h5>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <Link href='#' className='text-gray-300 hover:text-[#FF3333]'>FAQs</Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-300 hover:text-[#FF3333]'>Help Center</Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-300 hover:text-[#FF3333]'>Return Policy</Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-300 hover:text-[#FF3333]'>Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-300 hover:text-[#FF3333]'>Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-full lg:w-[25%]'>
                    <div>
                        <h5 className='text-[20px] text-white font-bold mb-5'>CUSTOMER CARE</h5>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <Link href='#' className='text-gray-300 hover:text-[#FF3333]'>FAQs</Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-300 hover:text-[#FF3333]'>Help Center</Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-300 hover:text-[#FF3333]'>Return Policy</Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-300 hover:text-[#FF3333]'>Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-300 hover:text-[#FF3333]'>Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-full lg:w-[25%]'>
                    <div>
                        <h5 className='text-[20px] text-white font-bold mb-5'>CUSTOMER CARE</h5>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <Link href='#' className='text-gray-300 hover:text-[#FF3333]'>FAQs</Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-300 hover:text-[#FF3333]'>Help Center</Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-300 hover:text-[#FF3333]'>Return Policy</Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-300 hover:text-[#FF3333]'>Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-300 hover:text-[#FF3333]'>Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-full lg:w-[25%]'>
                    <div>
                        <h5 className='text-[20px] text-white font-bold mb-5'>CUSTOMER CARE</h5>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <Link href='#' className='text-gray-300 hover:text-[#FF3333]'>FAQs</Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-300 hover:text-[#FF3333]'>Help Center</Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-300 hover:text-[#FF3333]'>Return Policy</Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-300 hover:text-[#FF3333]'>Terms & Conditions</Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-300 hover:text-[#FF3333]'>Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer