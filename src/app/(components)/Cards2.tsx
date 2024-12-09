import React from 'react'
import Card from './Card'
export default function Cards2() {
    const arr=[1,2,3,4]

  return (
    <div>
      <div>
      <div className='flex justify-between px-6 py-4 my-8 text-sm'>
        <div className='text-lg font-semibold'>Ces produits pourraient vous intéresser</div>
        <div>Voir toute la collection</div>
      </div>
      
            <div className='md:flex md:justify-evenly '>
                {arr.map(item => <Card key={item} />)}
            </div>
        
    </div>
    </div>
  )
}
