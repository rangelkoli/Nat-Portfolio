"use client";
import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import Link from "next/link";
import Caravan1 from "@/public/projects/Caravan1.jpg";
import Caravan3 from "@/public/projects/Caravan3.png";
import Caravan4 from "@/public/projects/Caravan4.png";
import Divider from "@/public/Divider.svg";

function Caravan() {
  const { isDarkMode } = useTheme();
  return (
    <div className='min-h-screen bg-transparent md:p-8 overflow-auto mt-6 md:mt-10 custom-scrollbar'>
      {/* Header */}
      <div className='mb-8 px-4 md:px-0'>
        <h1
          className='text-3xl md:text-5xl font-bold mb-2'
          style={{
            fontFamily: '"Instrument Sans", sans-serif',
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "28px",
            lineHeight: "150%",
            letterSpacing: "-0.02em",
            color: isDarkMode ? "#E8E8E6" : "#1a1a1a",
            transition: "color 0.3s ease",
          }}
        >
          Caravan
        </h1>
        <a
          href="https://gocaravan.ai"
          target="_blank"
          rel="noopener noreferrer"
          className='text-lg mb-2 flex items-center gap-1 group cursor-pointer w-fit'
          style={{ color: isDarkMode ? "#FEFEFB" : "#252423", transition: "color 0.3s ease" }}
        >
          gocaravan.ai
          <RiArrowRightLine className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
        <p
          className=''
          style={{
            fontFamily: '"Instrument Sans", sans-serif',
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "16px",
            lineHeight: "150%",
            letterSpacing: "-0.02em",
            color: isDarkMode ? "#B8B8B6" : "#6B6B69",
            transition: "color 0.3s ease",
          }}
        >
          VC-Backed Startup | Product Designer
        </p>
      </div>

      {/* Main Content Grid */}

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-8'>
        {/* Hero Image */}
        <div className='w-full col-span-2 px-4 md:px-0'>
          <Image
            src={Caravan1}
            alt='Caravan Shipment Detail Page'
            className='w-full h-full rounded-[8px]'
          />
        </div>

        {/* Intro Text */}
        <div className='col-span-2 px-4 md:px-0'>
          <div className='max-w-[600px] w-full leading-relaxed space-y-6'>
            <p
              className='text-base font-normal'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
                color: isDarkMode ? "#B8B8B6" : "#6B6B69",
                transition: "color 0.3s ease",
              }}
            >
              Caravan is a venture-backed startup at the intersection of logistics and AI, building a tech-enabled BPO platform for freight brokers. Freight brokerage is complex: agents manage shipments across carriers, shippers, and facilities while juggling bookings, communications, and exceptions. This process is traditionally fragmented and error-prone, forcing brokers to track dozens of tasks via spreadsheets, phone calls, and emails.
            </p>
            <p
              className='text-base font-normal'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
                color: isDarkMode ? "#B8B8B6" : "#6B6B69",
                transition: "color 0.3s ease",
              }}
            >
              When I joined, Caravan had a powerful concept—AI agents handling repetitive freight tasks—but the platform was fragmented and incomplete. My role was to transform this partially built system into a coherent, high-impact workflow platform, where AI automation and human decision-making worked together seamlessly.
            </p>
          </div>
        </div>

        <div className='col-span-2 px-4 md:px-0'>
           <Image src={Divider} alt='Divider' className='w-full h-[16px] my-2' />
        </div>

        {/* Track & Trace Agent Section */}
        <div className='col-span-2 px-4 md:px-0'>
          <div className='max-w-[600px] w-full'>
            <p
              className='text-base font-normal'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
                color: isDarkMode ? "#B8B8B6" : "#6B6B69",
                transition: "color 0.3s ease",
              }}
            >
              I led the design of information architecture, workflows, and UI for the Track & Trace Agent feature, which enables AI-driven phone calls, texts, and emails to handle routine shipment management. My goal was to make AI action visible, surface exceptions, and build customizable automations. I mapped out global task flows, agent inboxes, shipment details, and interruption cues, creating a clear hierarchy so users could instantly see priority actions across multiple shipments. Rapid prototyping with founders and engineers ensured that edge cases were addressed, technical constraints considered, and the design could scale.
            </p>
          </div>
        </div>
       <div className="w-full col-span-2 px-4 md:px-0">
              <video
              src='/projects/Caravan2.mov'
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className='w-full h-auto rounded-[8px]'
            />
        </div>
        <div className='col-span-2 px-4 md:px-0'>
           <Image src={Divider} alt='Divider' className='w-full h-[16px] my-2' />
        </div>

        {/* Design System Section */}
        <div className='col-span-2 flex flex-col lg:flex-row gap-4 md:gap-8 px-4 md:px-0'>
          <div className='w-full lg:w-1/2'>
            <div
              className='mb-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: "150%",
                letterSpacing: "-2%",
                color: isDarkMode ? "#E8E8E6" : "#585755",
                transition: "color 0.3s ease",
              }}
            >
              Design System
            </div>

            <p
              className='text-base font-normal'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
                color: isDarkMode ? "#B8B8B6" : "#6B6B69",
                transition: "color 0.3s ease",
              }}
            >
              Alongside the Track & Trace MVP, I established a white labeled design system and component library based off material design. This created consistency and would support future bradning for brokerages.
            </p>
          </div>
          <div className='w-full lg:w-1/2 '>
            <Image
              src={Caravan3}
              alt='Design System'
              className='w-full h-auto rounded-[8px]'
            />
          </div>
        </div>

        <div className='col-span-2 px-4 md:px-0'>
           <Image src={Divider} alt='Divider' className='w-full h-[16px] my-2' />
        </div>

        {/* Global Tasks Section */}
        <div className='col-span-2 flex flex-col lg:flex-row gap-4 md:gap-8 px-4 md:px-0'>
          <div className='w-full lg:w-1/2'>
            <div
              className='mb-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: "150%",
                letterSpacing: "-2%",
                color: isDarkMode ? "#E8E8E6" : "#585755",
                transition: "color 0.3s ease",
              }}
            >
              Global Tasks
            </div>

            <p
              className='text-base font-normal'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
                color: isDarkMode ? "#B8B8B6" : "#6B6B69",
                transition: "color 0.3s ease",
              }}
            >
              Global Tasks centralizes all active shipments and AI-driven actions in one view. Tasks are prioritized by urgency, letting agents quickly resolve issues, unblock workflows, and maintain visibility across high-volume operations.
            </p>
          </div>
          <div className='w-full lg:w-1/2'>
            <Image
              src={Caravan4}
              alt='Global Tasks'
              className='w-full h-auto rounded-[8px]'
            />
          </div>
        </div>

        <div className='col-span-2 px-4 md:px-0'>
           <Image src={Divider} alt='Divider' className='w-full h-[16px] my-2' />
        </div>

        {/* Shipment Details Section */}
        <div className='col-span-2 px-4 md:px-0'>
          <div className='max-w-[600px] w-full' >
            <div
              className='mb-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: "150%",
                letterSpacing: "-2%",
                color: isDarkMode ? "#E8E8E6" : "#585755",
                transition: "color 0.3s ease",
              }}
            >
              Shipment Details
            </div>

            <p
              className='text-base font-normal'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
                color: isDarkMode ? "#B8B8B6" : "#6B6B69",
                transition: "color 0.3s ease",
              }}
            >
              Shipment Details provide a complete view of a single load, showing status, history, and any active tasks. From this screen, agents can directly initiate conversations across email, SMS, or phone with carriers, shippers, or facilities, keeping context and actions centralized.
            </p>
          </div>
        </div>
        <div className="w-full col-span-2 px-4 md:px-0">
              <video
              src='/projects/Caravan5.mov'
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className='w-full h-auto rounded-[8px]'
            />
        </div>
      </div>

      {/* Mobile Navigation Pill */}
      <div className="md:hidden w-full flex justify-center py-4 ">
        <Link 
          href="/projects/Vault"
          style={{
              borderRadius: "64px",
              borderWidth: "1px",
              borderColor: isDarkMode ? "#C8C7C5" : "#C8C7C5",
              paddingTop: "12px",
              paddingRight: "32px",
              paddingBottom: "12px",
              paddingLeft: "32px",
              fontFamily: '"Instrument Sans", sans-serif',
              fontWeight: 400,
              fontSize: "28px",
              lineHeight: "150%",
              letterSpacing: "-2%",
              color: isDarkMode ? "#FEFEFB" : "#252423",
              backgroundColor: "transparent",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              textAlign: "center",
              display: "block", 
              textDecoration: "none"
          }}
        >
          Vault
        </Link>
      </div>
    </div>
  );
}

export default Caravan;
