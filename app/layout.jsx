import "./global.css";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import FullSection from "@/components/FullSection";

export const metadata = {title: "Portfolio Lucas"}

export default function RootLayout({ children }){
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 w-full py-10">
          <div className="container mx-auto">{children}</div>
        </main>
        <FullSection
                padding ="10px"
                bgColor="white"
                children={<Footer gap="200px"/>}
            />
      </body>
    </html>
  )
}