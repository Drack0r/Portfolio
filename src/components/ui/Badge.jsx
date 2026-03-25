import Image from "next/image";

function Badge({ src, alt }) {
  return (
    <div>
      <Image src={src} alt={alt} width={32} height={32} className="h-8 w-8" />
    </div>
  );
}

export default Badge;
