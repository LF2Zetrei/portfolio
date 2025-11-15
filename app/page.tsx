import Image from "next/image";
import SplitSection from "@/components/SplitSection"

export default function Home() {
  return (
    <>
      <SplitSection
        height="h-[400px]"
        left={<h1 className="text-2xl font-bold">Gauche</h1>}
        right={<h1 className="text-2xl font-bold">Droite</h1>}
        leftBgColor="bg-gray-200"
        rightBgColor="bg-blue-200"
        showDivider={true}
      />
      <SplitSection
        height="h-[500px]"
        left={<p className="text-lg">Texte gauche</p>}
        right={<p className="text-lg">Texte droite</p>}
        dividerColor="bg-gray-200"
      />
    </>
  );
}
