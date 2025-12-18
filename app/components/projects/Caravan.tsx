import React from "react";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import Caravan1 from "@/public/projects/Caravan1.jpg";
import Caravan3 from "@/public/projects/Caravan3.png";
import Caravan4 from "@/public/projects/Caravan4.png";
import Divider from "@/public/Divider.svg";

function Caravan() {
  return (
    <div className='min-h-screen bg-transparent md:p-8 overflow-auto mt-6 md:mt-10 custom-scrollbar'>
      {/* Header */}
      <div className='mb-8 px-4 md:px-0'>
        <h1
          className='text-3xl md:text-5xl font-bold text-gray-900 mb-2'
          style={{
            fontFamily: '"Instrument Sans", sans-serif',
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "28px",
            lineHeight: "150%",
            letterSpacing: "-0.02em",
          }}
        >
          Caravan
        </h1>
        <a
          href="https://gocaravan.ai"
          target="_blank"
          rel="noopener noreferrer"
          className='text-lg text-gray-600 mb-2 flex items-center gap-1 group cursor-pointer w-fit'
        >
          gocaravan.ai
          <RiArrowRightLine className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
        <p
          className='text-gray-500'
          style={{
            fontFamily: '"Instrument Sans", sans-serif',
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "14px",
            lineHeight: "150%",
            letterSpacing: "-0.02em",
          }}
        >
          VC-Backed Startup | Product Designer
        </p>
      </div>

      {/* Main Content Grid */}

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-8'>
        {/* Hero Image */}
        <div className='w-full col-span-2'>
          <Image
            src={Caravan1}
            alt='Caravan Shipment Detail Page'
            className='w-full h-full'
          />
        </div>

        {/* Intro Text */}
        <div className='col-span-2 flex flex-col lg:flex-row gap-4 md:gap-8 px-4 md:px-0'>
          <div className='w-full'>
            <div className='w-full leading-relaxed space-y-6'>
              <p
                className='text-sm font-normal text-[#6B6B69]'
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  lineHeight: "150%",
                  letterSpacing: "-0.02em",
                }}
              >
                Caravan is a venture-backed startup at the intersection of logistics and AI, building a tech-enabled BPO platform for freight brokers. Freight brokerage is complex: agents manage shipments across carriers, shippers, and facilities while juggling bookings, communications, and exceptions. This process is traditionally fragmented and error-prone, forcing brokers to track dozens of tasks via spreadsheets, phone calls, and emails.
              </p>
              <p
                className='text-sm font-normal text-[#6B6B69]'
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  lineHeight: "150%",
                  letterSpacing: "-0.02em",
                }}
              >
                When I joined, Caravan had a powerful concept—AI agents handling repetitive freight tasks—but the platform was fragmented and incomplete. My role was to transform this partially built system into a coherent, high-impact workflow platform, where AI automation and human decision-making worked together seamlessly.
              </p>
            </div>
          </div>
        </div>

        <div className='col-span-1 px-4 md:px-0'>
           <Image src={Divider} alt='Divider' className='w-full h-auto my-2' />
        </div>

        {/* Track & Trace Agent Section */}
        <div className='col-span-2 flex flex-col lg:flex-row gap-4 md:gap-8 px-4 md:px-0'>
          <div className='w-full lg:w-1/2'>
            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
              }}
            >
              I led the design of information architecture, workflows, and UI for the Track & Trace Agent feature, which enables AI-driven phone calls, texts, and emails to handle routine shipment management. My goal was to make AI action visible, surface exceptions, and build customizable automations. I mapped out global task flows, agent inboxes, shipment details, and interruption cues, creating a clear hierarchy so users could instantly see priority actions across multiple shipments. Rapid prototyping with founders and engineers ensured that edge cases were addressed, technical constraints considered, and the design could scale.
            </p>
          </div>
        </div>
       <div className="w-full col-span-2">
              <video
              src='/projects/Caravan2.mov'
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className='w-full h-auto'
            />
        </div>
        <div className='col-span-1 px-4 md:px-0'>
           <Image src={Divider} alt='Divider' className='w-full h-auto my-2' />
        </div>

        {/* Design System Section */}
        <div className='col-span-2 flex flex-col lg:flex-row gap-4 md:gap-8 px-4 md:px-0'>
          <div className='w-full lg:w-1/2'>
            <div
              className='mb-4 text-[#585755]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "18px",
                lineHeight: "150%",
                letterSpacing: "-2%",
              }}
            >
              Design System
            </div>

            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
              }}
            >
              Alongside the Track & Trace MVP, I established a white labeled design system and component library based off material design. This created consistency and would support future bradning for brokerages.
            </p>
          </div>
          <div className='w-full lg:w-1/2'>
            <Image
              src={Caravan3}
              alt='Design System'
              className='w-full h-auto '
            />
          </div>
        </div>

        <div className='col-span-1 px-4 md:px-0'>
           <Image src={Divider} alt='Divider' className='w-full h-auto my-2' />
        </div>

        {/* Global Tasks Section */}
        <div className='col-span-2 flex flex-col lg:flex-row gap-4 md:gap-8 px-4 md:px-0'>
          <div className='w-full lg:w-1/2'>
            <div
              className='mb-4 text-[#585755]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "18px",
                lineHeight: "150%",
                letterSpacing: "-2%",
              }}
            >
              Global Tasks
            </div>

            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
              }}
            >
              Global Tasks centralizes all active shipments and AI-driven actions in one view. Tasks are prioritized by urgency, letting agents quickly resolve issues, unblock workflows, and maintain visibility across high-volume operations.
            </p>
          </div>
        </div>

        <div className='w-full col-span-2'>
          <Image
            src={Caravan4}
            alt='Global Tasks'
            className='w-full h-full '
          />
        </div>

        <div className='col-span-1'>
           <Image src={Divider} alt='Divider' className='w-full h-auto my-2' />
        </div>

        {/* Shipment Details Section */}
        <div className='col-span-2 flex flex-col lg:flex-row gap-4 md:gap-8'>
          <div className='w-full lg:w-1/2'>
            <div
              className='mb-4 text-[#585755]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "18px",
                lineHeight: "150%",
                letterSpacing: "-2%",
              }}
            >
              Shipment Details
            </div>

            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
              }}
            >
              Shipment Details provide a complete view of a single load, showing status, history, and any active tasks. From this screen, agents can directly initiate conversations across email, SMS, or phone with carriers, shippers, or facilities, keeping context and actions centralized.
            </p>
          </div>
        </div>
        <div className="w-full col-span-2">
              <video
              src='/projects/Caravan5.mov'
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className='w-full h-auto'
            />
        </div>
      </div>
    </div>
  );
}

export default Caravan;
