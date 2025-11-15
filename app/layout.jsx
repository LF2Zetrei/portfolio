import "./global.css";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";

export const metadata = {title: "Portfolio Lucas"}

export default function RootLayout({ children }){
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto py-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}