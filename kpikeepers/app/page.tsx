// ...existing code...
"use client";
import Navbar from "./Custom/Navbar";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Service from "./Custom/Service";
import Footer from "./Custom/Footer";
import Btn from "./Custom/Btn";
import { Toaster } from "sonner";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="flex-col overflow-hidden font-display space-y-24">
     
      <section
        className="w-screen space-y-24 md:space-y-0 md:space-x-0 md:h-screen bg-cover bg-center p-4 flex flex-col justify-between"
        style={{
          backgroundImage: "url('/hector-j-rivas-1FxMET2U5dU-unsplash.jpg')",
        }}
      >
        {/* Top Navbar */}
        <div className="w-full max-w-7xl mx-auto p-2 border-[#eaeaea] grid grid-cols-2 lg:grid-cols-3 items-center gap-4 rounded-md relative z-40">
          <div className="hidden lg:flex items-center">
            <ul className="flex items-end space-x-4 text-white text-sm xl:text-md">
             
              <Btn name="ABOUT US"></Btn>
              <li>WORK</li>
              <li>SERVICES</li>
              <li className="flex items-end space-x-1.5 ">
                PAGES <ChevronDown />
              </li>
            </ul>
          </div>

          <div className="flex lg:justify-center ">
            <h1 className="font-bold text-[#eaeaea] text-lg">KPI KEEPERS</h1>
          </div>

          <div className="flex text-nowrap justify-end items-center space-x-8">
            <p className="text-white text-sm xl:text-md">CONTACT US</p>
            <button
              aria-label="open menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="p-1"
            >
              <Menu className={`cursor-pointer stroke-amber-50 ${isOpen ? "hidden" : ""}`} />
            </button>
            <button
              aria-label="close menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="p-1"
            >
              <X className={`cursor-pointer ${isOpen ? "" : "hidden"}`} />
            </button>
          </div>
        </div>

        {/* Hero Text at Bottom */}
        <div className="w-full max-w-7xl flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between">
          <div className="p-2 text-white max-w-5xl md:pb-10 lg:pb-16 xl:pb-20 lg:pl-16 xl:pl-28 space-y-4">
            <p className="text-sm md:text-md tracking-wide ">#WORLDS NUMBER ONE</p>
            <p className="md:max-w-lg lg:max-w-2xl text-xl md:text-2xl lg:text-4xl font-semibold leading-snug">
              A team of forward-thinking HR consultants dedicated to transforming human potential into measurable business success.
            </p>
            <div className="flex space-x-3 mt-2 p-1.5">
              <div className="border-l-2 border-amber-50"></div>
              <p className="text-md md:max-w-sm lg:max-w-md">
                Where data, creativity, and strategy unite to shape the future of work.
              </p>
            </div>
          </div>
          <div className="w-52 h-fit p-0.5 rounded-4xl flex items-center border-2 border-neutral-700 space-x-2 place-self-end md:mb-10 lg:mb-24 bg-white">
            <div className="rounded-full bg-black p-2">
              <ArrowUpRight className="stroke-white" />
            </div>
            <p className="text-black">OUR SOLUTIONS </p>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isOpen ? <Navbar /> : null}
        </AnimatePresence>
      </section>

      <section className="w-screen h-fit md:h-screen flex-col items-center justify-center p-10 space-y-24">
        <div className="flex w-full max-w-7xl mx-auto items-center justify-center space-x-4">
          {/* Left box */}
          <div className="border-2 border-neutral-800 flex items-center justify-center w-10 h-10">
            <p className="font-semibold text-neutral-800">A</p>
          </div>

          {/* Text and line */}
          <div className="flex items-center w-full space-x-2">
            <h2 className="text-lg font-semibold text-neutral-800 whitespace-nowrap">ABOUT US</h2>
            <div className="flex-1 border-t border-neutral-800"></div>
          </div>
        </div>

        <div className="flex flex-col space-y-10 md:space-y-0 md:grid md:grid-cols-2 max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="space-y-10 flex-col">
            <div className="space-y-10 max-w-md xl:max-w-lg">
              <h2 className="text-3xl lg:text-4xl">Discover Our Journey to Human Capital Excellence</h2>

              <div className="space-y-14 text-sm xl:text-md">
                <p>
                  KPI Keepers unites a team of aspiring HR professionals dedicated to building the workplaces of tomorrow. We align people, culture, and performance to unlock lasting organizational value. Our evidence-based approach ensures that every HR initiative drives measurable impact.
                </p>
                <p>
                  We combine strategy, data, and creativity to redefine how people and business success intersect. Our mission is to design forward-thinking HR strategies that move organizations into the future.
                </p>
              </div>
            </div>
            <div className="w-44 p-0.5 rounded-4xl flex items-center border-2 border-neutral-700 space-x-2">
              <div className="rounded-full bg-black p-2">
                <ArrowUpRight className="stroke-white" />
              </div>
              <p className="text-black">ABOUT US </p>
            </div>
          </div>

          {/* About Images */}
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Image Card 1 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-[280px] md:w-[300px] h-[360px] md:h-[400px] relative overflow-hidden">
                <Image
                  src="/ant-rozetsky-HXOllTSwrpM-unsplash.jpg"
                  alt="About Page Image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1 place-self-start">
                <h1 className="font-bold text-4xl text-neutral-800">100%</h1>
                <p className="text-sm text-neutral-500 max-w-[200px]">Projects successfully done this year</p>
              </div>
            </div>

            {/* Image Card 2 */}
            <div className="flex flex-col items-center space-y-4 md:hidden  lg:flex">
              <div className="w-[280px] md:w-[300px] h-[360px] md:h-[400px] relative overflow-hidden">
                <Image
                  src="/austin-distel-wD1LRb9OeEo-unsplash.jpg"
                  alt="About Page Image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1 place-self-start">
                <h1 className="font-bold text-4xl text-neutral-800">5+</h1>
                <p className="text-sm text-neutral-500 max-w-[200px]">Years skillset on as Strategic Human Resource Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-screen h-fit p-10 flex flex-col space-y-10">
        <div className="flex w-full max-w-7xl mx-auto items-center justify-center space-x-4">
          {/* Left box */}
          <div className="border-2 border-neutral-800 flex items-center justify-center w-10 h-10">
            <p className="font-semibold text-neutral-800">B</p>
          </div>

          {/* Text and line */}
          <div className="flex items-center w-full space-x-2">
            <h2 className="text-lg font-semibold text-neutral-800 whitespace-nowrap">OUR PROJECTS</h2>
            <div className="flex-1 border-t border-neutral-800"></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full md:items-center space-y-4 md:space-y-0 md:justify-between max-w-7xl mx-auto">
          <div>
            <div className="flex flex-col space-y-3">
              <h2 className="text-4xl text-black"> Our Projects </h2>
              <p className="text-neutral-700 md:max-w-lg lg:max-w-2xl">
                Discover our portfolio of completed projects showcasing a variety of styles and functionalities
              </p>
            </div>
          </div>
          <div className="w-56 p-0.5 rounded-4xl flex items-center border-2 border-neutral-700 space-x-2">
            <div className="rounded-full bg-black p-2">
              <ArrowUpRight className="stroke-white" />
            </div>
            <p className="text-black">VIEW ALL PROJECTS </p>
          </div>
        </div>

        <div className="flex flex-col space-y-10">
  {/* === Project Card 1 === */}
  <Link href="/Project" prefetch={false} className="block">
    <div className="grid md:grid-cols-3 gap-6 lg:gap-10 mx-auto w-full xl:max-w-7xl min-h-[24rem] lg:min-h-[28rem]">
      {/* Left Section */}
      <div className="flex flex-col justify-between p-4 space-y-6">
        <div>
          <div className="flex space-x-1 text-sm text-gray-700">
            <p>Cupertino, CA</p>
            <span>-</span>
            <p>2024</p>
          </div>
          <h2 className="text-2xl font-semibold text-black mt-3 w-full md:w-52">
            Organizational Culture & Change
          </h2>
        </div>

        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium cursor-pointer hover:underline">
            READ MORE
          </p>
          <p>...</p>
        </div>
      </div>

      {/* Image Section */}
      <div className="bg-[url('/business-conference-vr-office.jpg')] bg-cover bg-center h-48 md:h-auto"></div>

      {/* Right Section */}
      <div className="flex flex-col justify-between p-4 space-y-6">
        <p>
          Apple’s rapid global expansion had created distinct subcultures
          across teams, leading to reduced collaboration and inconsistent
          leadership behaviors.
        </p>

        <div className="flex flex-col space-y-3">
          <div className="flex justify-between">
            <p>Service</p>
            <p className="w-3/4 font-bold text-right">
              Leadership Alignment & Culture Transformation
            </p>
          </div>
          <div className="flex justify-between">
            <p>Solution</p>
            <p className="w-3/4 font-bold text-right">
              Cultural Alignment Program
            </p>
          </div>
          <div className="flex justify-between">
            <p>Outcome</p>
            <p className="w-3/4 font-bold text-right">
              25% increase in cross-team collaboration metrics
            </p>
          </div>
        </div>
      </div>
    </div>
  </Link>

  {/* === Project Card 2 === */}
  <Link href="/Project" prefetch={false} className="block">
    <div className="grid md:grid-cols-3 gap-6 lg:gap-10 mx-auto w-full xl:max-w-7xl min-h-[24rem] lg:min-h-[28rem]">
      <div className="flex flex-col justify-between p-4 space-y-6">
        <div>
          <div className="flex space-x-1 text-sm text-gray-700">
            <p>London, UK</p>
            <span>-</span>
            <p>2024</p>
          </div>
          <h2 className="text-2xl font-semibold text-black mt-3 w-full md:w-52">
            Workforce Engagement Strategy
          </h2>
        </div>

        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium cursor-pointer hover:underline">
            READ MORE
          </p>
          <p>...</p>
        </div>
      </div>

      <div className="bg-[url('/campaign-creators-qCi_MzVODoU-unsplash.jpg')] bg-cover bg-center h-48 md:h-auto"></div>

      <div className="flex flex-col justify-between p-4 space-y-6">
        <p>
          A global retailer sought to revitalize employee engagement and
          collaboration following restructuring.
        </p>

        <div className="flex flex-col space-y-3">
          <div className="flex justify-between">
            <p>Service</p>
            <p className="w-3/4 font-bold text-right">
              Engagement & Leadership Development
            </p>
          </div>
          <div className="flex justify-between">
            <p>Solution</p>
            <p className="w-3/4 font-bold text-right">
              Cross-functional Team Coaching
            </p>
          </div>
          <div className="flex justify-between">
            <p>Outcome</p>
            <p className="w-3/4 font-bold text-right">
              30% uplift in internal engagement scores
            </p>
          </div>
        </div>
      </div>
    </div>
  </Link>

  {/* === Project Card 3 === */}
  <Link href="/Project" prefetch={false} className="block">
    <div className="grid md:grid-cols-3 gap-6 lg:gap-10 mx-auto w-full xl:max-w-7xl min-h-[24rem] lg:min-h-[28rem]">
      <div className="flex flex-col justify-between p-4 space-y-6">
        <div>
          <div className="flex space-x-1 text-sm text-gray-700">
            <p>New York, NY</p>
            <span>-</span>
            <p>2024</p>
          </div>
          <h2 className="text-2xl font-semibold text-black mt-3 w-full md:w-52">
            Digital HR Transformation
          </h2>
        </div>

        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium cursor-pointer hover:underline">
            READ MORE
          </p>
          <p>...</p>
        </div>
      </div>

      <div className="bg-[url('/austin-distel-wD1LRb9OeEo-unsplash.jpg')] bg-cover bg-center h-48 md:h-auto"></div>

      <div className="flex flex-col justify-between p-4 space-y-6">
        <p>
          Implementing AI-driven HR solutions to streamline performance
          management and employee analytics.
        </p>

        <div className="flex flex-col space-y-3">
          <div className="flex justify-between">
            <p>Service</p>
            <p className="w-3/4 font-bold text-right">
              Digital HR Strategy
            </p>
          </div>
          <div className="flex justify-between">
            <p>Solution</p>
            <p className="w-3/4 font-bold text-right">
              HR Analytics Integration
            </p>
          </div>
          <div className="flex justify-between">
            <p>Outcome</p>
            <p className="w-3/4 font-bold text-right">
              20% reduction in admin workload
            </p>
          </div>
        </div>
      </div>
    </div>
  </Link>
</div>

      </section>

      <Service />
      <Footer />
    </main>
  );
}
// ...existing code...