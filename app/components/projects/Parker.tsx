import React from "react";
import Image from "next/image";
import Parker1 from "@/public/projects/Parker1.png";
import Parker2 from "@/public/projects/Parker2.jpg";
import Parker3 from "@/public/projects/Parker3.png";
import Parker4 from "@/public/projects/Parker4.jpg";
import Parker5 from "@/public/projects/Parker5.jpg";
import Parker6 from "@/public/projects/Parker6.jpg";
import Parker7 from "@/public/projects/Parker7.png";
import Divider from "@/public/Divider.svg";

function Parker() {
  return (
    <div className='min-h-screen bg-transparent md:p-8 overflow-auto mt-6 md:mt-10 custom-scrollbar'>
      {/* Header */}
      <div className='mb-8 px-4 md:px-0'>
        <h1 className='text-3xl md:text-5xl font-bold text-gray-900 mb-2'>Parker</h1>
        <p className='text-lg text-gray-600 mb-2'>getparker.com →</p>
        <p className='text-gray-500'>
          Series B | Head of Design
        </p>
      </div>

      {/* Main Content Grid */}

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-8'>
        {/* Hero Image */}
        <div className='w-full col-span-2'>
          <Image
            src={Parker1}
            alt='Parker Hero'
            className='w-full h-full md:rounded-lg shadow-md'
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
                Parker is a credit platform for internet-native businesses: e-commerce brands, course creators, and influencers. It provides real-time, dynamic credit limits by underwriting performance data from sales channels, accounting software, and bank accounts.
              </p>
              <p
                className='text-sm font-normal text-[#6B6B69]'
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",
                  lineHeight: "150%",
                  letterSpacing: "-0.02em",
                }}
              >
                I joined as a product designer and grew into Head of Design, leading end-to-end product strategy, UX, and execution while transforming Parker’s internal risk analytics into a customer-facing product. The goal: help founders understand their financial health, take action to improve it, and grow creditworthiness along with us.
              </p>
            </div>
          </div>
        </div>

        <div className='col-span-1 px-4 md:px-0'>
           <Image src={Divider} alt='Divider' className='w-full h-auto my-2' />
        </div>

        {/* Problem Section */}
        <div className='w-full col-span-2'>
          <Image
            src={Parker2}
            alt='Parker Cards'
            className='w-full h-full '
          />
        </div>

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
              Problem
            </div>

            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
              }}
            >
              Parker’s risk team underwrote businesses using real-time data from sales, accounting, and bank integrations. Underwriters assessed indicators like contribution margin, cash burn, CAC, LTV, and refund trends, but all of this insight was invisible to customers. Founders often received denials or low credit limits without understanding why.
            </p>

            <p
              className='text-sm font-normal text-[#6B6B69] mt-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
              }}
            >
              Traditional lenders occasionally approved these businesses, which made Parker feel like a barrier. The opportunity was to transform these internal insights into a transparent, actionable analytics product. By giving founders visibility into their financial health and showing how to improve, Parker could educate customers, drive engagement, and create a flywheel where stronger businesses qualified for higher limits.
            </p>
          </div>
        </div>

        <div className='w-full col-span-2'>
          <Image
            src={Parker3}
            alt='Analytics'
            className='w-full h-full '
          />
        </div>

        <div className='col-span-1 px-4 md:px-0'>
           <Image src={Divider} alt='Divider' className='w-full h-auto my-2' />
        </div>

        {/* Process Section */}
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
              Process
            </div>

            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
              }}
            >
              I started by deeply understanding the ecosystem. I sat in on sales calls to hear how founders reacted to limits and denials, shadowed underwriters to see how internal risk signals were interpreted, and interviewed CFOs, COOs, founders, and denied applicants to understand their goals, frustrations, around existing analytics software. This foundation helped me identify where design could make the invisible visible.
            </p>
          </div>
           <div className='w-full lg:w-1/2'>
            <Image
              src={Parker4}
              alt='Process Slide'
              className='w-full h-auto '
            />
          </div>
        </div>

        <div className='col-span-1 px-4 md:px-0'>
           <Image src={Divider} alt='Divider' className='w-full h-auto my-2' />
        </div>

        {/* Design Section */}
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
              Design
            </div>

            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
              }}
            >
              I mapped the information architecture in writing, with pen & paper, and then in wireframes to workshop with internal subject matter experts.
            </p>
            <p
              className='text-sm font-normal text-[#6B6B69] mt-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
              }}
            >
              Prototypes were iterated with the PM, CTO, engineers, and a set of customers, making sure edge cases were handled and technical feasibility was baked in. The goal was to turn complex risk signals into clear, actionable insights for founders.
            </p>
          </div>
        </div>

        <div className='w-full col-span-2 space-y-8'>
           <Image
            src={Parker5}
            alt='Design 1'
            className='w-full h-auto '
          />
           <Image
            src={Parker6}
            alt='Design 2'
            className='w-full h-auto '
          />
           <Image
            src={Parker7}
            alt='Design 3'
            className='w-full h-auto '
          />
        </div>

        <div className='col-span-1 px-4 md:px-0'>
           <Image src={Divider} alt='Divider' className='w-full h-auto my-2' />
        </div>

        {/* Impact Section */}
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
              Impact
            </div>

            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                lineHeight: "150%",
                letterSpacing: "-0.02em",
              }}
            >
              The product drove measurable results: 30–40% of existing credit customers converted to paid Analytics users, and those users were significantly more likely to stay with Parker rather than churn. Beyond metrics, the work created a framework linking insights → engagement → business growth, proving that transparency and actionable analytics could meaningfully improve both the customer experience and Parker’s lending outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parker;
