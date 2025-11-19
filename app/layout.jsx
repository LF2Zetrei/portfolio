"use client";

import "./global.css";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import FullSection from "@/components/FullSection";
import {ThemeProvider, useTheme} from "@/context/ThemeContext";


export default function RootLayout({ children }){
  
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 w-full py-10">
          <div className="container mx-auto">{children}</div>
        </main>
        <ThemeProvider>
          <StyledRouteLayout></StyledRouteLayout>
        </ThemeProvider>
        
      </body>
    </html>
  )
}

function StyledRouteLayout(){
  const {theme, toggleTheme} = useTheme();
  
  return (<FullSection onClick={toggleTheme}
                padding ="10px"
                bgColor={theme!=="dark" ? "white" : "black"}
                children={<Footer gap="200px"/>}
            />)
}