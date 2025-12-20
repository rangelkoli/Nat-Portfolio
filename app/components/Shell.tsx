"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Toggle from "./Toggle";
import Projects from "./Projects";
import hearts from "../../public/hearts.svg";
import gemini from "../../public/gemini.svg";
import { LuHeart } from "react-icons/lu";
import { FaRegCopyright } from "react-icons/fa";
import heartsHovered from "../../public/hearts-hover.svg";
import { IoMdArrowRoundBack } from "react-icons/io";
import { usePathname } from "next/navigation";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Heart from "@/public/heart";
import { preloadAllProjectAssets } from "../utils/preloadAssets";

export default function Shell({ children }: { children: React.ReactNode }) {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const pathname = usePathname();
  const [isGeminiHovered, setIsGeminiHovered] = useState(false);
  const [isHeartsHovered, setIsHeartsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const previousSelectedProject = useRef<string | null>(null);

  const selectedProject = pathname.startsWith("/projects/") ? pathname.split("/projects/")[1] : null;

  // Set isInitialLoad to false after the initial animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 3500); // 2.2s delay + 0.6s animation + buffer
    return () => clearTimeout(timer);
  }, []);

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

  // Preload all project images and videos for faster navigation
  useEffect(() => {
    preloadAllProjectAssets();
  }, []);

  useEffect(() => {
    // Permanent elements animation (runs once)
    if (isInitialLoad) {
      const container = document.querySelector(".home-container");
      const box = document.querySelector(".fade-in-box");
      const footer = document.querySelector(".fade-in-footer");

      if (container) {
        gsap.to(container, {
          backgroundImage:
            "radial-gradient(92.18% 99.11% at 26.56% 107.7%, rgba(255, 221, 85, 0) 0%, rgba(255, 84, 62, 0) 50%, rgba(200, 55, 171, 0) 100%)",
          backgroundColor: "#FEFEFB",
          duration: 0.3,
          ease: "power2.inOut",
          delay: 0.5,
        });
      }

      if (box) {
        gsap.set(box, { opacity: 0 });
        gsap.to(box, {
          opacity: 1,
          duration: 0.6,
          ease: "power2.inOut",
          delay: 0.6,
        });
      }

      if (footer) {
        gsap.set(footer, { opacity: 0 });
        gsap.to(footer, {
          opacity: 1,
          duration: 0.6,
          ease: "power2.inOut",
          delay: 1.2,
        });
      }
    }
  }, [isInitialLoad]);

  // Handle selectedProject changes (reset scroll, etc)
  useEffect(() => {
    if (selectedProject) {
      const box = document.querySelector(".fade-in-box");
      if (box) {
        box.scrollTop = 0;
      }
    }
  }, [selectedProject, setIsDarkMode]);

  // Re-trigger fade-in animation when navigating back to home from a project
  useEffect(() => {
    // If we're navigating from a project (previous was not null) to home (current is null)
    if (previousSelectedProject.current !== null && selectedProject === null) {
      const box = document.querySelector(".fade-in-box");
      const toggle = document.querySelector(".toggle-button");
      const projects = document.querySelector(".projects-wrapper");
      
      if (box) {
        gsap.fromTo(box, 
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            ease: "power2.inOut",
          }
        );
      }
      
      // Animate toggle and projects to be visible when returning to home
      if (toggle) {
        gsap.to(toggle, {
          opacity: 1,
          duration: 0.6,
          ease: "power2.inOut",
        });
      }
      
      if (projects) {
        gsap.to(projects, {
          opacity: 1,
          duration: 0.6,
          ease: "power2.inOut",
        });
      }
    }
    // Update the ref to track the previous value
    previousSelectedProject.current = selectedProject;
  }, [selectedProject]);
  
  // Gemini Icon Animation (Dynamic)
  useEffect(() => {
      const geminiIcon = document.querySelector(".gemini-icon");
      const delay = isInitialLoad ? 0.9 : 0.2;
      
      if (geminiIcon) {
         // Only reset opacity to 0 on initial load. on nav, keep it visible (or whatever current state)
         // and just animate rotation if desired, or ensure it is 1.
         const startVars: gsap.TweenVars = { rotation: -180 };
         if (isInitialLoad) {
            startVars.opacity = 0;
         }
         
         gsap.set(geminiIcon, startVars);
         
         gsap.to(geminiIcon, {
           rotation: 0,
           opacity: 1,
           duration: 1,
           ease: "power2.inOut",
           delay: delay,
         });
       }
  }, [selectedProject, isInitialLoad, isDarkMode]);

  useEffect(() => {
    // Only run the fade-in animation on initial load
    if (!isInitialLoad) return;

    const projects = document.querySelector(".projects-wrapper");
    const toggle = document.querySelector(".toggle-button");
    
    const delay = 0.9;

    if (projects) {
      gsap.fromTo(projects,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.inOut",
          delay: delay,
        }
      );
    }

    if (toggle) {
      gsap.fromTo(toggle,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          delay: delay,
        }
      );
    }
  }, [isMobile, isInitialLoad]);


  return (
    <div
      className='flex h-screen flex-col items-center justify-between font-sans home-container overflow-hidden'
      style={{
        background:
          "radial-gradient(92.18% 99.11% at 26.56% 107.7%, rgba(255, 221, 85, 0.15) 0%, rgba(255, 84, 62, 0.15) 50%, rgba(200, 55, 171, 0.15) 100%)",
        backgroundColor:
          selectedProject && isDarkMode
            ? "#252423"
            : isDarkMode
            ? "#3C3B3A"
            : "#FEFEFB",
        transition: "background-color 0.6s ease-out",
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
            marginTop: selectedProject ? "0px" : "16px",
            marginLeft: selectedProject ? "0px" : "16px",
            marginRight: selectedProject ? "0px" : "16px",
            paddingTop: selectedProject ? "0px" : "32px",
            paddingRight: isMobile ? (selectedProject ? "32px" : "16px") : (selectedProject ? "48px" : "32px"),
            paddingBottom: selectedProject ? "0px" : "32px",
            paddingLeft: isMobile ? "16px" : selectedProject ? "16px" : "32px",
            display: "flex",
            gap: "25px",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            backgroundColor: selectedProject
              ? "transparent"
              : isDarkMode
              ? "#252423"
              : "#F8F8F5",
            transition: "background-color 0.6s ease-out",
            overflow: isMobile || selectedProject ? "auto" : "hidden",
            maxHeight: selectedProject ? "100vh" : "calc(100vh - 75px)",
            height: selectedProject ? "100vh" : "calc(100vh - 75px)",
          }}
        >
          {/* Header Section */}
          <div
            className='w-full '
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "absolute",
              top: selectedProject ? "48px" : "32px",
              left: isMobile ? (selectedProject ? "32px" : "16px") : (selectedProject ? "48px" : "32px"),
              right: isMobile ? (selectedProject ? "32px" : "16px") : (selectedProject ? "48px" : "32px"),
              zIndex: 10,
              width: "auto",
              height: "auto",
            }}
          >
            {isMobile && selectedProject ? (
              <Link
                href="/"
                className="text-gray-900 font-medium flex items-center gap-2"
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              >
                <Image
                  src={isDarkMode ? "/icons/ArrowLight.svg" : "/icons/Arrow.svg"}
                  width={32}
                  height={32}
                  alt="Arrow"
                  style={{ cursor: "pointer" }}
                />
              </Link>
            ) : (
              <div style={{ position: "relative", width: 32, height: 32 }}>
                {/* Heart Icon - visible in dark mode */}
                <Link
                  href="/"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: isDarkMode ? 1 : 0,
                    transition: "opacity 300ms ease-in-out",
                    pointerEvents: isDarkMode ? "auto" : "none",
                  }}
                >
                  <Heart />
                </Link>
                {/* Gemini Icon - visible in light mode */}
                <Link 
                  href="/"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: isDarkMode ? 0 : 1,
                    transition: "opacity 300ms ease-in-out",
                    pointerEvents: isDarkMode ? "none" : "auto",
                  }}
                >
                  <Image
                    className='gemini-icon'
                    src={gemini}
                    width={32}
                    height={32}
                    alt='Picture of the author'
                    onMouseEnter={handleGeminiMouseEnter}
                    onMouseLeave={handleGeminiMouseLeave}
                    style={{ cursor: "pointer", opacity: 0 }}
                  />
                </Link>
              </div>
            )}

            {/* Toggle Button */}
            <div className='toggle-button' style={{ opacity: isInitialLoad ? 0 : 1 }}>
                <Toggle />
            </div>
          </div>

          {/* Content Section */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? "120px" : "64px",
              height: isMobile ? "auto" : "100%",
              minHeight: isMobile ? "100%" : "auto",
              alignItems: isMobile ? "center" : "flex-end",
              paddingTop: isMobile ? selectedProject ? "24px" : "160px" : "0",
              paddingBottom: isMobile ? "60px" : "0",
              overflow: "visible",
            }}
          >
            {/* Desktop Content Section - visible on md+ screens */}
            <div
              className="desktop-content-section"
              style={{
                width: "100%",
                flex: 1,
                gap: "64px",
                paddingTop: selectedProject ? "0px" : "60px",
                display: isMobile ? "none" : "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                overflow: selectedProject ? "auto" : "auto",
                maxHeight: selectedProject ? "100vh" : "auto",
                minHeight: "0",
              }}
            >
              <AnimatePresence mode="sync">
                <motion.div
                  key={`desktop-${pathname}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ 
                    overflow: "visible",
                    width: "100%",
                  }}
                >
                  {children}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Content Section - visible on smaller screens */}
            <div
              className="mobile-content-section"
              style={{
                width: "100%",
                flex: "none",
                paddingTop: selectedProject ? "0px" : "0px",
                display: isMobile ? "flex" : "none",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                overflow: "visible",
                maxHeight: "none",
                minHeight: "fit-content",
              }}
            >
              <AnimatePresence mode="sync">
                <motion.div
                  key={`mobile-${pathname}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ 
                    overflow: "visible",
                    width: "100%",
                  }}
                >
                  {children}
                  {isMobile && selectedProject && (
                    <footer className='w-full py-8 px-[32px] flex justify-between items-center'>
                      <div className='flex items-center gap-2'>
                        <span
                          className='text-base'
                          style={{
                            color: isDarkMode ? "#C8C7C5" : "#666666",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            fontFamily: '"Instrument Sans", sans-serif',
                          }}
                        >
                          Love this for us. <LuHeart />
                        </span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <span
                          className='text-base'
                          style={{
                            color: isDarkMode ? "#C8C7C5" : "#666666",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            fontFamily: '"Instrument Sans", sans-serif',
                            fontWeight: 400,
                            fontStyle: "normal",
                            fontSize: "16px",
                            lineHeight: "150%",
                            letterSpacing: "-0.02em",
                          }}
                        >
                          <FaRegCopyright />
                          Nat Nuding 2025
                        </span>
                      </div>
                    </footer>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sidebar */}
            {(!isMobile || !selectedProject) && (
              <div
                className="projects-wrapper"
                style={{
                  width: isMobile ? "100%" : "auto",
                  overflowY: isMobile ? "visible" : "visible",
                  paddingRight: isMobile ? "0" : "0",
                  paddingBottom: isMobile ? "0" : selectedProject ? "91px" : "0px",
                  display: "flex",
                  justifyContent: isMobile ? "center" : "flex-end",
                  opacity: 0, // Start hidden, GSAP animates in
                }}
              >
                <Projects isMobile={isMobile} />
              </div>
            )}
          </div>
        </div>
      </div>

      <footer
        className='fade-in-footer w-full px-[32px] md:px-[48px] flex justify-between items-center'
        style={{
          transition: "color 0.6s ease-out",
          opacity: 0,
          height: isMobile ? "100%" : "60px",
          position: isMobile ? "relative" : "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          pointerEvents: "none",
        }}
      >
        <div className='flex items-center gap-2' >
          {!selectedProject && (
              <span
                className='text-base'
                style={{
                  color: isDarkMode ? "#C8C7C5" : "#666666",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  pointerEvents: "auto"
                }}
              >
                Love this for us. <LuHeart />
              </span>
          )}
        </div>
        <div className='flex items-center gap-3'>
          <span
            className='text-base'
            style={{
              color: isDarkMode ? "#C8C7C5" : "#666666",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              fontFamily: '"Instrument Sans", sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "150%",
              letterSpacing: "-0.02em",
              pointerEvents: "auto"
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
