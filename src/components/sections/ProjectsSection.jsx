import ProjectCard from "../ui/ProjectCard/ProjectCard";
import Title from "../ui/Title";

function ProjectsSection() {
  const projectItems = [
    {
      id: 1,
      imgSrc: "/images/hanson-lu-gGgoDJRD2WM-unsplash.jpg",
      imgAlt: "Appareil photo",
      title: "Sophie Bluel",
      description:
        "Site vitrine pour une architecte : présentation des travaux (galerie), authentification, modale pour CRUD les travaux, connexion API.",
      websiteHref: "#",
      githubHref: "#",
      badges: [
        { src: "/images/icons/html5.png", alt: "HTML5" },
        { src: "/images/icons/css.png", alt: "CSS3" },
        { src: "/images/icons/javascript.png", alt: "Javascript" },
      ],
    },
    {
      id: 2,
      imgSrc: "/images/stephen-wheeler-hBh9JbyeCtg-unsplash.jpg",
      imgAlt: "Maison au bord du lac",
      title: "Kasa",
      description:
        "Application de location immobilière React : routing, pages dynamiques, galerie interactive, animations Sass, gestion erreurs, architecture modulaire, données JSON et UI responsive.",
      websiteHref: "#",
      githubHref: "#",
      badges: [{ src: "/images/icons/react.png", alt: "React" }],
    },
    {
      id: 3,
      imgSrc: "/images/towfiqu-barbhuiya-joqWSI9u_XM-unsplash.jpg",
      imgAlt: "Pot de fleur avec de l'argent à l'intérieur",
      title: "Argent Bank",
      description:
        "Application bancaire React : authentification, dashboard utilisateur, gestion transactions, intégration API, Redux, responsive.",
      websiteHref: "#",
      githubHref: "#",
      badges: [
        { src: "/images/icons/react.png", alt: "React" },
        { src: "/images/icons/redux.png", alt: "Redux" },
      ],
    },

    {
      id: 4,
      imgSrc: "/images/aldward-castillo-G6ptCJ_6NbA-unsplash.jpg",
      imgAlt: "Pizzas",
      title: "Pizzeria La Roma",
      description:
        "Site vitrine de pizzeria : maquette figma, routing, pages dynamiques, galerie interactive, optimisation d'images, formulaire de contact.",
      websiteHref: "#",
      githubHref: "#",
      badges: [
        { src: "/images/icons/nextjs.png", alt: "Next.js" },
        { src: "/images/icons/tailwindcss.png", alt: "Tailwind CSS" },
      ],
    },
  ];

  return (
    <section className="pt-20" id="projects">
      <Title className={"mx-auto mt-14.5 mb-16.75"}>Mes derniers projets</Title>

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
