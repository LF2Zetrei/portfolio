import FullSection from "@/components/FullSection";
import ContactForm from "@/components/ContactForm";
import SplitSection from "@/components/SplitSection";
import { useDatas } from "@/hooks/useDatas";
import CardPhoto from "@/components/CardPhoto";
import Button from "@/components/Button";

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
            <CardPhoto imageUrl={about.profileImage} />
          </div>
        }
        rightContent={
          <div className="w-full max-w-md px-4 py-8">
            <ContactForm
              title={about["contact-title"]}
              description={about["contact-description"]}
            />
          </div>
        }
      />

      {/* Section projets — image de fond + bouton */}
      <FullSection
        height="500px"
        bgColor="white"
        bgImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        borderBottomStyle={{ line: "none", size: "0", color: "transparent" }}
        borderTopStyle={{ line: "solid", size: "1px", color: "black" }}
      >
        <div className="flex flex-col items-center gap-8 text-center px-4">
          <h1 className="text-2xl md:text-3xl">
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
      </FullSection>
    </>
  );
}