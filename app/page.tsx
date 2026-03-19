import Link from "next/link";
import SplitSection from "@/components/SplitSection";
import CardPhoto from "@/components/CardPhoto";
import { useDatas } from "@/hooks/useDatas";
import Button from "@/components/Button";
import FadeInSection from "@/components/FadeInSection";
import FullSection from "@/components/FullSection";
import MetaBallSection from "@/components/MetaBallSection"

export default function Home() {
  const { homepage } = useDatas();

  return (
    <>
      {/* Section 1 — Intro + Photo */}
      <SplitSection
        leftBgColor={homepage.splitsection1.left.style["bg-color"]}
        rightBgColor={homepage.splitsection1.right.style["bg-color"]}
        showDivider={false}
        leftContent={
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-full max-w-[90%] md:max-w-[70%] px-4 md:px-0">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                {homepage.splitsection1.left.title}
              </h2>
              <p className="mt-4 text-sm md:text-base text-justify">
                {homepage.splitsection1.left.subtitle}
              </p>
              <div className="mt-6">
                <Button
                  href={homepage.splitsection1.left["button-link"]}
                  text={homepage.splitsection1.left["button-text"]}
                  borderTBSize="1px"
                  backgroundColor={homepage.splitsection1.left.style["button-bg-color"]}
                  color={homepage.splitsection1.left.style["button-text-color"]}
                />
              </div>
            </div>
          </div>
        }
        rightContent={
          <div className="flex justify-center items-center w-full py-6 md:py-0">
            <CardPhoto imageUrl={homepage.splitsection1.right["card-image-link"]} backgroundColor="#686075"/>
          </div>
        }
        borderBottomStyle={{ line: "none", size: "0", color: "transparent" }}
      />

      {/* === MOBILE : Section 2 === */}
      <FullSection
        bgColor={homepage.splitsection2.right.style["bg-color"]}
        borderBottomStyle={{ line: "none", size: "0", color: "transparent" }}
        className="md:hidden"
      >
        <div className="w-full px-4 py-8">
          {homepage.splitsection2.right["type-of-projects"].map((section) => (
            <FadeInSection key={section.id} direction="left">
              <h2 className="text-xl font-bold mt-6">{section.name}</h2>
              <p className="mt-2 text-sm text-justify">{section.description}</p>
            </FadeInSection>
          ))}
          <h4 className="mt-8 text-base">
            Click <Link href="/projects" className="font-semibold hover:underline"> here </Link> to see all of them !
          </h4>
        </div>
      </FullSection>

      {/* === DESKTOP : Section 2 avec MetaballBackground === */}
      <div className="hidden md:flex w-full min-h-[500px] relative">

        {/* Moitié gauche — MetaballBackground */}
        <div className="w-1/2 relative">
          <MetaBallSection />
        </div>

        {/* Moitié droite — contenu */}
        <div
          className="w-1/2 px-12 py-12 flex flex-col justify-center"
          style={{ backgroundColor: homepage.splitsection2.right.style["bg-color"] }}
        >
          {homepage.splitsection2.right["type-of-projects"].map((section) => (
            <FadeInSection key={section.id} direction="left">
              <h2 className="text-xl md:text-2xl font-bold mt-6">{section.name}</h2>
              <p className="mt-2 text-sm md:text-base text-justify">{section.description}</p>
            </FadeInSection>
          ))}
          <h4 className="mt-8 text-base md:text-lg">
            Click <Link href="/projects" className="font-semibold hover:underline">here</Link> to see all of them !
          </h4>
        </div>

      </div>
    </>
  );
}