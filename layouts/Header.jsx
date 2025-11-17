import Link from "next/link";
import Button from "@/components/Button";

export default function Header({
  height = "60px",
  backgroundColor = "#fff",
  leftPadding = "20px",
  rightPadding = "20px",
  gap = "15px",
}) {
  return (
    <div
      style={{
        height,
        backgroundColor,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: leftPadding,
        paddingRight: rightPadding,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link href="/">
          <p style={{ margin: 0 }}>Lucas</p>
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap,
        }}
      >
        <Link href="/projects">my projects</Link>
        <Button href="/contact" text="contact me !" borderTBSize="1px"/>
      </div>
    </div>
  );
}