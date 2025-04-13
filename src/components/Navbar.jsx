import React from "react";
import { useTranslationProvider } from "../hooks/useTranslationProvider";
import { useThemeProvider } from "../hooks/useThemeProvider";
import { getCountryFlag } from "../utils/getCountryFlag";

const Navbar = () => {
  const { currentLanguage, language, t, currentLanguageCode, changeLanguage } =
    useTranslationProvider();
  const { isDarkMode, setIsDarkMode, country, setCountry, setShowModal } =
    useThemeProvider();
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-red-900 bg-opacity-50 backdrop-blur-md text-white px-4 py-3 flex justify-between items-center shadow-md flex-wrap">
      <div className="w-full sm:w-auto flex justify-center sm:justify-start mb-2 sm:mb-0">
        <img src="/images/logo.png" alt="Brand Logo" className="h-16 sm:h-20" />
      </div>

      <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-6 w-full sm:w-auto">
        <li>
          <a href="#home">{t("home")}</a>
        </li>
        <li>
          <a href="#services">{t("services")}</a>
        </li>
        <li>
          <a href="#products">{t("products")}</a>
        </li>
        <li>
          <a href="#feedbacks">{t("feedbacks")}</a>
        </li>
        <li>
          <a href="#contact">{t("contact")}</a>
        </li>
      </ul>

      <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end w-full sm:w-auto mt-3 sm:mt-0">
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-gray-900 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105"
        >
          <span className="text-xl">{getCountryFlag(country)}</span>
          <span className="text-lg font-semibold">{t(country)}</span>
        </button>
        {language.map((l) => (
          <button
            key={l.code}
            onClick={() => changeLanguage(l.code)}
            className={`${
              l.code == currentLanguage.code ? "hidden" : "block"
            } bg-gray-900 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105`}
          >
            {l.name}
          </button>
        ))}

        {/* <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="bg-gray-900 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
