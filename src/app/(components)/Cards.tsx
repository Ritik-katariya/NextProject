

'use client'
import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import Card from './Card'
export default function Cards() {
    const arr=[1,2,3,4,5,6]
  return (
    <div>
      <div className='flex justify-between px-6 py-4 my-8'>
        <div>Articles similaires</div>
        <div>Voir toute la collection</div>
      </div>
      <div>
        <Swiper>
            <SwiperSlide className='md:flex'>
                {arr.map(item => <Card key={item}/>)}
            </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
