import { SkillProgress, Title } from "@/components/ui";

function SkillsSection() {
  return (
    <section className="mt-30 scroll-mt-35" id="skills">
      <Title className="mx-auto mb-20">Mes compétences</Title>

      {/* Progress bars container */}
      <div className="mx-auto mb-30 flex w-fit flex-col items-end gap-6">
        <SkillProgress
          iconSrc={"/images/icons/html5.png"}
          iconAlt={"HTML5"}
          title={"HTML"}
          color={"orange"}
          progressLevel={85}
        />
        <SkillProgress
          iconSrc={"/images/icons/css.png"}
          iconAlt={"CSS"}
          title={"CSS"}
          color={"blue"}
          progressLevel={80}
        />
        <SkillProgress
          iconSrc={"/images/icons/sass.png"}
          iconAlt={"Sass"}
          title={"Sass"}
          color={"pink"}
          progressLevel={75}
        />
        <SkillProgress
          iconSrc={"/images/icons/tailwindcss.png"}
          iconAlt={"Tailwind CSS"}
          title={"Tailwind CSS"}
          color={"cyan"}
          progressLevel={60}
        />
        <SkillProgress
          iconSrc={"/images/icons/javascript.png"}
          iconAlt={"JavaScript"}
          title={"JavaScript"}
          color={"yellow"}
          progressLevel={65}
        />
        <SkillProgress
          iconSrc={"/images/icons/react.png"}
          iconAlt={"React"}
          title={"React"}
          color={"teal"}
          progressLevel={65}
        />
        <SkillProgress
          iconSrc={"/images/icons/nextjs.png"}
          iconAlt={"Next.js"}
          title={"Next.js"}
          color={"gray"}
          progressLevel={55}
        />
        <SkillProgress
          iconSrc={"/images/icons/github.png"}
          iconAlt={"Github"}
          title={"Git & GitHub"}
          color={"black"}
          progressLevel={70}
        />
      </div>
    </section>
  );
}

export default SkillsSection;
