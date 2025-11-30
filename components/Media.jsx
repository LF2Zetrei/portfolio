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
      style={{
        backgroundColor,
        padding: "24px",
        borderRadius: "8px",
        width: "fit-content",
        textAlign: "center",
        color: nameColor,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          marginBottom: "16px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          border: `2px solid ${iconColor}`,
          color: iconColor,
          cursor: "pointer",
        }}
      >
        <Link href={url} legacyBehavior target="_blank" rel="noopener noreferrer">
          <a>
            <Image src={icon} alt={name} width={70} height={70} />
          </a>
        </Link>
      </div>

      <h2
        style={{
          margin: "0 0 8px",
          fontWeight: "600",
          fontSize: "1.25rem",
          color: nameColor,
          cursor: "pointer",
        }}
      >
        <Link href={url} legacyBehavior>
          <a style={{ color: nameColor, textDecoration: "none" }}>{name}</a>
        </Link>
      </h2>

      <h3
        style={{
          margin: 0,
          fontWeight: "400",
          fontSize: "0.9rem",
          color: descriptionColor,
          fontStyle: "normal",
        }}
      >
        {description}
      </h3>
    </div>
  );
}