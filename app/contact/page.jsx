import FullSection from "@/components/FullSection"
import ContactForm from "@/components/ContactForm"
import SplitSection from "@/components/SplitSection"
import CardPhot from "../../components/CardPhoto"
import {useDatas} from "@/hooks/useDatas"
import CardPhoto from "../../components/CardPhoto"

export default function Contact() {
    const {about} = useDatas();
    return (
        <>
            <SplitSection
                    leftBgColor={about.style["bg-color-left"]}
                    rightBgColor={about.style["bg-color-right"]}
                    leftBgImage="https://example.com/image1.jpg"
                    rightBgImage={null}
                    showDivider={false}
                    leftContent={
                        <div>
                            <CardPhoto imageUrl={about.profileImage}></CardPhoto>
                        </div>
                        
                      }
                    rightContent={
                        <div style={{maxWidth:"70%"}}>
                            test
                        </div>
                    }
                    borderBottomStyle={{ line: "none", size: "0", color: "transparent" }}
                    rightPadding= {{top: "20px",right: "20px", bottom: "20px", left: "20px"}}
                  />
            <FullSection
            padding ="10px"
            bgColor="white"
            bgImage="https://example.com/image1.jpg"
            children={<ContactForm gradientBackground="linear-gradient(135deg, black, white)" borderThickness="3px" borderColor="transparent" borderRadius="20px"/>}
            />
            <FullSection
            padding ="10px"
            bgColor="white"
            bgImage="https://example.com/image1.jpg"
            children={<ContactForm gradientBackground="linear-gradient(135deg, black, white)" borderThickness="3px" borderColor="transparent" borderRadius="20px"/>}
            />
        </>
    );
}