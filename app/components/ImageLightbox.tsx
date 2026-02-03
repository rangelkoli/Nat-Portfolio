"use client";
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
import { useTheme } from "../context/ThemeContext";
import { StaticImageData } from "next/image";

type LightboxMediaBase = {
  alt?: string;
  width?: number;
  height?: number;
};

export type LightboxMedia =
  | (LightboxMediaBase & {
      type?: "image";
      src: string | StaticImageData;
    })
  | (LightboxMediaBase & {
      type: "video";
      poster?: string;
      sources: {
        src: string;
        type: string;
        media?: string;
      }[];
      autoPlay?: boolean;
      controls?: boolean;
      preload?: string;
      loop?: boolean;
      muted?: boolean;
      playsInline?: boolean;
    });

interface ImageLightboxProps {
  images: LightboxMedia[];
  open: boolean;
  index: number;
  onClose: () => void;
}

export default function ImageLightbox({
  images,
  open,
  index,
  onClose,
}: ImageLightboxProps) {
  const { isDarkMode } = useTheme();

  // Convert images to the format expected by yet-another-react-lightbox
  const slides = images.map((media) => {
    if (media.type === "video") {
      return {
        type: "video" as const,
        sources: media.sources,
        poster: media.poster,
        width: media.width,
        height: media.height,
        autoPlay: media.autoPlay ?? true,
        controls: media.controls ?? true,
        preload: media.preload ?? "auto",
        loop: media.loop ?? true,
        muted: media.muted ?? true,
        playsInline: media.playsInline ?? true,
      };
    }

    return {
      src: typeof media.src === "string" ? media.src : media.src.src,
      alt: media.alt,
      width: media.width,
      height: media.height,
    };
  });

  return (
    <Lightbox
      open={open}
      close={onClose}
      index={index}
      slides={slides}
      plugins={[Video]}
      video={{
        autoPlay: true,
        controls: true,
        muted: true,
        playsInline: true,
        loop: true,
      }}
      styles={{
        container: {
          backgroundColor: isDarkMode
            ? "rgba(37, 36, 35, 0.95)"
            : "rgba(254, 254, 251, 0.95)",
          padding: "128px 32px",
        },
        slide: {
          padding: "0",
        },
        navigationPrev: {
          color: isDarkMode ? "#FEFEFB" : "#252423",
        },
        navigationNext: {
          color: isDarkMode ? "#FEFEFB" : "#252423",
        },
        button: {
          filter: isDarkMode ? "invert(0)" : "invert(1)",
        },
      }}
      animation={{ fade: 300, swipe: 300, navigation: 300 }}
      controller={{ closeOnBackdropClick: true }}
      carousel={{
        finite: true,
        preload: 2,
        padding: "128px",
      }}
    />
  );
}
