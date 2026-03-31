import Image from "next/image";

import { ExternalLink } from "@/components/navigation";

function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-80px)] scroll-mt-40" id="home">
      {/* Text content */}
      <header className="mx-auto flex w-fit flex-col items-center gap-5 pt-13.5">
        <p className="heading-6">Bonjour, je suis Antonin Chevolleau,</p>
        <h1 className="heading-1">Développeur front-end</h1>
      </header>

      {/* Photo */}
      <Image
        src={"/images/antonin.png"}
        alt="Photo d'Antonin Chevolleau"
        width={912}
        height={978}
        sizes="40vw"
        className="absolute bottom-0 left-1/2 h-[69.82vh] w-auto -translate-x-1/2"
      />

      {/* Splash image */}
      <Image
        src={"/images/color-splash.png"}
        alt=""
        width={898}
        height={599}
        sizes="54vw"
        className="absolute top-[14vh] left-1/2 -z-10 h-[58.49vh] w-auto -translate-x-1/2"
      />

      {/* Actions */}
      <nav
        aria-label="Liens de navigation"
        className="absolute right-[2.7vw] bottom-[3.9vh] flex w-fit flex-col items-center gap-6"
      >
        <ExternalLink
          href={"mailto:antochevolleau@gmail.com"}
          variant="icon-dark"
          iconSrc={"/images/icons/envelope-white.png"}
          iconAlt={"Icône d'enveloppe"}
        >
          Contactez-moi
        </ExternalLink>

        <ExternalLink
          href={"https://github.com/Drack0r"}
          variant="icon"
          iconSrc={"/images/icons/github.png"}
          iconAlt={"Logo de GitHub"}
        >
          GitHub
        </ExternalLink>
      </nav>
    </section>
  );
}

export default HeroSection;
