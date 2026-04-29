import { SkillProgress, Title } from "@/components/ui";
// import skillItems from "@/data/skills.json";

function SkillsSection({ skills = [] }) {
  return (
    <section
      className="mt-10 scroll-mt-22 lg:mt-30 lg:scroll-mt-35"
      id="skills"
    >
      <Title className="mx-auto mb-10 lg:mb-20">Mes compétences</Title>

      {/* Progress bars container */}
      <div className="mx-auto mb-10 flex w-[80vw] flex-wrap items-center justify-center gap-6 lg:mb-30 lg:w-fit lg:flex-col lg:items-end">
        {skills.map((skill) => (
          <SkillProgress
            key={skill._id}
            iconSrc={skill.iconSrc}
            iconAlt={skill.iconAlt}
            title={skill.techStack}
            color={skill.color}
            progressLevel={skill.progressLevel}
          />
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
