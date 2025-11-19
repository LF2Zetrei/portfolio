import Link from "next/link";
import Button from "@/components/Button";
import { useDatas } from "@/hooks/useDatas";

export default function Header() {
  const { header } = useDatas();

  if (!header) return null;

  return (
    <div
      style={{
        height: header.style["height"],
        backgroundColor: header.style["bg-color"],
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: header.style["padding-left"],
        paddingRight: header.style["padding-right"],
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link href="/">
          <p style={{ margin: 0 }}>{header.title}</p>
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: header.style["gap"],
        }}
      >
        <Link href={header["link-link"]}>{header["link-text"]}</Link>

        <Button
          href={header["button-link"]}
          text={header["button-text"]}
          borderTBSize="1px"
          backgroundColor={header.style["button-color"]}
          color={header.style["color"]}
          borderBTLine={header.style["borderTBLine"]}
        />
      </div>
    </div>
  );
}
