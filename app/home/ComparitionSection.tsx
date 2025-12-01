import React from 'react'
import ComparitionTab from '../components/ComparitionTab'

function ComparitionSection() {
  return (
    <section className='py-6'>
        <div className='container mx-auto px-4'>
            <div>
                <h2 className='text-[22px] lg:text-[30px] text-center font-semibold mb-5'>Explore Our Range</h2>
            </div>
            <div>
                <ComparitionTab />
            </div>
        </div>
    </section>
  )
}

export default ComparitionSection