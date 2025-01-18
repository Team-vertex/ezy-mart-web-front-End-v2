import { routes } from '@/constants/route';
import { Route } from '@/types/route';
import { lazy } from 'react';

const projectRoute: Route[] = [
  {
    key: '/',
    path: routes.home,
    component: lazy(() => import('@/pages/public/Home')),
  },
  {
    key: '/about-us',
    path: routes.AboutUs,
    component: lazy(() => import('@/pages/public/more/AboutUs')),
  },
];

export default projectRoute;
