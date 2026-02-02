"use client";
import React from "react";
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
  return (
    <div
      onClick={onClick}
      className={`${onClick ? "cursor-pointer group" : ""}`}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      <Image
        src={src}
        alt={alt}
        className={`${className} ${
          onClick ? "transition-transform duration-200 group-hover:scale-[1.01]" : ""
        }`}
        {...props}
      />
    </div>
  );
}
