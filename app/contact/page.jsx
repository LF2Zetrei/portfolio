import FullSection from "@/components/FullSection"
import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (
        <>
            <FullSection
            padding ="10px"
            bgColor="white"
            bgImage="https://example.com/image1.jpg"
            children={<ContactForm gradientBackground="linear-gradient(135deg, black, white)" borderThickness="3px" borderColor="transparent" borderRadius="20px"/>}
            />
        </>
    );
}