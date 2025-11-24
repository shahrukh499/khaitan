import React from 'react'
import NewArrivalsTab from './NewArrivalsTab'

function NewArrivalsProducts() {
  return (
    <section className='py-6 lg:py-12'>
        <div className='container mx-auto px-4'>
            <div>
                <h2 className='text-[22px] lg:text-[35px] font-semibold mb-5'>New Arrivals</h2>
            </div>
            <div>
                <NewArrivalsTab />
            </div>
        </div>
    </section>
  )
}

export default NewArrivalsProducts