"use client";
import React from "react";

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
  return (
    <div
      onClick={onClick}
      className={`${onClick ? "cursor-pointer group" : ""} ${wrapperClassName}`}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={label}
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
      <video
        {...props}
        className={`${className} ${
          onClick ? "transition-transform duration-200 group-hover:scale-[1.01]" : ""
        }`}
      />
    </div>
  );
}
