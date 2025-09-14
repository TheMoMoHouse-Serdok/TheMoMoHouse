export type SectionId =
  | "history"
  | "home"
  | "menu"
  | "location"
  | "order"
  | "contact";

export interface NavigationProps {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
}

export interface SectionProps {
  setActiveSection: (section: SectionId) => void;
}
