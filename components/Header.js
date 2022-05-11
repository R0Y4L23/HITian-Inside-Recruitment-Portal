import React from 'react'
import Image from "next/image";
import img from "../assets/inside.jpg"
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
  return (
    <header className="text-gray-600 body-font border-b-2 border-black">
        <div className="container mx-auto flex p-5 flex-col md:flex-row items-center">
         <Image src={img} height={60} width={60}/>
          <nav className="md:ml-auto flex items-center text-base justify-center pt-3">
            <p className="mr-10 hover:text-gray-900 text-2xl cursor-pointer" onClick={()=>{router.push("/")}}>Home</p>
            <p className="mr-10 hover:text-gray-900 text-2xl cursor-pointer" onClick={()=>{router.push("/Recruitment")}}>Recruitment</p>
            <p></p>
          </nav>
        </div>
      </header>
  )
}

export default Header