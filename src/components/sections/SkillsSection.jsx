import SkillProgress from "@/components/ui/SkillProgress";
import Title from "@/components/ui/Title";

function SkillsSection() {
  return (
    <section className="mt-30 scroll-mt-35" id="skills">
      <Title className="mx-auto mb-20">Mes compétences</Title>

      {/* Progress bars container */}
      <div className="mx-auto mb-30 flex w-fit flex-col items-end gap-4">
        <SkillProgress
          iconSrc={"/images/icons/html5.png"}
          iconAlt={"HTML5"}
          title={"HTML"}
          color={"orange"}
          progressLevel={50}
        />
        <SkillProgress
          iconSrc={"/images/icons/css.png"}
          iconAlt={"CSS"}
          title={"CSS"}
          color={"blue"}
          progressLevel={50}
        />
        <SkillProgress
          iconSrc={"/images/icons/sass.png"}
          iconAlt={"Sass"}
          title={"Sass"}
          color={"pink"}
          progressLevel={50}
        />
        <SkillProgress
          iconSrc={"/images/icons/tailwindcss.png"}
          iconAlt={"Tailwind CSS"}
          title={"Tailwind CSS"}
          color={"cyan"}
          progressLevel={50}
        />
        <SkillProgress
          iconSrc={"/images/icons/javascript.png"}
          iconAlt={"JavaScript"}
          title={"JavaScript"}
          color={"yellow"}
          progressLevel={50}
        />
        <SkillProgress
          iconSrc={"/images/icons/react.png"}
          iconAlt={"React"}
          title={"React"}
          color={"teal"}
          progressLevel={50}
        />
        <SkillProgress
          iconSrc={"/images/icons/nextjs.png"}
          iconAlt={"Next.js"}
          title={"Next.js"}
          color={"gray"}
          progressLevel={50}
        />
        <SkillProgress
          iconSrc={"/images/icons/github.png"}
          iconAlt={"Github"}
          title={"Git & GitHub"}
          color={"black"}
          progressLevel={50}
        />
      </div>
    </section>
  );
}

export default SkillsSection;
