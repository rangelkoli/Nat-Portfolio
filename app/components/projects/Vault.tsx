"use client";
import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Image from "next/image";
import Divider from "@/public/Divider.svg";
import Link from "next/link";
import { RiArrowRightLine, RiHomeLine } from "react-icons/ri";
import Report from "@/public/projects/Report.png";
import Vault1 from "@/public/projects/Vault1.png";
import Design from "@/public/projects/Design.png";
import VaultBoard from "@/public/projects/VaultBoard.png";
import VaultBoard1 from "@/public/projects/VaultBoard1.png";
import Drop1 from "@/public/projects/Drop1.png";
import Drop2 from "@/public/projects/Drop2.png";
import Vault3 from "@/public/projects/Vault3.png";
import Vault4 from "@/public/projects/Vault4.png";
import Subheader from "../Subheader";


function Vault() {
  const { isDarkMode } = useTheme();
  return (
    <div className='min-h-screen bg-transparent md:p-8 overflow-auto mt-6 md:mt-10 overflow-hidden'>
      {/* Header */}
      <div className='mb-8 px-4 md:px-0'>
        <h1
          className='text-3xl md:text-5xl font-bold mb-2'
          style={{
            fontFamily: '"Instrument Sans", sans-serif',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "28px",
            lineHeight: "150%",
            letterSpacing: "-0.02em",
            color: isDarkMode ? "#E8E8E6" : "#1a1a1a",
            transition: "color 0.3s ease",
          }}
        >
          Vault
        </h1>
        <p
          className=''
          style={{
            fontFamily: '"Instrument Sans", sans-serif',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "150%",
            letterSpacing: "-0.02em",
            color: isDarkMode ? "#B8B8B6" : "#6B6B69",
            transition: "color 0.3s ease",
          }}
        >
  Series A | Design Consultant 
        </p>
      </div>

      {/* Main Content Grid */}

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-8'>
        {/* Introduction Section */}

        <div className='w-full col-span-2 px-4 md:px-0'>
          <Image
            src={Vault1}
            alt='Vault Project 1'
            className='w-full h-full rounded-[8px]'
          />
        </div>

        <div className='col-span-2 px-4 md:px-0'>
          <div className='max-w-[600px] w-full'>
            <div className='w-full leading-relaxed space-y-6'>
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
                <span className="bg-highlight px-[2px] py-[1px]" style={{ color: isDarkMode ? "#FEFEFB" : "#252423" }}>
                Vault is a platform for artists to share unreleased music and
                exclusive drops with fans.
                </span>
                {" "}
                  I was brought in to increase artist engagement and accelerate
                  product → design → engineering loops.
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
                Artists used Vault during album launches and tours, but
                engagement between campaigns was low. The product worked;
                adoption wasn’t the issue. The opportunity was to spark
                anticipation, fan energy, and social proof—transforming Vault
                from a campaign-only tool into a daily habit for artists and
                fans alike.
              </p>
            </div>
            <div className='col-span-1 '>
              <Image
                src={Divider}
                alt='Divider'
                className='w-full h-[16px] my-6'
              />
            </div>
          </div>
        </div>

        {/* Research Section */}

        <div className='col-span-2 px-4 md:px-0'>
          <div className='max-w-[600px] w-full'>
            <Subheader>Research</Subheader>

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
              I ran a focused research sprint: product review, Mixpanel
              analytics, and internal documentation. Drop creation was
              intuitive, adoption looked solid, but ~50% of fans dropped off at
              login. Artist flows had no real friction. The gap was
              motivational, not functional.
            </p>
            <div className='col-span-1'>
              <Image
                src={Divider}
                alt='Divider'
                className='w-full h-[16px] my-6'
              />
            </div>
          </div>
        </div>

        {/* Design Section */}

        <div className='col-span-2 flex flex-col lg:flex-row gap-4 md:gap-8 relative'>
          <div className='w-full lg:w-1/2 px-4 md:px-0'>
            <Subheader>Ideation</Subheader>

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
              I led a FigJam sprint using a Dungeons & Dragons inspired
              framework to spark unconventional thinking. Clearing out bad ideas
              usually makes room for good ones. Even though I keep creative AI
              usage minimal, I ran my doc through an LLM to see what bubbled up
              — most ideas were ridiculous, but one was worth workshopping.
            </p>

            <p
              className='text-base font-normal mt-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
                color: isDarkMode ? "#B8B8B6" : "#6B6B69",
                transition: "color 0.3s ease",
              }}
            >
              I shared the brainstorm with stakeholders for async feedback and
              dot-voting. Three concepts rose to the top:
            </p>

            <ul
              className='space-y-4 mt-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
                color: isDarkMode ? "#B8B8B6" : "#6B6B69",
                transition: "color 0.3s ease",
                listStyleType: "disc",
                paddingLeft: "1.25rem"
              }}
            >
              <li style={{ color: isDarkMode ? "#E8E8E6" : "#252423" }}>
                <span className='font-normal'>Collective Unlocking</span>
                <ul className="mt-2 space-y-1 ml-4" style={{ listStyleType: "circle" }}>
                  <li style={{ color: isDarkMode ? "#B8B8B6" : "#6B6B69" }}>
                    <span className='text-base'>
                      fans unlock a drop <i>together</i>, turning it into an event
                    </span>
                  </li>
                </ul>
              </li>
              <li style={{ color: isDarkMode ? "#E8E8E6" : "#252423" }}>
                <span className='font-normal'>Leak-for-Follow</span>
                <ul className="mt-2 space-y-1 ml-4" style={{ listStyleType: "circle" }}>
                  <li style={{ color: isDarkMode ? "#B8B8B6" : "#6B6B69" }}>
                    <span className='text-base'>
                      fans trade a follow for access
                    </span>
                  </li>
                </ul>
              </li>
              <li style={{ color: isDarkMode ? "#E8E8E6" : "#252423" }}>
                <span className='font-normal'>Social Proof</span>
                <ul className="mt-2 space-y-1 ml-4" style={{ listStyleType: "circle" }}>
                  <li style={{ color: isDarkMode ? "#B8B8B6" : "#6B6B69" }}>
                    <span className='text-base'>
                      show fans who else unlocked the drop
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className='w-full lg:w-1/2 lg:absolute lg:bottom-3 lg:right-0'>
            <div className='flex justify-center items-center px-4 md:px-0'>
              <Image
                src={VaultBoard}
                alt='Design process'
                className='w-[80%] h-auto my-4 rounded-[8px]'
              />
            </div>
            <Image
              src={VaultBoard1}
              alt='Design process'
              className='w-full h-auto my-4 rounded-[8px]'
            />
          </div>
        </div>

        <div className='col-span-2 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-[16px] my-2' />
        </div>

        {/* North Star Section */}

        <div className='col-span-2 flex flex-col lg:flex-row gap-4 md:gap-8'>
          <div className='w-full lg:w-1/2 px-4 md:px-0'>
            <Subheader>Collective Unlocking™️</Subheader>

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
            Collective Unlocking turns drops into mini fan-driven events. Artists set a threshold, share the link, and watch the progress bar fill. Fans request access, track the momentum, and celebrate together when the drop unlocks.
            </p>

            <p
              className='text-base font-normal mt-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",

                lineHeight: "150%",

                letterSpacing: "-0.02em",
                color: isDarkMode ? "#B8B8B6" : "#6B6B69",
                transition: "color 0.3s ease",
              }}
            >
            It gives artists an emotional payoff, gives fans a reason to come back, and gives Vault a repeatable mechanic for engagement spikes between campaigns.
            </p>
          </div>

          <div className='w-full lg:w-1/2 px-4 md:px-0'>
            <div className='flex flex-row justify-around w-full mx-auto gap-4 '>
              {/* <Image
                src={"/projects/Vault3.png"}
                alt='North star design'
                className='w-1/2 h-auto my-4 max-h-[400px] object-contain'
              /> */}
              <Image
                src={Vault3}
                alt='North star design'
                className='w-full h-auto my-4 max-h-[400px] object-contain rounded-[8px]'
              />
              {/* <Image
                src={Drop2}
                alt='North star design'
                className='w-1/2 h-auto my-4 max-h-[400px] object-contain'
              /> */}
            </div>
          </div>
        </div>

        <div className='col-span-2 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-[16px] my-2' />
        </div>

        {/* Conclusions Section */}

        <div className='col-span-2 px-4 md:px-0'>
           <div className='col-span-2 px-4 md:px-0 flex justify-center'>
          <Image
            src={Vault4}
            alt='Vault Additional Image 1'
            className='w-auto h-auto max-h-[500px] object-contain rounded-[8px]'
          />
        </div>
          <div className='max-w-[600px] w-full'>
            <Subheader>Conclusions</Subheader>

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
              Close collaboration with engineering made the ideation → prototype
              loop fast and fun. Componentizing the design system let us test
              multiple directions quickly, and live animations helped the team
              feel the energy behind the concepts.
            </p>
            <p
              className='text-base font-normal mt-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
                color: isDarkMode ? "#B8B8B6" : "#6B6B69",
                transition: "color 0.3s ease",
              }}
            >
              Collective Unlocking became a leading direction for future
              engagement features and gave the team a clear blueprint for
              designing social momentum. This project was short, but it showed
              how even small, playful mechanics can reshape fan behavior.
            </p>
          </div>
        </div>

        <div className='col-span-2 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-[16px] my-2' />
        </div>

       
          <div className='col-span-2 px-4 md:px-0 flex justify-center'>
            <video
              src="/projects/Vault5.mov"
              autoPlay
              loop
              muted
              playsInline
              className='w-auto h-auto max-h-[500px] object-contain rounded-[8px]'
            />
        </div>
      </div>

      {/* Mobile Navigation Pill */}
      <div className="md:hidden w-full flex justify-center py-4">
        <Link 
          href="/"
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
          <RiHomeLine />
        </Link>
      </div>
    </div>
  );
}

export default Vault;
