import clsx from "clsx";

function ProjectOverlay({ isVisible, description }) {
  return (
    <div
      className={clsx(
        "absolute inset-0 flex items-center justify-center bg-black/60 transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0",
      )}
    >
      <p className="body-sm-medium px-6 text-center text-white">
        {description}
      </p>
    </div>
  );
}

export default ProjectOverlay;
