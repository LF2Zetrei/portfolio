import Link from "next/link";
import Image from "next/image";

export default function Media({
  url,
  icon,
  name,
  description,
  backgroundColor = "transparent",
  iconColor = "blue",
  nameColor = "#d1d1e9",
  descriptionColor = "#a3a3b8",
}) {
  return (
    <div
      style={{ backgroundColor }}
      className="flex flex-col items-center text-center p-4 rounded-lg w-fit max-w-full box-border"
    >
      {/* Icône — pas de cercle, l'image est déjà ronde */}
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 inline-flex items-center justify-center
                  cursor-pointer hover:opacity-80 transition-opacity"
      >
        <Image
          src={icon}
          alt={name}
          width={64}
          height={64}
          style={{ objectFit: "contain" }}
          className="w-16 h-16 rounded-full"
        />
      </Link>

      {/* Nom */}
      <h2 className="m-0 mb-2 font-semibold text-lg md:text-xl leading-tight">
        <Link
          href={url}
          style={{ color: nameColor }}
          className="no-underline hover:opacity-80 transition-opacity"
        >
          {name}
        </Link>
      </h2>

      {/* Description */}
      {description && (
        <h3
          style={{ color: descriptionColor }}
          className="m-0 font-normal text-sm not-italic"
        >
          {description}
        </h3>
      )}
    </div>
  );
}