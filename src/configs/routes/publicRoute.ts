import { routes } from '@/constants/route';
import { Route } from '@/types/route';
import { lazy } from 'react';

const projectRoute: Route[] = [
  {
    key: '/',
    path: routes.home,
    component: lazy(() => import('@/pages/public/Home/index')),
  },
];

export default projectRoute;
