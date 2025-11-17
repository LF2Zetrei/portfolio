import Image from "next/image";
import SplitSection from "@/components/SplitSection"
import CardPhoto from "@/components/CardPhoto"

export default function Home() {
  return (
    <>
      <SplitSection
        height={300}
        leftBgColor="#f0f0f0"
        rightBgColor="#f0f0f0"
        leftBgImage="https://example.com/image1.jpg"
        rightBgImage={null}
        showDivider={false}
        leftContent={<div>Left side content</div>}
        rightContent={<CardPhoto imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb"/>}
        borderBottomStyle={{ line: "none", size: "0", color: "transparent" }}
      />
      <SplitSection
        height={800}
        rightBgColor="#f0f0f0"
        leftBgColor="#ddd"
        rightBgImage={null}
        leftBgImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        showDivider={false}
        leftContent={null}
        rightContent={<div>Right side content</div>}
        borderBottomStyle={{ line: "none", size: "0", color: "transparent" }}
      />
    </>
  );
}
