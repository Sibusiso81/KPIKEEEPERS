import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {  ChevronDown,Menu, X } from 'lucide-react';
import Image from 'next/image';
import Navbar from '../Custom/Navbar';

function page() {
      const [isOpen, setIsOpen] = useState(false);
    
  return (
    <section className='w-full min-h-screen flex flex-col space-y-10 font-display overflow-x-hidden overflow-y-auto'>
         <div className="flex-col space-y-4">
        <div className="w-full max-w-7xl  mx-auto p-6 grid grid-cols-2 lg:grid-cols-3 items-center gap-4 relative z-40">
          <div className="hidden lg:flex items-center">
            <ul className="flex flex-wrap items-end space-x-4 text-sm xl:text-md">
              <li>ABOUT US</li>
              <li>WORK</li>
              <li>SERVICES</li>
              <li className="flex items-end space-x-1.5">
                PAGES <ChevronDown />
              </li>
            </ul>
          </div>

          <div className="flex lg:justify-center">
            <h1 className="font-bold text-lg xl:text-xl">KPI KEEPERS</h1>
          </div>

          <div className="flex flex-nowrap justify-end self-end items-center space-x-8">
            <p className="text-sm xl:text-md">CONTACT US</p>
            <button
              aria-label="open menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="p-1"
            >
              <Menu
                className={`cursor-pointer stroke-black ${
                  isOpen ? "hidden" : ""
                }`}
              />
            </button>
            <button
              aria-label="close menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="p-1"
            >
              <X
                className={`cursor-pointer ${
                  isOpen ? "mr-10 stroke-black" : "hidden"
                }`}
              />
            </button>
          </div>
        </div>
        <div className="w-full border-b-2 border-b-neutral-300" />
      </div>
      <AnimatePresence mode="wait">
        {isOpen ? <Navbar /> : null}
      </AnimatePresence>
      <div className="p-5 space-y-6 flex flex-col justify-center mx-auto w-full max-w-7xl">
        <div className="flex w-full items-center justify-center space-x-4">
          {/* Left box */}
          <div className="border-2 border-neutral-800 flex items-center justify-center w-10 h-10">
            <p className="font-semibold text-neutral-800">W</p>
          </div>

          {/* Text and line */}
          <div className="flex items-center w-full space-x-2">
            <h2 className="text-lg font-semibold text-neutral-800 whitespace-nowrap">
              WORK
            </h2>
            <div className="flex-1 border-t border-neutral-800"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 space-y-3">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-5xl lg:w-1/2 font-medium leading-tight">
            Hybrid HR Blueprint for KickStart Solutions
          </h2>
          <p className="text-neutral-500 md:text-md lg:text-lg lg:w-1/2">
            A comprehensive HR strategy ensuring equity, performance, and
            engagement across a hybrid workforce.
          </p>
        </div>

        <div className="relative overflow-hidden w-full h-[200px] md:h-[400px] lg:h-[500px] max-w-7xl mx-auto">
          <Image
            src="/ant-rozetsky-HXOllTSwrpM-unsplash.jpg"
            alt="About Page Image"
            fill
            className="object-cover"
          />
        </div>

        
      </div>
    </section>
  )
}

export default page