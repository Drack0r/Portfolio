"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Modal from "react-modal";

import { ExternalLink } from "@/components/navigation";
import { ProjectCard, Title } from "@/components/ui";
import {
  ProjectContent,
  ProjectImage,
  ProjectOverlay,
} from "@/components/ui/ProjectCard";
import projectItems from "@/data/projects.json";

function ProjectsSection() {
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      className="mt-10 scroll-mt-22 lg:mt-30 lg:scroll-mt-35"
      id="projects"
    >
      <Title className={"mx-auto mb-18"}>Mes derniers projets</Title>

      {/* Card container */}
      <div className="mx-auto mb-14.5 flex flex-col items-center gap-16.5 lg:w-166.5 lg:flex-row lg:flex-wrap">
        {projectItems.map((project) => (
          <ProjectCard
            key={project.id}
            isHover={hoveredCardId === project.id}
            onMouseEnter={() => setHoveredCardId(project.id)}
            onMouseLeave={() => setHoveredCardId(null)}
            onClick={() => openModal(project)}
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

            <ProjectContent title={project.title} />
          </ProjectCard>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center"
        className="relative flex max-h-[90vh] w-full max-w-250 flex-col overflow-y-auto rounded-2xl border border-black bg-white px-6 py-8 outline-0 lg:px-20 lg:py-10"
        ariaHideApp={false}
      >
        {selectedProject && (
          <>
            {/* Close button */}
            <button onClick={closeModal}>
              <Image
                src="/images/icons/x.png"
                alt="Bouton fermer"
                width={32}
                height={32}
                className="absolute top-2.5 right-2 h-6 w-auto cursor-pointer transition-opacity duration-300 hover:opacity-50"
              />
            </button>

            {/* TextContent */}
            <div>
              {/* Title */}
              <h3 className="heading-4 mx-auto mb-8 w-fit">
                {selectedProject.title}
              </h3>

              <div>
                {/* Topic */}
                <h4 className="body-md-bold mt-4">Contexte :</h4>
                <p>{selectedProject.context}</p>

                {/* Topic */}
                <h4 className="body-md-bold mt-4">Objectifs :</h4>
                <p>{selectedProject.objectives}</p>

                {/* Topic */}
                <h4 className="body-md-bold mt-4">Stack technique :</h4>
                <p>{selectedProject.techStack}</p>

                {/* Topic */}
                <h4 className="body-md-bold mt-4">Compétences développées :</h4>
                <p>{selectedProject.skills}</p>

                {/* Topic */}
                <h4 className="body-md-bold mt-4">Résultats & impact :</h4>
                <p>{selectedProject.results}</p>

                {/* Topic */}
                <h4 className="body-md-bold mt-4">
                  Perspectives d&apos;amélioration :
                </h4>
                <p>{selectedProject.improvements}</p>
              </div>

              <div className="mx-auto mt-8 flex w-fit gap-4">
                <ExternalLink href={selectedProject.websiteHref} size="sm">
                  Visiter
                </ExternalLink>
                <ExternalLink
                  href={selectedProject.githubHref}
                  size="sm"
                  variant="dark"
                >
                  GitHub
                </ExternalLink>
              </div>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}

export default ProjectsSection;
