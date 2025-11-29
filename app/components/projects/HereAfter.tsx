import React from "react";
import Image from "next/image";
import Dashboard from "@/public/projects/HereAfter1.png"; // Placeholder
import Divider from "@/public/Divider.svg";
import Drop1 from "@/public/projects/Drop1.png"; // Placeholder
import Drop2 from "@/public/projects/Drop2.png"; // Placeholder
import Design from "@/public/projects/Design.png"; // Placeholder
import HereAfter4 from "@/public/projects/HereAfter4.jpg";
import HereAfter7 from "@/public/projects/HereAfter7.png";

function HereAfter() {
  return (
    <div className='min-h-screen bg-transparent md:p-8 overflow-auto mt-6 md:mt-10 custom-scrollbar'>
      {/* Header */}
      <div className='mb-8 px-4 md:px-0'>
        <h1 className='text-3xl md:text-5xl font-bold text-gray-900 mb-2'>HereAfter</h1>
        <p className='text-lg text-gray-600 mb-2'>HereAfter.app →</p>
        <p className='text-gray-500'>
          Fractional Head of Product | 2025
        </p>
      </div>

      {/* Main Content Grid */}

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-8'>
        {/* Introduction Section */}

        <div className='md:w-full col-span-2'>
          <Image
            src={Dashboard}
            alt='HereAfter Project 1'
            className='w-full h-auto '
          />
        </div>

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
                HereAfter is a map-based social platform that strengthens real-world connections by turning everyday locations into shared memories. Think Pokémon Go meets Instagram, but grounded in presence. I joined as Fractional Head of Product, leading UX, design systems, and strategy to bring the MVP from concept to release.
              </p>
            </div>
          </div>
        </div>

        {/* What Section */}

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
              What
            </div>

            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",

                lineHeight: "150%",

                letterSpacing: "-0.02em",
              }}
            >
              A social tool rooted in physical space. Instead of infinite feeds and algorithms, the product centers your real world: where you’ve been, what you’ve experienced, and how those moments connect you to the people around you. Users drop memories on a map, explore moments from friends and friends-of-friends, and build an archive of personal and communal history.
            </p>
          </div>
        </div>
       
        <div className='col-span-1 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-auto my-2' />
        </div>

        {/* Why Section */}

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
              Why
            </div>

            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",

                lineHeight: "150%",

                letterSpacing: "-0.02em",
              }}
            >
              We’re more digitally connected than ever, yet <a href="https://www.gse.harvard.edu/ideas/usable-knowledge/24/10/what-causing-our-epidemic-loneliness-and-how-can-we-fix-it" className="underline">loneliness is rising</a>. It’s not access that’s missing; it’s depth. When everything exists online, it’s easy to lose the sense of belonging that comes from being rooted in place.
            </p>

            <p
              className='text-sm font-normal text-[#6B6B69] mt-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",

                lineHeight: "150%",

                letterSpacing: "-0.02em",
              }}
            >
              HereAfter aims to close that gap. It doesn’t attempt to replace IRL connection, but to support it by nudging you to explore your environment, strengthen friendships through shared experience, and reveal hidden threads in your community. It’s a gentle counterpoint to the digital infinitum, a reminder that meaning happens where your feet touch the earth.
            </p>
          </div>
        </div>

        <div className='col-span-1 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-auto my-2' />
        </div>

        {/* How Section */}

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
              How?
            </div>

            <p
              className='text-sm font-normal text-[#6B6B69] italic mb-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",

                lineHeight: "150%",

                letterSpacing: "-0.02em",
              }}
            >
              How do friendships form and strengthen? By being present, engaging with shared spaces, making plans, sharing experiences, and connecting through friends of friends.
            </p>

            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",

                lineHeight: "150%",

                letterSpacing: "-0.02em",
              }}
            >
              I began by translating the founders ideas into a clear value prop and set of values: <i>community, exploration, shared history, presence.</i> From there, I mapped the earliest user journeys and identified the minimum product we could build to validate.
            </p>
          </div>

          <div className='w-full lg:w-1/2'>
     
          </div>
        </div>

        <div className='col-span-1 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-auto my-2' />
        </div>

        {/* MVP Section */}

        <div className='col-span-2 px-4 md:px-0'>
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
            MVP
          </div>
        </div>

        {/* 1. Explore Map / Core UX */}
        <div className='col-span-2 flex flex-col lg:flex-row gap-4 md:gap-8'>
          <div className='w-full lg:w-1/2 px-4 md:px-0'>
            <h3 className='font-bold text-[#585755] mb-2'>1. 🗺️ Explore Map / Core UX</h3>
            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
              }}
            >
              The heart of the product. Users drop memories and discover others’ moments, transforming the map into a collective landscape.
            </p>
          </div>
          <div className='w-full lg:w-1/2'>
            <video
              src='/projects/HereAfter2.mov'
              autoPlay
              loop
              muted
              playsInline
              className='w-full h-auto '
            />
          </div>
        </div>

        {/* 2. Onboarding */}
        <div className='col-span-2 flex flex-col lg:flex-row gap-4 md:gap-8'>
          <div className='w-full lg:w-1/2 px-4 md:px-0'>
            <h3 className='font-bold text-[#585755] mb-2'>2. 👋 Onboarding</h3>
            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
              }}
            >
              First impressions matter. Onboarding establishes the visual brand, sets emotional tone, builds trust before permission requests, and lands users quickly in the core map experience.
            </p>
          </div>
          <div className='w-full lg:w-1/2'>
            <video
              src='/projects/HereAfter3.mov'
              autoPlay
              loop
              muted
              playsInline
              className='w-full h-auto '
            />
          </div>
        </div>

        <div className='w-full col-span-2'>
          <Image
            src={HereAfter4}
            alt='HereAfter Onboarding Flow'
            className='w-full h-full '
          />
        </div>

        {/* 3. My Map / Profile */}
        <div className='col-span-2 flex flex-col lg:flex-row gap-4 md:gap-8'>
          <div className='w-full lg:w-1/2 px-4 md:px-0'>
            <h3 className='font-bold text-[#585755] mb-2'>3. 👤 My Map / Profile</h3>
            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
              }}
            >
              A personal timeline of everywhere you’ve been and everything you’ve shared.
            </p>
          </div>
          <div className='w-full lg:w-1/2'>
            <video
              src='/projects/HereAfter5.mov'
              autoPlay
              loop
              muted
              playsInline
              className='w-full h-auto '
            />
          </div>
        </div>

        {/* 4. Notifications */}
        <div className='col-span-2 flex flex-col lg:flex-row gap-4 md:gap-8'>
          <div className='w-full lg:w-1/2 px-4 md:px-0'>
            <h3 className='font-bold text-[#585755] mb-2'>4. Notifications</h3>
            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
              }}
            >
              In-app (and future push) notifications to support discovery, engagement, and community prompts.
            </p>
          </div>
          <div className='w-full lg:w-1/2'>
            <video
              src='/projects/HereAfter6.mov'
              autoPlay
              loop
              muted
              playsInline
              className='w-full h-auto '
            />
          </div>
        </div>

        <div className='col-span-1 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-auto my-2' />
        </div>

        {/* Design / Eng Velocity Section */}

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
              Design / Eng Velocity
            </div>

            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
              }}
            >
              Alongside the UX work, I built a compact design system, created motion prototypes, pressure-tested the IA, and collaborated with engineering to define feasibility, edge cases, and technical possibilities.
            </p>
          </div>
          <div className='w-full lg:w-1/2'>
           
          </div>
        </div>
        
        <div className='w-full col-span-2'>
          <Image
            src={HereAfter7}
            alt='HereAfter Design System'
            className='w-full h-full '
          />
        </div>

        <div className='col-span-1 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-auto my-2' />
        </div>

        {/* The Road Ahead Section */}

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
              The Road Ahead
            </div>

            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
              }}
            >
              We are validating HereAfter’s social value through a staged rollout: MVP & testing (Aug–Dec), Friends & Family beta (Jan–Mar) ahead of a wider launch in April. From there, pending user feedback, the roadmap expands into soundscapes, collections, walking tours, live events surfaced on the map, “pay it forward” money drops, and a Temporal Map that blends past memories, present happenings, and future plans.
            </p>

            <p
              className='text-sm font-normal text-[#6B6B69] mt-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
              }}
            >
              In our first 12 weeks, we shipped a functional MVP, aligned around a clear north star, and built a product foundation strong enough to support whats next. We now have a framework to test whether place-based digital connection can meaningfully reduce isolation and strengthen belonging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HereAfter;
