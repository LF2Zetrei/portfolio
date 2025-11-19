import Image from "next/image";
import SplitSection from "@/components/SplitSection"
import CardPhoto from "@/components/CardPhoto"
import { useDatas } from "@/hooks/useDatas";
import Button from "@/components/Button";

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
        leftContent={
          <div style={{maxWidth:"70%"}}>
            <h2>{homepage.splitsection1.left.title}</h2>
            <p>{homepage.splitsection1.left.subtitle}</p>
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
        rightPadding= {{top: "20px",right: "20px", bottom: "20px", left: "20px"}}
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
                    <h2>{section.name}</h2>
                    <p>{section.description}</p>
                  </>);
            })}
          </div>
        }
        rightPadding= {{top: "20px",right: "20px", bottom: "20px", left: "20px"}}
        borderBottomStyle={{ line: "none", size: "0", color: "transparent" }}
      />
    </>
  );
}
