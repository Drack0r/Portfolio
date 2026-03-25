import Image from "next/image";

function Badge({ src, alt }) {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={32}
        height={32}
        className="shadow-2 h-8 w-8 rounded-full bg-white p-1"
      />
    </div>
  );
}

export default Badge;
