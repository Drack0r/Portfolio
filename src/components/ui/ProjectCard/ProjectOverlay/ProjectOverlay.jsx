import clsx from "clsx";

function ProjectOverlay({ isVisible, description }) {
  const customClassName = clsx(
    "absolute inset-0 flex items-center justify-center bg-black/60 transition-opacity duration-300",
    isVisible
      ? "pointer-events-auto opacity-100"
      : "pointer-events-none opacity-0",
  );

  return (
    <div className={customClassName}>
      <p className="body-sm-medium px-6 text-center text-white">
        {description}
      </p>
    </div>
  );
}

export default ProjectOverlay;
