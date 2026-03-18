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
  small = false,   // ← nouvelle prop
}) {
  return (
    <div
      style={{ backgroundColor }}
      className={`flex flex-col items-center text-center rounded-lg box-border
                  ${small ? "p-2" : "p-4"}`}
    >
      {/* Icône */}
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`mb-2 inline-flex items-center justify-center
                   rounded-full cursor-pointer flex-shrink-0
                   hover:opacity-80 transition-opacity
                   ${small ? "w-10 h-10" : "w-16 h-16"}`}
      >
        <Image
          src={icon}
          alt={name}
          width={small ? 32 : 48}
          height={small ? 32 : 48}
          style={{ objectFit: "contain" }}
          className={small ? "w-8 h-8" : "w-12 h-12"}
        />
      </Link>

      {/* Nom */}
      <h2 className={`m-0 mb-1 font-semibold leading-tight
                      ${small ? "text-sm" : "text-lg md:text-xl"}`}>
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
          className={`m-0 font-normal not-italic
                      ${small ? "text-xs" : "text-sm"}`}
        >
          {description}
        </h3>
      )}
    </div>
  );
}