import React from 'react'
import Image from "next/image";
import img from "../assets/inside.jpg"

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-mar">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <Image src={img} height={60} width={60}/>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 HITian Inside —
            <a href="https://www.instagram.com/hitianinside/?hl=en" className="text-gray-600 ml-1 hover:text-red-800" rel="noopener noreferrer" target="_blank">@hitianinside</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500 hover:text-red-800" href="https://www.facebook.com/HITian.Inside/">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500 hover:text-red-800" href="https://www.instagram.com/hitianinside/?hl=en">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            
          </span>
        </div>
      </footer>
  )
}

export default Footer