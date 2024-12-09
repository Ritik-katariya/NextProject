import React from 'react'
import Image from 'next/image'
import logo from '@/img/logo.png'
import dp from '@/img/dp.png'
export const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between px-8 w-full items-center cursor-pointer'>
            <a href="/">
            <Image src={logo} alt='logo' className='w-24 '/>
            </a>
            <div className='relative'><input type="text" name="Search" id="Search" placeholder='Rechercher un produit' className='w-[550px] h-8  bg-gray-100 pl-6 rounded-md'/><div className='absolute top-1 right-4'>{search}</div></div>
          
          <ul className='flex justify-between items-center gap-10'>
            <li className='flex justify-evenly items-center gap-1'>
                <span>{bulb}</span>
                Inspirations</li>
            <li className='flex justify-evenly items-center gap-1'>
                <span >{heart}</span>
                Mes favoris</li>
            <li >
                <button className='bg-[#0093d0] w-24 h-9 rounded-md text-white font-mono flex justify-evenly items-center'> <span >{shoping}</span>Panier</button>
            </li>
            <li className='flex '>
                <Image src={dp} alt='dp' className='w-10'></Image>
                <select className='w-4'>
                    <option value="default">default</option>
                    <option value="profile1">Profile 1</option>
                    <option value="profile2">Profile 2</option>
                    <option value="profile3">Profile 3</option>
                </select>
            </li>
          </ul>

        </nav>
  
    </div>
  )
}

const shoping=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none" className='text-white'>
<path d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H19M6 6.5H7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
<path d="M10.5 7C10.5 7 11.5 7 12.5 9C12.5 9 15.6765 4 18.5 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
<path d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<circle cx="10.5" cy="20.5" r="1.5" stroke="currentColor" stroke-width="1.5" />
<circle cx="17.5" cy="20.5" r="1.5" stroke="currentColor" stroke-width="1.5" />
</svg>
const heart=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none" className='w-4'>
<path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>
const bulb=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none" className='w-4'>
<path d="M5.14286 14C4.41735 12.8082 4 11.4118 4 9.91886C4 5.54539 7.58172 2 12 2C16.4183 2 20 5.54539 20 9.91886C20 11.4118 19.5827 12.8082 18.8571 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
<path d="M7.38287 17.0982C7.291 16.8216 7.24507 16.6833 7.25042 16.5713C7.26174 16.3343 7.41114 16.1262 7.63157 16.0405C7.73579 16 7.88105 16 8.17157 16H15.8284C16.119 16 16.2642 16 16.3684 16.0405C16.5889 16.1262 16.7383 16.3343 16.7496 16.5713C16.7549 16.6833 16.709 16.8216 16.6171 17.0982C16.4473 17.6094 16.3624 17.8651 16.2315 18.072C15.9572 18.5056 15.5272 18.8167 15.0306 18.9408C14.7935 19 14.525 19 13.9881 19H10.0119C9.47495 19 9.2065 19 8.96944 18.9408C8.47283 18.8167 8.04281 18.5056 7.7685 18.072C7.63755 17.8651 7.55266 17.6094 7.38287 17.0982Z" stroke="currentColor" stroke-width="1.5" />
<path d="M15 19L14.8707 19.6466C14.7293 20.3537 14.6586 20.7072 14.5001 20.9866C14.2552 21.4185 13.8582 21.7439 13.3866 21.8994C13.0816 22 12.7211 22 12 22C11.2789 22 10.9184 22 10.6134 21.8994C10.1418 21.7439 9.74484 21.4185 9.49987 20.9866C9.34144 20.7072 9.27073 20.3537 9.12932 19.6466L9 19" stroke="currentColor" stroke-width="1.5" />
<path d="M12 16V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>

const search=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none" className='w-4'>
<path d="M17.5 17.5L22 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
<path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg>