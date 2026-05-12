import Image from "next/image";

function Badge({ src, alt }) {
  const customClassName = "shadow-2 h-8 w-8 rounded-full bg-white p-1";

  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={32}
        height={32}
        className={customClassName}
      />
    </div>
  );
}

export default Badge;
