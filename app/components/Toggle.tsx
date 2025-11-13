"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

interface ToggleProps {
  isDarkMode?: boolean;
  onToggle?: (isOn: boolean) => void;
}

export default function Toggle({ isDarkMode = false, onToggle }: ToggleProps) {
  const [isOn, setIsOn] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    onToggle?.(newState);
  };

  const handleMouseEnter = () => {
    if (toggleButtonRef.current && circleRef.current) {
      // Light mode
      if (!isDarkMode) {
        gsap.to(toggleButtonRef.current, {
          backgroundColor: "#C8C7C5",
          duration: 0.3,
          ease: "power2.inOut",
        });
        gsap.to(circleRef.current, {
          x: 4,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
      // Dark mode
      else {
        gsap.to(toggleButtonRef.current, {
          backgroundColor: "#6B6B69",
          duration: 0.3,
          ease: "power2.inOut",
        });
        gsap.to(circleRef.current, {
          x: -4,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (toggleButtonRef.current && circleRef.current) {
      // Reset to initial state
      gsap.to(toggleButtonRef.current, {
        backgroundColor: isDarkMode ? "#3C3B3A" : "#D0D0D0",
        duration: 0.3,
        ease: "power2.inOut",
      });
      gsap.to(circleRef.current, {
        x: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  };

  const styles = {
    light: {
      background: "#D0D0D0",
      circle: "#FFFFFF",
    },
    dark: {
      background: "#3C3B3A",
      circle: "#1F1F1F",
    },
  };

  const currentStyle = isDarkMode ? styles.dark : styles.light;

  return (
    <button
      ref={toggleButtonRef}
      onClick={handleToggle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: "48px",
        height: "32px",
        borderRadius: "16px",
        border: "none",
        backgroundColor: isDarkMode
          ? styles.dark.background
          : styles.light.background,
        cursor: "pointer",
        position: "relative",
        padding: 0,
        transition: "all 0.3s ease",
        outline: "none",
      }}
      className='toggle-button'
    >
      <div
        ref={circleRef}
        style={{
          position: "absolute",
          width: "24px",
          height: "24px",
          borderRadius: "12px",
          backgroundColor: currentStyle.circle,
          top: "4px",
          left: isOn ? "20px" : "4px",
          transition: "left 0.3s ease",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      />
    </button>
  );
}
