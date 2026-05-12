import Image from "next/image";

import clsx from "clsx";

function SkillProgress({ iconSrc, iconAlt, title, progressLevel = 0, color }) {
  const colorClasses = {
    orange: "bg-orange",
    blue: "bg-blue",
    pink: "bg-pink",
    cyan: "bg-cyan",
    yellow: "bg-yellow",
    teal: "bg-teal",
    gray: "bg-stone-600",
    black: "bg-black",
  };

  return (
    <article className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
      <Image src={iconSrc} alt={iconAlt} width={24} height={24} />

      <p className="body-lg-semibold">{title}</p>

      <div className="bg-stroke hidden h-2 w-[32.5vw] rounded-2xl sm:block">
        <div
          className={clsx(
            "h-full rounded-2xl transition-all duration-500",
            colorClasses[color],
          )}
          style={{ width: `${progressLevel}%` }}
        ></div>
      </div>

      <p
        className={clsx(
          "w-fit rounded-2xl px-4 py-2 text-white",
          colorClasses[color],
        )}
      >
        {`${progressLevel}%`}
      </p>
    </article>
  );
}

export default SkillProgress;
