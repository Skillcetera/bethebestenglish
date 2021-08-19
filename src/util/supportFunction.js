export const changeThemeBySection = (section) => {
  const themeColor = section.getAttribute("themeColor");
  const textColor = section.getAttribute("textColor");
  document.documentElement.style.setProperty("--textColor", textColor);
  document.documentElement.style.setProperty("--primary", themeColor);
};
