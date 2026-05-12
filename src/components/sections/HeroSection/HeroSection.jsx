"use client";

import Image from "next/image";

import { ExternalLink } from "@/components/navigation";
import RevealOnScroll from "@/components/RevealOnScroll";
import { blurIn, fadeUp } from "@/variants/animation";

function HeroSection() {
  return (
    <section
      className="relative h-[calc(100vh-80px)] scroll-mt-40 overflow-x-hidden"
      id="home"
    >
      {/* Text content */}
      <RevealOnScroll variant={fadeUp}>
        <header className="mx-auto flex w-fit flex-col items-center gap-5 pt-10 lg:pt-13.5">
          <p className="body-lg-bold lg:heading-6">
            Bonjour, je suis Antonin Chevolleau,
          </p>
          <h1 className="heading-4 lg:heading-1">Développeur front-end</h1>
        </header>
      </RevealOnScroll>

      {/* Photo + Splash */}
      <div
        className="absolute bottom-0 left-1/2 h-[69.82vh] -translate-x-1/2"
        style={{
          aspectRatio: "3648 / 3872",
          height: "min(69.82vh, calc(100% - 200px))",
        }}
      >
        <RevealOnScroll variant={blurIn} className="absolute inset-0">
          <Image
            src={"/images/color-splash.png"}
            alt=""
            width={6001}
            height={4001}
            sizes="54vw"
            className="absolute top-[-14%] left-1/2 -z-10 h-[84%] w-auto -translate-x-1/2"
          />
          <Image
            src={"/images/antonin.png"}
            alt="Photo d'Antonin Chevolleau"
            fill
            sizes="40vw"
            className="object-contain"
          />
        </RevealOnScroll>
      </div>

      {/* Actions */}
      <nav
        aria-label="Liens de navigation"
        className="absolute bottom-[3.9vh] flex w-screen items-center justify-center gap-6 lg:right-[2.7vw] lg:w-fit lg:flex-col"
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
          className="bg-white"
        >
          GitHub
        </ExternalLink>
      </nav>
    </section>
  );
}

export default HeroSection;
