import Image from "next/image";
import Link from "next/link";
import SplitSection from "@/components/SplitSection"
import CardPhoto from "@/components/CardPhoto"
import { useDatas } from "@/hooks/useDatas";
import Button from "@/components/Button";
import Gap from "@/components/Gap";
import FadeInSection from "@/components/FadeInSection";

export default function Home() {
  const {homepage} = useDatas();
  return (
    <>
      <SplitSection
        leftBgColor={homepage.splitsection1.left.style["bg-color"]}
        rightBgColor={homepage.splitsection1.right.style["bg-color"]}
        leftBgImage="https://example.com/image1.jpg"
        rightBgImage={null}
        showDivider={false}
        leftPadding={{left: "0", right: "0", bottom: "50px", top: "50px"}}
        leftContent={
          <div style={{maxWidth:"70%"}}>
            <h2>{homepage.splitsection1.left.title}</h2>
            <Gap></Gap>
            <p>{homepage.splitsection1.left.subtitle}</p>
            <Gap height="30px"></Gap>
            <Button
                  href={homepage.splitsection1.left["button-link"]}
                  text={homepage.splitsection1.left["button-text"]}
                  borderTBSize="1px"
                  backgroundColor={homepage.splitsection1.left.style["button-bg-color"]}
                  color={homepage.splitsection1.left.style["button-text-color"]}
              />
            </div>}
        rightContent={<CardPhoto imageUrl={homepage.splitsection1.right["card-image-link"]}/>}
        borderBottomStyle={{ line: "none", size: "0", color: "transparent" }}
        rightPadding= {{top: "50px",right: "20px", bottom: "50px", left: "20px"}}
      />
      <SplitSection
        rightBgColor={homepage.splitsection2.right.style["bg-color"]}
        leftBgColor="#ddd"
        rightBgImage={null}
        leftBgImage={homepage.splitsection2.left.image}
        showDivider={false}
        leftContent={null}
        rightContent={
          <div>
            {homepage.splitsection2.right["type-of-projects"].map((section) => {
              return (
                  <>
                  <FadeInSection direction="left">
                    <h2>{section.name}</h2>
                    <Gap></Gap>
                    <p>{section.description}</p>
                    <Gap></Gap>
                  </FadeInSection>
                  </>);
            })}
            <h4><Link href="/projects">Click here to see all of them !</Link></h4>
          </div>
        }
        rightPadding= {{top: "50px",right: "120px", bottom: "50px", left: "50px"}}
        borderBottomStyle={{ line: "none", size: "0", color: "transparent" }}
      />
    </>
  );
}
