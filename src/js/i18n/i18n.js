import { translations } from "./translations.js";

const DEFAULT_LANGUAGE = "mn"; // өөрчилсөн: анхны хэл Монгол

export function getCurrentLanguage() {
  return localStorage.getItem("language") || DEFAULT_LANGUAGE;
}

export function setLanguage(language) {
  localStorage.setItem("language", language);
}

// t("nav.search") → тухайн хэл дээрх орчуулга
export function t(path) {
  const language = getCurrentLanguage();
  let value = translations[language];
  for (const key of path.split(".")) {
    value = value?.[key];
  }
  return value ?? path;
}

export function toggleLanguage() {
  const next = getCurrentLanguage() === "mn" ? "en" : "mn";
  setLanguage(next);
  return next;
}
