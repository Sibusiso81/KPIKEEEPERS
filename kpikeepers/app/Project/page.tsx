"use client";
import { motion } from "framer-motion"

import { AnimatePresence } from "framer-motion";
import {
  Calendar,
  ChevronDown,
  Grid,
  MapPin,
  Menu,
  PencilRuler,
  UserRound,
  X,
  TrendingUp,
  Users,
  Target,
  Award,
  Shield,
  Heart,
  Brain,
  Zap,
  Minimize2,
} from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../Custom/Navbar";
import { ImageSlider } from "../Custom/ImageSlider";
import Footer from "../Custom/Footer";
import { Card, CardContent,CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Chart1 } from "../Custom/Chart1";
import { Chart2 } from "../Custom/Chart2";
import { Chart3 } from "../Custom/Chart3";
 const hrFunctions = [
    {
      icon: Users,
      title: "Recruitment & Staffing",
      description: "Hybrid-ready talent acquisition with AI-driven screening and inclusive hiring practices",
      metrics: { efficiency: "+45%", diversity: "+32%" },
      color: "text-chart-1",
    },
    {
      icon: Award,
      title: "Compensation & Benefits",
      description: "Competitive packages with home office allowances, UPS systems, and wellness programs",
      metrics: { satisfaction: "92%", retention: "+28%" },
      color: "text-chart-2",
    },
    {
      icon: Brain,
      title: "Training & Development",
      description: "Immersive VR-based learning with virtual masterclasses and project-based development",
      metrics: { completion: "94%", skillGrowth: "+67%" },
      color: "text-chart-3",
    },
    {
      icon: Heart,
      title: "Employee Relations",
      description: "VR Connect Rooms and empathy training fostering belonging across distributed teams",
      metrics: { engagement: "88%", collaboration: "+41%" },
      color: "text-chart-4",
    },
    {
      icon: Target,
      title: "HR Information Systems",
      description: "Cloud-based HRIS with AI-driven insights for data-driven decision making",
      metrics: { accuracy: "99%", insights: "+156%" },
      color: "text-chart-5",
    },
    {
      icon: TrendingUp,
      title: "Performance Management",
      description: "Continuous feedback with SMART goals and bias-free appraisal systems",
      metrics: { clarity: "91%", productivity: "+38%" },
      color: "text-chart-1",
    },
    {
      icon: Shield,
      title: "HR Compliance",
      description: "Automated compliance monitoring aligned with BCEA and data protection regulations",
      metrics: { compliance: "100%", riskReduction: "85%" },
      color: "text-chart-2",
    },
    {
      icon: Zap,
      title: "Employee Wellness",
      description: "Holistic wellness programs with mental health support and ergonomic workspaces",
      metrics: { wellbeing: "89%", burnout: "-52%" },
      color: "text-chart-3",
    },
  ]
 
