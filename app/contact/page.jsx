import FullSection from "@/components/FullSection"
import ContactForm from "@/components/ContactForm"
import SplitSection from "@/components/SplitSection"
import CardPhot from "../../components/CardPhoto"
import {useDatas} from "@/hooks/useDatas"
import CardPhoto from "../../components/CardPhoto"
import Button from "@/components/Button"
import Gap from "@/components/Gap"

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
                            <h1>{about.title}</h1>
                            <CardPhoto imageUrl={about.profileImage}></CardPhoto>
                        </div>
                        
                      }
                    rightContent={
                        <div style={{maxWidth:"70%"}}>
                            <ContactForm title={about["contact-title"]} description={about["contact-description"]}/>
                        </div>
                    }
                    borderBottomStyle={{ line: "none", size: "0", color: "transparent" }}
                    rightPadding= {{top: "20px",right: "20px", bottom: "20px", left: "20px"}}
                    leftPadding= {{top: "20px",right: "20px", bottom: "20px", left: "20px"}}
                  />
            
            <FullSection
            height ="500px"
            padding ="10px"
            bgColor="white"
            bgImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            children={<div>
                <h1>{about["projects-title"]}</h1>
                <Gap height="75px"></Gap>
                <Button
                    href={about["button-link"]}
                    text={about["button-text"]}
                    borderTBSize="1px"
                    backgroundColor={about.style["button-color"]}
                    color={about.style["color"]}
                    borderBTLine={about.style["borderTBLine"]}
                />
            </div>}
            borderBottomStyle={{ line: "none", size: "0", color: "transparent" }}
            borderTopStyle={{ line: "black", size: "1px", color: "transparent" }}
            />
        </>
    );
}