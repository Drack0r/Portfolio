import Image from "next/image";

import Badge from "@/components/ui/Badge";

function ProjectImage({ src, alt, width, height, badges, overlay }) {
  return (
    <div className="relative h-[65%] w-full overflow-hidden rounded-t-[20px]">
      {/* Badges */}
      {badges && badges.length > 0 && (
        <div className="absolute top-2 left-2 z-20 flex gap-1">
          {badges.map((badge, index) => (
            <Badge key={index} src={badge.src} alt={badge.alt} />
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
