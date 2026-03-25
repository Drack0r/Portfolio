import ProjectCard from "../ui/ProjectCard/ProjectCard";
import Title from "../ui/Title";

function ProjectsSection() {
  return (
    <section className="pt-20" id="projects">
      <Title className={"mx-auto mt-14.5 mb-16.75"}>Mes derniers projets</Title>

      <div className="mx-auto mb-14.5 flex w-[666px] flex-wrap gap-[66px]">
        <ProjectCard
          imgSrc="/images/image-placeholder.svg"
          imgWidth={100}
          imgHeight={100}
          imgAlt="Projet 1"
          title="Mon Projet"
          websiteHref="#"
          githubHref="#"
          description="Description du projet"
          badges={[
            { src: "/images/icons/icon-placeholder.png", alt: "#" },
            { src: "/images/icons/icon-placeholder.png", alt: "#" },
            { src: "/images/icons/icon-placeholder.png", alt: "#" },
            { src: "/images/icons/icon-placeholder.png", alt: "#" },
            { src: "/images/icons/icon-placeholder.png", alt: "#" },
          ]}
        />

        <ProjectCard
          imgSrc="/images/image-placeholder.svg"
          imgWidth={100}
          imgHeight={100}
          imgAlt="Projet 1"
          title="Mon Projet"
          websiteHref="#"
          githubHref="#"
          description="Description du projet"
          badges={[
            { src: "/images/icons/icon-placeholder.png", alt: "#" },
            { src: "/images/icons/icon-placeholder.png", alt: "#" },
            { src: "/images/icons/icon-placeholder.png", alt: "#" },
            { src: "/images/icons/icon-placeholder.png", alt: "#" },
            { src: "/images/icons/icon-placeholder.png", alt: "#" },
          ]}
        />

        <ProjectCard
          imgSrc="/images/image-placeholder.svg"
          imgWidth={100}
          imgHeight={100}
          imgAlt="Projet 1"
          title="Mon Projet"
          websiteHref="#"
          githubHref="#"
          description="Description du projet"
          badges={[
            { src: "/images/icons/icon-placeholder.png", alt: "#" },
            { src: "/images/icons/icon-placeholder.png", alt: "#" },
            { src: "/images/icons/icon-placeholder.png", alt: "#" },
            { src: "/images/icons/icon-placeholder.png", alt: "#" },
            { src: "/images/icons/icon-placeholder.png", alt: "#" },
          ]}
        />

        <ProjectCard
          imgSrc="/images/image-placeholder.svg"
          imgWidth={100}
          imgHeight={100}
          imgAlt="Projet 1"
          title="Mon Projet"
          websiteHref="#"
          githubHref="#"
          description="Description du projet"
          badges={[
            { src: "/images/icons/icon-placeholder.png", alt: "#" },
            { src: "/images/icons/icon-placeholder.png", alt: "#" },
            { src: "/images/icons/icon-placeholder.png", alt: "#" },
            { src: "/images/icons/icon-placeholder.png", alt: "#" },
            { src: "/images/icons/icon-placeholder.png", alt: "#" },
          ]}
        />
      </div>
    </section>
  );
}

export default ProjectsSection;
