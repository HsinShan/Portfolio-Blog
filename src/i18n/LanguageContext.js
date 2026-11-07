import React, { createContext, useContext, useEffect, useState } from "react";

// Site language: "zh" (Traditional Chinese) or "en".
// First visit follows the browser language; after that the user's choice
// is remembered in localStorage.
export const LANGUAGES = ["zh", "en"];
const STORAGE_KEY = "lang";

const readStoredLanguage = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return LANGUAGES.includes(saved) ? saved : null;
  } catch {
    // localStorage can throw in private mode / blocked storage
    return null;
  }
};

const detectBrowserLanguage = () => {
  // Some in-app webviews return an empty navigator.languages
  const langs = navigator.languages?.length
    ? navigator.languages
    : [navigator.language || ""];
  return langs.some((l) => l && l.toLowerCase().startsWith("zh")) ? "zh" : "en";
};

const LanguageContext = createContext({ lang: "zh", toggleLanguage: () => {} });

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(
    () => readStoredLanguage() || detectBrowserLanguage()
  );

  useEffect(() => {
    // zh-Hant so screen readers and browser translation pick the right script
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  }, [lang]);

  const toggleLanguage = () => {
    const next = lang === "zh" ? "en" : "zh";
    setLang(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore: the switch still works for this visit
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
