"use client";

import {createContext, useContext, useState} from "react";

const ThemeContext = createContext();

export function LanguageProvider({children}) {
    const [language, setLanguage] = useState("fr");

    const toggleLanguage = () => 
        setLanguage(language === "fr" ? "en" : "fr");

    return (
        <ThemeContext.Provider value={{language, toggleLanguage}}>
            <div className={language === "en" ? "en" : ""}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
} 

export function useLanguage() {
    return useContext(LanguageContext);
}