import ProjectCard from "@/components/ui/ProjectCard/ProjectCard";
import Title from "@/components/ui/Title";
import projectItems from "@/data/projects.json";

function ProjectsSection() {
  return (
    <section className="mt-30 scroll-mt-35" id="projects">
      <Title className={"mx-auto mb-18"}>Mes derniers projets</Title>

      {/* Card container */}
      <div className="mx-auto mb-14.5 flex w-166.5 flex-wrap gap-16.5">
        {projectItems.map((project) => (
          <ProjectCard
            key={project.id}
            imgSrc={project.imgSrc}
            imgAlt={project.imgAlt}
            imgWidth={350}
            imgHeight={350}
            title={project.title}
            description={project.description}
            websiteHref={project.websiteHref}
            githubHref={project.githubHref}
            badges={project.badges}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
