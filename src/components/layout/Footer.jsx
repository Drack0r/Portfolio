import ContactForm from "@/components/ui/ContactForm";
import Title from "@/components/ui/Title";

import ExternalLink from "../navigation/ExternalLink";

function Footer() {
  return (
    <footer className="relative bg-black pt-14.5" id="contact">
      <Title className="mx-auto mb-14.5 text-white after:bg-white">
        Contactez-moi
      </Title>

      <ContactForm />

      {/* Links container */}
      <div className="absolute right-8 bottom-8 flex gap-4">
        {/* Github link */}
        <ExternalLink
          href="https://github.com/Drack0r"
          variant="simpleIcon"
          iconSrc="/images/icons/github-light.png"
          iconAlt="Logo de GitHub"
        />
        {/* Linkedin link */}
        <ExternalLink
          href="#"
          variant="simpleIcon"
          iconSrc="/images/icons/linkedin-alt.png"
          iconAlt="Logo de Linkedin"
        />
      </div>
    </footer>
  );
}

export default Footer;
