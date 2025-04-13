import { useContext } from "react";
import { ThemeContext } from "../context/AppProvider";

export function useThemeProvider() {
  return useContext(ThemeContext);
}
