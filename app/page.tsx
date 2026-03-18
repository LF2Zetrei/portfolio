import Link from "next/link";
import SplitSection from "@/components/SplitSection";
import CardPhoto from "@/components/CardPhoto";
import { useDatas } from "@/hooks/useDatas";
import Button from "@/components/Button";
import FadeInSection from "@/components/FadeInSection";

export default function Home() {
  const { homepage } = useDatas();

  return (
    <>
      {/* Section 1 — Intro + Photo */}
      <SplitSection
        leftBgColor={homepage.splitsection1.left.style["bg-color"]}
        rightBgColor={homepage.splitsection1.right.style["bg-color"]}
        showDivider={false}
        leftPadding={{ left: "0", right: "0", bottom: "50px", top: "50px" }}
        leftContent={
          <div className="w-full max-w-[90%] md:max-w-[70%] px-4 md:px-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              {homepage.splitsection1.left.title}
            </h2>
            <p className="mt-4 text-sm md:text-base">
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
        }
        rightContent={
          <div className="flex justify-center items-center w-full py-6 md:py-0">
            <CardPhoto imageUrl={homepage.splitsection1.right["card-image-link"]} />
          </div>
        }
        borderBottomStyle={{ line: "none", size: "0", color: "transparent" }}
        rightPadding={{ top: "50px", right: "20px", bottom: "50px", left: "20px" }}
      />

      {/* Section 2 — Types de projets + image de fond */}
      <SplitSection
        rightBgColor={homepage.splitsection2.right.style["bg-color"]}
        leftBgColor="#ddd"
        leftBgImage={homepage.splitsection2.left.image}
        showDivider={false}
        leftContent={null}
        rightContent={
          <div className="w-full px-4 md:px-12 py-8">
            {homepage.splitsection2.right["type-of-projects"].map((section) => (
              <FadeInSection key={section.id} direction="left">
                <h2 className="text-xl md:text-2xl font-bold mt-6">
                  {section.name}
                </h2>
                <p className="mt-2 text-sm md:text-base">
                  {section.description}
                </p>
              </FadeInSection>
            ))}
            <h4 className="mt-8 text-base md:text-lg">
              <Link href="/projects">Click here to see all of them !</Link>
            </h4>
          </div>
        }
        rightPadding={{ top: "50px", right: "40px", bottom: "50px", left: "40px" }}
        borderBottomStyle={{ line: "none", size: "0", color: "transparent" }}
      />
    </>
  );
}