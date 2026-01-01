"use client";
import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import Link from "next/link";
import Dashboard from "@/public/projects/HereAfterHero.png"; // Placeholder
import Divider from "@/public/Divider.svg";
import Drop1 from "@/public/projects/Drop1.png"; // Placeholder
import Drop2 from "@/public/projects/Drop2.png"; // Placeholder
import Design from "@/public/projects/Design.png"; // Placeholder
import HereAfter4 from "@/public/projects/HereAfter4.jpg";
import HereAfter7 from "@/public/projects/HereAfter7.png";
import { FaArrowRight } from "react-icons/fa";
import Subheader from "../Subheader";



function HereAfter() {
  const { isDarkMode } = useTheme();
  return (
    <div className='min-h-screen bg-transparent md:p-8 overflow-auto mt-6 md:mt-10 custom-scrollbar'>
      {/* Header */}
      <div className='mb-8 px-4 md:px-0'>
        <h1
          className='mb-2'
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
          HereAfter
        </h1>
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
          Bootstrapped | Fractional Head of Product | 2025
        </p>
      </div>

      {/* Main Content Grid - 3 columns */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 mb-8'>
        {/* Hero Image - spans all 3 columns */}
        <div className='lg:col-span-3 px-4 md:px-0'>
          <Image
            src={Dashboard}
            alt='HereAfter Project 1'
            className='w-full h-auto rounded-[8px]'
          />
        </div>

        {/* Introduction Section - text spans 2 columns */}
        <div className='lg:col-span-3 px-4 md:px-0'>
          <div className='max-w-[600px] w-full'>
            <div className='leading-relaxed space-y-6'>
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
                <span className="bg-highlight px-[2px] py-[1px]" style={{ color: isDarkMode ? "#FEFEFB" : "#252423" }}>HereAfter is a map-based social platform that strengthens real-world connections by turning everyday locations into shared memories.</span> Think Pokémon Go meets Instagram, but grounded in presence. I joined as Fractional Head of Product, leading UX, design systems, and strategy to bring the MVP from concept to release.
              </p>
            </div>
          </div>
        </div>

        {/* What Section - text spans 2 columns */}
        <div className='lg:col-span-3 px-4 md:px-0'>
          <div className='max-w-[600px] w-full'>
            <Subheader>What</Subheader>
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
              A social tool rooted in physical space. Instead of infinite feeds and algorithms, the product centers your real world: where you've been, what you've experienced, and how those moments connect you to the people around you. Users drop memories on a map, explore moments from friends and friends-of-friends, and build an archive of personal and communal history.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className='lg:col-span-3 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-[16px] my-2' />
        </div>

        {/* Why Section - text spans 2 columns */}
        <div className='lg:col-span-3 px-4 md:px-0'>
          <div className='max-w-[600px] w-full'>
            <Subheader>Why</Subheader>
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
              We're more digitally connected than ever, yet <a href="https://www.gse.harvard.edu/ideas/usable-knowledge/24/10/what-causing-our-epidemic-loneliness-and-how-can-we-fix-it" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: isDarkMode ? "#FEFEFB" : "#252423", transition: "color 0.3s ease" }}>loneliness is rising</a>. It’s not access that’s missing; it’s depth. When everything exists online, it’s easy to lose the sense of belonging that comes from being rooted in place.
            </p>
            <p
              className='text-base font-normal text-[#6B6B69] mt-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
                color: isDarkMode ? "#B8B8B6" : "#6B6B69",
                transition: "color 0.3s ease",
              }}
            >
              HereAfter aims to close that gap. It doesn't attempt to replace IRL connection, but to support it by nudging you to explore your environment, strengthen friendships through shared experience, and reveal hidden threads in your community. It's a gentle counterpoint to the digital infinitum, a reminder that meaning happens where your feet touch the earth.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className='lg:col-span-3 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-[16px] my-2' />
        </div>

        {/* How Section - text spans 2 columns */}
        <div className='lg:col-span-3 px-4 md:px-0'>
          <div className='max-w-[600px] w-full'>
            <Subheader>How?</Subheader>
            <p
              className='text-base font-normal italic mb-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
                color: isDarkMode ? "#B8B8B6" : "#6B6B69",
                transition: "color 0.3s ease",
              }}
            >
              How do friendships form and strengthen? By being present, engaging with shared spaces, making plans, sharing experiences, and connecting through friends of friends.
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
              I began by translating the founders ideas into a clear value prop and set of values: <i>community, exploration, shared history, presence.</i> From there, I mapped the earliest user journeys and identified the minimum product we could build to validate.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className='lg:col-span-3 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-[16px] my-2' />
        </div>

        {/* MVP Section Header */}
        <div className='lg:col-span-3 px-4 md:px-0'>
            <Subheader>MVP</Subheader>
        </div>

        {/* 1. Explore Map / Core UX - text spans 2 columns, video in last column */}
        <div className='lg:col-span-2 px-4 md:px-0'>
          <Subheader>🗺️ Explore Map / Core UX</Subheader>
          <p
            className='text-[#6B6B69]'
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "150%",
              letterSpacing: "-0.02em",
              color: isDarkMode ? "#B8B8B6" : "#6B6B69",
              transition: "color 0.3s ease",
            }}
          >
            The heart of the product. Users drop memories and discover others&apos;
            moments, transforming the map into a collective landscape.
          </p>
        </div>
        <div className='lg:col-span-1 flex justify-center'>
          <video
            src='/projects/HereAfter2.mov'
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className='h-auto w-auto max-h-[500px] rounded-[8px]'
          />
        </div>
        

        {/* 2. Onboarding - text spans 2 columns, video in last column */}
        <div className='lg:col-span-2 px-4 md:px-0'>
          <Subheader>👋 Onboarding</Subheader>
          <p
            className='text-balance'
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "150%",
              letterSpacing: "-0.02em",
              color: isDarkMode ? "#B8B8B6" : "#6B6B69",
              transition: "color 0.3s ease",
            }}
          >
            First impressions matter. Onboarding establishes the visual brand, sets emotional tone, builds trust before permission requests, and lands users quickly in the core map experience.
          </p>
        </div>
        <div className='lg:col-span-1 flex justify-center'>
          <video
            src='/projects/HereAfter3.mov'
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className='h-auto w-auto max-h-[500px] rounded-[8px]'
          />
        </div>

        {/* Full-width onboarding image */}
        {/* <div className='lg:col-span-3 px-4 md:px-0'>
          <Image
            src={HereAfter4}
            alt='HereAfter Onboarding Flow'
            className='w-full h-full'
          />
        </div> */}

        {/* 3. My Map / Profile - text spans 2 columns, video in last column */}
        <div className='lg:col-span-2 px-4 md:px-0'>
          <Subheader>👤 My Map / Profile</Subheader>
          <p
            className='text-[#6B6B69]'
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "150%",
              letterSpacing: "-0.02em",
              color: isDarkMode ? "#B8B8B6" : "#6B6B69",
              transition: "color 0.3s ease",
            }}
          >
            A personal timeline of everywhere you've been and everything you've shared.
          </p>
        </div>
        <div className='lg:col-span-1 flex justify-center'>
          <video
            src='/projects/HereAfter8.mov'
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className='h-auto w-auto max-h-[500px] rounded-[8px]'
          />
        </div>

        {/* 4. Notifications - text spans 2 columns, video in last column */}
        <div className='lg:col-span-2 px-4 md:px-0'>
          <Subheader>🔔 Notifications</Subheader>
          <p
            className='text-[#6B6B69]'
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "150%",
              letterSpacing: "-0.02em",
              color: isDarkMode ? "#B8B8B6" : "#6B6B69",
              transition: "color 0.3s ease",
            }}
          >
            In-app (and future push) notifications to support discovery, engagement, and community prompts.
          </p>
        </div>
        <div className='lg:col-span-1 flex justify-center'>
          <video
            src='/projects/HereAfter9.mov'
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className='h-auto w-auto max-h-[500px] rounded-[8px]'
          />
        </div>

        {/* Divider */}
        <div className='lg:col-span-3 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-[16px] my-2' />
        </div>

        {/* Design / Eng Velocity Section - text spans 2 columns */}
        <div className='lg:col-span-3 px-4 md:px-0'>
          <div className='max-w-[600px] w-full'>
              <Subheader>Design / Eng Velocity</Subheader>
            <p
              className='text-base font-normal mb-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
                color: isDarkMode ? "#B8B8B6" : "#6B6B69",
                transition: "color 0.3s ease",
              }}
            >
              Alongside the UX work, I built a compact design system, created motion prototypes, pressure-tested the IA, and collaborated with engineering to define feasibility, edge cases, and technical possibilities.
            </p>
            <p
              className='text-base font-normal'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
                display: "flex",
                alignItems: "center", 
                gap: "4px",
              }}
            >
            
              <a
                href='https://www.figma.com/design/qax2lw4m3NY36w49ZdeE16/Design-System---HereAfter?node-id=98-3311&p=f&t=fHLBrWx36ynKLheZ-0'
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: isDarkMode ? "#FEFEFB" : "#252423", transition: "color 0.3s ease" }}
                className='underline  hover:text-[#585755] transition-colors flex items-center gap-1'
              >
                (Check it out for yourself →
              </a>{' '}
                
              PW: Nat)
            </p>
          </div>
        </div>

        {/* Full-width design system image */}
        <div className='lg:col-span-3 px-4 md:px-0'>
          <Image
            src={HereAfter7}
            alt='HereAfter Design System'
            className='w-full h-full rounded-[8px]'
          />
        </div>

        {/* Divider */}
        <div className='lg:col-span-3 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-[16px] my-2' />
        </div>

        {/* The Road Ahead Section - text spans 2 columns */}
        <div className='lg:col-span-3 px-4 md:px-0'>
          <div className='max-w-[600px] w-full'>
              <Subheader>The Road Ahead</Subheader>
            <p
              className='text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "16px",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
                color: isDarkMode ? "#B8B8B6" : "#6B6B69",
                transition: "color 0.3s ease",
              }}
            >
  We are validating HereAfter's social value through a staged rollout: MVP & testing , Friends & Family beta, ahead of a wider launch in April. Pending user feedback, the roadmap expands into soundscapes, collections, walking tours, live events surfaced on the map, "pay it forward" money drops, and a Temporal Map that blends past memories, present happenings, and future events.          </p>
            <p
              className='text-base font-normal text-[#6B6B69] mt-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
                color: isDarkMode ? "#B8B8B6" : "#6B6B69",
                transition: "color 0.3s ease",
              }}
            >
              <span className="bg-highlight" style={{ color: isDarkMode ? "#FEFEFB" : "#252423", transition: "color 0.3s ease" }}>
  In our first 12 weeks, we shipped a functional MVP,
              </span>
               {" "}aligned around a north star, and built a product foundation to support whats next. We now have a framework to test whether place-based digital connection can meaningfully reduce isolation and strengthen communities.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Pill */}
      <div className="md:hidden w-full flex justify-center py-4 ">
        <Link 
          href="/projects/Maybern"
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
          Maybern
        </Link>
      </div>
    </div>
  );
}

export default HereAfter;
