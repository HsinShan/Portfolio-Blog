// Picks the content set for the current language.
// zh/ and en/ hold files with the same shape; components only call useContent().
import { useLanguage } from "../i18n/LanguageContext";
import UI_ZH from "./zh/ui";
import UI_EN from "./en/ui";
import EXPERIENCE_ZH from "./zh/experience";
import EXPERIENCE_EN from "./en/experience";
import PROFILE_ZH from "./zh/profile";
import PROFILE_EN from "./en/profile";
import SKILLS_ZH from "./zh/skills";
import SKILLS_EN from "./en/skills";
import PROJECTS_ZH from "./zh/projectsData";
import PROJECTS_EN from "./en/projectsData";
import PROJECTS_FRONTEND_ZH from "./zh/projectsFrontend";
import PROJECTS_FRONTEND_EN from "./en/projectsFrontend";

export const CONTENT = {
  zh: {
    UI: UI_ZH,
    EXPERIENCE: EXPERIENCE_ZH,
    PROFILE: PROFILE_ZH,
    SKILLS: SKILLS_ZH,
    PROJECTS: PROJECTS_ZH,
    PROJECTS_FRONTEND: PROJECTS_FRONTEND_ZH,
  },
  en: {
    UI: UI_EN,
    EXPERIENCE: EXPERIENCE_EN,
    PROFILE: PROFILE_EN,
    SKILLS: SKILLS_EN,
    PROJECTS: PROJECTS_EN,
    PROJECTS_FRONTEND: PROJECTS_FRONTEND_EN,
  },
};

const useContent = () => CONTENT[useLanguage().lang];

export default useContent;
