import Image from "next/image";

import { Badge } from "@/components/ui";

function ProjectImage({ src, alt, badges, children }) {
  const customClassName =
    "relative h-[65%] w-full overflow-hidden rounded-t-[20px]";

  return (
    <div className={customClassName}>
      {/* Badges container */}
      {badges && badges.length > 0 && (
        <div className="absolute top-2 left-2 z-20 flex gap-1">
          {badges.map((badge) => (
            <Badge key={badge._id} src={badge.src} alt={badge.alt} />
          ))}
        </div>
      )}

      {/* Image */}
      <Image
        src={src}
        alt={alt}
        width={300}
        height={208}
        className="h-full w-full object-cover"
      />

      {/* Overaly */}
      {children}
    </div>
  );
}

export default ProjectImage;
