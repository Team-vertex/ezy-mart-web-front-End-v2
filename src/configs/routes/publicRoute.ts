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
    component: lazy(() => import("@/pages/public/Service/CustomersService")),
  },
];

export default projectRoute;
