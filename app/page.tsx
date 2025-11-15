import Image from "next/image";
import SplitSection from "@/components/SplitSection"

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
        rightContent={<div>Right side content</div>}
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
