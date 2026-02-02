"use client";
import rightarrow from "../../public/rightarrow.svg";
import Image from "next/image";
import { useState } from "react";
import DribbleIcon from "../../public/icons/Dribble.svg";
import DribbleHover from "../../public/icons/DribbleHover.svg";
import FigmaIcon from "../../public/icons/Figma.svg";
import FigmaHover from "../../public/icons/FigmaHover.svg";
import LinkedinIcon from "../../public/icons/Linkedin.svg";
import LinkedinHover from "../../public/icons/LinkedinHover.svg";
import InstagramIcon from "../../public/icons/Instagram.svg";
import InstagramHover from "../../public/icons/InstagramHover.svg";
import SpotifyIcon from "../../public/icons/Spotify.svg";
import SpotifyHover from "../../public/icons/SpotifyHover.svg";
import { FaArrowRight } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Content() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className='max-w-xl max-md:max-w-full max-md:w-full max-md:text-center'
      style={{ minHeight: "fit-content" }}
    >
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
          fontSize: "16px",
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
            Vulnerability is strength, imperfection is beautiful, and the best
            experiences are the ones we lean into with curiosity and care.
          </>
        ) : (
          <>
            I believe life is a canvas and I’m using mine to craft tools that
            make life bigger, clearer, and more connected. Design is how I
            balance play and purpose. It is my opportunity to create experiences
            that help others live healthier, more meaningful lives, both on and
            offline.
          </>
        )}
      </p>

      <p
        className='mb-8'
        style={{
          fontFamily: '"Instrument Sans", sans-serif',
          fontWeight: 400,
          fontSize: "16px",
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
              href='https://www.omfactory.yoga/'
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold group'
              style={{
                color: "#FEFEFB",
                fontFamily: '"Instrument Sans", sans-serif',
                fontWeight: 400,
                fontSize: "16px",
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
                className='transition-transform md:group-hover:translate-x-1'
              />
            </a>{" "}
            & dreaming up new ways to connect.
          </>
        ) : (
          <>
            Currently building cool stuff with{" "}
            <a
              href='https://aaru.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='group'
              style={{
                color: "#252423",
                fontFamily: '"Instrument Sans", sans-serif',
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "150%",
                letterSpacing: "-2%",
                display: "inline-flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              Aaru{" "}
              <FaArrowRight
                color='#252423'
                size={8}
                className='transition-transform md:group-hover:translate-x-1'
              />
            </a>
            {"    "}&{" "}
            <a
              href='https://hereafter.social/'
              target='_blank'
              rel='noopener noreferrer'
              className='group'
              style={{
                color: "#252423",
                fontFamily: '"Instrument Sans", sans-serif',
                fontWeight: 400,
                fontSize: "16px",
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
                className='transition-transform md:group-hover:translate-x-1'
              />
            </a>
          </>
        )}
      </p>

      {isDarkMode ? (
        <div className='flex gap-6 text-2xl justify-center md:justify-start'>
          <a
            href='https://www.instagram.com/natnud/'
            target='_blank'
            rel='noopener noreferrer'
            className='group relative w-4 h-4'
          >
            <div className='absolute top-0 left-0 transition-opacity duration-300 opacity-100 md:group-hover:opacity-0'>
              <Image
                src={InstagramIcon}
                width={16}
                height={16}
                alt='Instagram'
              />
            </div>
            <div className='absolute top-0 left-0 transition-opacity duration-300 opacity-0 md:group-hover:opacity-100'>
              <Image
                src={InstagramHover}
                width={16}
                height={16}
                alt='Instagram'
              />
            </div>
          </a>
          <a
            href='https://open.spotify.com/show/00Iokzxkn8bFwdzZ9TBcJv?si=5b2b7241edab4398'
            target='_blank'
            rel='noopener noreferrer'
            className='group relative w-4 h-4'
          >
            <div className='absolute top-0 left-0 transition-opacity duration-300 opacity-100 md:group-hover:opacity-0'>
              <Image src={SpotifyIcon} width={16} height={16} alt='Spotify' />
            </div>
            <div className='absolute top-0 left-0 transition-opacity duration-300 opacity-0 md:group-hover:opacity-100'>
              <Image src={SpotifyHover} width={16} height={16} alt='Spotify' />
            </div>
          </a>
        </div>
      ) : (
        <div className='flex gap-6 text-2xl justify-center md:justify-start'>
          <a
            href='https://dribbble.com/natnud'
            target='_blank'
            rel='noopener noreferrer'
            className='group relative w-4 h-4'
          >
            <div className='absolute top-0 left-0 transition-opacity duration-300 opacity-100 md:group-hover:opacity-0'>
              <Image src={DribbleIcon} width={16} height={16} alt='Dribbble' />
            </div>
            <div className='absolute top-0 left-0 transition-opacity duration-300 opacity-0 md:group-hover:opacity-100'>
              <Image src={DribbleHover} width={16} height={16} alt='Dribbble' />
            </div>
          </a>
          <a
            href='https://www.figma.com/@natnud'
            target='_blank'
            rel='noopener noreferrer'
            className='group relative w-4 h-4'
          >
            <div className='absolute top-0 left-0 transition-opacity duration-300 opacity-100 md:group-hover:opacity-0'>
              <Image src={FigmaIcon} width={16} height={16} alt='Figma' />
            </div>
            <div className='absolute top-0 left-0 transition-opacity duration-300 opacity-0 md:group-hover:opacity-100'>
              <Image src={FigmaHover} width={16} height={16} alt='Figma' />
            </div>
          </a>
          <a
            href='https://www.linkedin.com/in/natnuding/'
            target='_blank'
            rel='noopener noreferrer'
            className='group relative w-4 h-4'
          >
            <div className='absolute top-0 left-0 transition-opacity duration-300 opacity-100 md:group-hover:opacity-0'>
              <Image src={LinkedinIcon} width={16} height={16} alt='LinkedIn' />
            </div>
            <div className='absolute top-0 left-0 transition-opacity duration-300 opacity-0 md:group-hover:opacity-100'>
              <Image
                src={LinkedinHover}
                width={16}
                height={16}
                alt='LinkedIn'
              />
            </div>
          </a>
        </div>
      )}
    </div>
  );
}
