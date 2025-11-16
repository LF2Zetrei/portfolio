import Image from "next/image";
import SplitSection from "@/components/SplitSection"
import CardPhoto from "@/components/CardPhoto"

export default function Home() {
  return (
    <>
      <SplitSection
        height={300}
        leftBgColor="#f0f0f0"
        rightBgColor="#ddd"
        leftBgImage="https://example.com/image1.jpg"
        rightBgImage={null}
        showDivider={true}
        leftContent={<div>Left side content</div>}
        rightContent={<CardPhoto imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb"/>
        }
      />
      <SplitSection
        height={400}
        rightBgColor="#f0f0f0"
        leftBgColor="#ddd"
        rightBgImage="https://example.com/image1.jpg"
        leftBgImage={null}
        showDivider={false}
        leftContent={<div>Left side content</div>}
        rightContent={<div>Right side content</div>}
      />
    </>
  );
}
