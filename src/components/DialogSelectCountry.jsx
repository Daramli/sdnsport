import React from "react";
import { useTranslationProvider } from "../hooks/useTranslationProvider";
import { useThemeProvider } from "../hooks/useThemeProvider";

const DialogSelectCountry = () => {
  const { t } = useTranslationProvider();
  const { handleSelectCountry } = useThemeProvider();
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl text-center shadow-xl w-80">
        <h2 className="text-xl font-bold mb-4">{t.selectCountry}</h2>
        <div className="grid grid-cols-2 gap-3">
          {["egypt", "sudan", "saudi_arabia", "other"].map((c) => (
            <button
              key={c}
              onClick={() => handleSelectCountry(c)}
              className="bg-red-900 text-white py-2 rounded-lg"
            >
              {t(c)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DialogSelectCountry;
