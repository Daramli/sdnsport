import i18next from "i18next";
import React, { createContext, use, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

export const TranslationContext = createContext(null);
export const ThemeContext = createContext(null);

export function AppProvider({ children }) {
  // =============== States Context Translation ===============
  //--- Languages
  const language = [
    {
      code: "en",
      name: "English",
      country_code: "gb",
      dir: "ltr",
    },
    {
      code: "ar",
      name: "العربية",
      country_code: "sa",
      dir: "rtl",
    },
  ];
  const { t } = useTranslation();
  // Get Current Lang Code From Local Storage
  const currentLanguageCode = localStorage.getItem("i18nextLng") || "en";
  // Get Curren Lang Object after get Current Lang Code
  const currentLanguage = language.find((l) => l.code === currentLanguageCode);

  useMemo(() => {
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage]);
  const changeLanguage = (codeLang) => {
    localStorage.setItem("i18nextLng", codeLang);
    i18next.changeLanguage(codeLang);
  };
  // =============== End States Context Translation ===============

  //===============================================================================================================================

  // =============== States Context Theme ===============
  const [isDarkMode, setIsDarkMode] = useState(false);
  const isDarkValue = useMemo(() => {
    isDarkMode, setIsDarkMode;
  }, [isDarkMode]);

  // Country
  const [country, setCountry] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const savedCountry = localStorage.getItem("country");
  const handleSelectCountry = (selectedCountry) => {
    setCountry(selectedCountry);
    localStorage.setItem("country", selectedCountry);
    setShowModal(false);
  };
  useEffect(() => {
    if (!savedCountry) {
      setShowModal(true);
    } else {
      setCountry(savedCountry);
    }
  });
  // =============== End States Context Theme ===============

  return (
    <TranslationContext.Provider
      value={{
        t,
        language,
        currentLanguage,
        changeLanguage,
      }}
    >
      <ThemeContext.Provider
        value={{
          isDarkMode,
          setIsDarkMode,
          country,
          setCountry,
          showModal,
          setShowModal,
          handleSelectCountry,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </TranslationContext.Provider>
  );
}
