import React from 'react'
import Showcards from './Showcards'

function ShowcaseArea() {
  return (
    <section className='py-6'>
        <div className='container mx-auto px-4'>
            <div className='flex flex-wrap'>
                {
                    Array.from({ length: 6 }).map((_, index) => (
                        <div className='w-full md:w-[50%] lg:w-[16.66%]' key={index}>
                            <Showcards />
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default ShowcaseArea