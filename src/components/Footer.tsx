

import React from 'react'
import Image from 'next/image'
import logo from "@/img/logo.png"
import Link from 'next/link'
export const Footer = () => {
  return (
    <div className='px-6 md:flex justify-between items-center border-t-2 my-8 py-8'>
      <div className='md:flex md:justify-evenly md:items-center text-xs text-gray-400 md:gap-8' >
        <div>
          <Link href={"/"}>
          <Image src={logo} alt='logo' className='w-44'></Image></Link>
        </div>
        <div> 
          <ul>
            <li className='font-semibold text-black text-sm mb-2'> INFOS PRATIQUES</li>
            <li>À propos</li>
            <li>Livraisons & Reprises</li>
            <li> Mode d’emploi</li>
            <li>F.A.Q</li>
          </ul>
        </div>
        
        <div> 
          <ul>
            <li className='font-semibold text-black text-sm mb-2'>LÉGAL</li>
            <li>Mentions légales</li>
            <li>CGU</li>
            <li>CGV</li>
            <li>Politique de confidentialité</li>
          </ul>
        </div>
        
        <div> 
          <ul>
            <li className='font-semibold text-black text-sm mb-2'>MON COMPTE</li>
            <li>Accéder à mon compte</li>
            <li>Ma liste d’envie</li>
            <li>Créer un compte</li>
            <li>Mot de passe oublié</li>
          </ul>
        </div>
        
      </div>
      <div className='flex flex-col '>
        <div>NOUS SUIVRE</div>
        <div className='flex justify-evenly'>
          <span>{twee}</span>
          <span>{insta}</span>
          <span>{link}</span>
        </div>
      </div>
    </div>
  )
}


const twee=<svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-7'>
<rect x="0.75" y="0.75" width="42.5" height="43.1471" rx="6.25" stroke="#393939" stroke-opacity="0.35" stroke-width="0.5"/>
<path d="M30.7386 17.7108C30.7525 17.912 30.7525 18.1132 30.7525 18.3144C30.7525 24.4503 26.2157 31.5204 17.9239 31.5204C15.3693 31.5204 12.9962 30.7587 11 29.4367C11.363 29.4798 11.7119 29.4942 12.0888 29.4942C14.1967 29.4942 16.137 28.7614 17.6865 27.5112C15.7043 27.468 14.0431 26.1316 13.4708 24.2923C13.75 24.3354 14.0292 24.3641 14.3223 24.3641C14.7272 24.3641 15.132 24.3066 15.5089 24.2061C13.4429 23.7749 11.8934 21.9069 11.8934 19.6508V19.5933C12.4936 19.9382 13.1916 20.1537 13.9314 20.1825C12.7169 19.349 11.9213 17.9264 11.9213 16.3169C11.9213 15.4547 12.1446 14.6644 12.5355 13.9746C14.755 16.7911 18.0913 18.6305 21.8324 18.8317C21.7626 18.4868 21.7207 18.1276 21.7207 17.7683C21.7207 15.2104 23.7309 13.1268 26.2296 13.1268C27.5278 13.1268 28.7004 13.6873 29.524 14.5926C30.543 14.3914 31.5202 14.0034 32.3857 13.4717C32.0506 14.5495 31.3387 15.4548 30.4035 16.0295C31.3109 15.929 32.1903 15.6703 32.9999 15.3111C32.3858 16.2307 31.618 17.0498 30.7386 17.7108Z" fill="#393939"/>
</svg>

