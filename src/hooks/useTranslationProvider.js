import { useContext } from "react";
import { TranslationContext } from "../context/AppProvider";

export function useTranslationProvider() {
  return useContext(TranslationContext);
}
