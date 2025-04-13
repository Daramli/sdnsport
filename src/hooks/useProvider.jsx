import { useContext } from "react";
import { ThemeContext, TranslationContext } from "../context/AppProvider";

export function useProvider() {
  const translations = useContext(TranslationContext);
  const theme = useContext(ThemeContext);

  if (!translations || !theme) {
    console.log("no found context");
    return;
  }
  return { translations, theme };
}