function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(false);

  const sampleImages = [
    {
      src: "/Screenshot 2025-10-19 211407.png",
      alt: "Slide 1",
      caption: "Introduction to KickStart Solutions",
      isBlue:false,
    },
    {
      src: "/Screenshot 2025-10-19 211455.png",
      alt: "Slide 2",
      caption: "Our Hybrid Work Model",
      isBlue:false,
    },
    {
      src: "/Screenshot 2025-10-19 211546.png",
      alt: "Slide 2",
      caption: "Our Hybrid Work Model",
      isBlue:true,
    },
    {
      src: "/Screenshot 2025-10-19 211617.png",
      alt: "Slide 2",
      caption: "Our Hybrid Work Model",
      isBlue:false,
    },

    {
      src: "/Screenshot 2025-10-19 211640.png",
      alt: "Slide 2",
      caption: "Our Hybrid Work Model",
      isBlue:false,
    },

    {
      src: "/Screenshot 2025-10-19 224127.png",
      alt: "Slide 2",
      caption: "Our Hybrid Work Model",
      isBlue:true,
    },

   

    {
      src: "/Screenshot 2025-10-19 211708.png",
      alt: "Slide 2",
      caption: "Our Hybrid Work Model",
      isBlue:false,
    },

    {
      src: "/Screenshot 2025-10-19 224209.png",
      alt: "Slide 2",
      caption: "Our Hybrid Work Model",
      isBlue:true,
    },

    {
      src: "/Screenshot 2025-10-19 211742.png",
      alt: "Slide 2",
      caption: "Our Hybrid Work Model",
      isBlue:false,
    },

    {
      src: "/Screenshot 2025-10-19 211757.png",
      alt: "Slide 2",
      caption: "Our Hybrid Work Model",
      isBlue:true,
    },

    {
      src: "/Screenshot 2025-10-19 211815.png",
      alt: "Slide 2",
      caption: "Our Hybrid Work Model",
      isBlue:true,
    },

    {
      src: "/Screenshot 2025-10-19 211829.png",
      alt: "Slide 2",
      caption: "Our Hybrid Work Model",
      isBlue:true,
    },

    {
      src: "/Screenshot 2025-10-19 211842.png",
      alt: "Slide 2",
      caption: "Our Hybrid Work Model",
      isBlue:false,
    },
    {
      src: "/Screenshot 2025-10-19 211853.png",
      alt: "Slide 2",
      caption: "Our Hybrid Work Model",
      isBlue:false,
    },
    {
      src: "/Screenshot 2025-10-19 211904.png",
      alt: "Slide 2",
      caption: "Our Hybrid Work Model",
      isBlue:true,
    },
   
    {
      src: "/Screenshot 2025-10-19 211915.png",
      alt: "Slide 2",
      caption: "Our Hybrid Work Model",
      isBlue:false,
    },
    {
      src: "/Screenshot 2025-10-19 211936.png",
      alt: "Slide 2",
      caption: "Our Hybrid Work Model",
      isBlue:true,
    },
    

  ];

  return (
    <section
      className={`w-full min-h-screen flex flex-col space-y-10 font-display overflow-x-hidden overflow-y-auto ${
        isPresentationMode ? "" : ""
      }`}
    >
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

      <div className="max-w-5xl mx-auto p-6 md:p-10 space-y-20 flex flex-col justify-center">
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl lg:text-3xl font-medium">Project Overview</h2>
          <p className="text-neutral-500">
            A forward-thinking human resource strategy crafted for a rapidly
            growing VR tourism startup redefining travel through immersive
            technology. This blueprint establishes a people-first, data-driven
            foundation designed to support hybrid collaboration, innovation, and
            long-term growth.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl lg:text-3xl font-medium">KPI Keepers Vision</h2>
          <p className="text-neutral-500">
            Guided by the belief that people and technology should evolve
            together, the KickStart HR Blueprint reimagines the employee
            experience for the digital age. Every policy, platform, and
            initiative is designed to empower individuals, strengthen teams, and
            build an adaptive, resilient workforce capable of driving
            transformation in South Africa&apos;s emerging tech landscape.
          </p>
          <div className="flex space-x-3 mt-2 p-1.5 font-bold">
            <div className="border-l-2 border-neutral-950"></div>
            <p className="text-md md:text-lg lg:text-2xl max-w-7xl">
              &apos;Empowering people to innovate, connect, and grow — wherever they
              work.&apos;
            </p>
          </div>
        </div>

        {/* <div className="flex flex-col space-y-4">
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
              <a
                target="_blank"
                href="https://office.com/webapps"
                rel="noreferrer"
              >
                Office
              </a>
              .
            </iframe>
          </div>
        </div> */}

       
        <ImageSlider images={sampleImages} />
         <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-medium">Key Features</h2>
          <p className="text-neutral-500">
            Through the KickStart Solutions HR Blueprint, we champion a hybrid
            model of work that values flexibility, inclusion, and continuous
            learning.
          </p>
          <ul className="list-disc list-inside flex flex-col gap-y-2 text-neutral-700">
            <li>
              A unified HR framework aligning KickStart&apos;s hybrid workforce with
              its vision for growth, innovation, and long-term sustainability.
            </li>
            <li>
              A culture-first strategy that fosters inclusion, engagement, and
              belonging across remote and in-office teams.
            </li>
            <li>
              A cloud-based HR system empowering informed, agile, and
              transparent people management.
            </li>
            <li>
              A virtual onboarding and training experience that connects,
              equips, and inspires employees from day one.
            </li>
            <li>
              A holistic compensation and wellness model that promotes fairness,
              resilience, and work-life balance in a hybrid environment.
            </li>
          </ul>
        </div>
          <div className="max-w-7xl mx-auto  space-y-20 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col space-y-6"
        >
          <h2 className="text-3xl lg:text-4xl font-medium text-foreground">Executive Summary</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-chart-1" />
                  The Challenge
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  KickStart Solutions faces unique challenges in managing a hybrid VR tourism workforce: competing for
                  digital talent, maintaining engagement across distributed teams, and navigating South Africa&apos;s power
                  instability.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">Talent Competition</Badge>
                  <Badge variant="outline">Hybrid Coordination</Badge>
                  <Badge variant="outline">Infrastructure Challenges</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-chart-2" />
                  The Solution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  A people-centered, future-ready framework covering all 8 HR functional areas. By integrating
                  technology with human interaction, we build a strong hybrid culture where employees thrive regardless
                  of location.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">8 HR Functions</Badge>
                  <Badge variant="outline">Data-Driven</Badge>
                  <Badge variant="outline">Technology-Enabled</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Recommendations */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Brain className="w-8 h-8 text-chart-3 mb-2" />
                <CardTitle className="text-lg">Immersive Onboarding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  VR office tours, buddy programs, and interactive training that connects employees to culture and teams
                  from day one.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="w-8 h-8 text-chart-4 mb-2" />
                <CardTitle className="text-lg">Agile Compensation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Home office allowances, internet support, UPS systems, and wellness programs that show genuine care
                  for employee wellbeing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-8 h-8 text-chart-5 mb-2" />
                <CardTitle className="text-lg">Advanced HRIS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cloud-based system tracking performance, managing compliance, and analyzing workforce trends for
                  strategic decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Impact Metrics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl lg:text-4xl font-medium text-foreground">Projected Impact & Value</h2>
<Card className="border-2 ">
            <CardHeader>
              <CardTitle className="text-2xl">Expected Business Impact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                This HR strategy positions KickStart Solutions for sustainable growth by creating a resilient, adaptable
                workforce. Teams across locations will collaborate effectively, share knowledge, and innovate together.
                Data-driven insights enable proactive management, while wellness and recognition programs build a
                positive culture where employees feel valued and connected.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-chart-1/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-chart-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">Talent Attraction & Retention</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Attract top talent and reduce turnover through comprehensive support and growth opportunities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-chart-2/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-chart-2" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">Productivity & Innovation</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Engaged employees drive innovation and maintain high performance across hybrid settings
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full  flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-chart-3" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">Risk Mitigation</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      100% compliance and proactive monitoring protect against legal and operational risks
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-chart-4/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-chart-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">Competitive Positioning</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Establish KickStart as an employer of choice in South Africa&apos;s VR tourism industry
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="grid md:grid-cols-2 gap-6">
          <Chart1/>
          <Chart2/>

           
          </div>

          {/* Key Metrics Grid */}
         
        </motion.div>

        {/* 8 HR Functions Deep Dive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl lg:text-4xl font-medium text-foreground">8 Integrated HR Functions</h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              Our comprehensive approach covers every aspect of human resource management, ensuring KickStart has a
              complete, future-ready HR infrastructure.
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 h-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="recruitment">Recruitment</TabsTrigger>
              <TabsTrigger value="compensation">Compensation</TabsTrigger>
              <TabsTrigger value="training">Training</TabsTrigger>
              <TabsTrigger value="details">More Details</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {hrFunctions.map((func, index) => (
                  <motion.div
                    key={func.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="border-2 h-full hover:shadow-lg transition-all hover:scale-105">
                      <CardHeader>
                        <func.icon className={`w-8 h-8 ${func.color} mb-2`} />
                        <CardTitle className="text-base">{func.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-xs text-muted-foreground leading-relaxed">{func.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {Object.entries(func.metrics).map(([key, value]) => (
                            <Badge key={key} variant="secondary" className="text-xs">
                              {value}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

            <Chart3/>
            </TabsContent>

            <TabsContent value="recruitment" className="space-y-6 mt-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-chart-1" />
                    Recruitment & Staffing Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Our recruitment strategy ensures KickStart attracts top digital talent through innovative,
                    hybrid-ready processes that prioritize diversity, efficiency, and cultural fit.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Talent Forecasting</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-chart-1 mt-1">•</span>
                          <span>Quarterly workforce planning aligned with growth trajectory</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-chart-1 mt-1">•</span>
                          <span>HR analytics to identify skills gaps before they impact operations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-chart-1 mt-1">•</span>
                          <span>Scenario planning for hybrid workforce challenges</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Screening & Selection</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-chart-2 mt-1">•</span>
                          <span>AI-powered ATS with human oversight to prevent bias</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-chart-2 mt-1">•</span>
                          <span>Competency-based frameworks assessing digital literacy and adaptability</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-chart-2 mt-1">•</span>
                          <span>Output-based assessment over time-based metrics</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg mt-6">
                    <h4 className="font-semibold text-foreground mb-3">Employer Branding</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      KickStart&apos;s Employee Value Proposition showcases commitment to flexibility, innovation, and
                      inclusive growth. Digital storytelling and employee advocacy programs strengthen the brand as a
                      forward-thinking employer in South Africa&apos;s tech landscape.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center p-4 bg-chart-1/10 rounded-lg">
                      <div className="text-2xl font-bold text-chart-1">+45%</div>
                      <p className="text-xs text-muted-foreground mt-1">Hiring Efficiency</p>
                    </div>
                    <div className="text-center p-4 bg-chart-2/10 rounded-lg">
                      <div className="text-2xl font-bold text-chart-2">+32%</div>
                      <p className="text-xs text-muted-foreground mt-1">Diversity Increase</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="compensation" className="space-y-6 mt-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-6 h-6 text-chart-2" />
                    Compensation & Benefits Framework
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Beyond competitive salaries, our total compensation strategy demonstrates genuine care for employee
                    wellbeing and creates a sense of belonging in the hybrid environment.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <Card className="border">
                      <CardHeader>
                        <CardTitle className="text-sm">Tools of the Trade</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-xs text-muted-foreground">
                        <p>• Home office setup allowance</p>
                        <p>• Monthly internet contributions</p>
                        <p>• UPS backup power systems</p>
                        <p>• Ergonomic equipment support</p>
                      </CardContent>
                    </Card>

                    <Card className="border">
                      <CardHeader>
                        <CardTitle className="text-sm">Wellness Benefits</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-xs text-muted-foreground">
                        <p>• Virtual wellness workshops</p>
                        <p>• Peer support groups</p>
                        <p>• Mental health counseling</p>
                        <p>• Fitness club partnerships</p>
                      </CardContent>
                    </Card>

                    <Card className="border">
                      <CardHeader>
                        <CardTitle className="text-sm">Future Initiatives</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-xs text-muted-foreground">
                        <p>• Solar power fund applications</p>
                        <p>• Inverter/battery installations</p>
                        <p>• Sustainable energy support</p>
                        <p>• Long-term infrastructure aid</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted p-4 rounded-lg mt-6">
                    <h4 className="font-semibold text-foreground mb-2">Impact on Retention</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Employees who feel supported holistically are 28% more likely to stay with KickStart long-term,
                      reducing turnover costs and preserving institutional knowledge.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center p-4 bg-chart-2/10 rounded-lg">
                      <div className="text-2xl font-bold text-chart-2">92%</div>
                      <p className="text-xs text-muted-foreground mt-1">Satisfaction Rate</p>
                    </div>
                    <div className="text-center p-4 bg-chart-3/10 rounded-lg">
                      <div className="text-2xl font-bold text-chart-3">+28%</div>
                      <p className="text-xs text-muted-foreground mt-1">Retention Improvement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="training" className="space-y-6 mt-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-6 h-6 text-chart-3" />
                    Training & Development Programs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Immersive, accessible learning experiences that leverage VR technology to ensure equitable skill
                    development across all locations.
                  </p>

                  <div className="space-y-4 mt-6">
                    <div className="border-l-4 border-chart-3 pl-4">
                      <h4 className="font-semibold text-foreground mb-2">Immersive Onboarding</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        New hires experience VR office tours, interact with avatar colleagues, and participate in buddy
                        programs that build trust from day one.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">
                          VR Office Tours
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Digital Welcome Packs
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Buddy System
                        </Badge>
                      </div>
                    </div>

                    <div className="border-l-4 border-chart-4 pl-4">
                      <h4 className="font-semibold text-foreground mb-2">Skills Development</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        Monthly virtual masterclasses, project-based learning with &quot;20%&ldquo; time policy, and just-in-time
                        training for technical skills.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">
                          Virtual Masterclasses
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          20% Passion Projects
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          LMS Platform
                        </Badge>
                      </div>
                    </div>

                    <div className="border-l-4 border-chart-5 pl-4">
                      <h4 className="font-semibold text-foreground mb-2">Leadership Training</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        VR simulations for hybrid team management, empathy training, and practical application with
                        real-world scenarios.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">
                          VR Simulations
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Empathy Training
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Peer Feedback
                        </Badge>
                      </div>
                    </div>

                    <div className="border-l-4 border-chart-1 pl-4">
                      <h4 className="font-semibold text-foreground mb-2">Gamified Learning</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        Points, leaderboards, and challenges increase engagement and knowledge retention while fostering
                        healthy competition.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">
                          Leaderboards
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Achievement Badges
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Team Challenges
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center p-4 bg-chart-3/10 rounded-lg">
                      <div className="text-2xl font-bold text-chart-3">94%</div>
                      <p className="text-xs text-muted-foreground mt-1">Training Completion</p>
                    </div>
                    <div className="text-center p-4 bg-chart-4/10 rounded-lg">
                      <div className="text-2xl font-bold text-chart-4">+67%</div>
                      <p className="text-xs text-muted-foreground mt-1">Skill Growth</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="details" className="space-y-6 mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Heart className="w-5 h-5 text-chart-4" />
                      Employee Relations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <p className="text-muted-foreground leading-relaxed">
                      VR Connect Rooms for casual socializing, empathy training through role-switching simulations, and
                      interactive town halls ensure strong bonds across distributed teams.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="secondary">88% Engagement</Badge>
                      <Badge variant="secondary">+41% Collaboration</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Target className="w-5 h-5 text-chart-5" />
                      HRIS & Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <p className="text-muted-foreground leading-relaxed">
                      Cloud-based system with AI-driven insights enables predictive workforce planning, automated
                      compliance monitoring, and real-time performance tracking.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="secondary">99% Accuracy</Badge>
                      <Badge variant="secondary">+156% Insights</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <TrendingUp className="w-5 h-5 text-chart-1" />
                      Performance Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <p className="text-muted-foreground leading-relaxed">
                      Monthly check-ins, SMART goal setting, bias-free appraisals, and transparent metrics ensure fair
                      evaluation and continuous improvement across hybrid teams.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="secondary">91% Goal Clarity</Badge>
                      <Badge variant="secondary">+38% Productivity</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Shield className="w-5 h-5 text-chart-2" />
                      HR Compliance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <p className="text-muted-foreground leading-relaxed">
                      Automated BCEA compliance monitoring, digital policy acknowledgments, anonymous reporting
                      channels, and regular audits protect both employees and the company.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="secondary">100% Compliance</Badge>
                      <Badge variant="secondary">85% Risk Reduction</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-6 h-6 text-chart-3" />
                    Employee Wellness: Holistic Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive wellness programs address physical, mental, and social wellbeing—critical for
                    preventing burnout in hybrid environments.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-foreground">Physical Health</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Ergonomic workstation guidelines</li>
                        <li>• Equipment allowances for remote workers</li>
                        <li>• Partnerships with local fitness clubs</li>
                        <li>• Regular movement break reminders</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-foreground">Mental Health</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Flexible work schedules</li>
                        <li>• Stress management programs</li>
                        <li>• Counseling services access</li>
                        <li>• Regular mental health check-ins</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="text-center p-4 bg-chart-3/10 rounded-lg">
                      <div className="text-2xl font-bold text-chart-3">89%</div>
                      <p className="text-xs text-muted-foreground mt-1">Wellbeing Score</p>
                    </div>
                    <div className="text-center p-4 bg-chart-4/10 rounded-lg">
                      <div className="text-2xl font-bold text-chart-4">-52%</div>
                      <p className="text-xs text-muted-foreground mt-1">Burnout Reduction</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Vision Statement */}
        

        {/* Competitive Advantage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl lg:text-4xl font-medium text-foreground">Why This Blueprint Wins</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 ">
              <CardHeader>
                <div className="w-12 h-12 rounded-full  flex items-center justify-center mb-2">
                  <Target className="w-6 h-6 text-chart-1" />
                </div>
                <CardTitle>Comprehensive Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All 8 HR functions work together seamlessly, not as isolated initiatives. This holistic approach
                  ensures no gaps in employee experience or organizational capability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 ">
              <CardHeader>
                <div className="w-12 h-12 rounded-full  flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-chart-2" />
                </div>
                <CardTitle>Data-Driven Agility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Advanced HRIS with AI analytics enables predictive planning and rapid response to workforce trends,
                  giving KickStart a strategic advantage in talent management.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 ">
              <CardHeader>
                <div className="w-12 h-12 rounded-full  flex items-center justify-center mb-2">
                  <Heart className="w-6 h-6 text-chart-3" />
                </div>
                <CardTitle>People-First Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Beyond policies and systems, we build genuine care into every touchpoint—from UPS systems for
                  load-shedding to VR empathy training for managers.
                </p>
              </CardContent>
            </Card>
          </div>

          
        </motion.div>
      </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Page;
