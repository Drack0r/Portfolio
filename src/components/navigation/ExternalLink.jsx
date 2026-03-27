import Image from "next/image";

import clsx from "clsx";

function ExternalLink({
  href,
  variant = "default",
  size = "md",
  children,
  iconSrc,
  iconAlt,
  className,
}) {
  const isMailto = href.startsWith("mailto:");

  const customClassName = clsx(
    "body-md-medium flex w-fit gap-2 rounded-md  duration-300 hover:opacity-60",
    className,
    (variant === "default" || variant === "icon") && "border border-dark",
    (variant === "dark" || variant === "icon-dark") && "text-white bg-black",
    size === "md" && "px-6 py-3",
    size === "sm" && "px-3 py-1.5",
  );

  return (
    <a
      href={href}
      target={isMailto ? undefined : "_blank"}
      rel={isMailto ? undefined : "noopener noreferrer"}
      className={customClassName}
    >
      {/* Icon */}
      {(variant === "icon" || variant === "icon-dark") && (
        <Image
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
