"use client";
import React, { useEffect, useState } from "react";

type LightboxVideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  onClick?: () => void;
  label?: string;
  wrapperClassName?: string;
};

export default function LightboxVideo({
  onClick,
  label,
  wrapperClassName = "",
  className = "",
  ...props
}: LightboxVideoProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Disable lightbox on mobile
  const handleClick = isMobile ? undefined : onClick;
  const isClickable = handleClick !== undefined;

  return (
    <div
      onClick={handleClick}
      className={`${isClickable ? "cursor-pointer group" : ""} ${wrapperClassName}`}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      aria-label={label}
      onKeyDown={
        isClickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleClick();
              }
            }
          : undefined
      }
    >
      <video
        {...props}
        className={`${className} ${
          isClickable ? "transition-transform duration-200 md:group-hover:scale-[1.005]" : ""
        }`}
      />
    </div>
  );
}
