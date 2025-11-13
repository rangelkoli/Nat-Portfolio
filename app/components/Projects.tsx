"use client";
import { useState } from "react";

interface ProjectsProps {
  isDarkMode?: boolean;
}

export default function Projects({ isDarkMode = false }: ProjectsProps) {
  const projectButtons = ["HereAfter", "Caravan", "Maybern", "Vault", "Parker"];
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div
      className='projects-sidebar'
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",

        alignItems: "flex-end",
      }}
    >
      {projectButtons.map((project) => (
        <button
          key={project}
          onMouseEnter={() => setHoveredProject(project)}
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
            color: isDarkMode ? "#B8B8B6" : "#252423",
            backgroundColor:
              hoveredProject === project ? "#E5E5E2BF" : "transparent",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          {project}
        </button>
      ))}
    </div>
  );
}
