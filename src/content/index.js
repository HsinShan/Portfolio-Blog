// Picks the content set for the current language.
// zh/ and en/ hold files with the same shape; components only call useContent().
// Files not yet translated (step 2c) are shared by both languages for now.
import { useLanguage } from "../i18n/LanguageContext";
import UI_ZH from "./zh/ui";
import UI_EN from "./en/ui";
import EXPERIENCE_ZH from "./zh/experience";
import EXPERIENCE_EN from "./en/experience";
import PROFILE_ZH from "./zh/profile";
import PROFILE_EN from "./en/profile";
import SKILLS_ZH from "./zh/skills";
import SKILLS_EN from "./en/skills";
import PROJECTS from "./projectsData";
import PROJECTS_FRONTEND from "./projectsFrontend";

const shared = { PROJECTS, PROJECTS_FRONTEND };

// Keys whose zh and en are still the same file (removed as 2c translates them).
export const SHARED_KEYS = Object.keys(shared);

export const CONTENT = {
  zh: {
    ...shared,
    UI: UI_ZH,
    EXPERIENCE: EXPERIENCE_ZH,
    PROFILE: PROFILE_ZH,
    SKILLS: SKILLS_ZH,
  },
  en: {
    ...shared,
    UI: UI_EN,
    EXPERIENCE: EXPERIENCE_EN,
    PROFILE: PROFILE_EN,
    SKILLS: SKILLS_EN,
  },
};

const useContent = () => CONTENT[useLanguage().lang];

export default useContent;
