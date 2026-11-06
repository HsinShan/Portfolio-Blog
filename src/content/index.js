// Picks the content set for the current language.
// zh/ and en/ hold files with the same shape; components only call useContent().
// Files not yet translated (step 2b / 2c) are shared by both languages for now.
import { useLanguage } from "../i18n/LanguageContext";
import UI_ZH from "./zh/ui";
import UI_EN from "./en/ui";
import EXPERIENCE from "./experience";
import PROFILE from "./profile";
import SKILLS from "./skills";
import PROJECTS from "./projectsData";
import PROJECTS_FRONTEND from "./projectsFrontend";

const shared = { EXPERIENCE, PROFILE, SKILLS, PROJECTS, PROJECTS_FRONTEND };

// Keys whose zh and en are still the same file (removed as 2b / 2c translate them).
export const SHARED_KEYS = Object.keys(shared);

export const CONTENT = {
  zh: { ...shared, UI: UI_ZH },
  en: { ...shared, UI: UI_EN },
};

const useContent = () => CONTENT[useLanguage().lang];

export default useContent;
