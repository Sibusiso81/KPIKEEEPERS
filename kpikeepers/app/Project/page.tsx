"use client";
import { AnimatePresence } from "framer-motion";
import {
  Calendar,
  ChevronDown,
  Grid,
  MapPin,
  Maximize2,
  Menu,
  Minimize2,
  PencilRuler,
  UserRound,
  X,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../Custom/Navbar";
import { ImageSlider } from "../Custom/ImageSlider";

function page() {
  const [isOpen, setIsOpen] = useState(false);
   const [isPresentationMode, setIsPresentationMode] = useState(false)

   const sampleImages =[
    { src: "/Screenshot 2025-10-14 014828.png", alt: "Slide 1", caption: "Introduction to KickStart Solutions" },
    { src: "/Screenshot 2025-10-14 014849.png", alt: "Slide 2", caption: "Our Hybrid Work Model" },
   ]

  return (
     <section className={`w-full min-h-screen flex flex-col space-y-10 font-display overflow-x-hidden overflow-y-auto ${isPresentationMode? '':''}`}>
      {isPresentationMode && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col h-screen">
  {/* Exit button */}
  <div className="flex justify-end p-4">
    <button
      onClick={() => setIsPresentationMode(false)}
      className="text-white hover:text-neutral-300 transition-colors flex items-center gap-2 bg-neutral-800 px-4 py-2 rounded-lg"
      aria-label="Exit presentation mode"
    >
      <Minimize2 className="w-5 h-5" />
      <span className="text-sm font-medium">Exit Presentation</span>
    </button>
  </div>

  {/* Optimized iframe container */}
  <div className="flex-1 w-full">
    <iframe
      src="/The_KPI_Keepers.pdf[1].pdf"
      className="w-full h-full border-none outline-none"
      title="Presentation in fullscreen mode"
      allowFullScreen
      loading="lazy"
      
    />
  </div>
</div>

      )}

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
            <button aria-label="open menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)} className="p-1">
              <Menu className={`cursor-pointer stroke-black ${isOpen ? "hidden" : ""}`} />
            </button>
            <button aria-label="close menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)} className="p-1">
              <X className={`cursor-pointer ${isOpen ? "mr-10 stroke-black" : "hidden"}`} />
            </button>
          </div>
        </div>
        <div className="w-full border-b-2 border-b-neutral-300" />
      </div>
      <AnimatePresence mode="wait">{isOpen ? <Navbar /> : null}</AnimatePresence>
      <div className="p-5 space-y-6 flex flex-col justify-center mx-auto w-full max-w-7xl">
        <div className="flex w-full items-center justify-center space-x-4">
          {/* Left box */}
          <div className="border-2 border-neutral-800 flex items-center justify-center w-10 h-10">
            <p className="font-semibold text-neutral-800">W</p>
          </div>

          {/* Text and line */}
          <div className="flex items-center w-full space-x-2">
            <h2 className="text-lg font-semibold text-neutral-800 whitespace-nowrap">WORK</h2>
            <div className="flex-1 border-t border-neutral-800"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 space-y-3">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-5xl lg:w-1/2 font-medium leading-tight">
            Hybrid HR Blueprint for KickStart Solutions
          </h2>
          <p className="text-neutral-500 md:text-md lg:text-lg lg:w-1/2">
            A comprehensive HR strategy ensuring equity, performance, and engagement across a hybrid workforce.
          </p>
        </div>

        <div className="relative overflow-hidden w-full h-[200px] md:h-[400px] lg:h-[500px] max-w-7xl mx-auto">
          <Image src="/ant-rozetsky-HXOllTSwrpM-unsplash.jpg" alt="About Page Image" fill className="object-cover" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-3">
            <UserRound />
            <div className="flex flex-col text-sm">
              <h3>CLIENT</h3>
              <p className="text-neutral-950">KickStart Solutions</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <PencilRuler />
            <div className="flex flex-col text-sm">
              <h3>SERVICE</h3>
              <p>Consultancy</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin />
            <div className="flex flex-col text-sm">
              <h3 className="text-neutral-500">LOCATION</h3>
              <p>Pietermaritzburg / Hybrid</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Grid />
            <div className="flex flex-col text-sm">
              <h3>CATEGORY</h3>
              <p>Strategy</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Calendar />
            <div className="flex flex-col text-sm">
              <h3>COMPLETED</h3>
              <p>2025</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6 md:p-10 space-y-8 flex flex-col justify-center">
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-medium">Project Overview</h2>
          <p className="text-neutral-500">
            A forward-thinking human resource strategy crafted for a rapidly growing VR tourism startup redefining
            travel through immersive technology. This blueprint establishes a people-first, data-driven foundation
            designed to support hybrid collaboration, innovation, and long-term growth.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-medium">KPI Keepers Vision</h2>
          <p className="text-neutral-500">
            Guided by the belief that people and technology should evolve together, the KickStart HR Blueprint
            reimagines the employee experience for the digital age. Every policy, platform, and initiative is designed
            to empower individuals, strengthen teams, and build an adaptive, resilient workforce capable of driving
            transformation in South Africa's emerging tech landscape.
          </p>
          <div className="flex space-x-3 mt-2 p-1.5 font-bold">
            <div className="border-l-2 border-neutral-950"></div>
            <p className="text-md md:text-lg lg:text-xl max-w-7xl">
              "Empowering people to innovate, connect, and grow — wherever they work."
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-medium">Presentation</h2>
            <button
              onClick={() => setIsPresentationMode(true)}
              className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
              aria-label="Enter presentation mode"
            >
              <Maximize2 className="w-4 h-4" />
              <span className="text-sm font-medium">Presentation Mode</span>
            </button>
          </div>
          <div className="relative w-full h-[200px] md:h-[400px] lg:h-[600px] rounded-lg overflow-hidden">
            <iframe
              src="/The_KPI_Keepers.pdf[1].pdf"
              className="absolute inset-0 w-full h-full"
              title="KickStart Solutions HR Blueprint Presentation"
            >
              This is an embedded{" "}
              <a target="_blank" href="https://office.com" rel="noreferrer">
                Microsoft Office
              </a>{" "}
              presentation, powered by{" "}
              <a target="_blank" href="https://office.com/webapps" rel="noreferrer">
                Office
              </a>
              .
            </iframe>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-medium">Key Features</h2>
          <p className="text-neutral-500">
            Through the KickStart Solutions HR Blueprint, we champion a hybrid model of work that values flexibility,
            inclusion, and continuous learning.
          </p>
          <ul className="list-disc list-inside flex flex-col gap-y-2 text-neutral-700">
            <li>
              A unified HR framework aligning KickStart's hybrid workforce with its vision for growth, innovation, and
              long-term sustainability.
            </li>
            <li>
              A culture-first strategy that fosters inclusion, engagement, and belonging across remote and in-office
              teams.
            </li>
            <li>A cloud-based HR system empowering informed, agile, and transparent people management.</li>
            <li>
              A virtual onboarding and training experience that connects, equips, and inspires employees from day one.
            </li>
            <li>
              A holistic compensation and wellness model that promotes fairness, resilience, and work-life balance in a
              hybrid environment.
            </li>
          </ul>
        </div>
        <ImageSlider images={sampleImages} />
      </div>
    </section>
  );
}

export default page;
