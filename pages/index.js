/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import img from "../assets/inside.jpg"
import Image from 'next/image'
import insta from '../assets/insta.png'
import Head from 'next/head'

const Index = () => {
  return (
    <>
    <Head>
        <title>HOME | HITian Inside</title>
    </Head>
    <section className='back'>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full mt-20">
            <h1 className="title-font sm:text-6xl text-xl mb-4 font-medium text-gray-900">Who Are We?</h1>
            <p className="mb-8 leading-relaxed text-2xl mt-3">Media Activist at Haldia Institute of Technology, providing various information related to Workshops, Events, Fests and all other things occurring inside the institute premises. Besides, the team also conducts various Events (many online competitions), Mini-Fest (like Extravaganza) and many more.</p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className=" lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <a href='https://www.instagram.com/p/CdQjbb9B_9r/'><Image height={500} width={1000} className="object-cover object-center rounded" alt="hero" src={insta} /></a>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Check Out Our Posts on Facebook and Instagram
            </h1>
            <p className='text-lg'>We post daily on Instagram about Almanac and on Facebook about any latest events going on in the college and around the world.</p>
            <div className="flex justify-center">
              <a href="https://www.instagram.com/hitianinside/?hl=en"><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Follow Now</button></a>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Check Out Our Content On Youtube
            </h1>
            <p className='text-lg'>We also post on Youtube about stuff like live webinars or information about any events.</p>
            <div className="flex justify-center">
              <a href='https://www.youtube.com/channel/UCbIfnsMFKnkONyT8QCPifbw'><button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Subscribe Now</button></a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <iframe width="400" height="315" src="https://www.youtube.com/embed/r-gPNwKxRiw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.973946979336!2d88.07002391495026!3d22.05059208545378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02f0bd0fcacc69%3A0x409c7ac845fe6280!2sHaldia%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1652234209233!5m2!1sen!2sin" width="100%" height="100%" ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Submit</button>
          </div>
        </div>
      </section>

      </section>

      

    </>
  )
}

export default Index