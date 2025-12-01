import React from 'react'
import Showcards from './Showcards'
import { showcaseData } from '../data/showcaseData'

function ShowcaseArea() {
  return (
    <section className='py-6'>
        <div className='container mx-auto px-4'>
            <div className='flex flex-wrap'>
                {
                    showcaseData.map((item) => (
                        <div className='w-full md:w-[50%] lg:w-[16.66%]' key={item.id}>
                            <Showcards key={item.id} {...item} />
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default ShowcaseArea