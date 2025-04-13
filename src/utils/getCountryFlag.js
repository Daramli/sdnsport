export const getCountryFlag = (country) => {
  switch (country) {
    case "egypt":
      return "🇪🇬";
    case "sudan":
      return "🇸🇩";
    case "saudi_arabia":
      return "🇸🇦";
    default:
      return "🌍";
  }
};
