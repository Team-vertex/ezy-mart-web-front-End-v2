export interface AccordionData {
  title: string;
  description: string;
}
export interface FAQItem {
  title: string;
  description: string;
}
export interface DropdownItem {
  name: string;
  href: string;
}
export interface NavItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  dropdown?: DropdownItem[];
}
