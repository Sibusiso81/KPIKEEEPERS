import { title } from "process";
import React from "react";

function Service() {
 const data = [
  {
    id: "01",
    title: "Organisational Diagnosis & Consultation",
    description: `We begin by assessing your company's goals and challenges. 
Through data-driven insights and collaboration, we identify skills gaps 
and opportunities for improved performance.`,
  },
  {
    id: "02",
    title: "Strategy Design & Alignment",
    description: `We design tailored L&D strategies aligned with business goals. 
Each plan supports measurable outcomes such as talent retention 
and enhanced productivity.`,
  },
  {
    id: "03",
    title: "Program Development & Delivery",
    description: `We create impactful learning programs that combine digital, 
classroom, and on-the-job training to ensure engagement and 
relevance to your organisational needs.`,
  },
  {
    id: "04",
    title: "Implementation & Change Enablement",
    description: `We guide the rollout process and ensure seamless integration 
into existing systems while helping leaders and employees adapt 
through effective change management.`,
  },
  {
    id: "05",
    title: "Evaluation & Continuous Improvement",
    description: `We track outcomes using data and feedback, then refine strategies 
to sustain growth, enhance learning effectiveness, and drive 
long-term success.`,
  },
];

  return <section className="w-screen h-fit lg:h-fit p-8 md:p-20 space-y-8 md:space-y-14 flex  flex-col">
    <div className="flex w-full max-w-7xl mx-auto items-center justify-center space-x-4">
          {/* Left box */}
          <div className="border-2 border-neutral-800 flex items-center justify-center w-10 h-10">
            <p className="font-semibold text-neutral-800">C</p>
          </div>

          {/* Text and line */}
          <div className="flex items-center w-full space-x-2">
            <h2 className="text-lg font-semibold text-neutral-800 whitespace-nowrap">
              PROCESS
            </h2>
            <div className="flex-1 border-t border-neutral-800"></div>
          </div>
        </div>
        <div className="flex flex-col space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-2 lg:gap-4 md:space-x-10 mx-auto max-w-7xl ">
        <div className=""><h2 className="font-medium text-2xl md:text-4xl lg:w-52">Our Woking Process</h2></div>
        {
            data.map((item)=>(
                <div key={item.id} className="space-y-8  ">
                    <p className="font-medium text-lg">#{item.id}</p>
                    <p className="font-medium text-xl lg:text-2xl">{item.title}</p>
                    <p className="text-neutral-600 lg:text-md">{item.description}</p>

                </div>
            ))
        }
        
        </div>
  </section>;
}

export default Service;
