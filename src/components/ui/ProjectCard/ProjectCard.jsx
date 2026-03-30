"use client";

import { useState } from "react";

import clsx from "clsx";

import { ProjectContent, ProjectImage, ProjectOverlay } from ".";

function ProjectCard({
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  title,
  websiteHref,
  githubHref,
  description,
  badges = [],
}) {
  const [isHover, setIsHover] = useState(false);

  const customClassName = clsx(
    "relative h-80 w-75 rounded-[20px] transition-all duration-300",
    isHover ? "shadow-6 scale-110" : "shadow-5",
  );

  return (
    <article
      className={customClassName}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <ProjectImage
        src={imgSrc}
        alt={imgAlt}
        width={imgWidth}
        height={imgHeight}
        badges={badges}
        overlay={
          <ProjectOverlay isVisible={isHover} description={description} />
        }
      />

      <ProjectContent
        title={title}
        websiteHref={websiteHref}
        githubHref={githubHref}
      />
    </article>
  );
}

export default ProjectCard;
