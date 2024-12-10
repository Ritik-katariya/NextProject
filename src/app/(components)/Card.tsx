/* eslint-disable */

import React from "react";
import Image from "next/image";
import tab3 from "@/img/tab3.png";
export default function Card() {
  return (
    <div className="md:w-[260px] w-[350px] px-4 text-xs">
      <div className="flex flex-col">
        <div  className="relative"> 
           <div className=" absolute top-2"> 
            <div className="flex
            justify-evenly w-full items-center gap-20 px-2">
           <span>{heart}</span>
           <span>Art de la table</span></div></div>
        </div>
        <Image src={tab3} alt="pic" className=" rounded-md md:w-[250px] w-[340px]"></Image>
      </div>
      <div className="flex justify-between items-center text-sm font-serif">
        <span className="font-semibold">Title</span>
        <span>0€</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-[9px]">0,35€/Pièce · RÉF : VABGN5</span>
        <span>20 pièces</span>
      </div>
    </div>
  );
}

const heart=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none" className="w-4">
<path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>
