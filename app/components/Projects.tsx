"use client";
import { useState } from "react";
import { RiHomeLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../context/ThemeContext";
import { preloadProjectAssets } from "../utils/preloadAssets";

interface ProjectsProps {
  isMobile?: boolean;
}

export default function Projects({
  isMobile = false,
}: ProjectsProps) {
  const { isDarkMode } = useTheme();
  const pathname = usePathname();
  const projectButtons = ["HereAfter","Maybern","Parker","Caravan","Vault",];
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const isProjectValues = projectButtons.map(p => pathname.includes(p));
  const isAnyProjectSelected = isProjectValues.some(Boolean);

  return (
    <div
      className='projects-sidebar max-md:mb-6'
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        alignItems: isMobile ? "stretch" : "flex-end",
      }}
    >
      {isAnyProjectSelected && (
        <Link
          href="/"
          style={{
            borderRadius: "64px",
            borderWidth: "1px",
            borderColor: isDarkMode ? "#C8C7C5" : "#C8C7C5",
            paddingTop: "12px",
            paddingRight: "32px",
            paddingBottom: "12px",
            paddingLeft: "32px",
            fontFamily: '"Instrument Sans", sans-serif',
            fontWeight: 400,
            fontSize: "28px",
            lineHeight: "150%",
            letterSpacing: "-2%",
            color: isDarkMode ? "#FEFEFB" : "#252423",
            backgroundColor: "transparent",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <RiHomeLine />
        </Link>
      )}
      {projectButtons.map((project) => {
        const isSelected = pathname.includes(project);
        return (
          <Link
            key={project}
            href={`/projects/${project}`}
            onMouseEnter={() => {
              setHoveredProject(project);
              preloadProjectAssets(project);
            }}
            onMouseLeave={() => setHoveredProject(null)}
            style={{
              borderRadius: "64px",
              borderWidth: "1px",
              borderColor: isDarkMode ? "#C8C7C5" : "#C8C7C5",
              paddingTop: "12px",
              paddingRight: "32px",
              paddingBottom: "12px",
              paddingLeft: "32px",
              fontFamily: '"Instrument Sans", sans-serif',
              fontWeight: 400,
              fontSize: "28px",
              lineHeight: "150%",
              letterSpacing: "-2%",
              color: isSelected ? "#FEFEFB" : (isDarkMode ? "#FEFEFB" : "#252423"),
              backgroundColor: isSelected
                ? "#252423"
                : hoveredProject === project
                  ? isDarkMode
                    ? "#3C3B3A"
                    : "#E5E5E2BF"
                  : "transparent",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              textAlign: "center",
              display: "block", 
              textDecoration: "none"

              
            }}
          >
            {project}
          </Link>
        );
      })}
    </div>
  );
}