const insta=<svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-7'>
<rect x="0.75" y="0.75" width="42.5" height="43.1471" rx="6.25" stroke="#393939" stroke-opacity="0.35" stroke-width="0.5"/>
<path d="M22.0046 17.2373C19.2718 17.2373 17.0675 19.5064 17.0675 22.3196C17.0675 25.1328 19.2718 27.4019 22.0046 27.4019C24.7374 27.4019 26.9417 25.1328 26.9417 22.3196C26.9417 19.5064 24.7374 17.2373 22.0046 17.2373ZM22.0046 25.6238C20.2386 25.6238 18.7948 24.142 18.7948 22.3196C18.7948 20.4972 20.2343 19.0154 22.0046 19.0154C23.7749 19.0154 25.2144 20.4972 25.2144 22.3196C25.2144 24.142 23.7706 25.6238 22.0046 25.6238ZM28.2952 17.0294C28.2952 17.6885 27.7796 18.2148 27.1437 18.2148C26.5034 18.2148 25.9921 17.684 25.9921 17.0294C25.9921 16.3748 26.5077 15.844 27.1437 15.844C27.7796 15.844 28.2952 16.3748 28.2952 17.0294ZM31.5651 18.2325C31.4921 16.6446 31.1397 15.238 30.0097 14.0791C28.8839 12.9202 27.5175 12.5575 25.9749 12.4779C24.3851 12.385 19.6198 12.385 18.03 12.4779C16.4917 12.5531 15.1253 12.9158 13.9952 14.0747C12.8651 15.2336 12.5171 16.6402 12.4397 18.2281C12.3495 19.8647 12.3495 24.7701 12.4397 26.4067C12.5128 27.9946 12.8651 29.4012 13.9952 30.5601C15.1253 31.719 16.4874 32.0817 18.03 32.1613C19.6198 32.2542 24.3851 32.2542 25.9749 32.1613C27.5175 32.0862 28.8839 31.7234 30.0097 30.5601C31.1355 29.4012 31.4878 27.9946 31.5651 26.4067C31.6554 24.7701 31.6554 19.8691 31.5651 18.2325ZM29.5112 28.1627C29.1761 29.0297 28.5272 29.6976 27.6808 30.047C26.4132 30.5646 23.4054 30.4451 22.0046 30.4451C20.6038 30.4451 17.5917 30.5601 16.3284 30.047C15.4862 29.702 14.8374 29.0341 14.4979 28.1627C13.9952 26.8579 14.1112 23.7616 14.1112 22.3196C14.1112 20.8776 13.9995 17.7769 14.4979 16.4765C14.8331 15.6095 15.4819 14.9416 16.3284 14.5922C17.596 14.0747 20.6038 14.1941 22.0046 14.1941C23.4054 14.1941 26.4175 14.0791 27.6808 14.5922C28.523 14.9372 29.1718 15.6051 29.5112 16.4765C30.014 17.7814 29.8979 20.8776 29.8979 22.3196C29.8979 23.7616 30.014 26.8623 29.5112 28.1627Z" fill="#393939"/>
</svg>

const link=<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-7'>
<rect x="0.75" y="1.07349" width="42.5" height="42.5" rx="6.25" stroke="#393939" stroke-opacity="0.35" stroke-width="0.5"/>
<g clip-path="url(#clip0_2481_1694)">
<path d="M16.6839 30.5731H12.693V17.7211H16.6839V30.5731ZM14.6863 15.968C13.4101 15.968 12.375 14.9109 12.375 13.6348C12.375 13.0218 12.6185 12.4339 13.052 12.0004C13.4854 11.567 14.0733 11.3235 14.6863 11.3235C15.2993 11.3235 15.8872 11.567 16.3206 12.0004C16.7541 12.4339 16.9976 13.0218 16.9976 13.6348C16.9976 14.9109 15.962 15.968 14.6863 15.968ZM31.6207 30.5731H27.6384V24.3168C27.6384 22.8258 27.6083 20.9137 25.5634 20.9137C23.4884 20.9137 23.1705 22.5336 23.1705 24.2094V30.5731H19.1838V17.7211H23.0115V19.4742H23.0673C23.6002 18.4645 24.9017 17.3988 26.8434 17.3988C30.8825 17.3988 31.625 20.0586 31.625 23.5133V30.5731H31.6207Z" fill="#393939"/>
</g>
<defs>
<clipPath id="clip0_2481_1694">
<rect width="22" height="22" fill="white" transform="translate(11 11.3235)"/>
</clipPath>
</defs>
</svg>

