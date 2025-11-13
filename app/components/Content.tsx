"use client";
import rightarrow from "../../public/rightarrow.svg";
import Image from "next/image";
import { useState } from "react";
import {
  RiDribbbleLine,
  RiDribbbleFill,
  RiFigmaLine,
  RiFigmaFill,
  RiInstagramLine,
  RiInstagramFill,
  RiSpotifyLine,
  RiSpotifyFill,
} from "@remixicon/react";
import { FaMedium } from "react-icons/fa6";
import { RiMediumLine } from "react-icons/ri";
import DribbleFill from "../../public/dribble-fill.svg";
import SpotifyFill from "../../public/spotify-fill.svg";
import FigmaFill from "../../public/figma-fill.svg";
import InstagramFill from "../../public/instagram-fill.svg";
import { FaArrowRight } from "react-icons/fa";

interface ContentProps {
  isDarkMode?: boolean;
}

export default function Content({ isDarkMode = false }: ContentProps) {
  const [isDribbleHovered, setIsDribbleHovered] = useState(false);
  const [isFigmaHovered, setIsFigmaHovered] = useState(false);
  const [isMediumHovered, setIsMediumHovered] = useState(false);
  const [isInstagramHovered, setIsInstagramHovered] = useState(false);
  const [isSpotifyHovered, setIsSpotifyHovered] = useState(false);
  return (
    <div className='slide-in-content max-w-lg' style={{}}>
      <h1
        className='mb-6'
        style={{
          fontFamily: '"Instrument Sans", sans-serif',
          fontWeight: 400,
          fontSize: "28px",
          lineHeight: "150%",
          letterSpacing: "-2%",
          color: isDarkMode ? "#E8E8E6" : "#1a1a1a",
          transition: "color 0.3s ease",
        }}
      >
        {isDarkMode ? (
          <>
            Hey, I'm Nat - <br />
            and I believe in magic.
          </>
        ) : (
          <>
            Hey, I'm Nat - <br />
            NYC based product designer.
          </>
        )}
      </h1>

      <p
        className='mb-6'
        style={{
          fontFamily: '"Instrument Sans", sans-serif',
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "150%",
          letterSpacing: "-2%",
          color: isDarkMode ? "#B8B8B6" : "#666666",
          transition: "color 0.3s ease",
        }}
      >
        {isDarkMode ? (
          <>
            My time is spent exploring new ideas, moving my body, curating my
            spaces, and living in wellness. I'm an aerial acrobat, love to
            renovate, and dive into anything that makes life feel alive.
            Vulnerability is my strength, imperfection is beautiful, and the
            best experiences are the ones we lean into with curiosity and care.
          </>
        ) : (
          <>
            & magical thinker. I believe life is a canvas and I'm using mine to
            craft tools that make life bigger, clearer, and more connected.
            Design is how I balance play and purpose, my opportunity to create
            experiences that help others live healthier, more meaningful lives,
            both on and offline.
          </>
        )}
      </p>

      <p
        className='mb-8'
        style={{
          fontFamily: '"Instrument Sans", sans-serif',
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "150%",
          letterSpacing: "-2%",
          color: isDarkMode ? "#B8B8B6" : "#4a4a4a",
          transition: "color 0.3s ease",
        }}
      >
        {isDarkMode ? (
          <>
            Currently hanging at{" "}
            <a
              href='#'
              className='font-semibold hover:underline'
              style={{
                color: "#FEFEFB",
                fontFamily: '"Instrument Sans", sans-serif',
                display: "inline-flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              Om factory <FaArrowRight color='#FEFEFB' size={8} />
            </a>{" "}
            & dreaming up new ways to connect.
          </>
        ) : (
          <>
            Currently building cool stuff with{" "}
            <a
              href='#'
              className='font-semibold hover:underline'
              style={{
                color: "#252423",
                fontFamily: '"Instrument Sans", sans-serif',
                display: "inline-flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              Maybern <FaArrowRight color='#252423' size={8} />
            </a>{" "}
            &{" "}
            <a
              href='#'
              className='font-semibold hover:underline'
              style={{
                color: "#252423",
                display: "inline-flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              HereAfter
              <FaArrowRight color='#252423' size={8} />
            </a>
          </>
        )}
      </p>

      {isDarkMode ? (
        <div className='flex gap-6 text-2xl'>
          <a
            href='#'
            onMouseEnter={() => setIsInstagramHovered(true)}
            onMouseLeave={() => setIsInstagramHovered(false)}
            style={{
              display: "inline-block",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                opacity: isInstagramHovered ? 0 : 1,
                position: "absolute",
                transition: "opacity 0.3s ease",
              }}
            >
              <RiInstagramLine color='#F8F8F5' size={16} />
            </div>
            <div
              style={{
                opacity: isInstagramHovered ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            >
              <Image
                src={InstagramFill}
                width={16}
                height={16}
                alt='Instagram'
              />
            </div>
          </a>
          <a
            href='#'
            onMouseEnter={() => setIsSpotifyHovered(true)}
            onMouseLeave={() => setIsSpotifyHovered(false)}
            style={{
              display: "inline-block",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                opacity: isSpotifyHovered ? 0 : 1,
                position: "absolute",
                transition: "opacity 0.3s ease",
              }}
            >
              <RiSpotifyLine color='#F8F8F5' size={16} />
            </div>
            <div
              style={{
                opacity: isSpotifyHovered ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            >
              <Image src={SpotifyFill} width={16} height={16} alt='Spotify' />
            </div>
          </a>
        </div>
      ) : (
        <div className='flex gap-6 text-2xl'>
          <a
            href='#'
            onMouseEnter={() => setIsDribbleHovered(true)}
            onMouseLeave={() => setIsDribbleHovered(false)}
            style={{
              display: "inline-block",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                opacity: isDribbleHovered ? 0 : 1,
                position: "absolute",
                transition: "opacity 0.3s ease",
              }}
            >
              <RiDribbbleLine color='#252423' size={16} />
            </div>
            <div
              style={{
                opacity: isDribbleHovered ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            >
              <Image src={DribbleFill} width={16} height={16} alt='Dribbble' />
            </div>
          </a>
          <a
            href='#'
            onMouseEnter={() => setIsFigmaHovered(true)}
            onMouseLeave={() => setIsFigmaHovered(false)}
            style={{
              display: "inline-block",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                opacity: isFigmaHovered ? 0 : 1,
                position: "absolute",
                transition: "opacity 0.3s ease",
              }}
            >
              <RiFigmaLine color='#252423' size={16} />
            </div>
            <div
              style={{
                opacity: isFigmaHovered ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            >
              <Image src={FigmaFill} width={16} height={16} alt='Figma' />
            </div>
          </a>
          <a
            href='#'
            onMouseEnter={() => setIsMediumHovered(true)}
            onMouseLeave={() => setIsMediumHovered(false)}
            style={{
              display: "inline-block",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                opacity: isMediumHovered ? 0 : 1,
                position: "absolute",
                transition: "opacity 0.3s ease",
              }}
            >
              <RiMediumLine color='#252423' size={16} />
            </div>
            <div
              style={{
                opacity: isMediumHovered ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            >
              <FaMedium color='#000000' size={16} />
            </div>
          </a>
        </div>
      )}
    </div>
  );
}
