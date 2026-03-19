"use client";
import "./global.css";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import FullSection from "@/components/FullSection";
import { useDatas } from "@/hooks/useDatas";

export default function RootLayout({ children }) {
  const { footer } = useDatas();

  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">

        <Header/>

        <main className="flex-1 w-full pt-0 md:pt-16">
          {children}
        </main>

        <FullSection
          padding={footer.style.padding}
          bgColor={footer.style["bg-color"]}
        ><Footer backgroundColor={footer.style["bg-color"]} /></FullSection>

      </body>
    </html>
  );
}