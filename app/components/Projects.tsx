"use client";
import { useState } from "react";
import { RiHomeLine } from "react-icons/ri";

interface ProjectsProps {
  isDarkMode?: boolean;
  isMobile?: boolean;
  onProjectSelect?: (projectName: string) => void;
  onGoHome?: () => void;
  selectedProject?: string | null;
}

export default function Projects({
  isDarkMode = false,
  isMobile = false,
  onProjectSelect,
  onGoHome,
  selectedProject,
}: ProjectsProps) {
  const projectButtons = ["HereAfter", "Caravan", "Maybern", "Vault", "Parker"];
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const handleProjectClick = (project: string) => {
    if (onProjectSelect) {
      onProjectSelect(project);
    }
  };

  return (
    <div
      className='projects-sidebar'
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        alignItems: isMobile ? "stretch" : "flex-end",
      }}
    >
      {selectedProject && (
        <button
          onClick={onGoHome}
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
          }}
        >
          <RiHomeLine />
        </button>
      )}
      {projectButtons.map((project) => (
        <button
          key={project}
          onClick={() => handleProjectClick(project)}
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
            color: isDarkMode ? "#FEFEFB" : "#252423",
            backgroundColor:
              hoveredProject === project
                ? isDarkMode
                  ? "#3C3B3A"
                  : "#E5E5E2BF"
                : "transparent",
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
