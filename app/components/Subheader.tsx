"use client";
import React from "react";
import { useTheme } from "../context/ThemeContext";

interface SubheaderProps {
  children: React.ReactNode;
  className?: string;
}

const Subheader: React.FC<SubheaderProps> = ({ children, className = "" }) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`mb-4 w-full ${className}`}
      style={{
        fontFamily: "'Instrument Sans', sans-serif",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "18px",
        lineHeight: "150%",
        letterSpacing: "-0.02em", // -2% of font size is approx -0.02em
        textAlign: "left",
        color: isDarkMode ? "#E8E8E6" : "#585755",
        transition: "color 0.3s ease",
      }}
    >
      {children}
    </div>
  );
};

export default Subheader;
