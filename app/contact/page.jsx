import FullSection from "@/components/FullSection"

export default function Contact() {
    return (
        <>
            <FullSection
            height={300}
            bgColor="#f0f0f0"
            bgImage="https://example.com/image1.jpg"
            children={<h1 className="text-2xl font-bold">Droite</h1>}
            />
        </>
    );
}