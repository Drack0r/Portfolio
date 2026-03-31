import clsx from "clsx";

function ProjectCard({ children, isHover, ...props }) {
  const customClassName = clsx(
    "relative h-80 w-75 rounded-[20px] transition-all duration-300",
    isHover ? "shadow-6 scale-110" : "shadow-5",
  );

  return (
    <article className={customClassName} {...props}>
      {children}
    </article>
  );
}

export default ProjectCard;
