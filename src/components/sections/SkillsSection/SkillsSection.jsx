import { SkillProgress, Title } from "@/components/ui";
import skillItems from "@/data/skills.json";

function SkillsSection() {
  return (
    <section
      className="mt-10 scroll-mt-22 lg:mt-30 lg:scroll-mt-35"
      id="skills"
    >
      <Title className="mx-auto mb-20">Mes compétences</Title>

      {/* Progress bars container */}
      <div className="mx-auto mb-30 flex w-fit flex-col items-end gap-6">
        {skillItems.map((skill) => (
          <SkillProgress
            key={skill.techStack}
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
