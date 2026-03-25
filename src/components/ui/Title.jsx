import clsx from "clsx";

function Title({ children, className }) {
  const combinedClassName = clsx(
    "heading-4 after:bg-dark relative w-fit after:absolute after:-bottom-1 after:left-0 after:h-1.25 after:w-full after:content-['']",
    className,
  );

  return <h2 className={combinedClassName}>{children}</h2>;
}

export default Title;
