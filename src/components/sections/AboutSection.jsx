import Image from "next/image";

import ExternalLink from "../navigation/ExternalLink";
import Title from "../ui/Title";

function AboutSection() {
  return (
    <section className="relative pt-20" id="about">
      <Image
        src={"/images/atom.svg"}
        alt="Image d'un atome"
        width={212}
        height={212}
        className="absolute top-51.25 left-[8.6vw]"
      />

      <div className="mx-auto my-14.5 w-[46.46vw]">
        <Title className="mb-10.75">Présentation</Title>

        <div className="body-md-medium mb-14.5 flex flex-col gap-5">
          <p>
            Développeur web front-end depuis un an, je conçois des interfaces{" "}
            <span className="body-md-bold">modernes</span>,{" "}
            <span className="body-md-bold">accessibles</span> et{" "}
            <span className="body-md-bold">performantes</span>.
          </p>

          <p>
            Je m’intéresse particulièrement à{" "}
            <span className="body-md-bold">l’expérience utilisateur</span> et
            aux <span className="body-md-bold">bonnes pratiques</span> du
            développement web.
          </p>

          <p>
            À travers mes projets, je cherche à créer des applications{" "}
            <span className="body-md-bold">claires</span>,{" "}
            <span className="body-md-bold">maintenables</span> et centrées sur
            les <span className="body-md-bold">besoins des utilisateurs</span>.
          </p>
        </div>

        <ExternalLink
          href={"#"}
          variant="icon-dark"
          iconSrc={"/images/icons/briefcase-alt.png"}
          iconAlt={"Icône de sac de travail"}
        >
          Mon CV
        </ExternalLink>
      </div>
    </section>
  );
}

export default AboutSection;
