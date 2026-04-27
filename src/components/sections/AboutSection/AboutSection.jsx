import Image from "next/image";

import { ExternalLink } from "@/components/navigation";
import { Title } from "@/components/ui";

function AboutSection() {
  return (
    <section
      className="relative mt-10 scroll-mt-22 lg:mt-30 lg:scroll-mt-34"
      id="about"
    >
      <Image
        src={"/images/atom.svg"}
        alt="Image d'un atome"
        width={212}
        height={212}
        className="mx-auto lg:absolute lg:top-[28%] lg:left-[5%]"
      />

      {/* Text content */}
      <div className="mx-auto my-10 flex w-[85vw] flex-col items-center lg:my-14.5 lg:w-[46.46vw]">
        <Title className="mb-14">Présentation</Title>

        {/* Description */}
        <div className="body-md-medium mx-auto mb-14 flex max-w-225 flex-col gap-5">
          <p>
            Bonjour, je suis Antonin Chevolleau, développeur front-end
            spécialisé dans l’intégration d’interfaces{" "}
            <span className="body-md-bold">fiables</span> et{" "}
            <span className="body-md-bold">maintenables</span> avec{" "}
            <span className="body-md-bold">React</span>.
          </p>

          <p>
            Issu d’un parcours d’ingénieur du son, je me suis reconverti dans le
            développement web avec une forte appétence pour la{" "}
            <span className="body-md-bold">logique du code</span> et la{" "}
            <span className="body-md-bold">conception d’interfaces</span>.
          </p>

          <p>
            Je travaille principalement avec{" "}
            <span className="body-md-bold">React</span>,{" "}
            <span className="body-md-bold">Next.js</span> et{" "}
            <span className="body-md-bold">Redux</span>, que j’ai notamment
            utilisés pour développer une application bancaire intégrant une{" "}
            <span className="body-md-bold">gestion d’état globale</span> avec{" "}
            <span className="body-md-bold">
              persistance des données utilisateur
            </span>{" "}
            et{" "}
            <span className="body-md-bold">
              mise à jour dynamique de l’interface
            </span>
            .
          </p>

          <p>
            J’accorde une importance particulière à la{" "}
            <span className="body-md-bold">structure du code</span> et à la{" "}
            <span className="body-md-bold">maintenabilité</span>, en prenant le
            temps de <span className="body-md-bold">refactoriser</span>,{" "}
            <span className="body-md-bold">comprendre mes erreurs</span> et{" "}
            <span className="body-md-bold">améliorer mes implémentations</span>.
          </p>

          <p>
            Mon objectif est de produire un code{" "}
            <span className="body-md-bold">clair</span>,{" "}
            <span className="body-md-bold">évolutif</span> et{" "}
            <span className="body-md-bold">compréhensible par une équipe</span>.
          </p>

          <p>
            Je recherche aujourd’hui une{" "}
            <span className="body-md-bold">alternance</span> pour évoluer vers
            du développement <span className="body-md-bold">full-stack</span>,
            au sein d’une équipe expérimentée où je pourrai monter rapidement en
            compétences.
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
