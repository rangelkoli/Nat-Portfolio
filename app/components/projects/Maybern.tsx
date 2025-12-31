"use client";
import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import Link from "next/link";
import Dashboard from "@/public/projects/Maybern1.png";
import Divider from "@/public/Divider.svg";
import ReportBuilder from "@/public/projects/Maybern2.jpg";
import Design from "@/public/projects/Design.png";
import IRRBridge from "@/public/projects/IRRBridge.png";
import Subheader from "../Subheader";


function Maybern() {
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
          Maybern
        </h1>
        <a
          href="https://Maybern.com"
          target="_blank"
          rel="noopener noreferrer"
          className='text-lg mb-2 flex items-center gap-1 group cursor-pointer w-fit'
          style={{ color: isDarkMode ? "#FEFEFB" : "#252423", transition: "color 0.3s ease" }}
        >
          maybern.com
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
          Series B | Senior Product Designer
        </p>
      </div>

      {/* Main Content Grid */}

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-8'>
        {/* Introduction Section */}

        <div className='w-full col-span-2 px-4 md:px-0 h-full'>
          <Image
            src={Dashboard}
            alt='Maybern Project 1'
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
                The billion-dollar fund management industry relies on outsourced
                administrators managing massive Excel sheets, translating legal
                agreements into formula, and juggling shifting LP pools.{" "}
                <span
                  className='bg-highlight px-[2px] py-[1px]'
                  style={{ color: isDarkMode ? "#FEFEFB" : "#252423" }}
                >
                  Maybern handles this complexity with math-driven allocations
                  and a user-configurable calc language, mXL.
                </span>
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
               At its core, Maybern reconciles capital calls, LP opt-outs, distributions, and tax-sensitive fund structures. The vision goes beyond accounting to empower CFOs and fund offices with instant insight into performance so they can move from chasing numbers to making proactive decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Report Builder Section */}

        <div className='col-span-2 px-4 md:px-0'>
          <div className='max-w-[600px] w-full'>
            <Subheader>Report Builder</Subheader>

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
              For fund managers, the biggest pain point is access to their own
              numbers. Legacy systems give fund administrators control, so even
              simple requests like “capital called to date” can take days or
              weeks. When investors ask questions, delays cost credibility and
              deals.
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
              Our challenge was to give users full visibility and flexibility
              while maintaining accuracy and compliance. Fund accountants
              retained control of the math, while end users needed freedom to
              explore, visualize, and export data. The goal was simple to state
              but complex to execute: empower users to manipulate and present
              their data.
            </p>
          </div>
        </div>
        <div className='w-full col-span-2 px-4 md:px-0'>
          <Image
            src={ReportBuilder}
            alt='Maybern Project 2'
            className='w-full h-full rounded-[8px]'
          />
        </div>
        <div className='col-span-2 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-[16px] my-2' />
        </div>

        {/* Research Section */}

        <div className='col-span-2 px-4 md:px-0'>
          <div className='max-w-[600px] w-full'>
            <Subheader>Research</Subheader>

            <p
              className='text-base font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",

                lineHeight: "150%",

                letterSpacing: "-0.02em",
                color: isDarkMode ? "#B8B8B6" : "#6B6B69",
                transition: "color 0.3s ease",
              }}
            >
              I interviewed stakeholders in administration, operations, and
              investor relations to understand how reports were requested and
              created. Three report types consistently emerged: investor tear
              sheets, providing quick snapshots of LP performance; ILPA reports,
              the standard format for institutional investors; and dry powder
              reports, which summarize unallocated capital for investment
              decisions.
            </p>
          </div>
        </div>

        <div className='col-span-2 px-4 md:px-0'>
           <Image src={Divider} alt='Divider' className='w-full h-[16px] my-2' />
        </div>

        {/* Design Section */}

        <div className='col-span-2 px-4 md:px-0'>
          <div className='max-w-[600px] w-full'>
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
              I mapped a unified information architecture for all reports,
              including report name, description, columns, filters, and preview,
              save, and export functionality. Conversations surfaced the need
              for file management and reusable templates to onboard users and
              standardize reporting.
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
              From there, we defined the north star vision: a fully featured hub
              with AI-assisted setup, templates, report runs, dashboards, and
              graphing capabilities. This aspirational target aligned the team
              around the future of reporting, then we worked backward with
              engineering and product to define an MVP that prioritized
              usability and critical functionality.
            </p>
          </div>
        </div>

        <div className='col-span-2 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-[16px] my-2' />
        </div>

        {/* North Star Section */}

        <div className='col-span-2 flex flex-col lg:flex-row gap-4 md:gap-8'>
          <div className='w-full lg:w-1/2 px-4 md:px-0'>
            <Subheader>North Star</Subheader>

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
              The north star envisioned a fully integrated hub to keep users in
              the Maybern ecosystem rather than exporting to Excel or BI tools.
              Users could start from blank or template-based reports,
              parameterize, timestamp, and schedule them. Within each report,
              users could define groupings, filters, and select calculations
              from a searchable library of built-in or custom mXL functions. <span className="bg-highlight px-[2px] py-[1px]" style={{ color: isDarkMode ? "#FEFEFB" : "#252423" }}>The focus here was on “A-Ha” moments, graphing, and feature richness over accommodating every possible permutation.</span>
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
              This process unified leadership and stakeholders. By grounding
              aspirational designs in real fund accountant workflows, we earned
              buy-in to prioritize usability and UI finesse, then worked
              backward to define a lean, achievable MVP.
            </p>
          </div>

         <div className='w-full lg:w-1/2 px-4 md:px-0'>
            <video
              src="/projects/Maybern3.mov"
              autoPlay
              loop
              muted
              playsInline
              className='w-full h-auto my-4 rounded-[8px]'
            />
          </div>
        </div>

        <div className='col-span-2 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-[16px] my-2' />
        </div>

        {/* MVP Section */}

        <div className='col-span-2 flex flex-col lg:flex-row gap-4 md:gap-8'>
          <div className='w-full lg:w-1/2 px-4 md:px-0'>
            <Subheader>MVP</Subheader>

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
                MVP focused on perfecting core workflows: creating, running, and exporting reports.
              </span> Internal reviews surfaced a few usability
              and technical constraints, like confusion around historical runs
              of a single report and deferred nested menu complexity.
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
              We built a report database where each run is treated as a
              variation, clarified column setup into “Group By,” “Attributes,”
              and “Time” steps, and replaced dropdown menus with a dynamic
              sidebar that adapts to selections. 
            </p>
          </div>

           <div className='w-full lg:w-1/2 px-4 md:px-0'>
            <video
              src="/projects/Maybern4.mov"
              autoPlay
              loop
              muted
              playsInline
              className='w-full h-auto my-4 rounded-[8px]'
            />
          </div>
        </div>

        <div className='col-span-2 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-[16px] my-2' />
        </div>

        {/* IRR Bridges Section */}

        <div className='col-span-2 flex flex-col lg:flex-row gap-4 md:gap-8'>
          <div className='w-full lg:w-1/2 px-4 md:px-0'>
            <Subheader>IRR Bridges</Subheader>

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
           While the MVP was with eng, customers got excited about the potential for generating IRR bridges, which visualize how an investment’s return develops over time. Design explored integrating this into Report Builder as a flexible graphing tool. Users can input starting and ending values, select drivers like leverage or timing, and generate dynamic charts bridge graphs.
            </p>

           
          </div>

          <div className='w-full lg:w-1/2 relative no-scrollbar '>
            <Image
              src={IRRBridge}
              alt='IRR Bridges design'
              className='w-full h-auto my-4 right-0 top-0 rounded-[8px]'
            />
          </div>
        </div>

        <div className='col-span-2 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-[16px] my-2' />
        </div>

        {/* Conclusions Section */}

        <div className='col-span-2 px-4 md:px-0'>
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
              This project taught me that designing a north star isn’t just
              about vision—it’s about giving stakeholders something real to
              believe in. The polished future state made people feel heard,
              while the MVP showed how we’d get there. Finding that balance
              between aspiration and execution was what built trust across
              design, product, and engineering.
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
              I also learned that in finance, visuals only matter if they
              reinforce the math behind them. The most elegant chart means
              nothing without accuracy, and the best product experience builds
              confidence first, delight second. Report Builder became the bridge
              between those worlds—a product that speaks the language of
              numbers.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Pill */}
      <div className="md:hidden w-full flex justify-center py-4">
        <Link 
          href="/projects/Parker"
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
          Parker
        </Link>
      </div>
    </div>
  );
}

export default Maybern;
