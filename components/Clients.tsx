import React from 'react'
import { InfiniteMovingCards } from '@/components/ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-20' id='awards'>
        <h1 className='heading'>
            Awards &  {' '}
            <span className='text-purple'>Certificates</span>
        </h1>
        <div className='flex flex-col items-center max-lg: mt-10'>
            <InfiniteMovingCards
                items={testimonials}
                direction='left'
                speed='slow'
            /> 
            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10'>
                {companies.map(({id, name, img}) => ( 
                  <div key={id} className='flex items-center justify-center md:max-w-60 max-w-32 gap-2'>
                      <img src={img} alt={name} className='md:w-24 w-20'/>
                  </div>
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default Clients