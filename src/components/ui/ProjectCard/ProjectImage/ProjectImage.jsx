import Image from "next/image";

import { Badge } from "@/components/ui";

function ProjectImage({ src, alt, width, height, badges, overlay }) {
  const customClassName =
    "relative h-[65%] w-full overflow-hidden rounded-t-[20px]";

  return (
    <div className={customClassName}>
      {/* Badges */}
      {badges && badges.length > 0 && (
        <div className="absolute top-2 left-2 z-20 flex gap-1">
          {badges.map((badge) => (
            <Badge key={badge.src} src={badge.src} alt={badge.alt} />
          ))}
        </div>
      )}

      {/* Image */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full w-full object-cover"
      />

      {/* Overlay */}
      {overlay}
    </div>
  );
}

export default ProjectImage;
