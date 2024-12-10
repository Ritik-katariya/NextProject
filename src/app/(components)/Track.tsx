/* eslint-disable */

import React from "react";
import Image from "next/image";
import icon1 from "@/img/icon1.png";
import icon2 from "@/img/icon2.png";
import icon3 from "@/img/icon3.png";
import icon4 from "@/img/icon4.png";
import  img1     from "@/img/img1.png" 
export default function Track() {
  const arr = [
    { icon: icon1, title: "Livraison & Reprise", desc: "Selon vos besoins" },
    { icon: icon2, title: "Nettoyage", desc: "Selon vos besoins" },
    { icon: icon3, title: "Commande Illimitée", desc: "Tout est possible" },
    {
      icon: icon4,
      title: "Trasprt & Enlèmnt",
      desc: "On s’occupe de tout.",
    },
  ];
  return (
    <div className="px-6 flex flex-col bg-[#fffafc] py-20 mt-10 gap-12">
      <div className="text-center text-black font-semibold text-3xl">
        <h1>On s’occupe de <span className="text-[#5cd2dd]">tout</span></h1>
        <p className="text-xs text-gray-400 font-normal">Office ipsum you must be muted. It meeting commitment busy pain.</p>
      </div>
      <div className="flex justify-center items-center text-center text-xs font-semibold text-amber-950">
        <span>{trackCompo(arr[0])}</span>
        <span className="border-[1px] w-24 border-gray-300 mb-8"></span>
        <span>{trackCompo(arr[1])}</span>
        <span className="border-[1px] w-24 border-gray-300 mb-8"></span>


        <span>{trackCompo(arr[2])}</span>
        <span className="border-[1px] w-24 border-gray-300 mb-8"></span>


        <span >{trackCompo(arr[3])}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  ">
       <div> <Image src={img1} alt="banner"/></div>
       <div className="bg-[#fff3f9] py-8  text-start text-xs text-gray-400 pl-6 flex flex-col justify-evenly rounded-xl">
        <div className="text-3xl font-medium text-black    ">S'inscrire & économiser
        <span className="text-[#5cd2dd] "> 10%</span></div>
        <div className="text-[10px]">Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn't. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.</div>
        <div className="flex gap-5 items-center ">
            <input type="text" placeholder="john@doe.com" className="w-3/5 h-9 px-3 border-2 rounded-md" />
            <button type="submit" className="w-1/5 border-2 border-[#44a6af] bg-[#5cd2dd] text-white h-10 rounded uppercase text-xl">S’inscrire </button>
        </div>
       </div>
      </div>
    </div>
  );
}

function trackCompo(data: any) {
  return (
    <div >
      <Image src={data.icon} alt="img" />
      <h3>{data.title}</h3>
      <p className="text-[10px] font-normal text-gray-400">{data.desc}</p>
    </div>
  );
}



