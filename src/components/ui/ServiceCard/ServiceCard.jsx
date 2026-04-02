"use client";

import { useState } from "react";

import clsx from "clsx";

import { Icon } from "@/components/ui";

function ServiceCard({ service }) {
  const [isHover, setIsHover] = useState(false);

  const customClassName = clsx(
    "shadow-7 flex size-75 flex-col items-center justify-center gap-8 rounded-[10px] border-2 border-black",
    isHover && "bg-black text-white ",
  );

  return (
    <article
      className={customClassName}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Icon name={service.icon} className="transition-colors duration-200" />

      <h3 className="body-lg-bold transition-colors duration-200">
        {service.title}
      </h3>

      <p
        className={clsx(
          "w-10/11 text-center opacity-0 transition-opacity duration-200",
          isHover && "opacity-100",
        )}
      >
        {service.description}
      </p>
    </article>
  );
}

export default ServiceCard;
