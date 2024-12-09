import Image from "next/image";
import SubHeader from "./(components)/SubHeader";
import Herro from "./(components)/Herro";
import Cards from "./(components)/Cards";
import Cards2 from "./(components)/Cards2";
import Track from "./(components)/Track";

export default function Home() {
  return <div>
    <SubHeader/>
    <Herro/>
    <Cards/>
    <Cards2/>
    <Track/>
  </div>;
}
