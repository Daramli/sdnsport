import React from "react";
import { useTranslationProvider } from "./hooks/useTranslationProvider";
import { useThemeProvider } from "./hooks/useThemeProvider";
import { changeLanguage } from "i18next";
import HomePage from "./pages/HomePage";

function App() {
  const { currentLanguage } = useTranslationProvider();

  return (
    <div dir={currentLanguage.dir}>
      <HomePage />
    </div>
  );
}

export default App;
