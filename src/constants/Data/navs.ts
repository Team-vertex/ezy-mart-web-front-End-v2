import { NavItem } from "@/interface/core";
import { routes } from "../route";

export const navItems: NavItem[] = [
  {
    name: "Home",
    href: routes.home,
  },
  {
    name: "About Us",
    href: routes.aboutUs,
  },
  {
    name: "Services",
    href: "#",
    dropdown: [
      { name: "For Business", href: routes.serviceForBusiness },
      { name: "For Customers", href: routes.customersService },
    ],
  },
  {
    name: "Instruction",
    href: routes.instructions,
  },
  {
    name: "Resources",
    href: "#",
    dropdown: [
      { name: "Documentation", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "FAQs", href: "#" },
    ],
  },
  {
    name: "Contact Us",
    href: routes.contactUs,
  },
];
