"use client";
import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import Link from "next/link";
import Parker1 from "@/public/projects/Parker1.png";
import Parker2 from "@/public/projects/Parker2.jpg";
import Parker3 from "@/public/projects/Parker3.png";
import Parker4 from "@/public/projects/Parker4.jpg";
import Parker5 from "@/public/projects/Parker5.jpg";
import Parker6 from "@/public/projects/Parker6.jpg";
import Parker7 from "@/public/projects/Parker7.png";
import Divider from "@/public/Divider.svg";
import Parker8 from "@/public/projects/Parker8.png";
import Subheader from "../Subheader";
import LightboxImage from "../LightboxImage";
import ImageLightbox from "../ImageLightbox";
import LightboxVideo from "../LightboxVideo";
import { getProjectVideoUrl } from "../../utils/projectVideos";

function Parker() {
  const { isDarkMode } = useTheme();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images = [
    { src: Parker1, alt: "Parker Hero" },
    { src: Parker2, alt: "Parker Cards" },
    { src: Parker3, alt: "Analytics" },
    { src: Parker4, alt: "Process Slide" },
    { src: Parker5, alt: "Design 1" },
    { src: Parker6, alt: "Design 2" },
    { src: Parker7, alt: "Design 3" },
    { src: Parker8, alt: "Design 1" },
    {
      type: "video" as const,
      sources: [{ src: getProjectVideoUrl("Parker9.mp4"), type: "video/mp4" }],
      poster: typeof Parker8 === "string" ? Parker8 : Parker8.src,
    },
  ];
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
          Parker
        </h1>
        <a
          href='https://getparker.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-lg mb-2 flex items-center gap-1 group cursor-pointer w-fit'
          style={{
            color: isDarkMode ? "#FEFEFB" : "#252423",
            transition: "color 0.3s ease",
          }}
        >
          getparker.com
          <RiArrowRightLine className='transition-transform duration-300 group-hover:translate-x-1' />
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
          Series B | Head of Design
        </p>
      </div>

      {/* Main Content Grid */}

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 mb-8'>
        {/* Hero Image */}
        <div className='w-full col-span-2 px-4 md:px-0'>
          <LightboxImage
            src={Parker1}
            alt='Parker Hero'
            className='w-full h-full rounded-lg'
            onClick={() => {
              setLightboxIndex(0);
              setLightboxOpen(true);
            }}
          />
        </div>

        {/* Intro Text */}
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
                <span
                  className='bg-highlight px-0.5 py-px'
                  style={{ color: isDarkMode ? "#FEFEFB" : "#252423" }}
                >
                  Parker is a credit platform for internet-native businesses:
                  e-commerce brands, course creators, and influencers.
                </span>{" "}
                It provides real-time, dynamic credit limits by underwriting
                performance data from sales channels, accounting software, and
                bank accounts.
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
                I joined as a product designer and grew into Head of Design,
                leading end-to-end product strategy, UX, and execution while
                transforming Parker’s internal risk analytics into a
                customer-facing product. The goal: help founders understand
                their financial health, take action to improve it, and grow
                creditworthiness along with us.
              </p>
            </div>
          </div>
        </div>

        <div className='col-span-2 lg:col-span-1 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-4 my-2' />
        </div>

        {/* Problem Section */}
        <div className='w-full col-span-2 px-4 md:px-0'>
          <LightboxImage
            src={Parker2}
            alt='Parker Cards'
            className='w-full h-full rounded-lg'
            onClick={() => {
              setLightboxIndex(1);
              setLightboxOpen(true);
            }}
          />
        </div>

        <div className='col-span-2 px-4 md:px-0'>
          <div className='max-w-[600px] w-full'>
            <Subheader>Problem</Subheader>

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
              Parker’s risk team underwrote businesses using real-time data from
              sales, accounting, and bank integrations. Underwriters assessed
              indicators like contribution margin, cash burn, CAC, LTV, and
              refund trends, but all of this insight was invisible to customers.
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
              Traditional lenders occasionally approved these businesses, which
              made Parker feel like a barrier.{" "}
              <span
                className='bg-highlight px-0.5 py-px'
                style={{ color: isDarkMode ? "#FEFEFB" : "#252423" }}
              >
                The opportunity was to transform these internal insights into a
                transparent, actionable analytics product.
              </span>{" "}
              By giving founders visibility into their financial health and
              showing how to improve, Parker could educate customers, drive
              engagement, and create a flywheel where stronger businesses
              qualified for higher limits.
            </p>
          </div>
        </div>

        <div className='w-full col-span-2 px-4 md:px-0'>
          <LightboxImage
            src={Parker3}
            alt='Analytics'
            className='w-full h-full rounded-lg'
            onClick={() => {
              setLightboxIndex(2);
              setLightboxOpen(true);
            }}
          />
        </div>

        <div className='col-span-2 lg:col-span-1 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-4 my-2' />
        </div>

        {/* Process Section */}
        <div className='col-span-2 flex flex-col lg:flex-row gap-8 md:gap-16 px-4 md:px-0'>
          <div className='w-full lg:w-1/2'>
            <Subheader>Process</Subheader>

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
              I started by deeply understanding the ecosystem. I sat in on sales
              calls to hear how founders reacted to limits and denials, shadowed
              underwriters to see how internal risk signals were interpreted,
              and interviewed CFOs, COOs, founders, and denied applicants to
              understand their goals, frustrations, around existing analytics
              software.
            </p>
          </div>
          <div className='w-full lg:w-1/2 px-4 md:px-0'>
            <LightboxImage
              src={Parker4}
              alt='Process Slide'
              className='w-full h-auto rounded-lg'
              onClick={() => {
                setLightboxIndex(3);
                setLightboxOpen(true);
              }}
            />
          </div>
        </div>

        <div className='col-span-2 lg:col-span-1 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-4 my-2' />
        </div>

        {/* Design Section */}
        <div className='col-span-2 flex flex-col lg:flex-row gap-8 md:gap-16 px-4 md:px-0'>
          <div className='w-full lg:w-1/2 max-w-[600px]'>
            <Subheader>Design</Subheader>

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
              I mapped the information architecture in writing, with pen &
              paper, and then in wireframes to workshop with internal subject
              matter experts.
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
              Prototypes were iterated with the PM, CTO, engineers, and a set of
              customers, making sure edge cases were handled and technical
              feasibility was baked in. The goal was to turn complex risk
              signals into clear, actionable insights for founders.
            </p>
          </div>
          <div className='w-full lg:w-1/2 px-4 md:px-0'>
            <LightboxImage
              src={Parker5}
              alt='Design 1'
              className='w-full h-auto rounded-sm'
              onClick={() => {
                setLightboxIndex(4);
                setLightboxOpen(true);
              }}
            />
          </div>
        </div>

        <div className='w-full col-span-2 flex flex-col lg:flex-row gap-8 md:gap-16 px-4 md:px-0'>
          <div className='w-full lg:w-1/2'>
            <LightboxImage
              src={Parker6}
              alt='Design 2'
              className='w-full h-auto rounded-lg'
              onClick={() => {
                setLightboxIndex(5);
                setLightboxOpen(true);
              }}
            />
          </div>
          <div className='w-full lg:w-1/2'>
            <LightboxImage
              src={Parker7}
              alt='Design 3'
              className='w-full h-auto rounded-lg'
              onClick={() => {
                setLightboxIndex(6);
                setLightboxOpen(true);
              }}
            />
          </div>
        </div>

        <div className='col-span-2 lg:col-span-1 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-4 my-2' />
        </div>

        {/* Impact Section */}
        <div className='col-span-2 px-4 md:px-0'>
          <div className='max-w-[600px] w-full mb-8'>
            <Subheader>Impact</Subheader>

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
              The product drove measurable results: 30–40% of existing credit
              customers converted to paid Analytics users, and those users were
              significantly more likely to stay with Parker rather than churn.
              Beyond metrics, the work created a framework linking insights →
              engagement → business growth, proving that transparency and
              actionable analytics could meaningfully improve both the customer
              experience and Parker’s lending outcomes.
            </p>
          </div>
          <div className='w-full col-span-2 space-y-16 px-4 md:px-0'>
            <LightboxImage
              src={Parker8}
              alt='Design 1'
              className='w-full h-auto rounded-lg'
              onClick={() => {
                setLightboxIndex(7);
                setLightboxOpen(true);
              }}
            />
          </div>
          <div className='col-span-2 px-4 md:px-0 py-8'>
            <Image src={Divider} alt='Divider' className='w-full h-4 my-2' />
          </div>
          <div className='w-full col-span-2 space-y-16 px-4 md:px-0'>
            <LightboxVideo
              src={getProjectVideoUrl("Parker9.mp4")}
              autoPlay
              loop
              muted
              playsInline
              className='w-full h-auto'
              wrapperClassName='rounded-lg overflow-hidden'
              label='Parker video 1'
              onClick={() => {
                setLightboxIndex(8);
                setLightboxOpen(true);
              }}
            />
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        images={images}
        open={lightboxOpen}
        index={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />

      {/* Mobile Navigation Pill */}
      <div className='md:hidden w-full flex justify-center py-4'>
        <Link
          href='/projects/Caravan'
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
            textDecoration: "none",
          }}
        >
          Caravan
        </Link>
      </div>
    </div>
  );
}

export default Parker;
