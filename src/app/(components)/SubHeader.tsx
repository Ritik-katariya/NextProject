import React from 'react'

export default function SubHeader() {
  return (
    <div>
      <nav>
        <ul className='max-md:hidden flex justify-between px-3 items-center text-sm text-gray-400 py-4 cursor-pointer  border-b'>
            <li className='text-[#4eaadf] font-semibold'>Art de la table</li>
            <li>Mobilier</li>
            <li>Nappage</li>
            <li>Matériel de salle</li>
            <li>Cuisine</li>
            <li>Barbecue</li>
            <li>Tente</li>
            <li>Chauffage</li>
            <li>Podium - Piste de danse</li>
            <li>Son et lumière</li>
            <li>Packs</li>
            <li>Consommables</li>
        </ul>
      </nav>
    </div>
  )
}
