"use client";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData, ImageProps } from "next/image";

interface LightboxImageProps extends Omit<ImageProps, "onClick"> {
  src: string | StaticImageData;
  alt: string;
  onClick?: () => void;
}

export default function LightboxImage({
  src,
  alt,
  onClick,
  className = "",
  ...props
}: LightboxImageProps) {
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
      className={`${isClickable ? "cursor-pointer group" : ""}`}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
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
      <Image
        src={src}
        alt={alt}
        className={`${className} ${
          isClickable ? "transition-transform duration-200 md:group-hover:scale-[1.005]" : ""
        }`}
        {...props}
      />
    </div>
  );
}
