import React from "react";
import Image from "next/image";
import Divider from "@/public/Divider.svg";
import Report from "@/public/projects/Report.png";
import Vault1 from "@/public/projects/Vault1.png";
import Design from "@/public/projects/Design.png";
import VaultBoard from "@/public/projects/VaultBoard.png";
import VaultBoard1 from "@/public/projects/VaultBoard1.png";
import Drop1 from "@/public/projects/Drop1.png";
import Drop2 from "@/public/projects/Drop2.png";

function Vault() {
  return (
    <div className='min-h-screen bg-transparent md:p-8 overflow-auto mt-6 md:mt-10 overflow-hidden'>
      {/* Header */}
      <div className='mb-8 px-4 md:px-0'>
        <h1
          className='text-3xl md:text-5xl font-bold text-[#252423] mb-2'
          style={{
            fontFamily: '"Instrument Sans", sans-serif',
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "28px",
            lineHeight: "150%",
            letterSpacing: "-0.02em",
          }}
        >
          Vault
        </h1>
        <p
          className='text-[#6B6B69]'
          style={{
            fontFamily: '"Instrument Sans", sans-serif',
            fontStyle: "normal",
            fontWeight: 400,
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
            src={Vault1}
            alt='Vault Project 1'
            className='w-full h-full '
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
                Vault is a platform for artists to share unreleased music and
                exclusive drops with fans.{" "}
                <span className='font-bold'>
                  I was brought in to increase artist engagement and accelerate
                  product → design → engineering loops.
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
                Artists used Vault during album launches and tours, but
                engagement between campaigns was low. The product worked;
                adoption wasn’t the issue. The opportunity was to spark
                anticipation, fan energy, and social proof—transforming Vault
                from a campaign-only tool into a daily habit for artists and
                fans alike.
              </p>
            </div>
            <div className='col-span-1'>
              <Image
                src={Divider}
                alt='Divider'
                className='w-full h-auto my-2'
              />
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
              Opportunity
            </div>

            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",

                lineHeight: "150%",

                letterSpacing: "-0.02em",
              }}
            >
              Engagement dropped sharply between campaigns. Artists knew how to
              use Vault but not why to return. Our challenge was to design
              repeatable, social micro-moments of excitement that made Vault
              feel alive, something worth checking every day.
            </p>

            <p
              className='text-sm font-normal text-[#6B6B69] mt-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",

                lineHeight: "150%",

                letterSpacing: "-0.02em",
              }}
            >
              How might we motivate artists to onboard and upload unreleased
              music to Vault?
            </p>
            <div className='col-span-1'>
              <Image
                src={Divider}
                alt='Divider'
                className='w-full h-auto my-2'
              />
            </div>
          </div>
        </div>

        {/* Research Section */}

        <div className='col-span-1 px-4 md:px-0'>
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
            I ran a short research sprint reviewing the live product, Mixpanel
            analytics, and internal documentation. Drop creation was intuitive,
            and adoption looked promising, but about 50% of fans dropped off at
            login. Artist flows showed no UX friction, so the usage gap was
            motivational rather than functional. Artists had the tools; they
            needed reasons to engage more frequently. This insight became the
            lens for ideation.
          </p>
          <div className='col-span-1'>
            <Image src={Divider} alt='Divider' className='w-full h-auto my-2' />
          </div>
        </div>

        {/* Design Section */}

        <div className='col-span-2 flex flex-col lg:flex-row gap-4 md:gap-8 relative'>
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
              Ideation
            </div>

            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",

                lineHeight: "150%",

                letterSpacing: "-0.02em",
              }}
            >
              I led a FigJam sprint using a Dungeons & Dragons inspired
              framework to spark unconventional ideas. I’ve found that clearing
              out the bad ideas often makes room for the good ones. Even though
              I’m on an AI diet, I ran my solution docs through an LLM just to
              see what would surface — most ideas were bad, but with a little
              massaging, one made the final cut.
            </p>

            <p
              className='text-sm font-normal text-[#6B6B69] mt-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",

                lineHeight: "150%",

                letterSpacing: "-0.02em",
              }}
            >
              I shared the brainstorm with stakeholders for async feedback and
              dot-voting, which helped shape the direction. Three concepts stood
              out: Collective Unlocking, where fans unlock a drop together and
              turn it into an event; Leak-for-Follow, where fans trade a follow
              on Spotify or Instagram for access; and Social Proof, showing fans
              who else has unlocked the drop. Concepts like self-destructing
              drops or analytics dashboards were cut — too much effort, not
              enough impact. The focus stayed on making Vault feel social,
              exciting, and rewarding.
            </p>
          </div>

          <div className='w-full lg:w-1/2 lg:absolute lg:bottom-3 lg:right-0'>
            <div className='flex justify-center items-center'>
              <Image
                src={VaultBoard}
                alt='Design process'
                className='w-[80%] h-auto my-4 '
              />
            </div>
            <Image
              src={VaultBoard1}
              alt='Design process'
              className='w-full h-auto my-4  '
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
              Collective Unlocking™️
            </div>

            <p
              className='text-sm font-normal text-[#6B6B69]'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",

                lineHeight: "150%",

                letterSpacing: "-0.02em",
              }}
            >
              Collective Unlocking turns drops into fan-driven events. Drops
              stay locked until a set number of fans engage, then unlock for
              everyone with a celebratory notification. Artists gain emotional
              payoff, fans feel part of the momentum, and Vault benefits from
              repeat visits and organic growth. The flow is simple: artists
              create a drop, set a threshold, share it, and watch the progress
              bar fill.
            </p>

            <p
              className='text-sm font-normal text-[#6B6B69] mt-4'
              style={{
                fontFamily: "'Instrument Sans', sans-serif",

                lineHeight: "150%",

                letterSpacing: "-0.02em",
              }}
            >
              Fans request access, track progress, and celebrate when the
              community unlocks it. Iteration focused on animation polish,
              progress clarity, and small UX adjustments to make the unlock
              moment feel exciting without overcomplicating the experience.
            </p>
          </div>

          <div className='w-full lg:w-1/2'>
            <div className=' flex flex-row justify-around w-full mx-auto gap-4'>
              <Image
                src={Drop1}
                alt='North star design'
                className='w-1/2 h-auto my-4 max-h-[400px] object-contain'
              />
              <Image
                src={Drop2}
                alt='North star design'
                className='w-1/2 h-auto my-4 max-h-[400px] object-contain'
              />
            </div>
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
              Close collaboration with engineering and stakeholders enabled
              fast, iterative ideation. Component-izing the design system
              allowed rapid prototyping and quick feedback loops. Live
              animations sparked excitement across the team and highlighted how
              shared energy drives strong design culture. The result was a
              simple, scalable feature that reignited engagement and positioned
              Vault as an essential part of artists’ creative workflow.
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
      </div>
    </div>
  );
}

export default Vault;
