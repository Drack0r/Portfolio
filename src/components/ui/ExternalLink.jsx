import clsx from "clsx";

function ExternalLink({
  href,
  variant = "default",
  children,
  iconSrc,
  iconAlt,
}) {
  const isMailto = href.startsWith("mailto:");

  const className = clsx(
    "body-md-medium flex w-fit gap-2 rounded-md px-6 py-3 duration-300 hover:opacity-60",
    (variant === "default" || variant === "icon") && "border border-dark",
    (variant === "dark" || variant === "icon-dark") && "text-white bg-black",
  );

  return (
    <a
      href={href}
      target={isMailto ? undefined : "_blank"}
      rel={isMailto ? undefined : "noopener noreferrer"}
      className={className}
    >
      {(variant === "icon" || variant === "icon-dark") && (
        <img
          src={iconSrc}
          alt={iconAlt}
          width={24}
          height={24}
          className="h-6 w-6"
        />
      )}
      {children}
    </a>
  );
}

export default ExternalLink;
