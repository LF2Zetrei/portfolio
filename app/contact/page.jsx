import FullSection from "@/components/FullSection";
import ContactForm from "@/components/ContactForm";
import SplitSection from "@/components/SplitSection";
import { useDatas } from "@/hooks/useDatas";
import CardPhoto from "@/components/CardPhoto";
import Button from "@/components/Button";
import MetaballBackground from "../../components/MetaBallBackground";

export default function Contact() {
  const { about } = useDatas();

  return (
    <>
      {/* Section contact — photo + formulaire */}
      <SplitSection
        leftBgColor={about.style["bg-color-left"]}
        rightBgColor={about.style["bg-color-right"]}
        showDivider={false}
        borderBottomStyle={{ line: "none", size: "0", color: "transparent" }}
        leftContent={
          <div className="flex flex-col items-center justify-center w-full gap-6 py-8">
            <h1 className="text-2xl md:text-3xl text-center w-4/5 md:w-3/5">
              {about.title}
            </h1>
            <CardPhoto imageUrl={about.profileImage} backgroundColor="#686075"/>
          </div>
        }
        rightContent={
          <div className="w-full px-0 py-0 md:px-4 md:py-7 lg:px-6">
            <ContactForm
              title={about["contact-title"]}
              description={about["contact-description"]}
            />
          </div>
        }
      />

      {/* Section projets — metaball background + bouton */}
        <div className="relative w-full h-[500px]">
        <MetaballBackground
          speed={0.5}
          bgColor="0.93, 0.91, 0.90"
          gradientColor="0.78, 0.76, 0.80"
        >
            <div className="flex flex-col items-center justify-center gap-8 text-center px-4 w-full h-full">
            <h1 className="text-2xl md:text-3xl text-white">
                {about["projects-title"]}
            </h1>
            <Button
                href={about["button-link"]}
                text={about["button-text"]}
                borderTBSize="1px"
                backgroundColor={about.style["button-color"]}
                color={about.style["color"]}
                borderBTLine={about.style["borderBTLine"]}
            />
            </div>
        </MetaballBackground>
        </div>
    </>
  );
}