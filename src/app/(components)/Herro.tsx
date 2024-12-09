"use client";
import Image from "next/image";
import { useState } from "react";
import tab1 from "@/img/tab1.png";

const Herro = () => {
  const [quantity, setQuantity] = useState(1);
  const [val,setval]=useState(1);

  return (
   <div className="px-6">
     <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-5xl mx-auto py-8 px-4 md:px-8">
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0 md:mr-8">
        <Image src={tab1} alt="Cheese Appareil" className="w-full h-auto" />
      </div>

      {/* Details */}
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl font-bold mb-4">
          Cheese - appareil à raclette 1/2 roue
        </h1>
        <p className="text-gray-700 mb-6">39,50€ /piece</p>

        <div className="mb-6">
          <p className="font-bold mb-2">Size:</p>
          <div className="flex items-center space-x-4">
            <button
              className={`px-4 py-2 rounded-md ${
                quantity === 20
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setQuantity(20)}
            >
              20 cm
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                quantity === 50
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setQuantity(50)}
            >
              50 cm
            </button>
          </div>
        </div>

        <div className="mb-6">
          <p className="font-bold mb-2">Description:</p>
          <p className="text-gray-700">
            Location appareil à raclette - Raclette traditionnelle 1/2 roue
            Réglable en hauteur Appareil à raclette professionnel Boîtier de
            chauffe horizontal réglable en hauteur  
          </p>
          <div>220V</div>
          <div>900W</div>
        </div>

       <div className="flex"><div
       className="cursor-pointer flex gap-4 text-xl border-2 border-gray-300 w-24 justify-center rounded-md m-3 ">
        <span onClick={()=>setval(val-1)} >-</span>
        <span>{val}</span>
        <span onClick={()=>setval(val+1)}>+</span>
       </div>
       <button className="bg-[#1cc6c4] text-white py-3 px-6 w-4/5 rounded-md hover:bg-[rgb(56,187,185)] transition-colors">
          Ajouter au panier{" "}
        </button>

       </div>
       
      <div>

        
      </div>
      </div>
    </div>
    <div  className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
    <div  className="text-xs text-gray-400">
          <h1 className="text-lg text-black">Description produit</h1>
          <span>
            Festi vous propose à la location un/une "Jewel – grand couteau/10pc"
            pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit
            pour votre mariage, une fête d'anniversaire ou du personnel, ce
            produit a fait l'objet d'une sélection rigoureuse par notre équipe.
            Il est en location chez nous sous la référence "VAJGC". Nous sommes
            à votre disposition pour que les événements de nos clients, même en
            last-minute, soient toujours une réussite. Vous pourrez trouver tout
            une série d'autre produit à louer de ce type dans la catégorie "Art
            de la Table".
          </span>
        </div>
         <div>
         <div className="mb-6 ">
            <p className="font-bold mb-2 border-2 h-12 py-2 px-2 border-gray-200 flex justify-between">livraisonsTitle <p>+</p></p>
            
          </div>

          <div className="mb-6">
            <p className="font-bold mb-2 border-2 h-12 py-2 px-2 border-gray-200 flex justify-between">questionsTitle <p>+</p></p>
          </div>
         </div>
        </div>
   </div>
  );
};

export default Herro;
