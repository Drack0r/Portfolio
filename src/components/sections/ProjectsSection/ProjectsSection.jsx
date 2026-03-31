"use client";

import { useState } from "react";

import { ProjectCard, Title } from "@/components/ui";
import {
  ProjectContent,
  ProjectImage,
  ProjectOverlay,
} from "@/components/ui/ProjectCard";
import projectItems from "@/data/projects.json";

function ProjectsSection() {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  return (
    <section className="mt-30 scroll-mt-35" id="projects">
      <Title className={"mx-auto mb-18"}>Mes derniers projets</Title>

      {/* Card container */}
      <div className="mx-auto mb-14.5 flex w-166.5 flex-wrap gap-16.5">
        {projectItems.map((project) => (
          <ProjectCard
            key={project.id}
            isHover={hoveredCardId === project.id}
            onMouseEnter={() => setHoveredCardId(project.id)}
            onMouseLeave={() => setHoveredCardId(null)}
          >
            <ProjectImage
              src={project.imgSrc}
              alt={project.imgAlt}
              badges={project.badges}
            >
              <ProjectOverlay
                description={project.description}
                isVisible={hoveredCardId === project.id}
              />
            </ProjectImage>

            <ProjectContent
              title={project.title}
              websiteHref={project.websiteHref}
              githubHref={project.githubHref}
            />
          </ProjectCard>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
