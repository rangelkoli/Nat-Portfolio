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
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const { onError, src, ...videoProps } = props;
  const fallbackHref = typeof src === "string" ? src : undefined;
  const hasError = Boolean(fallbackHref && failedSrc === fallbackHref);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = isMobile ? undefined : onClick;
  const isClickable = handleClick !== undefined;

  if (hasError) {
    return (
      <div className={wrapperClassName}>
        <div
          className={`flex min-h-40 flex-col items-center justify-center gap-3 rounded-lg border border-[#D8D8D4] bg-[#F6F5F1] px-6 py-8 text-center text-[#4A4A48] ${className}`}
        >
          <p className='text-sm'>This video could not be loaded here.</p>
          {fallbackHref ? (
            <a
              href={fallbackHref}
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm underline underline-offset-4'
            >
              Open video
            </a>
          ) : null}
        </div>
      </div>
    );
  }

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
        {...videoProps}
        src={src}
        onError={(event) => {
          setFailedSrc(fallbackHref ?? "__unknown__");
          onError?.(event);
        }}
        className={`${className} ${
          isClickable ? "transition-transform duration-200 md:group-hover:scale-[1.005]" : ""
        }`}
      />
    </div>
  );
}
