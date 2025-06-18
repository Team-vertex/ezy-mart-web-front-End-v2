import { routes } from "@/constants/route";
import { Route } from "@/types/route";
import { lazy } from "react";

const projectRoute: Route[] = [
  {
    key: "/",
    path: routes.home,
    component: lazy(() => import("@/pages/public/Home/index")),
  },
  {
    key: "/service/business",
    path: routes.serviceForBusiness,
    component: lazy(() => import("@/pages/public/Service/Business")),
  },
  {
    key: "/service/CutomersService",
    path: routes.customersService,
    component: lazy(() => import("@/pages/public/Service/Customers")),
  },
  {
    key: "/details/privacy-policy",
    path: routes.privacyPolicy,
    component: lazy(() => import("@/pages/public/Details/PrivacyPolicy")),
  },
  {
    key: "/details/contact-us",
    path: routes.contactUs,
    component: lazy(() => import("@/pages/public/Details/ContactUs")),
  },
  {
    key: "/public/AboutUs/Hero",
    path: routes.aboutUs,
    component: lazy(() => import("@/pages/public/AboutUs/Index")),
  },
  {
    key: "/details/instructions",
    path: routes.instructions,
    component: lazy(() => import("@/pages/public/Details/Instructions")),
  },
];

export default projectRoute;
