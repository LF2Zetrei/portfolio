import FullSection from "@/components/FullSection"

export default function Contact() {
    return (
        <>
            <FullSection
            height={600}
            bgColor="red"
            bgImage="https://example.com/image1.jpg"
            children={<h1 className="text-2xl font-bold">Droite</h1>}
            />
        </>
    );
}