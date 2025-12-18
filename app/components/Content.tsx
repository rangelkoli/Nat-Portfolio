"use client";
import rightarrow from "../../public/rightarrow.svg";
import Image from "next/image";
import { useState } from "react";
import DribbleIcon from "../../public/icons/Dribble.svg";
import DribbleHover from "../../public/icons/DribbleHover.svg";
import FigmaIcon from "../../public/icons/Figma.svg";
import FigmaHover from "../../public/icons/FigmaHover.svg";
import MediumIcon from "../../public/icons/Medium.svg";
import MediumHover from "../../public/icons/MediumHover.svg";
import InstagramIcon from "../../public/icons/Instagram.svg";
import InstagramHover from "../../public/icons/InstagramHover.svg";
import SpotifyIcon from "../../public/icons/Spotify.svg";
import SpotifyHover from "../../public/icons/SpotifyHover.svg";
import { FaArrowRight } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Content() {
  const { isDarkMode } = useTheme();
  const [isDribbleHovered, setIsDribbleHovered] = useState(false);
  const [isFigmaHovered, setIsFigmaHovered] = useState(false);
  const [isMediumHovered, setIsMediumHovered] = useState(false);
  const [isInstagramHovered, setIsInstagramHovered] = useState(false);
  const [isSpotifyHovered, setIsSpotifyHovered] = useState(false);
  return (
    <div className='max-w-lg max-md:max-w-full max-md:w-full max-md:text-center' style={{ minHeight: "fit-content" }}>
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
          fontStyle: "normal",
          fontSize: "14px",
          lineHeight: "150%",
          letterSpacing: "-2%",
          color: isDarkMode ? "#B8B8B6" : "#6B6B69",
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
            I believe life is a canvas and I’m using mine to craft tools that
            make life bigger, clearer, and more connected. Design is how I
            balance play and purpose ~ my opportunity to create experiences that
            help others live healthier, more meaningful lives, both on and
            offline.
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
          color: isDarkMode ? "#B8B8B6" : "#6B6B69",
          transition: "color 0.3s ease",
          gap: 6,
        }}
      >
        {isDarkMode ? (
          <>
            Currently hanging at{" "}
            <a
              href='#'
              className='font-semibold group'
              style={{
                color: "#FEFEFB",
                fontFamily: '"Instrument Sans", sans-serif',
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "150%",
                letterSpacing: "-2%",
                display: "inline-flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              Om factory 
              <FaArrowRight
                color='#FEFEFB'
                size={8}
                className='transition-transform group-hover:translate-x-1'
              />
            </a>{" "}
            & dreaming up new ways to connect.
          </>
        ) : (
          <>
            Currently building cool stuff with{" "}
            <a
              href='#'
              className='group'
              style={{
                color: "#252423",
                fontFamily: '"Instrument Sans", sans-serif',
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "150%",
                letterSpacing: "-2%",
                display: "inline-flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              Maybern{" "}
              <FaArrowRight
                color='#252423'
                size={8}
                className='transition-transform group-hover:translate-x-1'
              />
            </a>{"    "}
            &{" "}
            <a
              href='#'
              className='group'
              style={{
                color: "#252423",
                fontFamily: '"Instrument Sans", sans-serif',
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "150%",
                letterSpacing: "-2%",
                display: "inline-flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              HereAfter
              <FaArrowRight
                color='#252423'
                size={8}
                className='transition-transform group-hover:translate-x-1'
              />
            </a>
          </>
        )}
      </p>

      {isDarkMode ? (
        <div className='flex gap-6 text-2xl justify-center md:justify-start'>
          <a
            href='#'
            onMouseEnter={() => setIsInstagramHovered(true)}
            onMouseLeave={() => setIsInstagramHovered(false)}
            style={{
              display: "inline-block",
              transition: "all 0.3s ease",
            }}
          >
            <div style={{ position: "relative", width: 16, height: 16 }}>
              <div
                style={{
                  opacity: isInstagramHovered ? 0 : 1,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <Image src={InstagramIcon} width={16} height={16} alt='Instagram' />
              </div>
              <div
                style={{
                  opacity: isInstagramHovered ? 1 : 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <Image src={InstagramHover} width={16} height={16} alt='Instagram' />
              </div>
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
            <div style={{ position: "relative", width: 16, height: 16 }}>
              <div
                style={{
                  opacity: isSpotifyHovered ? 0 : 1,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <Image src={SpotifyIcon} width={16} height={16} alt='Spotify' />
              </div>
              <div
                style={{
                  opacity: isSpotifyHovered ? 1 : 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <Image src={SpotifyHover} width={16} height={16} alt='Spotify' />
              </div>
            </div>
          </a>
        </div>
      ) : (
        <div className='flex gap-6 text-2xl justify-center md:justify-start'>
          <a
            href='#'
            onMouseEnter={() => setIsDribbleHovered(true)}
            onMouseLeave={() => setIsDribbleHovered(false)}
            style={{
              display: "inline-block",
              transition: "all 0.3s ease",
            }}
          >
            <div style={{ position: "relative", width: 16, height: 16 }}>
              <div
                style={{
                  opacity: isDribbleHovered ? 0 : 1,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <Image src={DribbleIcon} width={16} height={16} alt='Dribbble' />
              </div>
              <div
                style={{
                  opacity: isDribbleHovered ? 1 : 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <Image src={DribbleHover} width={16} height={16} alt='Dribbble' />
              </div>
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
            <div style={{ position: "relative", width: 16, height: 16 }}>
              <div
                style={{
                  opacity: isFigmaHovered ? 0 : 1,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <Image src={FigmaIcon} width={16} height={16} alt='Figma' />
              </div>
              <div
                style={{
                  opacity: isFigmaHovered ? 1 : 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <Image src={FigmaHover} width={16} height={16} alt='Figma' />
              </div>
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
            <div style={{ position: "relative", width: 16, height: 16 }}>
              <div
                style={{
                  opacity: isMediumHovered ? 0 : 1,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <Image src={MediumIcon} width={16} height={16} alt='Medium' />
              </div>
              <div
                style={{
                  opacity: isMediumHovered ? 1 : 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <Image src={MediumHover} width={16} height={16} alt='Medium' />
              </div>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}
