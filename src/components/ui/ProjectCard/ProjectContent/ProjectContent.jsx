import { ExternalLink } from "@/components/navigation";

function ProjectContent({ title, websiteHref, githubHref }) {
  return (
    <>
      {/* Title */}
      <h3 className="body-lg-semibold mx-auto mt-4 mb-3.5 w-fit">{title}</h3>

      {/* Links */}
      <div className="mx-auto flex w-fit gap-2.5">
        <ExternalLink variant="dark" size="sm" href={websiteHref}>
          Visiter
        </ExternalLink>

        <ExternalLink size="sm" variant="default" href={githubHref}>
          GitHub
        </ExternalLink>
      </div>
    </>
  );
}

export default ProjectContent;
