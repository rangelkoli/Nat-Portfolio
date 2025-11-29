import React from "react";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import Dashboard from "@/public/projects/Dashboard.png";
import Divider from "@/public/Divider.svg";
import ReportBuilder from "@/public/projects/ReportBuilder.png";
import Design from "@/public/projects/Design.png";
import IRRBridge from "@/public/projects/IRRBridge.png";

function Maybern() {
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
          Maybern
        </h1>
        <a
          href="https://Maybern.com"
          target="_blank"
          rel="noopener noreferrer"
          className='text-lg text-gray-600 mb-2 flex items-center gap-1 group cursor-pointer w-fit'
        >
          Maybern.com
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
          Series A | Senior Product Designer | 2025
        </p>
      </div>

      {/* Main Content Grid */}

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-8'>
        {/* Introduction Section */}

        <div className='w-full col-span-2'>
          <Image
            src={Dashboard}
            alt='Maybern Project 1'
            className='w-full h-full '
          />
        </div>

        <div className='col-span-1 flex flex-col lg:flex-row gap-4 md:gap-8 px-4 md:px-0'>
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
                When I first saw Maybern, my thought was: how does this not
                already exist? The billion-dollar fund management industry still
                relies on outsourced administrators managing massive Excel
                sheets, translating legal agreements into formulas, and juggling
                ever-shifting LP pools.{" "}
                <span className='font-bold'>
                  Maybern handles this complexity with math-driven allocations
                  and a user-configurable calculation language, mXL.
                </span>
              </p>

              <p
                className='text-sm font-normal text-[#6B6B69]'
                style={{
                  fontFamily: "'Instrument Sans', sans-serif",

                  lineHeight: "150%",

                  letterSpacing: "-0.02em",
                }}
              >
                The leadership team includes experts from Cadre, Goldman Sachs,
                and Google Sheets. At its core, Maybern reconciles capital
                calls, LP opt-outs, distributions, and tax-sensitive fund
                structures. The vision goes beyond accounting to empower CFOs
                and fund offices with instant insight into performance, showing
                how LP agreements, fund configurations, and investments impact
                results. I joined as the core product was taking shape. Major
                funds like KSL and Brookfield were coming on board, and{" "}
                <span className='font-bold'>
                  my role was to design the self-serve UX, replacing the
                  Excel-style training that dominates the industry, and lead
                  design on a new product: the Maybern Report Builder
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Report Builder Section */}

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
              Report Builder
            </div>

            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",

                lineHeight: "150%",

                letterSpacing: "-0.02em",
              }}
            >
              For fund managers, the biggest pain point is access to their own
              numbers. Legacy systems give fund administrators control, so even
              simple requests like “capital called to date” can take days or
              weeks. When investors ask questions, delays cost credibility and
              deals.
            </p>

            <p
              className='text-sm font-normal text-[#6B6B69] mt-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",

                lineHeight: "150%",

                letterSpacing: "-0.02em",
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
        <div className='w-full col-span-2'>
          <Image
            src={ReportBuilder}
            alt='Maybern Project 2'
            className='w-full h-full '
          />
        </div>
        <div className='col-span-1 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-auto my-2' />
        </div>

        {/* Research Section */}

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
            Research
          </div>

          <p
            className='text-sm font-normal text-[#6B6B69]'
            style={{
              fontFamily: "'Instrument Sans', sans-serif",

              lineHeight: "150%",

              letterSpacing: "-0.02em",
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

        <div className='col-span-1 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-auto my-2' />
        </div>

        {/* Design Section */}

        <div className='col-span-2 flex flex-col lg:flex-row gap-4 md:gap-8'>
          <div className='w-full lg:w-1/2 px-4 md:px-0'>
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
              I mapped a unified information architecture for all reports,
              including report name, description, columns, filters, and preview,
              save, and export functionality. Conversations surfaced the need
              for file management and reusable templates to onboard users and
              standardize reporting.
            </p>

            <p
              className='text-sm font-normal text-[#6B6B69] mt-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",

                lineHeight: "150%",

                letterSpacing: "-0.02em",
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

          <div className='w-full lg:w-1/2'>
            <Image
              src={Design}
              alt='Design process'
              className='w-full h-auto my-4'
            />
          </div>
        </div>

        <div className='col-span-1 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-auto my-2' />
        </div>

        {/* North Star Section */}

        <div className='col-span-2 flex flex-col lg:flex-row gap-4 md:gap-8'>
          <div className='w-full lg:w-1/2 px-4 md:px-0'>
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
              North Star
            </div>

            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",

                lineHeight: "150%",

                letterSpacing: "-0.02em",
              }}
            >
              The north star envisioned a fully integrated hub to keep users in
              the Maybern ecosystem rather than exporting to Excel or BI tools.
              Users could start from blank or template-based reports,
              parameterize, timestamp, and schedule them. Within each report,
              users could define groupings, filters, and select calculations
              from a searchable library of built-in or custom mXL functions. The
              focus was on “a-ha” moments, graphing, and feature richness over
              accommodating every possible permutation.
            </p>

            <p
              className='text-sm font-normal text-[#6B6B69] mt-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",

                lineHeight: "150%",

                letterSpacing: "-0.02em",
              }}
            >
              This process unified leadership and stakeholders. By grounding
              aspirational designs in real fund accountant workflows, we earned
              buy-in to prioritize usability and UI finesse, then worked
              backward to define a lean, achievable MVP.
            </p>
          </div>

          <div className='w-full lg:w-1/2'>
            <Image
              src={Design}
              alt='North star design'
              className='w-full h-auto my-4'
            />
          </div>
        </div>

        <div className='col-span-1 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-auto my-2' />
        </div>

        {/* MVP Section */}

        <div className='col-span-2 flex flex-col lg:flex-row gap-4 md:gap-8'>
          <div className='w-full lg:w-1/2 px-4 md:px-0'>
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

            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",

                lineHeight: "150%",

                letterSpacing: "-0.02em",
              }}
            >
              The MVP focused on perfecting core workflows: creating, running,
              and exporting reports. Internal reviews surfaced a few usability
              and technical constraints, like confusion around historical runs
              of a single report and deferred nested menu complexity.
            </p>

            <p
              className='text-sm font-normal text-[#6B6B69] mt-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",

                lineHeight: "150%",

                letterSpacing: "-0.02em",
              }}
            >
              We built a report database where each run is treated as a
              variation, clarified column setup into “Group By,” “Attributes,”
              and “Time” steps, and replaced dropdown menus with a dynamic
              sidebar that adapts to selections. Fund Family was added as a
              high-level parameter, with cross-fund reporting planned as a fast
              follow.
            </p>
          </div>

          <div className='w-full lg:w-1/2'>
            <Image
              src={Design}
              alt='MVP design'
              className='w-full h-auto my-4'
            />
          </div>
        </div>

        <div className='col-span-1 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-auto my-2' />
        </div>

        {/* IRR Bridges Section */}

        <div className='col-span-2 flex flex-col lg:flex-row gap-4 md:gap-8'>
          <div className='w-full lg:w-1/2 px-4 md:px-0'>
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
              IRR Bridges
            </div>

            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",

                lineHeight: "150%",

                letterSpacing: "-0.02em",
              }}
            >
              While the MVP was in engineering, investors were especially
              excited about IRR bridges, which visualize how an investment’s
              return develops over time. Design explored integrating this into
              Report Builder as a flexible, future-ready graphing tool.
            </p>

            <p
              className='text-sm font-normal text-[#6B6B69] mt-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",

                lineHeight: "150%",

                letterSpacing: "-0.02em",
              }}
            >
              Users can input starting and ending values, select drivers like
              leverage or timing, and instantly generate dynamic charts showing
              change over time. Bridges pull directly from report outputs,
              letting users transition smoothly from tabular data to visual
              storytelling. This exploration helped Maybern move from static
              reporting to interactive analytics that explain why results look
              the way they do.
            </p>
          </div>

          <div className='w-full lg:w-1/2 relative no-scrollbar'>
            <Image
              src={IRRBridge}
              alt='IRR Bridges design'
              className='w-full h-auto my-4  right-0 top-0'
            />
          </div>
        </div>

        <div className='col-span-1 px-4 md:px-0'>
          <Image src={Divider} alt='Divider' className='w-full h-auto my-2' />
        </div>

        {/* Conclusions Section */}

        <div className='col-span-2 flex flex-col lg:flex-row gap-4 md:gap-8'>
          <div className='w-full lg:w-1/2 px-4 md:px-0'>
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
              Conclusions
            </div>

            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",

                lineHeight: "150%",

                letterSpacing: "-0.02em",
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
              className='text-sm font-normal text-[#6B6B69] mt-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",

                lineHeight: "150%",

                letterSpacing: "-0.02em",
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
    </div>
  );
}

export default Maybern;
