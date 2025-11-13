"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Toggle from "./components/Toggle";
import Content from "./components/Content";
import Projects from "./components/Projects";
import hearts from "../public/hearts.svg";
import gemini from "../public/gemini.svg";
import { LuHeart } from "react-icons/lu";
import { FaRegCopyright } from "react-icons/fa";
import heartsHovered from "../public/hearts-hover.svg";
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isGeminiHovered, setIsGeminiHovered] = useState(false);
  const [isHeartsHovered, setIsHeartsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleGeminiMouseEnter = () => {
    setIsGeminiHovered(true);
    const geminiIcon = document.querySelector(".gemini-icon");
    if (geminiIcon) {
      gsap.to(geminiIcon, {
        rotation: 180,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
  };

  const handleGeminiMouseLeave = () => {
    setIsGeminiHovered(false);
    const geminiIcon = document.querySelector(".gemini-icon");
    if (geminiIcon) {
      gsap.to(geminiIcon, {
        rotation: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
  };

  const handleHeartsMouseEnter = () => {
    setIsHeartsHovered(true);
  };

  const handleHeartsMouseLeave = () => {
    setIsHeartsHovered(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = document.querySelector(".home-container");
    const box = document.querySelector(".fade-in-box");
    const footer = document.querySelector(".fade-in-footer");
    const content = document.querySelector(".slide-in-content");

    if (container) {
      gsap.to(container, {
        backgroundImage:
          "radial-gradient(92.18% 99.11% at 26.56% 107.7%, rgba(255, 221, 85, 0) 0%, rgba(255, 84, 62, 0) 50%, rgba(200, 55, 171, 0) 100%)",
        backgroundColor: "#FEFEFB",
        duration: 2,
        ease: "power2.inOut",
        delay: 0.5,
      });
    }

    if (box) {
      gsap.set(box, { opacity: 0 });
      gsap.to(box, {
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
        delay: 2.2,
      });
    }

    if (footer) {
      gsap.set(footer, { opacity: 0 });
      gsap.to(footer, {
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
        delay: 2.2,
      });
    }

    if (content) {
      gsap.set(content, { opacity: 0, left: "0%", position: "relative" });
      // First: fade in at center
      gsap.to(content, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
        delay: 2.8,
        left: isMobile ? "0%" : "120%",
      });
      // Then: move from center to left
      gsap.to(content, {
        left: "0%",
        duration: 1.5,
        ease: "power2.inOut",
        delay: 4.5,
      });
    }

    const projects = document.querySelector(".projects-sidebar");
    if (projects) {
      gsap.set(projects, { opacity: 0 });
      // Fade in projects when content moves to the left
      gsap.to(projects, {
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
        delay: 4.5,
      });
    }

    const toggle = document.querySelector(".toggle-button");
    if (toggle) {
      gsap.set(toggle, { opacity: 0 });
      // Fade in toggle with the content
      gsap.to(toggle, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        delay: 2.8,
      });
    }

    const geminiIcon = document.querySelector(".gemini-icon");
    if (geminiIcon) {
      gsap.set(geminiIcon, { rotation: -180, opacity: 0 });
      // Rotate and fade in gemini icon with the content
      gsap.to(geminiIcon, {
        rotation: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
        delay: 2.8,
      });
    }
  }, [isMobile]);

  return (
    <div
      className='flex h-screen flex-col items-center justify-between font-sans home-container overflow-hidden'
      style={{
        background:
          "radial-gradient(92.18% 99.11% at 26.56% 107.7%, rgba(255, 221, 85, 0.08) 0%, rgba(255, 84, 62, 0.08) 50%, rgba(200, 55, 171, 0.08) 100%)",
        backgroundColor: isDarkMode ? "#3C3B3A" : "white",
        transition: "backgroundColor 0.3s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          flex: 1,
          position: "relative",
        }}
      >
        <div
          className='fade-in-box rounded-lg bg-[#F8F8F5] flex-1'
          style={{
            width: "calc(100% - 48px)",
            marginTop: "24px",
            marginLeft: "24px",
            marginRight: "24px",

            padding: isMobile ? "16px" : "32px",
            display: "flex",
            gap: "100px",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            backgroundColor: isDarkMode ? "#252423" : "#F8F8F5",
            transition: "backgroundColor 0.3s ease",
            overflowY: isMobile ? "auto" : "visible",
            maxHeight: isMobile ? "calc(100vh - 75px)" : "auto",
          }}
        >
          {/* Header Section */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "32px",
            }}
          >
            {isDarkMode ? (
              <Image
                src={isHeartsHovered ? heartsHovered : hearts}
                width={32}
                height={32}
                alt='Picture of the author'
                onMouseEnter={handleHeartsMouseEnter}
                onMouseLeave={handleHeartsMouseLeave}
                style={{ cursor: "pointer", transition: "filter 0.3s ease" }}
              />
            ) : (
              <Image
                className='gemini-icon'
                src={gemini}
                width={32}
                height={32}
                alt='Picture of the author'
                onMouseEnter={handleGeminiMouseEnter}
                onMouseLeave={handleGeminiMouseLeave}
                style={{ cursor: "pointer" }}
              />
            )}
            {/* Gemini Icon */}

            {/* Toggle Button */}
            <div className='toggle-button'>
              <Toggle isDarkMode={isDarkMode} onToggle={setIsDarkMode} />
            </div>
          </div>

          {/* Content Section */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? "80px" : "0",
              height: isMobile ? "auto" : "100%",
              alignItems: isMobile ? "center" : "flex-end",
              paddingTop: isMobile ? "24px" : "0",
            }}
          >
            <div
              style={{
                width: isMobile ? "100%" : "auto",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              <Content isDarkMode={isDarkMode} />
            </div>
            {/* End Content Section */}

            <div
              style={{
                width: isMobile ? "100%" : "auto",
                maxHeight: isMobile ? "auto" : "auto",
                overflowY: isMobile ? "visible" : "visible",
                paddingRight: isMobile ? "0" : "0",
                display: "flex",
                justifyContent: isMobile ? "center" : "flex-end",
              }}
            >
              <Projects isDarkMode={isDarkMode} isMobile={isMobile} />
            </div>
          </div>
        </div>
      </div>

      <footer
        className='fade-in-footer w-full px-12 py-4 flex justify-between items-center'
        style={{
          transition: "color 0.3s ease",
        }}
      >
        <div className='flex items-center gap-2'>
          <span
            className='text-sm'
            style={{
              color: isDarkMode ? "#C8C7C5" : "#666666",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Love this for us. <LuHeart />
          </span>
        </div>
        <div className='flex items-center gap-3'>
          <span
            className='text-sm'
            style={{
              color: isDarkMode ? "#C8C7C5" : "#666666",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <FaRegCopyright />
            Nat Nuding 2025
          </span>
        </div>
      </footer>
    </div>
  );
}
