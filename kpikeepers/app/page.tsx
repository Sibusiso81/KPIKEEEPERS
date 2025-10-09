"use client";
import Image from "next/image";
import Navbar from "./Custom/Navbar";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className=" flex-col overflow-hidden font-display">
<section
  className="w-screen h-screen bg-cover bg-center p-4 flex flex-col justify-between"
  style={{
    backgroundImage: "url('/hector-j-rivas-1FxMET2U5dU-unsplash.jpg')",
  }}
>
  {/* Top Navbar */}
  <div className="w-full max-w-7xl mx-auto p-2 border-[#eaeaea] grid grid-cols-3 items-center gap-4 rounded-md relative z-40">
    <div className="flex items-center">
      <ul className="flex space-x-4 text-white text-sm xl:text-lg">
        <li>ABOUT US</li>
        <li>WORK</li>
        <li>SERVICES</li>
        <li >
          PAGES 
        </li>
      </ul>
    </div>

    <div className="flex justify-center">
      <h1 className="font-bold text-[#eaeaea] text-lg">KPI KEEPERS</h1>
    </div>

    <div className="flex justify-end items-center space-x-2">
      <button aria-label="open menu" className="p-1">
        <Menu
          className={`cursor-pointer stroke-amber-50 ${
            isOpen ? "hidden" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </button>
      <button aria-label="close menu" className="p-1">
        <X
          className={`cursor-pointer ${isOpen ? "" : "hidden"}`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </button>
    </div>
  </div>

  {/* Hero Text at Bottom */}
  <div className="p-2 text-white  max-w-5xl pb-20 pl-28 space-y-4">
    <p className="text-md tracking-wide ">#WORLDS NUMBER ONE</p>
    <p className="max-w-2xl text-4xl font-semibold leading-snug">
      A team of forward-thinking HR consultants dedicated to transforming human potential into measurable business success.
    </p>
    <div className="flex space-x-3 mt-2 p-1.5">
      <div className="border-l-2 border-amber-50"></div>
      <p className="text-md max-w-md ">Where data, creativity, and strategy unite to shape the future of work.</p>
    </div>
  </div>

  <AnimatePresence mode="wait">
    {isOpen ? <Navbar /> : null}
  </AnimatePresence>
</section>

      <section className="w-screen h-screen">
        <div></div>
      </section>
    </main>
  );
}
